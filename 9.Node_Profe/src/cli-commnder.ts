// Importamos herramientas para manejar rutas de archivos en Node.js
import { join, resolve } from 'node:path';
// Importamos commander.js para gestionar los comandos en la terminal
import { program } from 'commander';
// Importamos el repositorio de notas, que maneja los datos
import { RepoNoteFile } from './services/repo-notes-file.js';

// Definimos la ubicación del archivo JSON que almacena las notas
const dataBase = resolve('../data'); // Encuentra la ruta absoluta de la carpeta 'data'
const file = join(dataBase, 'db.json'); // Une la ruta de 'data' con 'db.json' para obtener la ruta completa

// Creamos una instancia del repositorio de notas y le pasamos la ruta del JSON
const repo = new RepoNoteFile(file);

// Configuración de commander.js para definir los comandos
program.name('CLI') // Nombre del programa en la terminal
  .description(`CLI para gestionar notas`) // Descripción del CLI
  .version('1.0.0'); // Versión del programa

// Función para mostrar todas las notas en la terminal
const readAll = async () => {
    try {
        const data = await repo.read(); // Llama al método read() del repositorio para obtener todas las notas
        console.table(data); // Muestra las notas en formato tabla en la terminal
    } catch (error) {
        console.error((error as Error).message); // Si hay un error, lo muestra en la terminal
    }
};

// Función para buscar notas que contengan un texto específico
const findNote = async (content: string) => {
    try {
        const data = await repo.read(); // Obtiene todas las notas
        const notes = data.filter((note) => note.content.includes(content)); // Filtra las notas que contienen el texto buscado
        if (!notes.length) {
            throw new Error('Nota no encontrada'); // Si no hay coincidencias, lanza un error
        }
        console.table(notes); // Muestra las notas encontradas en formato tabla
    } catch (error) {
        console.error((error as Error).message);
    }
};

// Función para añadir una nueva nota al JSON
const addNote = async (content: string) => {
    const newNote = { content: content }; // Crea un objeto con el contenido de la nueva nota
    try {
        const finalNote = await repo.create(newNote); // Usa create() del repositorio para guardar la nota
        console.log('Nota añadida', finalNote); // Muestra un mensaje en la terminal confirmando la nota añadida
    } catch (error) {
        console.error((error as Error).message);
    }
};

// Función para actualizar una nota existente usando su ID
const updateNote = async (content: string, { id }: { id: string }) => {
    const updatedNote = { content: content }; // Crea un objeto con el nuevo contenido de la nota
    try {
        const finalNote = await repo.update(id, updatedNote); // Llama a update() del repositorio para actualizar la nota
        console.log('Nota actualizada', finalNote); // Muestra la nota actualizada en la terminal
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('Error desconocido', error);
        }
    }
};

// Función para eliminar una nota por su ID
const deleteNote = async ({ id }: { id: string }) => {
    try {
        const deletedNote = await repo.delete(id); // Llama a delete() del repositorio para borrar la nota
        console.log('Nota borrada', deletedNote); // Muestra un mensaje confirmando la eliminación
    } catch (error) {
        console.error((error as Error).message);
    }
};

// Definimos los comandos de la CLI usando commander.js
program.command('all') // Comando para mostrar todas las notas
    .description('Mostrar todas las notas guardadas')
    .action(readAll);

program.command('find') // Comando para buscar notas que contengan un texto
    .argument('<key>', 'Texto para buscar en las notas')
    .description('Muestra las notas que contienen el texto buscado')
    .action(findNote);

program.command('add <note>') // Comando para añadir una nueva nota
    .description('Añadir una nueva nota')
    .action(addNote);

program.command('update <note>') // Comando para actualizar una nota existente
    .option('-i, --id <id>') // Requiere un ID para identificar la nota a actualizar
    .action(updateNote);

program.command('delete') // Comando para eliminar una nota existente
    .option('-i, --id <id>') // Requiere un ID para identificar la nota a eliminar
    .action(deleteNote);

// Ejecutamos commander.js para procesar los comandos ingresados en la terminal
program.parse();
