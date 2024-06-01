// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function compactarVetor(A) {
        let B = [];
        for (let i = 0; i < A.length; i++) {
            if (A[i] > 0) {
                B.push(A[i]);
            }
        }
        return B;
    }

    function lerVetor() {
        let vetor = [];
        for (let i = 0; i < 100; i++) {
            let valor = parseInt(prompt(`Digite o valor para a posição ${i + 1} do vetor:`));
            vetor.push(valor);
        }
        return vetor;
    }

    let A = lerVetor();

    let B = compactarVetor(A);

    console.log("Vetor compactado (sem valores nulos e negativos):", B);
})();


