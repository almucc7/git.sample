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





//12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar:
function evenOddNumber(num4){    

    if(num4 % 2 === 0){ //Si divido el número introducido entre 2 y el resultado es 0, el número es par

        console.log(`El número ${num4} es par`);
    
    }else{

        console.log(`El número ${num4} es impar`);
    }
}

evenOddNumber(5);

//13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac):
function printString(text){ 
    
    return text. //Si se cumple la primera condición coge la primera multiplicación y si no, coge la segunda     
}

//Comprobamos si funciona en ambos casos:
print(printString('Casa'));

//14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro:

//15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo:



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



