const express = require('express');
const app = express(); // carregando o express

// CRUD = CREATE, READ, UPDATE, DELETE
//        POST    GET    PUT    DELETE

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="test" name="none">
        <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/parametro?', (req, res) => {
    console.log(req.params);
    res.send('req.params');
});

app.post('/contato', (req, res) => {
    res.send('Recebi o formulario');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});