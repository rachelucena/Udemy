const mod1 = require('./mod1');

// Diferentes formas de importar:

const falaNome = require('./mod1').falaNome();
console.log(falaNome());

const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());

const p1 = new Pessoa('Luiz');
console.log(p1);