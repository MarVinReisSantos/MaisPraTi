// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

let qtdCigarros = parseInt(prompt("Qual a quantidade de cigarros fumados por dias: "));
let anosFumando = parseInt(prompt("Quantos anos já fumou:"));
let anosPerdidos;

if(anosFumando>0){
  anosPerdidos = ((qtdCigarros * (anosFumando*365) * 10)/(60*24));
}else{
  anosPerdidos = (qtdCigarros * 10)/(60*24);
}

console.log(`O fumante perdeu cerca de ${anosPerdidos.toFixed(2)} dias de vida!`)

