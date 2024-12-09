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


