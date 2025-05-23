// Altera valores do array, recebendo um array do mesmo tamanho do original (com valores alterados)


// Dobre os numeros
//               0   1  2   3  4  5 ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);


//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({ idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = (indice + 1) * 1000;
    return newObj;
});
console.log(comIds);


