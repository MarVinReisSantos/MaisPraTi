// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function criarMatriz() {
        const matriz = [];
        for (let i = 0; i < 6; i++) {
            matriz[i] = [];
            for (let j = 0; j < 6; j++) {
                matriz[i][j] = parseFloat(prompt(`Digite o valor para M(${i+1},${j+1}):`));
            }
        }
        return matriz;
    }

    function multiplicarMatrizPorA(matriz, valorA) {
        const vetor = [];
        let index = 0;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                vetor[index++] = matriz[i][j] * valorA;
            }
        }
        return vetor;
    }

    function escreverVetor(vetor) {
        console.log("Vetor V(36):");
        console.log(vetor.join(' '));
    }

    const matrizM = criarMatriz();

    const valorA = parseFloat(prompt("Digite o valor de A:"));

    const vetorV = multiplicarMatrizPorA(matrizM, valorA);

    escreverVetor(vetorV);
    
})();


