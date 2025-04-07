function funcao() { // a funcao pode ou nao ter parametros
  //  console.log(arguments) // arguments serve para pegar os valores dos argumentos

    let total = 0 
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // mesmo sem parametro, eu posso declarar argumentos na hora de chamar

// se um argumento e declarado, mas nao tem valor (Ex: declarei 6 argumentos, mas na hora de chamar a funcao, so dei 3), os argumentos declarados excedentes terao valores de undefined

function soma(a, b, c = 2) {
    b = b || 0;
    console.log(a + b);
}
soma(2);

function conta(operador, acumulador, ...numeros) { // o rest operator -> o resto dos valores vai estar num objeto devido aos ...
    for (let numero of numeros) { // o rest tem que ser o ultimo paramento
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
        acumulador += numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

