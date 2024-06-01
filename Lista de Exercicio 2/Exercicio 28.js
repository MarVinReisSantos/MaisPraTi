// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function criarMatriz() {
        const matriz = [];
        for (let i = 0; i < 10; i++) {
            matriz[i] = [];
            for (let j = 0; j < 10; j++) {
                matriz[i][j] = parseFloat(prompt(`Digite o valor para M(${i+1},${j+1}):`));
            }
        }
        return matriz;
    }

    function somaAcimaDiagonalPrincipal(matriz) {
        let soma = 0;
        for (let i = 0; i < 10; i++) {
            for (let j = i + 1; j < 10; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }

    function somaAbaixoDiagonalPrincipal(matriz) {
        let soma = 0;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < i; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }

    const matriz = criarMatriz();

    const somaAcimaDiagonal = somaAcimaDiagonalPrincipal(matriz);
    const somaAbaixoDiagonal = somaAbaixoDiagonalPrincipal(matriz);

    console.log("Soma dos elementos acima da diagonal principal:", somaAcimaDiagonal);
    console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixoDiagonal);
    
})();


