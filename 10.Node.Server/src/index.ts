import { createServer } from 'node:http';
import type { IncomingMessage, ServerResponse } from 'node:http';
import 'dotenv/config';
import createDebug from 'debug' //Nos traemos el default

const debug = createDebug.debug('app:server') //Me devuelve el objeto de depuración, el log

const PORT = process.env.PORT || 3000; //Si no me das un puerto de entorno, usaré el 3000

/*const createHtmlString = (title: string, content?: string) => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Node Server">
  <title>${title}</title>
  <link rel="shortcut icon" href="favicon.svg" type="image/svg">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }
    header {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <h1>${title}</h1>
  </header>
  <main>
    ${content}
    </main>
  
</body>
</html>
`
*/
const appRouter = ( request: IncomingMessage, response: ServerResponse) => {
    const {url, method} = request;    

    if(!url){ //Si no encuentro nada, te muestro un error 404
        response.statusCode = 404;
        response.end('Page not found');
        return;    
    }
 
    debug(method, url); //Me muestra el método y la url que se está llamando (app:server GET /about)
    response.statusCode = 200; // Valor por defecto
    response.setHeader('Content-Type', 'text/html; charset=utf-8'); //Qué cabecera (Content-type) y qué texto (texto en html con codificación utf-8)
    response.end('Página de inicio');
 };
 
 const server = createServer (appRouter);

 server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    debug(`Server running on http://localhost:${PORT}`);
 });