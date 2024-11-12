//6. Crea una función que imprima por consola el string 'Hello World':
function print(value){

    console.dir(value);
}

print('Hello World');


//7. Crea una función que calcule el resultado de la multiplicación de dos números introducidos como parámetros. Invócala e imprimie por consola el resultado usando la función
//del ejercicio 6:
function multi(a, b){

    return a * b;
}

print(multi(7,5)); //Utilizo la función print del ejercicio 6 para imprimir


//8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro. Invócala e imprime por consola el resultado usando la función
//del ejercicio 6:
function cube(num3){
    
    const result = (num3 ** 3);
    return result;
}

print(cube(3));


//9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura).Invócala e imprime por consola el resultado usando la función
//del ejercicio 6:
function rectangleArea(base, height){
    
    const area = (base * height);
    return area;
}

print(rectangleArea(2, 3));



// Área de un rectángulo o triángulo:
function areaRectangleOrTriangle(b, h, isRectangle){ //isRectangle es un boolean que si es false es un triángulo y si es true un rectángulo
   
    if(isRectangle){ //Si es true (por defecto es true)
   
        return  b * h; //Para eliminar el else, porque return corta la ejecución
    }

    return (b * h) / 2; //Si isRectlangle es false, se ejecuta esto        
}

//Comprobamos si funciona en ambos casos:
print(areaRectangleOrTriangle(3, 5, false));
print(areaRectangleOrTriangle(3, 5, true));


//Otra manera:
function areaRectangleOrTriangle(b, h, isRectangle){ //isRectangle es un boolean que si es false es un triángulo y si es true un rectángulo
    let areaBase = b * h;
    if(isRectangle){ //Si es true (por defecto es true)
   
        return areaBase;
    }

    return areaBase / 2; //Si isRectlangle es false, se ejecuta esto        
}

//Comprobamos si funciona en ambos casos:
print(areaRectangleOrTriangle(3, 5, false));
print(areaRectangleOrTriangle(3, 5, true));



////////OPERADOR TERNARIO//////////
function areaRectangleOrTriangle(b, h, isRectangle){ //isRectangle es un boolean que si es false es un triángulo y si es true un rectángulo
    
    return isRectangle ? b * h : (b * h) / 2;//Si se cumple la primera condición coge la primera multiplicación y si no, coge la segunda     
}

//Comprobamos si funciona en ambos casos:
print(areaRectangleOrTriangle(3, 5, false));
print(areaRectangleOrTriangle(3, 5, true));



//10. Crea una función que imprima por consola un número al azar entre 0 y 10.Invócala e imprime por consola el resultado usando la función del ejercicio 6.Invócala e imprime
//por consola el resultado usando la función del ejercicio 6. HAY QUE REDONDEAR:
function printRandomNumber(){
    
    return Math.trunc(Math.random() * 9 + 1); //Redondea con trunc el numero aleatorio del 1 al 10    
}

print(printRandomNumber());


//11. Adivina el número: ejecútalo en el navegador.
//Crea una función que pregunte por prompt un númer aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. 
//Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que 
//el usuario ha fallado seguido del número correcto: 

function app(){

    const expected = printRandomNumber();
    const userOption = prompt('Dime un número del 1 al 10'); //Ojo que esto es un String

    const isCorrect = expected === Number(userOption); //Convierto el userOption string del prompt a Number, comparo y hago la asignación

    if(isCorrect){ //Si todo ha sido correcto

        print('Has acertado');

    }else{

        print(`No has acertado. El número era ${expected}`);
    }
}



/******CON TERNARIO*****/
function app(){

    const expected = printRandomNumber();
    const userOption = prompt('Dime un número del 1 al 10'); //Ojo que esto es un String

    const isCorrect = expected === Number(userOption); //Convierto el userOption string del prompt a Number, comparo y hago la asignación
    const result = isCorrect ? 'Has acertado' : `No has acertado. El número era ${expected}`;

    print(result);
}


