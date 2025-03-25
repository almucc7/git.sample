import { BasePage } from './base-page.js';
import createDebug from 'debug';
const debug = createDebug('demo:views:error-page');
debug('Loaded module');
export class ErrorPage extends BasePage {
    title;
    constructor(title = 'Error | Demo Products') {
        super(title);
        this.title = title;
    }
    render(info) {
        debug('Iniciando render');
        info = {
            mainTitle: 'Página de error',
            mainContent: info?.errorMessage || 'Error desconocido',
        };
        return super.render(info);
    }
}
