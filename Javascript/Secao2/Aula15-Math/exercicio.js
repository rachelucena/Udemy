let num1 = prompt('Digite um numero: ');

document.body.innerHTML = `O seu numero e ${num1}`;
document.body.innerHTML = `O numero e inteiro: ${Number.isInteger(num1)}`;
document.body.innerHTML = `A raix quadrada e ${num1 ** (1/2)}`;
document.body.innerHTML = `E NaN: ${Number.isNaN(num1)}`;
document.body.innerHTML = `Arredondando para baixo: ${Math.floor(num1)}`;
document.body.innerHTML = `Arredondando para cima: ${Math.ceil(num1)}`;
document.body.innerHTML = `Com duas casas decimais: ${num1.toFixed(2)}`;

// const numero = Number(prompt('Digite um número:'));
// const numeroTitulo = document.getElementById('numero-titulo'); variavel pra guardar a informacao obtida pela ID
// const texto = document.getElementById('texto'); variavel pra guardar a informacao obtida pela ID

// numeroTitulo.innerHTML = numero; 

// texto.innerHTML = '';
// texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
// texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
// texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
// texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
// texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
// texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;