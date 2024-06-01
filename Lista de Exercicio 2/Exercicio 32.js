// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function dividirPorMaiorModulo(matriz) {
        let matrizModificada = [];
    
        for (let i = 0; i < 12; i++) {
            let linha = matriz[i];
            let maiorModulo = Math.max(...linha.map(Math.abs));
            let linhaModificada = linha.map(elemento => elemento / maiorModulo);
            matrizModificada.push(linhaModificada);
        }
    
        return matrizModificada;
    }
    
    function imprimirMatriz(mensagem, matriz) {
        console.log(mensagem);
        matriz.forEach(linha => {
            console.log(linha.join(' '));
        });
    }
    
    function gerarMatrizAleatoria(linhas, colunas, min, max) {
        let matriz = [];
        for (let i = 0; i < linhas; i++) {
            let linha = [];
            for (let j = 0; j < colunas; j++) {
                linha.push(Math.floor(Math.random() * (max - min + 1)) + min);
            }
            matriz.push(linha);
        }
        return matriz;
    }
    
    let M = gerarMatrizAleatoria(12, 13, -10, 10);
    
    imprimirMatriz("Matriz Original:", M);
    
    let M_modificada = dividirPorMaiorModulo(M);
    
    imprimirMatriz("Matriz Modificada:", M_modificada);
      
})();


