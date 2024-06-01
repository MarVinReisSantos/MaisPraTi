// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function criarMatriz() {
        const matriz = [];
        for (let i = 0; i < 5; i++) {
            matriz[i] = [];
            for (let j = 0; j < 5; j++) {
                matriz[i][j] = parseFloat(prompt(`Digite o valor para M(${i+1},${j+1}):`));
            }
        }
        return matriz;
    }

    function somasLinhas(matriz) {
        const sl = [];
        for (let i = 0; i < 5; i++) {
            let soma = 0;
            for (let j = 0; j < 5; j++) {
                soma += matriz[i][j];
            }
            sl[i] = soma;
        }
        return sl;
    }

    function somasColunas(matriz) {
        const sc = [];
        for (let j = 0; j < 5; j++) {
            let soma = 0;
            for (let i = 0; i < 5; i++) {
                soma += matriz[i][j];
            }
            sc[j] = soma;
        }
        return sc;
    }

    const matrizM = criarMatriz();

    const vetorSL = somasLinhas(matrizM);
    const vetorSC = somasColunas(matrizM);

    console.log("Matriz M(5,5):");

    for (let i = 0; i < 5; i++) {
        console.log(matrizM[i].join(' '));
    }

    console.log("\nVetor SL(5) - Soma das Linhas:");
    console.log(vetorSL.join(' '));
    console.log("\nVetor SC(5) - Soma das Colunas:");
    console.log(vetorSC.join(' '));

})();


