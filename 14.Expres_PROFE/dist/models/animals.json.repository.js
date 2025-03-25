import createDebug from 'debug';
import { ODMLite } from '../odm/odm-lite.js';
import { Animal } from './animal.type.js';
const debug = createDebug('demo:repository:animals');
export class AnimalFileRepo {
    odm;
    collection;
    file;
    info = [];
    constructor(file = ODMLite.filePath, collection = 'animals') {
        debug('Instanciando repo for', file);
        this.file = file || './data/db.json';
        this.collection = collection;
        this.connectDB();
    }
    async connectDB() {
        this.info = await ODMLite.initializeJSON(this.file);
        debug('FilePath:', ODMLite.filePath);
        const soFilePath = ODMLite.filePath;
        this.info.forEach((msg) => debug(msg));
        debug('File:', this.file);
        this.odm = new ODMLite(soFilePath, this.collection);
    }
    async read() {
        const data = await this.odm.read();
        return data;
    }
    async readById(id) {
        return await this.odm.readById(id);
    }
    async create(data) {
        await Animal.parseAsync({ ...data, id: '0' });
        return await this.odm.create(data);
    }
    async update(id, data) {
        await Animal.partial().parseAsync({ ...data, id });
        return await this.odm.updateById(id, data);
    }
    async delete(id) {
        return await this.odm.deleteById(id);
    }
}
