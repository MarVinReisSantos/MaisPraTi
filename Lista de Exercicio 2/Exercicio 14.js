// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let nomes = [];
            
  for (let i = 0; i < 7; i++) {
      let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
      nomes.push(nome);
  }

  console.log(`Lista de nomes invertidos: ${nomes.reverse()}`)
})();


