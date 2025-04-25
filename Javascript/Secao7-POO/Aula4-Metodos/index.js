// Metodos que podem ser utilizados na classe sem instanciar.
// Parecem funcoes que estao dentro da classe
// So esta ligado a classe

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Metodo de instancia -> aceso aos dados da instancia

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo estatico

    static trocaPilha() {
        console.log('Vou trocar');
    }

    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(1, 1));