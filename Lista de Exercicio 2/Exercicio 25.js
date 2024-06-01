// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function criarMatriz(linhas, colunas) {
        const matriz = [];
        for (let i = 0; i < linhas; i++) {
            matriz[i] = [];
            for (let j = 0; j < colunas; j++) {
                matriz[i][j] = (Math.random() * 100).toFixed(2);
            }
        }
        return matriz;
    }
    
    function somarColunas(matriz) {
        const colunas = matriz[0].length;
        const somaColunas = Array(colunas).fill(0);
    
        for (let j = 0; j < colunas; j++) {
            for (let i = 0; i < matriz.length; i++) {
                somaColunas[j] += parseFloat(matriz[i][j]);
            }
        }
    
        return somaColunas;
    }
    
    const linhas = 15;
    const colunas = 20;

    const matriz = criarMatriz(linhas, colunas);

    console.log("Matriz 15x20:");
    for (let i = 0; i < linhas; i++) {
        console.log(matriz[i].join(' '));
    }
    
    const somaColunas = somarColunas(matriz);
    
    console.log("\nSoma de cada coluna:");
    for (let j = 0; j < colunas; j++) {
        console.log(`Coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
    }
})();


