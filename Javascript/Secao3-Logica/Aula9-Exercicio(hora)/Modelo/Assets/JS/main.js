const agora = new Date();

const opcoes = {day: 'numeric', month: 'long', year: 'numeric'};
const dataExtenso = agora.toLocaleDateString('pt-br', opcoes);


const diaDaSemana = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
const diaSemana = diaDaSemana[agora.getDay()];

const horario = agora.toLocaleTimeString();

const elementoDataHora = document.getElementById('data-hora');
elementoDataHora.innerHTML = `${diaSemana}, ${dataExtenso} ${horario}`;