// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function lerMatriz50x50() {
        let matriz = [];
        for (let i = 0; i < 50; i++) {
            let linha = [];
            for (let j = 0; j < 50; j++) {
                let valor = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]:`));
                linha.push(valor);
            }
            matriz.push(linha);
        }
        return matriz;
    }
    
    function multiplicarLinhasPelaDiagonalPrincipal(matriz) {
        for (let i = 0; i < 50; i++) {
            let fator = matriz[i][i]; 
            for (let j = 0; j < 50; j++) {
                matriz[i][j] *= fator; 
            }
        }
    }
    
    function imprimirMatriz(mensagem, matriz) {
        console.log(mensagem);
        matriz.forEach(linha => {
            console.log(linha.join(' '));
        });
    }
    
    let matriz = lerMatriz50x50();
    imprimirMatriz("Matriz Original:", matriz);
    
    multiplicarLinhasPelaDiagonalPrincipal(matriz);
    
    imprimirMatriz("Matriz Modificada:", matriz);
    
    
})();


