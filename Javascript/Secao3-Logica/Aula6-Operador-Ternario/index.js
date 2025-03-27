// (condicao) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);

/* if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP');
} else {
    console.log('Usuario normal');
} */

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);

