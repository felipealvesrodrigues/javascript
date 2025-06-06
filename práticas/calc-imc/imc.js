//acessa os elementos
/*let nome = document.getElementById('nome')
let altura = document.getElementById('alt')
let peso = document.getElementById('peso')  tirei daqui e coloquei dentro da função imc() pra evitar variáveis globais. 
let resultado = document.getElementById('result')*/
let calcular = document.getElementById('calcular')


function imc() {
    let nome = document.getElementById('nome').value; //isso faz ele pegar o valor automaticamente, eu n opreciso ficar colocando .value nas functions por ex//
    let altura = document.getElementById('alt').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('result')

    //Primeiro validar pra ver se os campos estão preenchidos(validar o valor(.value) e não só "nome", ex: if(nome == '') <- errado)
    if(nome !== '' && altura !== '' && peso !== '') {
        
        let valorIMC = (peso / (altura * altura)).toFixed(1); //Faz o cálculo IMC. toFixed(1) põe só 1 casa dps da vírgula.

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos.';
    }

    
}

calcular.addEventListener('click', imc);
