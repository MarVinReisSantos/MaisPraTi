// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function lerVetor(mensagem, tamanho) {
        let vetor = [];
        for (let i = 0; i < tamanho; i++) {
            let valor = parseInt(prompt(`${mensagem} [${i + 1}/${tamanho}]:`), 10);
            vetor.push(valor);
        }
        return vetor;
    }

    function verificarAcertos(gabarito, respostas) {
        let acertos = 0;
        for (let i = 0; i < gabarito.length; i++) {
            if (gabarito[i] === respostas[i]) {
                acertos++;
            }
        }
        return acertos;
    }

    let gabarito = lerVetor("Digite o gabarito do teste da loteria esportiva", 13);

    for (let i = 0; i < 100; i++) {
        let numeroCartao = prompt(`Digite o número do cartão do apostador ${i + 1}:`);
        let respostas = lerVetor(`Digite as respostas do apostador ${numeroCartao}`, 13);
        let acertos = verificarAcertos(gabarito, respostas);

        console.log(`Apostador ${numeroCartao}: ${acertos} acertos`);
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    } 
})();


