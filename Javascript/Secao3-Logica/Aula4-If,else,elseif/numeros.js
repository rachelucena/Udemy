const n = 10;

/*if (n >= 0) {
    console.log('Sim, o numero e maior ou igual a zero.');
}
*/

if (n >= 0 && n <= 5) {
    console.log('O numero esta entre 0 e 5.');
} else if (n >= 6 && n <= 8) {
    console.log('O numero esta entre 6 e 8.');
} else if (n >= 9 && n <= 11) {
    console.log('O numero esta entre 9 e 11.');
} else {
    console.log('O numero nao esta entre 0 e 11.');
}