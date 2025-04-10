// Funcoes recursivas: ela mesma se chama de volta (similar a for ou while)

function recursiva(max) {
    console.log(max);
    if (max >= 10) return; // existe um limite (geralmente 1000)
    max++
    recursiva(max);
}

recursiva(0);
