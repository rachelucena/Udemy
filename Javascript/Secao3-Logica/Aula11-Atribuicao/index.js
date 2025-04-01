let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c] = [1, 2, 3]; // atribuicao por desestruturacao

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

// rest -> pegar o resto
// spread -> usa para distribuir

//                0          1          2
//             0  1  2    0  1  2    0  1  2
const num = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]; // indices: 0 - 1 - 2
const [,[,,seis]] = num;
console.log(seis);

const [lista1, lista2, lista3] = num;
console.log(lista3[2]);
