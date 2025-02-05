//import { app } from "./dist/app";
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => { //Si lo que llega es el método get a la url/, se ejecuta la función
  res.send('Hello World!')
})


