import { render } from '../../components/base.js';

export function createAddTask(selector = 'body', position = 'afterbegin') {
    const template = /*html*/ `
     <form>
        <label>
          <span>Título</span>
          <input type="text" name="title" required>
        </label>
        <label>
          <span>Responsable</span>
          <input type="text" name="owner">
        </label>
        <button type="submit">Crear</button>
      </form>
    
    `;

    const element = render(selector, position, template);

    const button = element.querySelector('button');
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const titleInput = document.querySelector('input[name="title"]');
      const titleValue = titleInput.value;
      console.log(titleValue);
      const ownerInput = document.querySelector('input[name="owner"]');
      const ownerValue = ownerInput.value;
      console.log(ownerValue);

    
    });

    return element;
}
