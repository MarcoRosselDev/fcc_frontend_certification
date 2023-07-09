const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('my first server with Express !')
});

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
    console.log(`This server's listening on port ${PUERTO} ... `);
})