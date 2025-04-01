const verdadeira = true;

var nome = 'Luiz';
let nome2 = 'Luiz';

if (verdadeira) {
    let nome2 = 'Otavio';
    console.log(nome, nome2);

    if (verdadeira) {
        console.log('Ok');
    }
};

function falaOi() {
    var nomes = 'Luiz';
    // O console.log so pode ficar aqui
};

// se colocar aqui, da erro, pois a variavel constara como nao definida
falaOi();

console.log(saudacao);
var saudacao = 'Oi!'; //se declarar com let, vai dar erro no programa, pois a variavel foi criada depois de chama-la.

// A variavel let tem escopo de bloco {... bloco}
// A variavel var tem escopo de funcao 