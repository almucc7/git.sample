console.log('Hola mundo');
console.log('From main');
console.log('Used from products');
console.log('New line');

console.log(22, typeof 22);

//Variables
let user;


let score = 5 + 4;
score = 9;
let newScore = 3 * score;
let otherScore = newScore;
newScore = 54;
const foo = newScore > otherScore;

console.log(newScore);
console.log(otherScore);
console.log(foo);

//Sentencia
console.log(2 === '2');

//Expresión 
2 === '2'

//Concatenación
const firstName = 'Rosa';
const surName = 'Pérez';
const fullName = firstName + ' ' + surName;
console.log(fullName); //Devuelve Rosa Pérez

//Otra manera de concatenar más moderna template
console.log(`${firstName} ${surName}`);


const a = 2;
const b = '2';
console.log( a * b); //Da 4 (es JS, no Java)
console.log( a + b); //Da 22 
console.log(Number(a) + +b); //Da 4 