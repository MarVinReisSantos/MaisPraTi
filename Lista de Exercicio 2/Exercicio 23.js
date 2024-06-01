// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  function criarMatrizIdentidade() {
    const tamanho = 7;
    const matriz = [];

    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = (i === j) ? 1 : 0;
        }
    }

    for (let i = 0; i < tamanho; i++) {
        console.log(matriz[i].join(' '));
    }
  }
  criarMatrizIdentidade();

})();


