import facts from './facts.json';

    // TODO 1: Declarar y asignar variables que apunten a los elementos correspondientes      
    // statementElement debe ser el div "statement"
    const statementElement = document.querySelector('#statement');

    // optionButtons debe ser todos los elementos dentro del div "options"
    const optionButtons = document.querySelectorAll('#options button');

    // explanationElement debe ser el div "explanation"
    const explanationElement = document.querySelector('#explanation');

    // TODO 2: Declarar y asignar una variable llamada fact
    // Su valor debe ser un objeto con una declaración, respuesta verdadera/falsa y explicación

    const fact = {
      statement: facts[0].statement,
      answer: facts[0].answer,
      explicación: facts[0].explicación
    };

    console.log(fact); 

    // TODO 3: Establecer el texto del elemento statement en la propiedad correspondiente del objeto fact
    //statementElement.innerHTML(fact.statement);

    // TODO 4: Declarar funciones disable y enable para establecer o eliminar el atributo "disabled" de un elemento de botón dado
    // disable(button) debe establecer el atributo "disabled" del elemento de botón en el valor ""
    // enable(button) debe eliminar el atributo "disabled" del elemento de botón

    // TODO 5: Declarar una función isCorrect que compare una suposición con la respuesta correcta
    // isCorrect(guess) debe devolver true si la suposición coincide con la respuesta del hecho

    // TODO 6A: Usar un bucle for para agregar un escucha de eventos de clic a cada uno de los optionButtons
    // TODO 6B: Dentro de la función del controlador de eventos, mostrar la explicación del hecho estableciendo el texto del elemento de explicación

    // TODO 7: Dentro de la función del controlador de eventos,
    // Usar un bucle for para deshabilitar todos los botones de opción

    // TODO 8: Dentro de la función del controlador de eventos,
    // Obtener el valor supuesto del botón clicado
    // Usar una condición para comparar la suposición con la respuesta del hecho
    // y agregar la clase "correct"/"incorrect" según corresponda
