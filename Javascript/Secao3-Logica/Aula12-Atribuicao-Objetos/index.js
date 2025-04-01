const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuicao via desestruturacao
const {nome = '', sobrenome} = pessoa;
console.log(nome, sobrenome);

