const express = require('express');
const app = express();
const {infoCursos} = require('./cursos.js')

app.get('/', (req, res)=>{
    res.send('my first server with Express !')
});

app.get('/api/cursos', (req, res)=>{
    res.send(infoCursos)
});

app.get('/api/cursos/programacion', (req, res) =>{
    res.send(infoCursos.programacion)
})

app.get('/api/cursos/matematicas', (req, res) =>{
    res.send(infoCursos.matematicas)
})

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
    console.log(`This server's listening on port ${PUERTO} ... `);
}) 