let n1 = 9.547890;

console.log(Math.floor(n1)); // arredonda pra baixo
console.log(Math.ceil(n1)); // arredonda pra cima
console.log(Math.round(n1)); // arredonda pro numero inteiro mais proximo
console.log(Math.max(1, 5, 40, 60, -500, -9000, 18000)); // pega o maior numero da sequencia passada
console.log(Math.min(-90, 500, 76, 87, -900, 1)); // pega o menor numero da sequencia passada
console.log(Math.random()); // gera um numero aleatorio entre 0 e 1

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // numero aleatorio entre 10 e 5
console.log(aleatorio);

console.log(Math.PI); // valor de pi
console.log(Math.pow(2, 10)); // potencializacao 2 elevado a 10 (2 ** 10)

let n2 = 9;
console.log(n2 ** (1/2)); // raiz quadrada  (n2 ** 0.5)

console.log(100 / 0); // em Javascript e possivel dividir um numero por 0, que da booleano true