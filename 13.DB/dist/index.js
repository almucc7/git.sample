import { loadEnvFile } from 'node:process';
import mysql from 'mysql2/promise';
loadEnvFile('.env');
const dataConnection = {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'movies_db',
};
try {
    const connection = await mysql.createConnection(dataConnection);
    console.log('Connection to server:', connection.config.host, connection.config.port);
    console.log('Connection to DB', connection.config.database);
    const q = 'select genere_id as ID, name from generes';
    const [rows] = await connection.query(q); //Me devuelve una promesa así que await
    console.log(rows);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error);
    }
    else {
        console.error(error);
    }
}
