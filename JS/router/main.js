import { loadAbout } from "./about/about.js";
import { loadPorfolio } from "./porfolio/porfolio.js";


function makeHeaderString(pageTitle){

    let pageTitle = 'Aprendiendo rutas';
    const headerTemplate = /*html*/ `
    <header>
        <h1>${pageTitle}</h1>
            <nav>
                <ul>
                <li>
                    <a href="./index.html">Inicio</a>
                </li>
                <li>
                    <a href="./porfolio.html">Porfolio</a>
                </li>
                <li>
                    <a href="./about.html">About</a>
                </li>
                </ul>
            </nav>
    </header>
`;

return headerTemplate;
}



console.log('Loaded main');

const path = location.pathname;
console.log(path);
console.log(path.split('/').at(-1).split('.').at(0));
console.log(path.split('/').at(-1)); //at es lo mismo que poner [-1], pero at admite números negativos. Significa que cogemos el último elemento del array






function loadIndex(){
    //Llamamos a las funciones que están en about.js y porfolio.js para cargar los html de las páginas sin necesidad de usar script para enlazarlas
    const page = '';

    document.body.insertAdjacentHTML("afterbegin", headerTemplate);

    switch(page){

        case 'porfolio.html':
            pageTitle = 'Porfolio';
            loadPorfolio();
            break;

        case 'about.html':
            pageTitle = 'About';
            loadAbout();
            break;
    }    
}

loadIndex();

