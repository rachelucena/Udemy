function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() { // intervalo de quando quero que a funcao seja executada
    console.log(mostrarHora());
}

const timer = setInterval(function() {
    console.log(mostrarHora());
}, 1000);

setTimeout(function() { // so e executada uma vez
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Ola mundo!');
}, 5000);

// setInterval(funcaoDoInterval, 1000);