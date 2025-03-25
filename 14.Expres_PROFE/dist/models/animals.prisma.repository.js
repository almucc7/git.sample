import createDebug from 'debug';
import { Animal } from './animal.type.js';
import { PrismaClient } from '@prisma/client';
const debug = createDebug('demo:repository:animals');
const bin_to_uuid = (bin) => {
    const hex = Buffer.from(bin).toString('hex');
    return [
        hex.slice(0, 8),
        hex.slice(8, 12),
        hex.slice(12, 16),
        hex.slice(16, 20),
        hex.slice(20),
    ].join('-');
    Buffer.from(bin).toString('hex');
};
const uuid_to_bin = (uuid) => {
    const hex = uuid.replace(/-/g, '');
    return Buffer.from(hex, 'hex');
};
export class AnimalPrismaRepo {
    connection;
    constructor() {
        debug('Instanciando repo for animals');
        this.connection = new PrismaClient();
    }
    animalRowToAnimal(row) {
        return {
            id: bin_to_uuid(row.animalID),
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
    async read() {
        const rows = await this.connection.animals.findMany();
        const animals = rows.map((row) => this.animalRowToAnimal(row));
        debug(animals);
        return animals;
    }
    async readById(id) {
        const row = await this.connection.animals.findUniqueOrThrow({
            where: {
                animalID: uuid_to_bin(id),
            },
        });
        const animal = this.animalRowToAnimal(row);
        return animal;
    }
    async create(data) {
        await Animal.parseAsync({ ...data, id: '0' });
        const row = await this.connection.animals.create({
            data: {
                name: data.name,
                englishName: data.englishName,
                sciName: data.sciName,
                diet: data.diet,
                lifestyle: data.lifestyle,
                location: data.location,
                slogan: data.slogan,
                bioGroup: data.group,
                image: data.image,
            },
        });
        const animal = this.animalRowToAnimal(row);
        return animal;
    }
    async update(id, data) {
        await Animal.partial().parseAsync({ ...data, id });
        debug('Updating animal with id:', id);
        const { group, ...rest } = data;
        const finalData = typeof group === 'undefined'
            ? {
                ...rest,
                bioGroup: group,
            }
            : rest;
        debug(finalData);
        const row = await this.connection.animals.update({
            where: {
                animalID: uuid_to_bin(id),
            },
            data: finalData,
        });
        console.log('Animal updated with id:', id);
        const animal = this.animalRowToAnimal(row);
        return animal;
    }
    async delete(id) {
        const row = await this.connection.animals.delete({
            where: {
                animalID: uuid_to_bin(id),
            },
        });
        const animal = this.animalRowToAnimal(row);
        return animal;
    }
}
