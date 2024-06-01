// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let numeros = [];
            
  for (let i = 0; i < 10; i++) {
      let numero = prompt(`Digite o ${i+1} numero: `);
      numeros.push(numero);
  }

  numeros.map((numero, index)=>{
    if(numero % 2 == 0)
      console.log(`numero ${numero} está na posicao ${index}`);

  })
})();


