// Funcoes fabricas retorna-se um objeto, a funcao construtora ja retorna objetos de forma automatica
// Na funcao construtora, a funcao e iniciada com LETRA MAIUSCULA
// Essas funcoes sao moldes para gerar novos objetos

function Pessoa(nome, sobrenome) { // o corpo da funcao e o objeto que vai ser criado
    this.nome = nome; // Pessoa.nome = 
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo');
    };
}

// NAO PODE ESQUECER A PALAVRA NEW!!!
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Silva');

console.log(p1);
console.log(p1.nome);
p2.metodo();

// This -> atributos ou metodos publicos
// const dentro das construtoras -> atributos ou metodos privados (nao podem ser acessados fora do escopo da funcao)


