export class ManageGeneres {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    getAllGeneres = async () => {
        const q = 'select genere_id as id, name from generes';
        const [rows] = await this.connection.query(q);
        return rows;
    };
    getGenereById = async (id) => {
        const q = `select genere_id as id, name from generes where genere_id = ?`;
        const [rows] = await this.connection.query(q, [id]);
        return rows;
    };
    createGenere = async (name) => {
        const q = `insert into generes (name) VALUES (?);`;
        const [result] = await this.connection.query(q, [
            name,
        ]);
        if (result.affectedRows === 1) {
            console.log('Genere created with id:', result.insertId);
            return this.getGenereById(result.insertId);
        }
        return result;
    };
    updateGenere = async (id, name) => {
        const q = `update generes set name = ? where genere_id = ?;`;
        const [result] = await this.connection.query(q, [
            name,
            id,
        ]);
        if (result.affectedRows === 1) {
            console.log('Genere updated with id:', id);
            return this.getGenereById(id);
        }
        return result;
    };
    deleteGenere = async (id) => {
        const genereForDelete = await this.getGenereById(id);
        const q = `delete from generes where genere_id = ?;`;
        const [result] = await this.connection.query(q, [id]);
        if (result.affectedRows === 1) {
            console.log('Genere deleted with id:', id);
            return genereForDelete;
        }
        return result;
    };
}
