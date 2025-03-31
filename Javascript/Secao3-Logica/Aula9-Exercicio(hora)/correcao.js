const p = document.querySelector('#data-hora');
const data = new Date();
p.innerHTML = data.toLocaleDateString('pt-br', {dataStyle: 'full', timeStyle: 'short'});