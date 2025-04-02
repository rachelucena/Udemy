//            0123...
const nome = ['Luiz Otavio', 'Henrique', 'Pedro', 'Thiago', 'Matheus', 'Luciano']

/*
FOR CLASSICO
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

FOR IN
for (let i in nome) { // retorna o indice
    console.log(nome[i]);
}
*/

for (let valor of nome) { // retorna os valores 
    console.log(valor);
}

console.log('###################')

nome.forEach(function(valor, indice) {
    console.log(valor, indice);
});

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

/*
For classico: geralmente com iteraveis (strings e array)
For in: retorna o indice ou chave (string, array ou objetos)
For of: retorna o valor em si (iteraveis, array, strings)
*/