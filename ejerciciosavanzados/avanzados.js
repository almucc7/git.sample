//1. Crea un generador de pirámides de asteriscos. El programa debe pedir al usuario la altura de la pirámide y mostrarla en la consola:

function getPyramid(height) {

    for (let i = 1; i <= height; i++) {

        // Generamos los espacios en blanco a la izquierda
        const spaces = ' '.repeat(height - i);

        // Generamos los asteriscos para la fila actual
        const asterisk = '*'.repeat(2 * i - 1);

        // Mostramos la línea de la pirámide
        console.log(spaces + asterisk);
    }
}

// Pedimos la altura al usuario
const height = parseInt(prompt('Introduce la height de la pirámide:'));

if (!isNaN(height) && height > 0) {

    getPyramid(height);

} else {

    console.log('Por favor, introduce un número válido mayor que 0.');
}

//2. Crea una función que genere una contraseña aleatoria con letras mayúsculas, letras minúsculas y números:

function getPassword(length) {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        // Seleccionamos un carácter aleatorio de la cadena 'caracteres'
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Pedimos al usuario la longitud de la contraseña
const length = parseInt(prompt('Introduce la longitud de la contraseña:'));

if (!isNaN(length) && length > 0) {

    const generatedPassword = getPassword(length);
    console.log(`Tu contraseña aleatoria es: ${generatedPassword}`);

} else {

    console.log('Por favor, introduce un número válido mayor que 0');
}


//3. Crea una función que filtre un array de nombres y devuelva solo los nombres con menos de cierta longitud:

// Declara una función que recibe un array de nombres y una longitud máxima permitida
function filterNamesByLength(namesArray, maxLength) {

    // Crea un array vacío para guardar los nombres que cumplan la condición
    const filteredNames = [];

    // Recorre cada elemento del array de nombres
    for (let i = 0; i < namesArray.length; i++) {

        // Si la longitud del nombre actual es menor que la longitud máxima permitida
        if (namesArray[i].length < maxLength) {

            // Agrega el nombre al array filteredNames
            filteredNames.push(namesArray[i]);
        }
    }

    // Devuelve el array con los nombres que cumplen la condición
    return filteredNames;
}

// Declara un array con varios nombres
const namesS = ['Alice', 'Bob', 'Charlotte', 'Daniel'];

// Declara la longitud máxima permitida para los nombres
const maxNameLength = 5;

// Llama a la función para filtrar los nombres según la longitud máxima
const result = filterNamesByLength(namesS, maxNameLength);

// Muestra en la consola los nombres filtrados
console.log(`Filtered names: ${result}`);



//4. Crea una función que cuente la cantidad de palabras en una frase:

// Declara una función que recibe una frase como parámetro
function countWordsInPhrase(phrase) {

    // Divide la frase en un array de palabras separadas por espacios
    const words = phrase.split(' ');

    // Devuelve la longitud del array, que es el número de palabras
    return words.length;
}

// Declara una frase de ejemplo
const examplePhrase = 'El aprendizaje de la programación es divertido';

// Llama a la función para contar las palabras en la frase
const wordCount = countWordsInPhrase(examplePhrase);

// Muestra en la consola la cantidad de palabras en la frase
console.log(`La frase tiene ${wordCount} palabras.`);


//5. Crea una función que ordene un array de nombres alfabéticamente:

// Declara una función que recibe un array de nombres como parámetro
function sortNamesAlphabetically(namesArray) {

    // Usa el método .sort() para ordenar los nombres alfabéticamente
    const sortedNames = namesArray.sort();

    // Devuelve el array de nombres ya ordenado
    return sortedNames;
}

// Declara un array de nombres desordenados como ejemplo
const names = ['Charlie', 'Alice', 'Bob', 'Daniel'];

// Llama a la función para ordenar los nombres alfabéticamente
const sortedNames = sortNamesAlphabetically(names);

// Muestra en la consola los nombres ordenados
console.log(`Nombres ordenados: ${sortedNames}`);


//6. Generador de números pares e impares: Escribe una función que tome un número como argumento y genere dos arrays, uno con los números pares hasta ese número y otro con los números 
//impares hasta ese número:

// Declara una función que recibe un número como argumento
function generateEvenAndOddNumbers(limit) {

    // Crea un array vacío para almacenar los números pares
    const evenNumbers = [];

    // Crea un array vacío para almacenar los números impares
    const oddNumbers = [];

    // Usa un bucle for para recorrer todos los números desde 0 hasta el límite
    for (let i = 0; i <= limit; i++) {

        // Si el número actual es divisible entre 2, es un número par
        if (i % 2 === 0) {
            evenNumbers.push(i); // Agrega el número al array de pares
        } else {
            // Si no es divisible entre 2, es un número impar
            oddNumbers.push(i); // Agrega el número al array de impares
        }
    }

    // Devuelve un objeto con los arrays de pares e impares
    return {
        even: evenNumbers,
        odd: oddNumbers
    };
}

// Llama a la función con un límite de ejemplo
const limit = 10;

// Genera los arrays de números pares e impares
const result2 = generateEvenAndOddNumbers(limit);

// Muestra los resultados en la consola
console.log(`Números pares: ${result2.even}`);
console.log(`Números impares: ${result2.odd}`);



//7. Crea una función que reciba un texto en kebab-case y devuelva el texto escrito en lowerCamelCase. La función debe realizar las siguientes comprobaciones sobre el texto recibido:

//Si tiene alguna mayúscula, debe devolver "The text contains capital letters"
//Si tiene algún guión bajo, debe devolver "The text contains underscores"
//Si el texto está vacío, debe devolver "You must provide some text"*/