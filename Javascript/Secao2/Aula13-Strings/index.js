let umaString = "Um \"texto\""; // a barra invertida serve para poder usar duas barras duplas na msm string (caracter de escape)
console.log(umaString);

// Strings sao indexadas, iteraveis -> 01234567... O indice ZERO e o primeiro elemento de uma string

console.log(umaString[4]); // vai mostrar o elemento que esta na posicao 4

console.log(umaString.charAt(6)); // vai mostrar o elemento que esta na posicao 6

console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'dia')); // faz exatamente o mesmo que o sinal de +

console.log(umaString.indexOf('texto')); // mostra em que indice esta a string buscada

console.log(umaString.lastIndexOf('m', 3)); // comeca do final da string

console.log(umaString.match(/[a-z]/g)); // expressao regular

console.log(umaString.search(/x/));

console.log(umaString.replace('Um', 'Outro')); // serve para substituir

console.log(umaString.length); // saber o tamanho da string

console.log(umaString.slice(2, 5)); // fatia a string -  start e fim

console.log(umaString.split('t')); // dividir uma string

console.log(umaString.toUpperCase()); // a string fica toda em maiuscula

console.log(umaString.toLocaleLowerCase()); // a string fica toda em minuscula
