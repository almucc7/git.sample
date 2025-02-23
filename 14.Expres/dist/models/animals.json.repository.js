import createDebug from 'debug';
import { ODMLite } from '../odm/odm-lite.js';
import { Animal } from './animal.type.js';
const debug = createDebug('demo:repository:animals');
export class AnimalFileRepo {
    odm;
    collection;
    constructor(file = ODMLite.filePath, collection = 'animals') {
        debug('Instanciando repo for', file);
        this.odm = new ODMLite(file, collection);
        this.collection = collection;
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
