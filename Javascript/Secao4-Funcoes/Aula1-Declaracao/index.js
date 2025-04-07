// Declaracao de funcao (hoisting)
falaOi();
function falaOi() {
    // o motor do javascript eleva a funcao para o topo na hora da execucao
    // assim, pode chamar ela antes dela ser declarada
    console.log('Oi!');
}

// First class objects -> objetos de primeira classe
// A funcao pode ser tratada como dado

const nome = 'Luiz';

// expressao de funcao
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua funcao abaixo');
    funcao();
}
executaFuncao(souUmDado);

// Arrow functions
// E uma expressao de funcao so que muito mais curta

const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
funcaoArrow();

// DEntro de um objeto

const objeto = {
    falar() {
        console.log('Estou falando...')
    }
};
objeto.falar();
