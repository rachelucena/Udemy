// array e uma lista, colecao de dados, que, no geral, tem o mesmo tipo de dado, embora o javascript nao restrinja
// Ex: const lista = ['Joao', 4, null, true]; -> string, numero, nulo, booleano
// arrays sao indexados por seus elementos, comecando pelo indice 0

const alunos = ['Luiz', 'Maria', 'Ana'];
console.log(alunos[0]);

alunos[0] = 'Eduardo'; // alteracao do array - substituicao de um valor por outro
console.log(alunos);

alunos[3] = 'Pedro'; // adicao de um novo indice
console.log(alunos);

console.log(alunos.length); // para saber o tamanho do array

alunos[alunos.length] = 'Mia'; // adiciona um novo valor sem precisar saber o tamanho do array
console.log(alunos);

alunos.push('Gil'); // funcao que adiciona no final
console.log(alunos);

alunos.unshift('Mel'); // funcao que adiciona no inicio
console.log(alunos);

const removido = alunos.pop(); // exclui o ultimo valor do array
console.log(removido);
console.log(alunos);

const removido2 = alunos.shift(); // exclui  primeiro valor do array
console.log(removido);
console.log(alunos);

delete alunos[1]; // vai deletar o valor que ocupa o indice determinado, deixando-o vazio
console.log(alunos);