import createDebug from 'debug';
const debug = createDebug('demo:user-controller');
export class UserController {
    readAll = (req, res) => {
        debug('GET /users');
        res.send('GET /users');
    };
    read = (req, res) => {
        debug('GET /users/' + req.params.id);
        res.send('GET /users/' + req.params.id);
    };
    create = (req, res) => {
        debug('POST /users');
        res.status(201);
        res.send('POST /users');
    };
    update = (req, res) => {
        debug('PATCH /users/' + req.params.id);
        res.send('PATCH /users/' + req.params.id);
    };
    delete = (req, res) => {
        debug('DELETE /users/:id', req.params.id);
        res.send('DELETE /users/:id' + req.params.id);
    };
}
// export class UserController {
//     readAll() {}
//     read() {}
//     create() {}
//     update() {}
//     delete() {}
// }
