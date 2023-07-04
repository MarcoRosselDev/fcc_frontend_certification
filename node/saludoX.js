function saludar(name) {
    return `Buenos dias ${name}`;
}

console.log(module.exports);

module.exports.x = saludar;

console.log(module.exports.x);