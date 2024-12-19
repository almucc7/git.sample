import { render } from '../../components/base.js';

export function createCard(
    task,
    deleteCard,
    selector = 'body',
    position = 'afterbegin'
) {
    const template = /*html*/ `
        <li>
            <div class="card">
            <hgroup title=${task.id}>
                <h3>${task.title}</h3>
                <label>
                <input type="checkbox" ${task.isDone ? 'checked' : ''}
                    name="isDone" title="completada">
                </label>
            </hgroup>
            <p>Responsable: <span>${task.owner}</span></p>
            <p>Descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum, ullam rem sint
                aliquam quo, in eius ipsum fugiat esse fugit necessitatibus? Non quo dolor fugit assumenda et rem deserunt.
            </p>
            <button>Borrar</button>
            </div>
        </li>
        `;

    function handleSubmit(event){

        event.preventDefault();
        //Recojo el name y el texto introducido de los inputs (owner: Pepito)
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const newTask = {
            ...data,    //Desestructurame data y así no tengo que poner todas sus propiedades, porque si vienen más, tengo que ponerlas todas?
            id: crypto.randomUUID().split('-')[0],            
            isDone: false
        };

        //Maneras de coger el valor de los inputs aparte de las 2 lineas de arriba:
           //event.target.elements[0].value;
          //namedItem('title').value; cojo el valor 
    }

    const element = render(selector, position, template);

    element.addEventListener('submit', handleSubmit) //Quiero submit para que valide el formulario

    
    return element;
}
