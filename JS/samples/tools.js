//Módulo.  Solo guarda código, no lo ejecuta. Lo exporto a otro archivo para ejecutarlo, a main.js

//Exporto por defecto una función, no exportarla o no por defecto. Si la exportas por defecto la importas con el nombre que quieras
export default function foo() {

    console.log('Soy foo');
}



//4. Crea una función que cuente la cantidad de palabras en una frase:

export function countWords(sentence = '') {

    if(typeof sentence !== 'string') return; //Si lo que me mandan no es un string, me salgo    
    if( sentence === '') return 0; //Si lo que me mandan no es nada, me salgo 

   
    const words = sentence.split(' ');//devuelve un array que construye a partir del separador que yo le de, espacio aquí
    
    //propiedad length devuelve el número de elementos del array. Devuelvo el número de palabras:    
    return words.length;
}

//2. Crea una función que genere una contraseña aleatoria con letras mayúsculas, letras minúsculas y números:

export function createPassword() {
    
    const allCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    //Obtengo un número entre 8 y 23, que será el mínimo y máximo de longitud de mis contraseñas
    const lengthPassword =  Math.floor(Math.random() * (23 - 8 + 1)) + 8;
    
    for (let i = 0; i < lengthPassword; i++) {
        //Math.floor(): redondea un número hacia abajo al entero más cercano
        //Math.random(): genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido)

        //Genero números aleatorios que serán el índice de extracción de caracteres de allCharacters:        
        let index = Math.floor(Math.random() * allCharacters.length);

        let char = allCharacters[index]; //Obtengo el caracter correspondiente  
        
        // Con una probabilidad del 50%, convierto el carácter a mayúscula
        if (Math.random() > 0.5) {
            char = char.toUpperCase();
        }

        password += char; //Concateno el caracter seleccionado (mayúscula o minúscula)
    }

    return password;
}




/**************Resolución profe***********/
function randomIntegerInInterval(min, max) {
    return Math.trunc(Math.random() * (max + 1 - min) + min);
}

function randomLetter() {
    const letters = 'abcdefghijklmnñopqrstuwxyz';
    // return letters[0]
    const position = randomIntegerInInterval(0, letters.length - 1);
    return letters[position];
}

function shuffleString(word = '') {
    const initialLetters = word.split('');
    const finalLetters = [];

    for (let i = 0; i < word.length; i++) {
        const n = randomIntegerInInterval(0, initialLetters.length - 1);
        const letter = initialLetters.splice(n, 1);
        finalLetters.push(letter[0]);
    }

    return finalLetters.join('');
}

// S de SOLID
// Single Responsibility

export function generatePassword(length) {
    // Sin ternario
    // let rounds = 2;
    // if (length > 6) {
    //     rounds = Math.ceil(length / 3);
    // }

    // Usando el operador ternario
    let rounds = length <= 6 ? 2 : Math.ceil(length / 3);
    let result = '';

    for (let i = 0; i < rounds; i++) {
        result += randomIntegerInInterval(0, 9);
        result += randomLetter();
        result += randomLetter().toUpperCase();
    }

    if (length > 6) result = result.slice(0, length);

    return shuffleString(result);

    // Usando el operador ternario
    // return shuffleString( length <= 6 ? result : result.slice(0, length));
}