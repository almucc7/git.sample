"use strict";
/* eslint-disable */
//Inferencia de tipos:
//Declaración: cuando usamos const o let
const x = 22;
//Anotación de tipos:
let z;
z = 22;
//ASÍ NO SE HACE PORQUE ES REDUNDANTE:
let z = 22;
//Anotamos los parámetros (ESTO SI):
function add(a, b) {
    return a + b;
}
//let v. const: const y tipos literales:
{
    const x = 'Pepe'; //x es de tipo Pepe
}
//Conversión/ Asignación de tipos:
{
    const z = document.querySelector('h1'); //Casting del tipo, porque puede devolver un null si no encuentra un h1
    //y le confirmamos que nos va a devolver un HTMLElement
}
//Obetos, Arrays y Tuplas:
const obj = {
    name: 'Antonio',
    age: 23
};
delete obj.job;
