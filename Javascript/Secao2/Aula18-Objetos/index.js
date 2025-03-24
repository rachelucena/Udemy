const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
// array = 'Outra coisa' // nao posso fazer isso, da erro em atribuir outro vor a variavel, se fosse let nao teria problema
console.log(array);

const pessoa1 = {
    // atributos que caracterizam a pessoa1
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoas1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoas2 = criaPessoa('Lua', 'Oliveira', 50);
const pessoas3 = criaPessoa('Gil', 'Melo', 60);
const pessoas4 = criaPessoa('Bela', 'Lins', 32);
const pessoas5 = criaPessoa('Lia', 'Belo', 18);
console.log(pessoas1.nome, pessoas2.sobrenome);

const pessoa0 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual e ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();