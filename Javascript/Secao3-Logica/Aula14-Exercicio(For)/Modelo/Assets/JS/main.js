const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i]; // Desestruturacao para pegar os valores
    const elemento = document.createElement(tag); // Cria a tag dinamicamente
    elemento.textContent = texto; // Adiciona o texto dentro da tag
    container.appendChild(elemento); // adiciona o elemento dentro do container
}

/*
elementos.forEach(({tag, texto}) => {
    const elemento = document.createElement(tag);
    elemento.textContent = texto;
    document.querySelector('.container').appendChild(elemento);
});
*/