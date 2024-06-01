// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function lerMatriz3x3() {
        let matriz = [];
        for (let i = 0; i < 3; i++) {
            let linha = [];
            for (let j = 0; j < 3; j++) {
                let valor = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]:`));
                linha.push(valor);
            }
            matriz.push(linha);
        }
        return matriz;
    }

    function calcularMediaDiagonalSecundaria(matriz) {
        let soma = matriz[0][2] + matriz[1][1] + matriz[2][0];
        let media = soma / 3;
        return media;
    }

    function modificarMatriz(matriz, media) {
        let matrizModificada = JSON.parse(JSON.stringify(matriz)); 

        for (let i = 0; i < 3; i++) {
            matrizModificada[i][i] = matrizModificada[i][i] * media; 
        }

        return matrizModificada;
    }

    function imprimirMatriz(mensagem, matriz) {
        console.log(mensagem);
        matriz.forEach(linha => {
            console.log(linha.join(' '));
        });
    }

    let matriz = lerMatriz3x3();
    imprimirMatriz("Matriz Original:", matriz);

    let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);

    let matrizModificada = modificarMatriz(matriz, mediaDiagonalSecundaria);
    imprimirMatriz("Matriz Modificada:", matrizModificada);
    
})();


