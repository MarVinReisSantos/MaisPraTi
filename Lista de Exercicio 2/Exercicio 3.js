// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

let distancia = parseInt(prompt("Qual a distância até o destino? "));

if(distancia<=200){
  console.log(`O valor até o destino é R$: ${(0.5*distancia).toFixed(2)}`)
}else{
  console.log(`O valor até o destino é R$: ${(0.45*distancia).toFixed(2)}`)
}

