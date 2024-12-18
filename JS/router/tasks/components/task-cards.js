import { render } from '../../components/base.js';
import { createCard } from './card.js';

//  id: string,
//  title: string,
//  owner: string,
//  isDone: boolean

export function createTaskCards(
    tasks,
    selector = 'body',
    position = 'afterbegin'
) {
    function deleteCard({ id }) {
        console.log(id);
        const index = tasks.findIndex((item) => item.id === id);
        tasks.splice(index, 1);
        // tasks.slice(
        //     tasks.findIndex((item) => item.id === id),
        //     1
        // );
        extendedRender();
    }

    function updateCard(updatedTask) {
        const id = updatedTask.id;
        const index = tasks.findIndex((item) => item.id === id);
        tasks[index] = {
            ...tasks[index],
            ...updatedTask,
        };
    }

    function addCard(task) {
        task.id = task.id || crypto.randomUUID.split('-')[0];
        tasks.push(task);
    }

    function extendedRender() {
        document.querySelector(selector).innerHTML = '';

        const element = render(selector, position, template);
        tasks.forEach((task) =>
            createCard(task, deleteCard, 'ul.cards', 'beforeend')
        );
        return element;
    }

    const template = /*html*/ `
    <ul class="cards">
    </ul>
    `;
    const element = extendedRender();
}