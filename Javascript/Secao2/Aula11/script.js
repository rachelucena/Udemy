// alert('Com a nossa mensagem'); // nao aparece no node

// window.confirm('msg') -> caixinha para confirmar ou nao uma acao do usuario ex: confirm('msg')
// window.prompt('msg') -> caixinha para pedir pro usuario digitar alguma coisa ex: prompt('msg')

const n1 = prompt('Digite um numero: ');
const n2 = prompt('Digite outro numero: ');
const resultado = Number(n1) + Number(n2);
alert(`A soma entre ${n1} e ${n2} e ${resultado}`);