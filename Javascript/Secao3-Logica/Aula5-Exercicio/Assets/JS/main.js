/*
prompt pro usuario colocar os dados no formulario
reter os valores digitados em variaveis
fazer o calculo
passar pelas checagens
colocar o resultado na tela
se algum campo ficar vazio, mandar msg de erro
*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // evita o carregamento da pagina

        const peso = parseFloat(inputPeso.value.replace(",", "."));
        let altura = parseFloat(inputAltura.value.replace(",", "."));

        console.log("Peso digitado:", inputPeso.value);
        console.log("Altura digitada:", inputAltura.value);
        console.log("Peso convertido:", peso);
        console.log("Altura convertida:", altura);

         // Se altura for maior que 10, assume que está em cm e converte para metros
        if (altura > 10) {
            altura = altura / 100;
            console.log("Altura convertida para metros:", altura);
        }
        
        //const peso = parseFloat(inputPeso.value);
        //const altura = parseFloat(inputAltura.value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            exibirResultado('Por favor, preencha os campos corretamente.', false);
            return;
        }

        const imc = calcularIMC(peso, altura);
        const classificacao = classificarIMC(imc);

        exibirResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`, true);
    });

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function classificarIMC(imc) {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 25) return 'Peso normal';
        if (imc < 30) return 'Sobrepeso';
        if (imc < 35) return 'Obesidade grau 1';
        if (imc < 40) return 'Obesidade grau 2';
        return 'Obesidade grau 3';
    }

    function exibirResultado(mensagem, sucesso) {
        let resultado = document.querySelector('.resultado');

        if (!resultado) {
            resultado = document.createElement('p');
            resultado.classList.add('resultado');
            form.appendChild(resultado);
        }

        resultado.textContent = mensagem;
        resultado.style.color = sucesso ? 'green' : 'red';
    }

});