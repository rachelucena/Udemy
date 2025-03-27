const data0 = new Date(); // Data [0] = 01/01/1970 Timestamp unix 
// Formato mais comum para Date: a, m, d, h, M, s, ms
console.log(data0.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
  }
  
  function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
  
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
  }
  
  const data = new Date();
  const dataBrasil = formataData(data);
  console.log(dataBrasil);