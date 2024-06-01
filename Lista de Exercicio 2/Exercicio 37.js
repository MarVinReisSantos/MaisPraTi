// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function lerVetor(mensagem, tamanho) {
        let vetor = [];
        for (let i = 0; i < tamanho; i++) {
            let valor = prompt(`${mensagem} [${i + 1}/${tamanho}]:`).toUpperCase();
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

    let gabarito = lerVetor("Digite o gabarito da prova", 20);

    for (let i = 0; i < 50; i++) {
        let numeroAluno = prompt(`Digite o número do aluno ${i + 1}:`);
        let respostas = lerVetor(`Digite as respostas do aluno ${numeroAluno}`, 20);
        let acertos = verificarAcertos(gabarito, respostas);

        console.log(`Aluno ${numeroAluno}: ${acertos} acertos`);
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
})();


