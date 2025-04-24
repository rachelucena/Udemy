// classe e um modo diferente de fazer uma funcao construtora

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} esta falando.`);
    }

    comer() {
        console.log(`${this.nome} esta comendo.`);
    }

    beber() {
            console.log(`${this.nome} esta bebendo.`);
        }
}

const p1 = new Pessoa('Luiz', 'Miranda'); // nao esquecer da palavra new
console.log(p1);
console.log(p1.falar());

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} esta falando.`);
}