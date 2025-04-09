// IIFE - Imediately invoked function express

function qqCoisa() { // escopo global
    console.log(1234567890);
}
qqCoisa();

// funcao invocada assim que ela e criada

(function() {
    const nome = 'Luiz';
})(); // e chamada imediatamente sem tocar no escopo global

const nome = 'Pedro';
// nao tem conflito de variaveis, o codigo fica protegido

(function(idade, peso, altura) {
    const sobrenome = 'Miranda';

    function criaNome() {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);