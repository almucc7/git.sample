import type { RowDataPacket } from 'mysql2/promise';

export type SqlError = {
    code: string;
    errno: number;
    sqlState: string;
    sqlMessage: string;
} & Error;

// interface Category extends mysql.RowDataPacket {
//     id: number;
//     name: string;
// };

export type Generes = {
    id: number;
    name: string;
} & RowDataPacket;

export type Movie = {
    id: string;
    title: string;
    year: number;
    duration: number;
    director: string;
    poster: string;
    rate: number;
};

export type MovieRow = Movie & RowDataPacket;