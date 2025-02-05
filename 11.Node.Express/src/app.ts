import express from 'express'

export const app = express()


app.get('/', (req, res) => { //Si lo que llega es el método get a la url/, se ejecuta la función
  res.send('Hola Mundo!')
})

