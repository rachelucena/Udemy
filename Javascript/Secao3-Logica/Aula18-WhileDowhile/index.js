// Geralmente nao se sabe quantas vezes a repeticao vai acontecer

const nome = 'Luiz';
let controle = 0; // variavel criada fora do laco. e o i do for 

while (controle <= 10) {
    console.log(controle);
    controle++;
}

controle = 0;

while (controle < nome.length) {
    console.log(nome[controle]);
    controle++;
}

function random(max, min) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('#################################')

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);




