let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

// Outra forma de resolucao, sem precisar criar variavel
// [varA, varB, varC] = [1, 2, 3];
// [varA, varB, varC] = [varB, varC, varA];
// console.log(varA, varB, varC);