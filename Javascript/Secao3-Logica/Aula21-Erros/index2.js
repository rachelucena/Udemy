/*
try {
    E executado quando nao ha erros
} catch(e) {
    E executado quando ha erros
} finally {
    Executa semmpre, dando erro ou nao
}
*/

try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch(e) {
    console.log('Tratando o erro');
} finally {
    console.log('Eu sempre sou executado');
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch(e) {
    // Tratar erro
    // console.log(e);
} finally {
    console.log('Tenha um bom dia');
}