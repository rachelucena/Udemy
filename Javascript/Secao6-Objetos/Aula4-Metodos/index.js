/*
Object.values -> retorna valores
Object.entries -> retorna chave e valor em array
Object.getOwnPropertyDescriptor(o, 'prop') -> retorna o descritor da propriedade dentro do objeto
Object.assign(des, any) -> copia um objeto
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.8, produto: 'porcelana'};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}

const outraCoisa = {
    ...produto,
    material: 'porcelana'
};
const caneca = Object.assign({}, produto, {material: 'porcelana'});

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);
console.log(caneca);