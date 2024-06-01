// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let fibonacci = [0, 1];
            
  for (let i = 2; i < 10; i++) {
      let novoTermo = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(novoTermo);
  }

  console.log(`Numeros Fibonacci: ${fibonacci}`)
})();


