function criaPessoa(nome, sobrenome, altura, peso) { // funcao dentro de objeto = metodo
    return { // this se refere ao objeto inteiro
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala: function(assunto) {
            return `${nome} esta falando ${assunto}`
        },
        altura,
        peso,
        imc() { //geter: se colocar o get antes do imc ele sera considerado atributo, nao mais funcao
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Miranda', 1.80, 80);
console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 45);
console.log(p1.fala('sobre JS'));
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);

