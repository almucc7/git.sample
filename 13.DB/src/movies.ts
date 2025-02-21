import { Connection, ResultSetHeader } from 'mysql2/promise';
import type { Generes, Movie, MovieRow } from './entities';

export class ManageMovies {
    constructor(private connection: Connection) {}

    async getAllMovies(): Promise<MovieRow[]> {
        const q = `select 
                    BIN_TO_UUID(movie_id) as id, 
                    title, 
                    release_year as year,  
                    director, 
                    duration, 
                    poster, 
                    rate  
                from movies`;
        const [rows] = await this.connection.query<MovieRow[]>(q);
        return rows;
    }

    async findMovieById(id: string): Promise<MovieRow> {
        const q = `select 
                    BIN_TO_UUID(movie_id) as id, 
                    title, 
                    release_year as year, 
                    director, 
                    duration, 
                    poster, 
                    rate 
                from movies where movie_id = UUID_TO_BIN(?)`;
        const [rows] = await this.connection.query<MovieRow[]>(q, [id]);
        if (rows.length !== 1) {
            throw new Error('Movie not found');
        }
        return rows[0];
    }

    async findMovieByTitle(title: string): Promise<MovieRow> {
        const q = `select 
                    BIN_TO_UUID(movie_id) as id, 
                    title, 
                    release_year as year, 
                    director, 
                    duration, 
                    poster, 
                    rate 
                from movies where title like ?`;
        const [rows] = await this.connection.query<MovieRow[]>(q, [title]);
        return rows[0];
    }

    async findMovieWithGeneresByTitle(title: string): Promise<MovieRow> {
        const q = `select 
                    BIN_TO_UUID(m.movie_id) as id, 
                    title, 
                    release_year as year, 
                    director, 
                    duration, 
                    poster, 
                    rate,
                    name as genere 
                from movies m
                join movies_generes mg on m.movie_id = mg.movie_id
                join generes g on mg.genere_id = g.genere_id
                where title like ?`;

        const [rows] = await this.connection.query<MovieRow[]>(q, [title]);

        // if (rows.length !== 1) {

        rows[0].genere = rows.map((row) => row.genere);
        return rows[0];
    }

    async createMovie(data: Omit<Movie, 'id'>): Promise<MovieRow> {
        const q = `insert into movies 
                    (title, release_year, director, duration, poster, rate) 
                    VALUES (?, ?, ?, ?, ?, ?);`;
        const [result] = await this.connection.query<ResultSetHeader>(q, [
            data.title,
            data.year,
            data.director,
            data.duration,
            data.poster,
            data.rate,
        ]);

        if (result.affectedRows !== 1) {
            throw new Error('Movie not created');
        }

        const row = await this.findMovieByTitle(data.title);
        console.log('Movie created with id:', row.id);
        return row;
    }

    async changeMovieGeneres(
        movie_id: string,
        genere: string[],
    ): Promise<void> {
        const q0 = `select genere_id as id from generes where name = ?`;
        const [rows] = await this.connection.query<Generes[]>(q0, [genere]);
        if (rows.length !== 1) {
            throw new Error('Genere not found');
        }
        const genere_id = rows[0].id;
        console.log({ genere_id, movie_id });

        const q = `delete from movies_generes where movie_id = UUID_TO_BIN(?) and genere_id = ?;`;
        const [result1] = await this.connection.query<ResultSetHeader>(q, [
            movie_id,
            genere_id,
        ]);

        if (result1.affectedRows === 1) {
            console.log(
                'Movie genere deleted:',
                genere,
                'for movie id:',
                movie_id,
            );
            return;
        }

        const q2 = `insert into movies_generes (movie_id, genere_id) values (UUID_TO_BIN(?),?);`;
        // const values = generes.map((genere) => [id, genere]);
        const [result2] = await this.connection.query<ResultSetHeader>(q2, [
            movie_id,
            genere_id,
        ]);

        if (result2.affectedRows !== 1) {
            throw new Error('Movie genere not updated');
        }

        console.log(
            'Movie generes updated with',
            genere,
            'for movie id:',
            movie_id,
        );
        return;
    }

    async updateMovieById(
        id: string,
        data: Partial<Omit<Movie, 'id'>>,
    ): Promise<MovieRow> {
        const validFields: Record<string, string> = {
            title: 'title',
            year: 'release_year',
            director: 'director',
            duration: 'duration',
            poster: 'poster',
            rate: 'rate',
        };

        const fields: string[] = [];
        const values: unknown[] = [];

        Object.entries(data)

            .forEach(([key, value]) => {
                if (!validFields[key]) {
                    throw new Error(`Invalid search field: ${key}`);
                }
                fields.push(`${validFields[key]} = ?`);
                values.push(value);
            });

        const q = `update movies set ${fields.join(', ')}
        where movie_id = UUID_TO_BIN(?);`;
        const [result] = await this.connection.query<ResultSetHeader>(q, [
            ...values,
            id,
        ]);

        const row = await this.findMovieById(id);
        if (result.affectedRows !== 1) {
            throw new Error('Movie not updated');
        }

        console.log('Movie updated with id:', id);
        return row;
    }

    async deleteMovieById(id: string): Promise<MovieRow> {
        const movieForDelete = await this.findMovieById(id);

        const q = `delete from movies where movie_id = UUID_TO_BIN(?);`;
        const [result] = await this.connection.query<ResultSetHeader>(q, [id]);

        if (result.affectedRows !== 1) {
            throw new Error('Movie not deleted');
        }

        console.log('Movie deleted with id:', id);
        return movieForDelete;
    }
}