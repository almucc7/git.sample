import createDebug from 'debug';
const debug = createDebug('demo:controllers:home');
debug('Loaded module');
export class HomeController {
    view;
    constructor(view) {
        this.view = view;
        debug('Instanciando controller');
    }
    getPage = (_req, res) => {
        debug('Petición recibida en getPage');
        res.header('Content-Type', 'text/html');
        res.send(this.view.render());
    };
}
