// Os filhos herdam dos pais, mas os pais nao herdam dos filhos, assim como classes irmas podem herdar coisas diferentes, sem que um interfira no outro

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;

    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} ja ligado`)
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (this.ligado) {
            console.log(`${this.nome} ja desligado`)
            return;
        }

        this.ligado = false;
    }
}

/* const d1 = new DispositivoEletronico('Smartphone');
console.log(d1);
d1.ligar();
d1.desligar();
*/

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // pega os parametros da super classe
        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Iphone', 'preto', '16');
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Voce alterou o metodo ligar');
    }
}

const t1 = new Tablet('IPad', true);
console.log(t1.ligado);
t1.ligar();
