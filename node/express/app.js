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

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;

    const resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultado.length === 0 ) {
        return res.status(404).res.send("No se encontraron resultados");
    }
    res.send(JSON.stringify(resultado))

})


const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
    console.log(`This server's listening on port ${PUERTO} ... `);
}) 