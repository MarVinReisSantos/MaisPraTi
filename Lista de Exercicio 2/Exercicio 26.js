// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function criarMatriz(linhas, colunas) {
        const matriz = [];
        for (let i = 0; i < linhas; i++) {
            matriz[i] = [];
            for (let j = 0; j < colunas; j++) {
                matriz[i][j] = Math.floor(Math.random() * 11);
            }
        }
        return matriz;
    }
    
    function calcularProdutoHadamard(matrizA, matrizB) {
        const linhas = matrizA.length;
        const colunas = matrizA[0].length;
        const matrizP = [];
    
        for (let i = 0; i < linhas; i++) {
            matrizP[i] = [];
            for (let j = 0; j < colunas; j++) {
                matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
            }
        }
    
        return matrizP;
    }
    
    const linhas = 3;
    const colunas = 5;
    
    const matrizA = criarMatriz(linhas, colunas);
    const matrizB = criarMatriz(linhas, colunas);
    
    const matrizP = calcularProdutoHadamard(matrizA, matrizB);
    
    function imprimirMatriz(matriz, nome) {
        console.log(`Matriz ${nome}:`);
        for (let i = 0; i < matriz.length; i++) {
            console.log(matriz[i].join(' '));
        }
        console.log('');
    }
    
    imprimirMatriz(matrizA, 'A');
    imprimirMatriz(matrizB, 'B');
    imprimirMatriz(matrizP, 'P');
    
})();


