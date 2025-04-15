// Getters and setters -> protege a propriedade

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // pode apagar, reconfigurar toda a propriedade
        get: function() {
            return estoque();
        },
        set: function(valor) {
            if (typeof valor != 'number') {
                throw new TypeError('Mensagem');
            }
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

const p1 = new Produto('Camiseta', 20, 3);
// checa o valor p1.estoque = 'dfhfaiaioad'; 
console.log(p1);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2);
