export class AnimalSqlRepo {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async read() {
        throw new Error('Method not implemented.');
    }
    async readById(id) {
        throw new Error('Method not implemented.');
    }
    async create(data) {
        throw new Error('Method not implemented.');
    }
    async update(id, data) {
        throw new Error('Method not implemented.');
    }
    async delete(id) {
        throw new Error('Method not implemented.');
    }
}
