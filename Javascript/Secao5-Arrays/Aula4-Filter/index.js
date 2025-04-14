// Filter -> filtra o array, retornando a msm quantidade de elementos ou menos

// Retorne numeros maiores que 10
//               0   1  2   3  4  5 ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

const numFil = numeros.filter((valor, indice, array) => {
    console.log(valor, indice);
    return valor > 10;
});
console.log(numFil);

// Retorna o nome das pessoas que tem 5 letras ou mais
// Retorna o nome das pessoas com mais de 50 anos
// Retorna o nome das pessoas que termina com a letra a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaisVelhas);

const nomeComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeComA);