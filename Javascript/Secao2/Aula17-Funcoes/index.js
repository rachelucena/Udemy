function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

// Parametros vvem dentro dos parenteses e sao muito similares a variaveis

const variavel = saudacao('Lua');
console.log(variavel);

function soma(x = 1, y = 1) { // inserindo valores padrao, eles serao assumidos pela funcao se nao for colocado nenhum valor ao chamar a funcao (qd na se faz isso, da erro NaN)
    const resultado = x + y;
    return resultado; // a funcao vai ser encerrada qd aparecer o return, nao vai ler mais nada, nem executar mais nada
} // o corpo da funcao, nao tem a ver com o que esta com o lado de fora

console.log(soma(2, 2));
console.log(soma(6));
console.log(soma());

const raiz = function(n) {
    return n ** 0.5;
}; // precisa de ; sempre que atribui uma funcao a uma variavel

//arow function da funcao acima: const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const multiplicacao = (x, y) => { // arrow function
    return x * y;
};

console.log(multiplicacao(3, 2));