// 12. Crea una función que reciba un número como parámetro y devuelva de alguna manera si el número dado es par o impar.
// Invócala e imprime por consola el resultado usando la función del ejercicio 6:
function evaluateNumber(num4){    

    const isEven = num4 % 2 === 0; //Si el número es par guardo en la variable isEven true
    const result = isEven ? 'El número es par' : 'El número es impar'; //Si el número es par (true)muestro el número es par, y si es false, impar
    print(result); //Imprimo si el número es par o impar
   
}

evaluateNumber(5);



//Otra manera:
function evenOrOdd(num){

    //Comprobamos primero si num no es entero ni string
    //Programación defensiva (es lógica negativa, que no sea tal)

    if(!Number.isInteger(num)){ //Si num no es entero (controlamos que no sea 0 ni string)

        return 'El valor no es válido';
    }

    let result = 'Impar';
    if(num % 2 === 0){

        result = 'Par';
    }

    return result;
}

const value = 23;
print(`${value} es ${evenOrOdd(value)}`);

// 13. Crea una función que reciba un parámetro de tipo string y devuelva  el string revertido. (ejemplo: 'casa' => 'asac).
// Invócala e imprime por consola el resultado usando la función del ejercicio 6: (se haría con bucle un for al revés)

function revertString(value){

    let accumulator = ''; //Acumulador de strings (concatenará strings)

    for (let i = value.length - 1; i >= 0; i--) { //-1 para que no se coma la primera letra

        const iterator = value[i];          
        accumulator += iterator;
    }

    return accumulator;
}

console.log(revertString('Ornitorrinco'));


// 14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
// Mejora: utiliza una función independiente para el render
function renderMultiplicationTable(num){

    for (let i = 0; i <= 10; i++) { //La tabla del 0 al 10
        console.log(`${num} por ${i} = ${num*i}`);       
    }
}
renderMultiplicationTable(5);





// 15. Crea una función que reciba un número por parámetros y devuelva de alguna manera si el número recibido es un número primo.
//Numero primo: número entero mayor que 1 que solo tiene dos divisores: 1 y él mismo (2,3,5,7,11...)
// Invócala e imprime por consola el resultado usando la función del ejercicio 6:
function isPrime(num){

    if (!Number.isInteger(num) || num < 0) { //Descarto negativos, decimales y string (Los números menores o iguales a 1 no son primos)
        return 'El valor no es válido'; 
    }
    
    
    if(num < 2) return false; //Si el numero introducido es menor que 2, no es primo( 0 o 1 me puede llegar aquí y a partir del 2, incluido, hay numeros primos)   

    for(let i = 2; i < num; i++){ //Doy vueltas desde el 2 hasta el numero que introduzcan

        if(num % i === 0) return false; //Si es par, no es primo
    }

    return true;
}

function renderPrime(n){ 

    let result = isPrime(n); //La función anterior, isPrime(), me devuelve o un string(El valor no es válido) o un boolean(true o false)
    if(typeof result === 'boolean'){ //Si me devuelve un boolean

        result = result ? 'Es primo' : 'No es primo'; //Lo convierto a es primo (si nos llegó true) o no es primo (si nos llegó
        //false), para sacarlo por consola
    }

    console.log(n, result);
}

renderPrime(-1);
renderPrime(0);
renderPrime(1);
renderPrime(2);
renderPrime(9);
















/*************************************** EJEMPLOS CLASE ********************************************************/
//Declaración de una función:

function add(a,b){

    //Parámetros: a y b

    console.log(a+b) // Efecto
    return a+b; // Resultado (lo que la función devuelve)
}

add(2,4); //Argumentos: 2 y 4

const w= 12;
const k= 15;
debugger;
add(w,k); //Los argumentos son 12 y 15 (no w y k. A la función le llegan los valores, no las variables)


//Esto es erróneo, porque la variable que se devuelve está declarada fuera y eso no debe hacerse:
const f = 2;
function foo(){

    return f;
}

