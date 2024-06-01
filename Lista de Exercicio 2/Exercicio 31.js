// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function contarECriarMatriz(A, V) {
        let countA = 0;
        let X = [];
    
        for (let i = 0; i < 30; i++) {
            let linha = [];
            for (let j = 0; j < 30; j++) {
                if (V[i][j] === A) {
                    countA++;
                } else {
                    linha.push(V[i][j]);
                }
            }
            if (linha.length > 0) {
                X.push(linha);
            }
        }
    
        return { countA, X };
    }
    
    function gerarMatrizAleatoria(tamanho, min, max) {
        let matriz = [];
        for (let i = 0; i < tamanho; i++) {
            let linha = [];
            for (let j = 0; j < tamanho; j++) {
                linha.push(Math.floor(Math.random() * (max - min + 1)) + min);
            }
            matriz.push(linha);
        }
        return matriz;
    }
    
    let V = gerarMatrizAleatoria(30, 0, 9);
    let A = Math.floor(Math.random() * 10);
    
    let resultado = contarECriarMatriz(A, V);
    
    console.log(`Valor A: ${A}`);
    console.log(`Quantidade de valores iguais a A na matriz: ${resultado.countA}`);
    console.log("Matriz X (sem os valores iguais a A):");
    console.log(resultado.X);    
})();


