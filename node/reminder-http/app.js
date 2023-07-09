const http = require('http');

const server = http.createServer((req, res) =>{
    //console.log(req);

    let {method} = req;
    console.log(method);

    res.end();
});

PORT = 3001

server.listen(PORT, ()=>{
    console.log(`escuchando en el puerto ${PORT}`);
});