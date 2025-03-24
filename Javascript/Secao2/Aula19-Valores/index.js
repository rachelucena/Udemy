// Valores (imutaveis): string, number, boolean, undefined
// null (bigint, symbol)
// Referencia mutavel: array [], object {}, function (passados por referencia)

let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome); // nada acontece pq strings sao imutaveis

let a = 'A';
let b = a; // copia, ainda que eu mude o valor da primeira variavel, a segunda nao muda
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

let c = [1, 2, 3];
let d = [...c]; // o valor de c foi copiado, mas b e independente
let e = d;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d, e);
// Os valores primitivos sao copiados qd usamos o sinal de atribuicao (=)

const f = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
};

const g = {...f}; // o valor de g passa a ser independente
console.log(g, f);

f.nome('Joao');
console.log(g, f);
