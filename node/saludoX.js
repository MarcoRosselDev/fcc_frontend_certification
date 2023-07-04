const saludo1 = require("./saludosY");
const saludo2 = require("./saludosY");
const saludo3 = require("./saludosY");
const saludo4 = require("./saludosY");

function saludar(name) {
    const a = saludo1.y1('lusho');
    return `${a} and saludo to ${name}`;
}

console.log(module.exports);

module.exports.x = saludar;

console.log(module.exports.x);