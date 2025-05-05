const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
    console.log(nome, sobrenome);
};

// Formas de exportar:

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    };
}

exports.Pessoa = Pessoa;