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

    function somaLinha(matriz, linha) {
        let soma = 0;
        for (let j = 0; j < 5; j++) {
            soma += matriz[linha][j];
        }
        return soma;
    }

    function somaColuna(matriz, coluna) {
        let soma = 0;
        for (let i = 0; i < 5; i++) {
            soma += matriz[i][coluna];
        }
        return soma;
    }

    function somaDiagonalPrincipal(matriz) {
        let soma = 0;
        for (let i = 0; i < 5; i++) {
            soma += matriz[i][i];
        }
        return soma;
    }

    function somaTotal(matriz) {
        let soma = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }

    const matrizM = criarMatriz();

    const somaLinha4 = somaLinha(matrizM, 3); 
    const somaColuna2 = somaColuna(matrizM, 1); 
    const somaDiagonal = somaDiagonalPrincipal(matrizM);
    const somaTotalMatriz = somaTotal(matrizM);

    console.log("Matriz M(5,5):");

    for (let i = 0; i < 5; i++) {
        console.log(matrizM[i].join(' '));
    }

    console.log("\nSomas:");
    console.log("a) Soma da linha 4:", somaLinha4);
    console.log("b) Soma da coluna 2:", somaColuna2);
    console.log("c) Soma da diagonal principal:", somaDiagonal);
    console.log("d) Soma de todos os elementos da matriz:", somaTotalMatriz);

})();


