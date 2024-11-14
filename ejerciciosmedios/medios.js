// 1. Crea una función que elimine el primer y último caracter de un string recibido por parámetros y muéstralo:

//Las funciones son objetos:
const removeLastFirst = function(value = ''){

    let result = '';

    for (let i = 1; i < value.length -1; i++) {
        result += value[i];
    }

    return result;
}

console.log(removeLastFirst('Patata'));


//Otra manera:
const removeLastFirstTwo = function(value = ''){

    let result = '';

    for (let i = 1; i < value.length -1; i++) {
        result += value[i];
    }

    const r = value.slice(1, value.length - 1);
    return r;
}

console.log(removeLastFirstTwo('Patata'));


//Otra manera:
const removeLastFirstThree = function(value = ''){

    let result = '';

    for (let i = 1; i < value.length -1; i++) {
        result += value[i];
    }
    
    return r2 = value.substring(1, value.length -1);
}

console.log(removeLastFirstThree('Patata'));


// 2. Escribe una función que reciba una palabra y revise si es un palíndromo.



//3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros:

const countVocals = function(value = ''){

    let accumulator = 0;
    const vocals = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü'];

    for (let i = 0; i < value.length; i++) {
        
        const item = value[i]; //es const porque cada vez que el bucle da una vuelta, se crea una nueva variable const para esa nueva iteración
        if(vocals.includes(item)){//Si el caracter actual de item(cada letra de la palabra enviada)está en el array de vocales
                                    //el método includes devolverá true si el caracter se encuentra en el array

            accumulator++;//y se sumará 1 al al acumulador de vocales que están en el array y en la palabra enviada
        }        
    }

    return accumulator;//Devuelvo la cantidad de vocales encontradas
}

console.log(countVocals('Sevilla'));



//Otra manera más eficiente:    //DEBUGGEAR ESTE EJERCICIO
const countVocalsTwo = function(value = ''){

    let accumulator = 0;
    const vocals = 'aeiouáéíóúü';

    for (let i = 0; i < value.length; i++) {
        
        const item = value[i].toLocaleLowerCase(); //Convierto el valor que me envíen a español y a minúscula (por si no lo estuvieran) porque si no, no los cuenta
        accumulator += vocals.includes(item); 
               
    }

    return accumulator;
}

console.log(countVocalsTwo('El murciélago verde'));  //Devuelve 8



//4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama 
//(contiene todas las letras del abecedario):

const findAllSpanishLettersAlphabet = function(value = '') {
    
    const allLetters = 'abcdefghijklmnñopqrstuvwxyz';//Definimos el alfabeto completo     
    
    let foundLetters = [];//Creamos un array para guardar las letras que encontramos en el texto
    
    value = value.toLowerCase();//Convertimos el texto que nos envían a minúsculas para poder compararlo bien
    
    value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");//Eliminamos tildes y acentos del texto que nos envían

    // Recorremos cada letra del texto
    for (let i = 0; i < value.length; i++) {

        const item = value[i]; //Guardamos cada letra del texto en cada iteración

        // Si la letra está en el alfabeto y aún no la hemos encontrado
        if (allLetters.includes(item) && !foundLetters.includes(item)) {

            // Agregamos la letra al final del array de letras encontradas
            foundLetters.push(item);
        }
    }

    // Si el array tiene 27 letras, significa que encontramos todas las letras del alfabeto
    if (foundLetters.length === allLetters.length) {

        console.log('Es un pangrama');

    } else {

        console.log('No es un pangrama');
    }
}

findAllSpanishLettersAlphabet('Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol');


//5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

//6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

const countDown = function(value){

    let counter = 0;

    for (let i = value; i > 0; i--) {
        
       
        counter = i;
        
    }

    return counter;
}

console.log(countDown(5));



//7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

//8. Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.

//9. Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

//10. Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

//11. Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

//12. La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

//13. Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

//14. Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

//15. Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales. */

 
