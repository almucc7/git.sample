const elementBurger = document.querySelector('.fa-bars'); //Selecciono el icono del menú desplegable
const elementDialog = document.querySelector('dialog'); //Selecciono el dialog que contiene el menú de navegación desplegable
const elementClose = document.querySelector('.close');//Selecciono la palabra close del dialog del menú desplegable para después poder cerrarlo

//Abro menú desplegable
function handlerClick(){
    elementDialog.showModal();
}

elementBurger.addEventListener('click', handlerClick);


//Cierro menú desplegable al seleccionar la palabra close del menú desplegable
function handlerClose(){

    elementDialog.close();
}

elementClose.addEventListener('click', handlerClose);//Cuando haga clic sobre la palabra close, llamo a la función y cierro el menú desplegable

