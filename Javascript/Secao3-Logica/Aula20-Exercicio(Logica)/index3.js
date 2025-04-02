// Escreva uma funcao que recebe um numero e retorne o seguinte
// Numero divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// Numero divisivel por 3 e 5 = FizzBuzz
// Numero nao e divisivel por 3 e 5 = retorna o proprio numero
// Checar se o numero e realmente um numero
// Use a funcao com numero de 0 a 100

function fizzBuzz(numero) {
    if (isNaN(numero)) {
        return 'Por favor, digite um numero valido.'
    }

    if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    } else {
        return numero;
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