console.log(foo()); //Devuelve 2



/*********************************CASTING Y COERCIÓN *****************************/

//Coerción a Number de la variable v2
let v1 = 3;
let v2 = '4';
console.log(v1 * v2); //Se necesita hacer una coerción de la variable v2, porque multiplicar solo sabe operar con numbers y v2 es un string
//Convierte tu tipo temporalmente durante la operación a 4
console.log(typeof v2); //Saca el tipo de lo que le demos, en este caso la variable v2, que es string


//Coerción a String de la variable v1
//El operador es distinto
//Operador sobrecargado (+ puede sumar y concatenar).SIEMPRE QUE HAYA + Y UN STRING, CONCATENARÁ:
console.log(v1 + v2); //Resultado string 34 (sufre coerción v1)
console.log(typeof v2);

//Casting a number de la variable v2
console.log(v1 + Number(v2)); //Cambio el tipo de dato, no de la variable. Devuelve 7 Number

//Como hay coerción de los tipos, esto NO da error:
console.log(true + false); //Da 1, porque true se convierte al number 1 y false al number 0 y como no hay strings, hago una suma de 1 + 0


/********************FALSIES***********************/
console.log(Boolean(false));
console.log(Boolean(0)); 
console.log(Boolean('')); //Cadena vacía, sin nada en medio, ni espacio
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(NaN)); //Not a number



/*****************************BUCLES FOR Y WHILE*****************/

//Tirar un dado 1 vez (genera un numero aleatorio del 1 al 6, con Math.random()):
Math.trunc(Math.random() * 5 + 1); //Rango entre 1 y 6 (aleatorio entre estos dos rangos), lo trunco para redondear y que no me de decimales
console.log(Math.trunc(Math.random() * 6) + 1); //¿¿Diferencia???

//Quiero que me salgan en pantalla un número de tiradas a la vez (recibe el numero de tiradas que quiero hacer):
function rollDiceN(n){

    let accumulator = 0; //Acumulador sumatorio vale 0 en la primera vuelta

    for(let i = 0; i < n; i++) { //Desde que i vale 0 hasta que i sea menor que n, da vueltas (doy n por parametro)

        //console.log(i); //Imprimo del 0 al 9
        const dice = Math.trunc(Math.random() * 6) + 1; //guardo la tirada del dado
        console.log('Valor del dado: ' , dice); //Imprimo el valor de la tirada del dado
        accumulator += dice;  //Acumulo y sumo las tiradas
    }

    console.log('Total acumulado', accumulator);
}

rollDiceN(10);


//Otra manera, bucle al revés (no son habituales):
function rollDiceNFriki(n){

    let accumulator = 0; //Acumulador sumatorio vale 0 en la primera vuelta

    for(let i = n; i > 0; i--) { //Desde que i vale 0 hasta que i sea menor que n, da vueltas (doy n por parametro)

        //console.log(i); //Imprimo del 0 al 9
        const dice = Math.trunc(Math.random() * 6) + 1; //guardo la tirada del dado
        console.log('Valor del dado: ' , dice); //Imprimo el valor de la tirada del dado
        accumulator += dice;  //Acumulo y sumo las tiradas
    }

    console.log('Total acumulado', accumulator);
}

rollDiceNFriki(10);


//Iteramos strings:
const cad = 'Hola, ¿qué tal?'; //tiene longitud e índice
console.log(cad.length);//Me dice los caracteres que tiene la cadena cad
console.log(cad[3]); //Me dice la posición 3 de la cadena, la a (empieza a contar por 0)
//cad[3] = 'r'; //NO ES VÁLIDO, ERROR

//La cadena la recorremos con un bucle:
for(let i = 0; i < cad.length; i++) { //Desde que i vale 0 y mientras que i sea menor que la longitud de la cadena

    const element = cad[i]; //Guárdame cada caracter de la cadena
    console.log(element); //Imprimo cada caracter de la cadena
}


