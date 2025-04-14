// Retorne o dobro da soma de todos os pares
// Filtrar -> dobrar -> reduzir

//               0   1  2   3  4  5 ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(numPares);