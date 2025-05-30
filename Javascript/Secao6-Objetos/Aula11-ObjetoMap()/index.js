const pessoas = [
    {id: 3, nome: 'Luis' },
    {id: 2, nome: 'Maria' },
    {id: 1, nome: 'Helena' }
];

/* const novasPessoas = {};

for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);
*/

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const pessoas of novasPessoas.keys()) {
    console.log(pessoas);
}

console.log(novasPessoas);