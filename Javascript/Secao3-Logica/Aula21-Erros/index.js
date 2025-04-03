// Try: tente isso
// Catch(e) ou Catch(err): dentro desse bloco, o que sera executado caso haja algum erro
// Nao e ideal que o erro seja exibido para o usuario, no maximo: ocorreu um erro desconhecido
// Throw() E possivel lancar os proprios erros

function soma(x, y) {
    if (typeof x !== 'number' || y !== 'number') {
        throw new Error('X e Y precisam ser numeros'); // ou new TypeError()
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    //console.log(error);
    console.log('Mensagem mais amigavel para o usuario')
}


