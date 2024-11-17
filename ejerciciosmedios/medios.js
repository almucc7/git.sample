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


//Otra manera:

const getLetters = function(value = ''){

    const arrayLetter = value.split(''); //convierte value en un array donde cada índice es un caracter del string y guardo este array en la constante.
       
    const primerCaracter = arrayLetter.shift();
    const ultimoCaracter = arrayLetter.pop();   

    return { primerCaracter, ultimoCaracter }; //Devuelve un objeto literal, primeraCaracter: S y ultimoCaracter: o

}

console.log(getLetters('Supercalifragilisticuestialidoso'));




// 2. Escribe una función que reciba una palabra y revise si es un palíndromo:

const isPalindrome = function(value = '') {
    
    // Convertimos la palabra a minúsculas para ignorar diferencias entre mayúsculas y minúsculas
    let word = value.toLowerCase();

    // Invertimos la palabra y la comparamos con la original
    let reversedWord = word.split("").reverse().join("");

    // Verificamos si la palabra original es igual a la palabra invertida
    return word === reversedWord;
}

// Ejemplo de uso
console.log(isPalindrome("Anilina")); // Devuelve true
console.log(isPalindrome("Casa"));    // Devuelve false




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
//(contiene todas las letras del abecedario):   -------> ESTA ES SU VERSIÓN

//FUNCIÓN QUE ELIMINA TILDES
function removeAccentsPro(value = '') {
    const vocals = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        ü: 'u',
    };

    const invalids = 'áéíóúü';
    const characters = value.split('');

    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        if (invalids.includes(character)) {
            characters[i] = vocals[character];
        }
    }

    return characters.join('');
}




function isPangram(value = '') {
    const letters = 'abcdefghijklmnñopqrstuvwxyz';
    let validValue = value.toLowerCase();
    validValue = removeAccents(validValue);

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (!validValue.includes(letter)) {
            return false;
        }
    }
    return true;
}

sample = '';
console.log(sample, 'is pangram: ', isPangram(sample));
sample = 'ábcdéfghijk lmnño❤️😁,:;^pqrstuvwxyz';
console.log(sample, 'is pangram: ', isPangram(sample));


//5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales:

const allVocals = function(text) {

    // Convertimos la cadena a minúsculas para que no haya problemas en la comparación
    text = text.toLowerCase();
  
    // Definimos una variable con todas las vocales
    const vocals = "aeiouáéíóúü";
  
    // Recorremos cada vocal y comprobamos si está en la cadena
    for (let i = 0; i < vocals.length; i++) {

      if (!text.includes(vocals[i])) {
        // Si falta alguna vocal, retornamos false

        return false;
      }
    }
  
    // Si se encuentran todas las vocales, retornamos true
    return true;
  }
  
  
  console.log(allVocals("Cantón, patín, fetén, patán, pingüino, chubasquero, cúmulo")); // Devuelve true
  console.log(allVocals("prgmr")); // Devuelve false



  //Otra manera:
  const allVowels = function(value = '') {
    
    const vocals = 'aeiou'; // Cadena que contiene todas las vocales posibles
    const noAccents = removeAccentsPro(value); // Eliminamos las tildes del string
    let unicVocals = []; // Aquí almacenaremos las vocales únicas

    for (let i = 0; i < noAccents.length; i++) {

        const currentChar = noAccents[i]; // Tomamos el carácter actual

        // Verificamos si es una vocal y si no está ya en unicVocals
        if (vocals.includes(currentChar) && !unicVocals.includes(currentChar)) {

            unicVocals.push(currentChar);
        }
    }

    return unicVocals; // Devolvemos las vocales únicas encontradas
};

console.log(allVowels('Timón')); // Imprime ['i', 'o']




//6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

const countDown = function(value) {
    let result = []; // Creamos un array vacío para almacenar la cuenta atrás

    // Iniciamos el bucle desde 'value' hasta 0
    for (let i = value; i >= 0; i--) {

        result.push(i); // Añadimos cada valor al final del array 'result'
    }

    return result.join(", "); // Convertimos el array en una cadena separada por comas
};


console.log(countDown(5)); // Devuelve: "5, 4, 3, 2, 1, 0"




//7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona (CALCULO CON LA FECHA DE NACIMIENTO DIA/MES/AÑO Y DIA-MES-AÑO):

const calculateAge = function (value) {
    // Año actual fijo
    const currentYear = 2024;

    // Extraemos el año de la fecha de nacimiento en formato día/mes/año o día-mes-año
    const dateBirth = parseInt(value.split(/[-/]/)[2]); //Dividimos la fecha en partes, separadas por - o /. Esto coloca el año en la tercera posición del array, 
    //que accedemos con [2]. Luego usamos parseInt para convertirlo en un número
    
    // Calculamos la edad
    return currentYear - dateBirth;
}

console.log(calculateAge("15/05/1985")); // Devuelve 39
console.log(calculateAge("15-05-1990")); // Devuelve 34


//8. Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado:

const isAdult = function(age) {

    if (age >= 18) {

        console.log("La persona es mayor de edad.");
    } else {
        console.log("La persona es menor de edad.");
    }
}


isAdult(20); // Imprime: La persona es mayor de edad.
isAdult(15); // Imprime: La persona es menor de edad.


//9. Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta:

const rollDice = function() {
    
    // Generamos un número aleatorio entre 1 y 6
    let result = Math.floor(Math.random() * 6) + 1;

    // Imprimimos el resultado en la consola
    console.log("Tirada:", result);
}


