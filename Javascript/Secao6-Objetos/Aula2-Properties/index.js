// defineProperty defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // o valor pode ou nao ser alterado
        configurable: false // pode apagar, reconfigurar toda a propriedade
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: true, // o valor pode ou nao ser alterado
            configurable: true // pode apagar, reconfigurar toda a propriedade
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor da chave
            writable: true, // o valor pode ou nao ser alterado
            configurable: true // pode apagar, reconfigurar toda a propriedade
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}
