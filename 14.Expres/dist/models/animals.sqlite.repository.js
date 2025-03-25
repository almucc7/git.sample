import { access, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { promisify } from 'node:util';
import createDebug from 'debug';
import sqlite3 from 'sqlite3';
import { Animal } from './animal.type.js';
const debug = createDebug('demo:repository:animals');
const SQL = (db) => ({
    // run: promisify(db.run.bind(db)),
    run: async (q, args) => {
        console.log('Query:', q);
        console.log('Args:', args);
        return new Promise((resolve, reject) => {
            db.run(q, args, function (err) {
                if (err)
                    reject(err);
                resolve(this);
            });
        });
    },
    // get: promisify<string, Animal>(db.get.bind(db)),
    get: async (q, ...args) => {
        return new Promise((resolve, reject) => {
            db.get(q, ...args, function (err, row) {
                if (err)
                    reject(err);
                resolve(row);
            });
        });
    },
    // all: promisify(db.all.bind(db)),
    all: async (q, ...args) => {
        return new Promise((resolve, reject) => {
            db.all(q, ...args, function (err, rows) {
                if (err)
                    reject(err);
                resolve(rows);
            });
        });
    },
    exec: promisify(db.exec.bind(db)),
});
export class AnimalSqliteRepo {
    dataBase;
    constructor() {
        console.log('Instanciando repo for sqlite');
        this.connectSQLite();
    }
    async initializeSQLITE(relativeFilePath) {
        const filePath = resolve(relativeFilePath);
        const folder = dirname(filePath);
        const info = [];
        try {
            await access(folder);
        }
        catch (error) {
            const errorFolder = error;
            if (errorFolder.message.includes('no such file or directory')) {
                info.push('Folder does not exist');
                mkdir(folder, { recursive: true });
                info.push(folder);
            }
            else {
                console.error(errorFolder.message);
                throw errorFolder;
            }
        }
        try {
            await access(filePath);
            info.push('File already exists');
        }
        catch (error) {
            const errorFile = error;
            if (errorFile.message.includes('no such file or directory')) {
                info.push('File does not exist');
                await writeFile(filePath, '', 'utf-8');
                info.push('File initialized');
            }
            else {
                console.error(errorFile.message);
                throw errorFile;
            }
        }
        info.push(`Initialized DB at`);
        info.push(filePath);
        return info;
    }
    async initializeTable(table) {
        //  Alternativa id: string;
        const query = `CREATE TABLE IF NOT EXISTS ${table} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            englishName TEXT,
            sciName TEXT,
            diet TEXT,
            lifestyle TEXT,
            location TEXT,
            slogan TEXT,
            bioGroup TEXT,
            image TEXT
        )`;
        // const promiseRun = promisify(this.dataBase.run.bind(this.dataBase));
        // await promiseRun(query);
        // await promisify(this.dataBase.run.bind(this.dataBase))(query);
        await SQL(this.dataBase).exec(query);
        debug('Creating table:', query);
    }
    animalRowToAnimal(row) {
        return {
            id: row.id.toString(),
            name: row.name,
            englishName: row.englishName,
            sciName: row.sciName,
            diet: row.diet,
            lifestyle: row.lifestyle,
            location: row.location,
            slogan: row.slogan,
            group: row.bioGroup,
            image: row.image,
        };
    }
    async connectSQLite() {
        const dbFile = process.env.DB_FILE; // || ':memory:';
        if (!dbFile) {
            throw new Error('DB_FILE not defined');
        }
        const info = await this.initializeSQLITE(dbFile);
        info.forEach((msg) => debug('Info:', msg));
        const file = info.at(-1);
        debug('Connecting to DB:', file);
        this.dataBase = new sqlite3.Database(file);
        debug('Connection to DB', this.dataBase);
        if (info[0] === 'File does not exist') {
            await this.initializeTable('animals');
        }
    }
    async read() {
        const query = 'SELECT id, name, englishName, sciName, diet, lifestyle, location, slogan, bioGroup, image FROM animals';
        const data = await SQL(this.dataBase).all(query);
        const animals = data.map((row) => this.animalRowToAnimal(row));
        debug('Data:', animals);
        return animals;
    }
    async readById(id) {
        const query = `SELECT * FROM animals WHERE id = ?`;
        const data = await SQL(this.dataBase).get(query, id);
        return this.animalRowToAnimal(data);
    }
    async create(data) {
        await Animal.parseAsync({ ...data, id: '0' });
        const query = `INSERT INTO animals (name, englishName, sciName, diet, lifestyle, location, slogan, bioGroup, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const { lastID, changes } = await SQL(this.dataBase).run(query, [
            data.name,
            data.englishName,
            data.sciName,
            data.diet,
            data.lifestyle,
            data.location,
            data.slogan,
            data.group,
            data.image,
        ]);
        console.log('INSERT result:', lastID, changes);
        return await this.readById(lastID.toString());
    }
    async update(id, data) {
        await Animal.partial().parseAsync({ ...data, id });
        const validFields = {
            name: 'name',
            englishName: 'englishName',
            sciName: 'sciName',
            diet: 'diet',
            lifestyle: 'lifestyle',
            location: 'location',
            slogan: 'slogan',
            group: 'bioGroup',
            image: 'image',
        };
        const fields = [];
        const values = [];
        Object.entries(data).forEach(([key, value]) => {
            if (!validFields[key]) {
                throw new Error(`Invalid search field: ${key}`);
            }
            fields.push(`${validFields[key]} = ?`);
            values.push(value);
        });
        const q = `update animals set ${fields.join(', ')}
        where id = ?`;
        // const q = `update animals set ${fields.join(', ')}
        // where id = UUID_TO_BIN(?);`;
        const { changes } = await SQL(this.dataBase).run(q, [...values, id]);
        if (changes !== 1) {
            throw new Error('Animal not updated');
        }
        const updatedAnimal = await this.readById(id.toString());
        console.log('Animal updated with id:', id);
        return updatedAnimal;
    }
    async delete(id) {
        const data = await this.readById(id);
        const query = `DELETE FROM animals WHERE id = ?`;
        const { changes } = await SQL(this.dataBase).run(query, [id]);
        if (changes !== 1) {
            throw new Error('Animal not deleted');
        }
        return data;
    }
}
