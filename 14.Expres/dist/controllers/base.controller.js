import createDebug from 'debug';
import { HttpError } from '../errors/http-error.js';
export const notFoundController = (req, _res, next) => {
    const debug = createDebug('demo:notFoundController');
    debug('Petición recibida');
    const message = `Page ${req.url} not found`;
    const error = new HttpError(message, 404, 'Not Found');
    next(error);
};
export const notMethodController = (req, _res, next) => {
    const debug = createDebug('demo:notMethodController');
    debug('Petición recibida');
    const message = `Method ${req.method}  not allowed`;
    const error = new HttpError(message, 405, 'Method Not Allowed');
    next(error);
};
