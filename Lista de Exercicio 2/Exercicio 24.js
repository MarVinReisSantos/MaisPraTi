// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  function criarMatriz(linhas, colunas) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }
    return matriz;
  }

  function contarNegativosPorLinha(matriz) {
      const vetorC = [];
      for (let i = 0; i < matriz.length; i++) {
          let count = 0;
          for (let j = 0; j < matriz[i].length; j++) {
              if (matriz[i][j] < 0) {
                  count++;
              }
          }
          vetorC.push(count);
      }
      return vetorC;
  }

  const linhas = 6;
  const colunas = 8;

  const matrizM = criarMatriz(linhas, colunas);

  console.log("Matriz M:");
  for (let i = 0; i < linhas; i++) {
      console.log(matrizM[i].join(' '));
  }

  const vetorC = contarNegativosPorLinha(matrizM);

  console.log("\nVetor C com a quantidade de elementos negativos por linha:");
  console.log(vetorC.join(' '));


})();


