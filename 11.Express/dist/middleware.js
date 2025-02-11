import createDebug from 'debug';
export const logger = (name = 'logger') => {
    return (req, _res, next) => {
        const debug = createDebug(`demo:${name}`);
        debug(req.method, req.url);
        next();
    };
};
