const pessoa = {
    nome: 'Luiz', // dentro do corpo do objeto ficam as chaves (valores, como nome ou sobrenome)
    sobrenome: 'Silva'
};
// chamam as chaves do mesmo jeito:

console.log(pessoa['nome']);
console.log(pessoa.sobrenome);

// Tambem pode-se declarar um objeto assim:
const pessoa1 = new Object();
pessoa1.nome = 'Lua';
pessoa1.sobrenome = 'Miranda';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return (`${this.nome} esta falando seu nome`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa1.getDataNascimento());
// delete pessoa1.nome (para apagar chave)

for (let chave in pessoa1) {
    console.log(chave);
    console.log(pessoa1[chave]);
}

//
// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otavio');
console.log(nomeCompleto());


// Construction function
function Pessoas(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoas('Luiz', 'Miranda');
p2.nome = 'Mel'; // pode mudar o valor da chave
console.log(p2);
// {} -> this (o javascript associa o this ao objeto vazio)

