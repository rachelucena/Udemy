const data = new Date();
const diaSemana = data.getDay();

let diaSemanaTexto;

switch (diaSemana) {
case 0: 
    diaSemanaTexto == 'Domingo';
    break
case 1: 
    diaSemanaTexto == 'Segunda-feira';
    break
case 2: 
    diaSemanaTexto == 'Terca-feira';
    break
case 3: 
    diaSemanaTexto == 'Quarta-feira';
    break
case 4: 
    diaSemanaTexto == 'Quinta-feira';
    break
case 5: 
    diaSemanaTexto == 'Sexta-feira';
    break
case 6: 
    diaSemanaTexto == 'Sabado';
    break
default:
    diaSemanaTexto == '';
    break
};

/*
if (diaSemanaTexto === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terca-feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabado';
} else {
    diaSemanaTexto = '';
};
*/

console.log(diaSemana, diaSemanaTexto);