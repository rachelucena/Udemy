exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="test" name="none">
        <button>Enviar</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Nova rota POST');
};