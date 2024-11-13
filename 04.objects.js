console.log(Number.MAX_VALUE * 2); //Aparece en amarillo Infinity por consola



/*************************************OBJETOS**********************************************/
name = 'Pepe';
age = 22;

//Los uno en una colección de datos (Objecto con propiedades):
const user = {          //Las llaves me permite definir las propiedades de la colección

    name: 'Pepe',
    age: 22
}  

//Para acceder a las propiedades del objeto:
console.log(user.name);


// user = {}   Esto daría error porque no se pueden reasignar valores


//Primitivos inmutables, son constantes, no pueden cambiar, pero los objetos si
// const --> CONSTANTE

const x = 22;


//Objetos (mutables)
//const --> no reasignable
const student = {          //Las llaves me permite definir las propiedades de la colección

    name: 'Pepe',
    age: 22,
    color: 'white'
};

student.age = 23;  //No reasigno la variable, porque me meto dentro del objeto y cambio el valor de la propiedad
student.course = 'web'; //Añadimos la propiedad curso al objeto (mutamos el objeto)
delete student.color; //Borro la propiedad entera color

console.log(student);



/***************ARRAYS***************/
const data = ['Pepe', 'Juan', 'Rosa', 'Ernestina'];
console.log(data[0]); //Accedo a la posición 0

data[0] = 'Jose'; //Cambio Pepe por Jose

//Los strings son inmutables y son iterables solo de lectura
const userName = 'Pepe Perez';
console.log(userName.length); 

//Con array
console.log(data.length); //Me dice el numero de elementos del array

data[data.length] = 'Francisco'; //Añademe al final del array a Francisco
console.log(data.length); // Me dira 5
console.log(data);

//Borrar elementos del array
data.length = 2; //Dejo solo 2 elementos en el array
console.log(data);

//Añadimos una propiedad de objeto al array
data.use = 'List of names';
console.log(data);
console.log(data.length); //La propiedad no se cuenta como elemento del array, porque es una propiedad, no un elemento


/******Métodos de los arrays y strings*****/
//Strings:
const course = 'Web Developer';
course.includes('Web');
console.log(course.includes('Web'));

//Arrays SIEMPRE SE DECLARAN EN PLURAL aunque se puede añadir también List (numberList):
const numbers = [1,2,3];
numbers.includes(3);  //¿Incluye el 3? Me dirá true

//- Métodos mutables:
//numbers[numbers.length] = 45; //Esto es feo pero hace lo mismo que:   //añade al final del array:
numbers.push(45); // Modifica number y le añade el elemento 45

//push tiene un array y le añade un valor al final. Push me devuelve la nueva longitud del array

//pop elimina el ultimo elemento del array y te lo devuelve:
const number = numbers.pop();
console.log(number);

//unshift(): el elemento que tú le des, lo pone al principio del array.
//shift(): quita un elemento y lo devuelve
const l = numbers.push(45);
l = numbers.unshift(45);
console.log(l, numbers);
number = numbers.shift();
console.log(number, numbers);


//sort() ordena el array alfabéticamente y nos lo devuelve modificado y ordenado:
numbers.sort();
console.log(numbers);



//-Inmutables:

//join() Devuelve un string de todos los valores del array separados por el separados que me digas o por el mío por defecto, una coma:
const nunString = numbers.join(' - ');
console.log(nunString);

//toSorted() devuelve un nuevo array ordenado sin tocar el original:
const sortedNumbers = numbers.toSorted();
console.log(sortedNumbers);




//ARRAY MULTIDIMENSIONAL
const matrix = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];


const rows = matrix.length;
const cols = matrix[0].length;

//Para referenciar:
console.log(matrix.length); //Devuelve 3, porque hay 3 filas
console.log(matrix[0].length); //Devuelve 4 porque hay 4 elementos en la fila 1, que es la que le hemos pasado con el 0
console.log(matrix[1][1]); //Devuelve la fila 2, el número 20


//Recorro el array multidimensional entero con un bucle for anidado:
let accumulator = 0;

for (let i = 0; i < rows; i++) {
    const row = matrix[i];
    
    for (let j = 0; j< cols; j++) {
        const element = matrix[i][j];    
        accumulator += element;
        console.log(element);    
    }
}

console.log('La suma de todos los elementos es: ', accumulator);



//Tabla de multiplicar
function tablaMultiplicar(num){

    let accumulator = [];
    for (let i = 0; i <= 10; i++) {
        accumulator.push(`${num} por ${i} es ${num * i}`);        
    }
    return accumulator;
}

console.table(tablaMultiplicar(2));



//Revertir string con split()
function revertStringByArray(value = ''){

    const array = value.split('');
    array.reverse();
    const result = array.join(''); //júntalo todo con la coma, por defecto (devuelve un string)
    
    return result;
    //return value.split('').reverse().join(''); //LO ANTERIOR SE PUEDE RESUMIER EN ESTO. ES LO MISMO QUE LO DE ARRIBA
    //value lo convierto en array(split()), lo revierto (reverse()) y lo uno, haciéndolo un string join()
}

console.log(revertStringByArray('ornitorrinco'));