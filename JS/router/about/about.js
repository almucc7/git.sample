import { createHeader } from '../components/header.js';

export function loadAbout() { //Con esta función, la exportamos y se carga el about
    console.log('loaded about');
    const pageTitle = 'Acerca de';
    createHeader(pageTitle);
}