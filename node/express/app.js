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


// cursos de programacion por nombre
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    
    const resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    
    if (resultado.length === 0 ) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }
    
    res.send(JSON.stringify(resultado))
    
})

// cursos de matematicas por nombre
app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const temas = req.params.tema;
    const resultados = infoCursos.matematicas.filter(tema => tema.tema === temas);

    if (resultados === 0) {
        return res.status(404).send(`No se encontraron cursos con el nombre ${temas}`);
    }

    res.send(JSON.stringify(resultados))

})


// tema and materia at the same time
app.get('/api/cursos/matematicas/:tema/:nivel', (req, res) => {
    const temas = req.params.tema;
    const nivel = req.params.nivel;

    const resultado = infoCursos.matematicas.filter(curso => curso.tema === temas && curso.nivel === nivel);

    if (resultado == 0) {
        return res.status(404).send(`no se encontraron cursos de ${temas} y de nivel ${nivel}`)
    }

    res.send(JSON.stringify(resultado));
})


const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
    console.log(`This server's listening on port ${PUERTO} ... `);
}) 