const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

falaNome();

// A funcao conhece o local onde ela foi declarada, tudo o que foi declarado dentro dela e tudo o que esta na bolha (vizinhos)


function usaFalaNome() {
    falaNome();
}
usaFalaNome();