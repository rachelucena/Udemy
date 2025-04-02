const frutas = ['Pera', 'Maca', 'Uva'];

/*
for (let i = 0; i < frutas.lenght; i++) {
    console.log(frutas[i]);
}
*/

// For in le os indicies ou chaves do array/objeto

for (let i in frutas) {
    console.log(i); 
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

for (let i in pessoa) {
    console.log(i);
    console.log(pessoa['nome']);
}