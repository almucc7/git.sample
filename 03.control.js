/*************While***********/


//Tirar hasta que salga un valor
function rollDiceUntil(value){ //Tira el dado hasta que salga un número dado como parámetro

    let accumulator = 0;
    let dice= 0;
    for (let i = 0; true; i++) {
        dice = Math.trunc(Math.random() * 6) + 1;//Sácame un valor entre 1 y 6
        console.log('Valor del dado: ', dice);
        accumulator += dice;
        if(dice === value){ 

            //continue; //Sáltate la vuelta 3 y continua con la 4
            break; //Salte del bucle
        }
        
    }  
    console.log('Total: ', accumulator);
}

rollDiceUntil(5);


//CON WHILE (manera más elegante de hacer for cuando no sé i)
function rollDiceUntil(value){ //Tira el dado hasta que salga un número dado como parámetro

    let accumulator = 0;
    let dice= 0;
    while (dice !== value) {
        dice = Math.trunc(Math.random() * 6) + 1;//Sácame un valor entre 1 y 6
        console.log('Valor del dado: ', dice);
        accumulator += dice;       
    }  
    console.log('Total: ', accumulator);
}

rollDiceUntil(5);



//CON DO WHILE (La primera vuelta se va a dar se cumpla o no la condicón) --> NO SUELEN USARSE
function rollDiceUntil(value){ //Tira el dado hasta que salga un número dado como parámetro

    let accumulator = 0;
    let dice= 0;
    do {
        dice = Math.trunc(Math.random() * 6) + 1; //Sácame un valor entre 1 y 6
        console.log('Valor del dado: ', dice);
        accumulator += dice; 

    } while(dice !== value) //SIEMPRE ES DISTINTO A 0, POR TANTO, BUCLE INFINITO
    console.log('Total: ', accumulator);
}

rollDiceUntil(0); //VA A DAR 1 VUELTA PORQUE SE DA ANTES DE HACER LA COMPROBACIÓN



//WHILE CON BUCLE INFINITO SOLUCIONADO
function rollDiceUntil(value){ //Tira el dado hasta que salga un número dado como parámetro

    if(value < 1 || value > 6){ //Si el valor que me da el usuario está fuera del rango del dado (1 a 6)

        console.log('Valor fuera de rango');
        return; //Me salgo y muestro el mensaje de fuera de rango
    }

    let accumulator = 0;
    let dice= 0;
    do {
        dice = Math.trunc(Math.random() * 6) + 1; //Sácame un valor entre 1 y 6
        console.log('Valor del dado: ', dice);
        accumulator += dice; 

    } while(dice !== value) //SIEMPRE ES DISTINTO A 0, POR TANTO, BUCLE INFINITO
    console.log('Total: ', accumulator);
}

rollDiceUntil(0); //YA NO DA NINGUNA VUELTA SIN COMPROBAR PORQUE CONTROLO CON EL IF


//FUNCIÓN PARA SACAR ALEATORIOS CON MIN Y MAX DADOS POR MI (entre 1 y 2 en este caso)
//GenerateRandom poniendo un máximo y un mínimo de rango, dados por mi, para sacar aleatorios
const min = 1;
const max= 2;
const randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber);

