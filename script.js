/*Crie um programa em JavaScript que peça ao usuário para inserir dois números e uma operação matemática
(+, -, *, /, %, **). O programa deve processar a operação escolhida e exibir o resultado. 
A manipulação para a entrada dos dados e a apresentação do resultado deve ocorre na página HTML.*/

const buttons = document.querySelectorAll('.num');
const display = document.querySelector('.value');

let memoria = 0;

buttons.forEach(button => {

    button.addEventListener('click', () => {

        const valor = button.getAttribute('data-buttom');

        /* RESETAR TUDO (C)*/
        if (valor === 'C') {
            display.value = "0"; // reseta para zero
        }

        /*APAGAR ÚLTIMO DIGITO (CE)*/
        else if (valor === 'CE') {
            if (display.value.length > 1) {
                display.value = display.value.slice(0, -1);
            } else {
                display.value = "0"; // se sobrar apenas um dígito, volta para zero
            }
        }

        /* IGUAL (=)*/
        else if (valor === '=') {

            try {

                let expressao = display.value;

                /* PORCENTAGEM */
                expressao = expressao.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

                display.value = eval(expressao);

            } catch {
                display.value = "Erro";
            }
        }
        
        else {

            // Se display estiver zerado, substitui pelo novo valor
            if (display.value === "0") {
                display.value = valor;
            } else {
                display.value += valor; // adiciona à direita do visor
            }

        }

    });

});
