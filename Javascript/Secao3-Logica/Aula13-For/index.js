/*
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
*/

for (let i = 0; i <= 5; i++) { // variavel de controle (i - significa index), condicao, incremento/decremento
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(i, par);
}

const frutas = ['Maca', 'Pera', 'Uva', 'Banana', 'Morango', 'Mamao'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i]);
}

