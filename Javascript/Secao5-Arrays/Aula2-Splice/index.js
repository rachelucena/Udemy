//              -5      -4     -3     -2     -1
//              0       1      2      3      4
const nomes = ['Ana', 'Gil', 'Mel', 'Eva', 'Ivo'];

// nomes.splice(indice, qts deletados, elementos para add)

const removidos = nomes.splice(2, 2);
console.log(nomes, removidos);

const adicionados = nomes.splice(4, 0, 'Lia', 'Lua', 'Ig');
console.log(nomes, adicionados);