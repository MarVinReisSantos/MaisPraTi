// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let numeros = [];
  let random = 0;      
  for (let i = 0; i < 20; i++) {
      random = Math.floor(Math.random()*100);
      numeros.push(random);
  }

  console.log(`Vetor formado: ${numeros}`);
  numeros.sort((a, b)=>{ return (a - b) });
  console.log(`Vetor ordenado: ${numeros}`);

  
})();


