/*
0 - 11: bom dia
12 - 17: boa tarde
18 - 23: boa noite
*/

/* OBSERVACOES
O if pode ser usado sozinho
Sempre que utilizo else, precisa de um if antes
Pode haver varios else if na checagem
So posso ter um else na checagem
*/

const hora = 13;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <=23) {
    console.log('Boa noite!');
} else {
    console.log('Oi!');
}