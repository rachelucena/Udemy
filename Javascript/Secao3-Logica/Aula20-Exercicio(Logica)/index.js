// Escreva uma funcao que receba dois numeros e retorne o maior deles

function maior() {
    let num1 = parseInt(prompt('Digite um numero: '));
    let num2 = parseInt(prompt('Digite outro numero: '));

    let resultado = "";

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor, insira números válidos.';
        return null;
    } else if (num1 > num2) {
        resultado = `O maior numero e ${num1}`;
    } else if (num1 < num2) {
        resultado = `O maior numero e ${num2}`;
    } else {
        resultado = 'Os numeros sao iguais';
    }

    document.getElementById("resultado").innerText = resultado;
}

maior();