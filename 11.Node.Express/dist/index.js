//import { app } from "./dist/app";
import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
