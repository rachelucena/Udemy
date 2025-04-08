// return -> retorna um valor, termina a funcao

function soma(a, b) {
    return a + b;
}
console.log(soma(2, 5));

function soma2(a, b) {
    console.log(a, b); // a funcao nao retorna nenhum valor
}
soma2(3, 4);

function criaPessoa(nome, sobrenome) { // retorna um objeto
    return {nome: nome, sobrenome: sobrenome}; // chaves do objeto (como tem o mesmo nome do argumetno, o javascript assume que a chave e nome e recebera o valor nome)
}

const p1 = criaPessoa('Luiz', 'Otavio');

const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
};

// p1 e p2 significam a mesma cois, cma diferenca que p1 tem uma funcao que cria os objetos para ela

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto // retorno desse escopo
    }
    return falaResto; // retorno da funcao falafrase
}

const OlaMUndo = falaFrase('Ola');
console.log(OlaMUndo('mundo!'));

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));