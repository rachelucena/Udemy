// habilidade da funcao de cessar seu escopo lexico

function retornaFuncao() {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Joao');
console.log(funcao());
console.log(funcao2());