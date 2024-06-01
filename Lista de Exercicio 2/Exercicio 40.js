// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function saoIguais(vetor1, vetor2) {
        for (let i = 0; i < vetor1.length; i++) {
            if (vetor1[i] !== vetor2[i]) {
                return false;
            }
        }
        return true;
    }

    function lerVetor(mensagem, tamanho) {
        let vetor = [];
        for (let i = 0; i < tamanho; i++) {
            let valor = parseInt(prompt(`${mensagem} [${i + 1}/${tamanho}]:`), 10);
            vetor.push(valor);
        }
        return vetor;
    }

    console.log("Digite o resultado oficial da Loto:");
    let resultadoOficial = lerVetor("Digite o número", 5);

    let ganhadores = 0;

    for (let i = 0; i < 50; i++) {
        console.log(`Aposta ${i + 1}:`);
        let aposta = lerVetor("Digite o número", 5);

        if (saoIguais(aposta, resultadoOficial)) {
            console.log("Ganhador");
            ganhadores++;
        }
    }

    if (ganhadores === 0) {
        console.log("Nenhum ganhador.");
    }
})();


