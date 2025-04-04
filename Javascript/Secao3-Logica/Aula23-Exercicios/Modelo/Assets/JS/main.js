const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let intervalo = null;

function formatarTempo(segundosTotais) {
    const horas = String(Math.floor(segundosTotais / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((segundosTotais % 3600) / 60)).padStart(2, '0');
    const segundos = String(segundosTotais % 60).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

iniciar.addEventListener('click', () => {
    if (intervalo === null) {
      intervalo = setInterval(() => {
        segundos++;
        relogio.innerText = formatarTempo(segundos);
      }, 1000);
    }
});

pausar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event) {
    clearInterval(intervalo);       // para o cronômetro se estiver rodando
    intervalo = null;               // libera pra poder iniciar de novo
    segundos = 0;                   // zera o contador
    relogio.innerText = '00:00:00';
    relogio.classList.remove('pausado'); // tira a cor vermelha, se tiver
});