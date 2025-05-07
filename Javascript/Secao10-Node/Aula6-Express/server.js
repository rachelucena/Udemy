const express = require('espress');
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

app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});