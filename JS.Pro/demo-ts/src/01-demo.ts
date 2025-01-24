/* eslint-disable */

//Inferencia de tipos:
//Declaración: cuando usamos const o let
const x = 22;

//Anotación de tipos:
let z: number;
z = 22;
//ASÍ NO SE HACE PORQUE ES REDUNDANTE:
let t: number = 22;
//Anotamos los parámetros (ESTO SI):
function add(a: number, b: number): number {
    //Devuelve un number
    return a + b;
}

//let v. const: const y tipos literales:
{
    const x = 'Pepe'; //x es de tipo Pepe
}

//Conversión/ Asignación de tipos:
{
    const y = document.querySelector('h1') as HTMLHeadingElement; //Casting del tipo, porque puede devolver un null si no encuentra un h1
    //y le confirmamos que nos va a devolver un HTMLElement
}

//Obetos, Arrays y Tuplas:

const obj: {
    name: string;
    readonly age: number;
    job?: string; //puedo usar o no esta propiedad, que siempre será de tipo string
} = {
    name: 'Antonio',
    age: 23,
};

obj.age = 24;

//Propiedades opcionales:

delete obj.job;

if (obj.job) {
    console.log(`Trabajo de ${obj.job}`);
} else {
    console.log('Ahora no trabajo');
}

//Parámetros opcionales
//Narrowing: restricción del tipo
const foo = (a?: string) => {
    if(!a) return //Guarda de tipo
    console.log(a); //a será string o string, nunca undefined
};


//Arrays:
const foo2 = (data: number[]) => {
    data.map(item => item * item)
}

//Tupla:
const w: [number, number] = [1, 2];
w.push(5);
console.log(w.length);

//Tupla inmutable
const j: [string, number] = ['Pepe', 2];
const l: readonly [string, number] = ['Rosa', 4];

//l[1] = 5  --> no se puede cambiar porque l es de solo lectura


//Firmas de índice en los objetos: creamos objeto recorrible mediante corchetes
{
    const user2: {[key: string]: string | number | boolean} = {

        name: 'Antonio',
        age: 23,
        hasJob: true
    };


   user2.algo = '';

   const p = 'score'
   console.log(user2[p]);

   for (const key in user2) {    
        const element = user2[key];
   }

}

//Uniones de tipo:
{
    let x: string | number;
    x = 12;
    x = 'K563';

    //Unión de tipo literal:
    let m: 'Success' | 'Error';   //Solo puedes valor sucess o error
    m = 'Success';
    m = 'Error';
}


//Tipos de unión e intersección
{


}