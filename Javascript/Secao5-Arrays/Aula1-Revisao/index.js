const nomes = ['Luiz', 'Ana', 'Mel'];
const nome = new Array('Lua', 'Pedro', 'Carol'); // um array tambem pode ser declarado assim
nomes[2] = 'Joao';
console.log(nomes);
delete nomes[2];
console.log(nomes);

// pop() remove um elemento do fnal do array
// shift() remove um elemento do inicio
// push() adiciona um elemento no final do array
// unshift() adiciona um elemento no inicio do array
// slice() fatia o array (o ultimo indice declarado nao e adicionado)
// split() transforma uma string em array, dividindo o array pelos espacos
//join() transforma um array numa string,
