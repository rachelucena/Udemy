const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) { // poderia colocar || numero === 5
        console.log('Pulei o numero 2');
        continue;
    }

    if (numero === 5) {
        continue;
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }

    console.log(numero);
}

// Continue: continua para a proxima iteracao
// Break: sai do laco