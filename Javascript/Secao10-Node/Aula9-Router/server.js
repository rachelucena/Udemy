const express = require('espress');
const app = express(); // carregando o express
const routes = require('./routes');

// CRUD = CREATE, READ, UPDATE, DELETE
//        POST    GET    PUT    DELETE

app.use(express.urlercoded({ extend: true}));
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});