rollDice(); // Imprime un número aleatorio entre 1 y 6
rollDice(); // Cada ejecución genera un nuevo resultado


//10. Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no:

const isLeapYear = function(year) {
    
    // Comprobamos si el año es bisiesto (un año es bisiesto si es divisible entre 4 y no lo es entre 100, o es divisible entre 400)
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Imprimimos el resultado en la consola
    if (isLeap) {

        console.log(year + " es un año bisiesto.");
    } else {

        console.log(year + " no es un año bisiesto.");
    }
}


isLeapYear(2024); // Imprime: 2024 es un año bisiesto.
isLeapYear(2023); // Imprime: 2023 no es un año bisiesto.


//11. Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá 
//automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota:

const playRockPaperScissors = function(playerChoice) {
    
    // Opciones del juego
    const options = ["piedra", "papel", "tijera"];

    // La máquina elige una opción aleatoria (elige aleatoriamente una opción del array options (que contiene "piedra", "papel" y "tijera") y la asigna a machineChoice)
    const machineChoice = options[Math.floor(Math.random() * options.length)];

    // Imprimimos ambas elecciones
    console.log("Jugador elige:", playerChoice);
    console.log("Máquina elige:", machineChoice);

    // Determinamos el resultado del juego
    if (playerChoice === machineChoice) {

        console.log("Es un empate.");
    } else if (

        (playerChoice === "piedra" && machineChoice === "tijera") ||
        (playerChoice === "papel" && machineChoice === "piedra") ||
        (playerChoice === "tijera" && machineChoice === "papel")
    ) {
        console.log("¡Ganaste!");

    } else {
        console.log("Perdiste.");
    }
}


playRockPaperScissors("piedra"); // La salida variará según la elección aleatoria de la máquina



//12. La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la 
//serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.
//La serie de Fibonacci es una sucesión de números en la que cada número (a partir del tercero) es la suma de los dos anteriores. La serie comienza con 0 y 1:

const printFibonacciSeries = function(limit) {
    let num1 = 0; // Primer número de la serie de Fibonacci
    let num2 = 1; // Segundo número de la serie de Fibonacci
    let nextNum;  // Almacena el siguiente número en la serie

    console.log("Serie de Fibonacci:");
    console.log(num1); // Imprimimos el primer número
    console.log(num2); // Imprimimos el segundo número

    // Generamos la serie de Fibonacci hasta llegar al límite
    while ((nextNum = num1 + num2) <= limit) {
        console.log(nextNum); // Imprimimos el siguiente número
        num1 = num2; // Actualizamos num1 al valor de num2
        num2 = nextNum; // Actualizamos num2 al siguiente número en la serie
    }
};

// Solicitamos al usuario que ingrese un número
const userInput = prompt("Introduce un número para la serie de Fibonacci:");
const limit = parseInt(userInput); // Convertimos la entrada del usuario en número

// Ejecutamos la función con el límite introducido por el usuario
printFibonacciSeries(limit);


//13. Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados 
//en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. 
//(Por ejemplo -> 'Pepe Pérez 87'.):

const generateUsername = function() {
    // Arrays con nombres y apellidos
    const names = ['Hugo', 'Luis', 'Antonio'];
    const surnames = ['Garrido', 'Garcia', 'Sanchez'];

    // Elegimos un nombre aleatorio del array 'names'
    const randomName = names[Math.floor(Math.random() * names.length)];

    // Elegimos un apellido aleatorio del array 'surnames'
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];

    // Generamos un número aleatorio entre 1 y 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Creamos el nombre de usuario aleatorio
    const username = `${randomName} ${randomSurname} ${randomNumber}`;

    // Retornamos el nombre de usuario
    return username;
}


console.log(generateUsername()); // Por ejemplo: 'Hugo Fabiano 87'



//14. Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, 
//la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales:

const tipCalculator = function(billAmount, tipPercentage) {
    
    // Calculamos la propina multiplicando el total por el porcentaje y dividiendo entre 100
    let tip = (billAmount * tipPercentage) / 100;
    
    // Calculamos el total sumando la cuenta y la propina
    let total = billAmount + tip;
    
    // Redondeamos la propina y el total a dos decimales
    tip = tip.toFixed(2);
    total = total.toFixed(2);
    
    // Imprimimos la cuenta, la propina y el total a pagar. Tofixed() redondea a los decimales que le pongas entre parentesis
    console.log("Cuenta:", billAmount.toFixed(2));
    console.log("Propina:", tip);
    console.log("Total a pagar:", total);
}


tipCalculator(50, 15); // Con una cuenta de 50 y una propina del 15%



//15. Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por 
//consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales:

const calculateDiscount = function(price, discountPercentage) {
    
    // Calculamos el descuento multiplicando el precio por el porcentaje de descuento y dividiendo entre 100
    let discount = (price * discountPercentage) / 100;
    
    // Calculamos el precio total restando el descuento al precio original
    let totalPrice = price - discount;
    
    // Redondeamos el descuento y el precio total a dos decimales
    discount = discount.toFixed(2);
    totalPrice = totalPrice.toFixed(2);
    
    // Imprimimos el precio original, el descuento y el precio total después de aplicar el descuento. Tofixed() redondea a los decimales que le pongas entre parentesis
    console.log("Precio original:", price.toFixed(2));
    console.log("Descuento:", discount);
    console.log("Precio con descuento:", totalPrice);
}


calculateDiscount(100, 20); // Con un precio de 100 y un descuento del 20%

 
