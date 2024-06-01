// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

let velocidadeCarro = parseInt(prompt("Qual a velocidade do carro? "));

if(velocidadeCarro>80){
  console.log(`O carro foi multado! O valor da multa é R$: ${((velocidadeCarro-80)*5).toFixed(2)}`)
}

