console.log('Index loaded');

function greeting(){ //tipo de variable especial que guarda bloque de código para ejecutarlo cuando queramos

    const question = '¿Cómo te llamas?'; //Creamos variable para hacer la pregunta
    const userName = prompt(question); //Creamos variable para recoger el prompt de la respuesta

    /*if(userName !== null){ //Si userName no es null entonces haz lo siguiente (con ! negamos):

        const response = `Hola, ${userName}, ¿qué tal estás?`; //Creamos variable que construye una frase con la respuesta
        alert(response); //Hacemos ventana emergente con la frase completa
    }  */

    //MEJOR MANERA DE HACERLO, DE MANERA POSITIVA
    if(userName === null || userName === '')return //Si el usuario pulsa cancelar o deja vacía la ventana, salte

    const response = `Hola, ${userName}, ¿qué tal estás?`; //Creamos variable que construye una frase con la respuesta
    alert(response); //Hacemos ventana emergente con la frase completa
    
    
}


const button = document.querySelector('button'); //Selecciono el botón html y lo guardo en la variable button
button.addEventListener('click', greeting); //Cuando se haga click en el button, llamamos a la función greeting