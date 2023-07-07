const http = require('http');
const infoCursos = require('./cursos')

console.log(infoCursos);

const miPage = http.createServer((req, res)=>{
    //console.log(req);
    console.log('Practis node course');
    //console.log(res);
    res.end('response');
});

const PORT = 3001;

miPage.listen(PORT, ()=>{
    console.log(`listening on port ${PORT} ...`);
});