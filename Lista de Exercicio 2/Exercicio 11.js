// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let numero = parseInt(prompt("primeiro Termo: "));  
  let razao = parseInt(prompt("razao: "));
  let pa = [];
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let termo = numero + i * razao;
   
    pa.push(termo);
    soma += termo;
  }

  console.log(`A soma da pa: ${soma}`)
  console.log(`Lista da pa: ${pa}`)
})();


