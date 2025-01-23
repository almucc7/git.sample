// export function render(selector, position, template) {
//     const validPositions = [
//         'beforeend',
//         'beforebegin',
//         'afterend',
//         'afterbegin',
//     ];

//     if (!validPositions.includes(position)) {
//         return;
//     }
//     const target = document.querySelector(selector);
//     target.insertAdjacentHTML(position, template);

//     const getElementOptions = {
//         beforeend: target.lastElementChild,
//         beforebegin: target.previousElementSibling,
//         afterend: target.nextElementSibling,
//         afterbegin: target.firstElementChild,
//     };
    
//     return getElementOptions[position];
// }



const media = (...values) => {

    let acumulator = 0;
    values.forEach(item  => acumulator += item); //Sumo cada elemento del array y lo guardo en acumulator (rest)

   // const acumulator = values.reduce((a, b) => a + b); //Versión mas Pro

   return acumulator / values.length;

}

console.log(media(1, 2, 3, 4, 5, 6, 7, 8));



const obj = {
    
}