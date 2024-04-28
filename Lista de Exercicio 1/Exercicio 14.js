const prompt = require('prompt-sync')();

let vetorNumero = []; i = 0, numero = 0;

while(true){
  numero = parseFloat(prompt(`Digite o ${i+1} numero: `));
  if(numero == 0){
    break;
  }else{
    vetorNumero[i++] = numero;
  }
}

console.log(imprimirMedia(vetorNumero));

function imprimirMedia(vetorNumero){
  let soma = 0;
  let j = 0;
  while(vetorNumero[j] != undefined){
    soma+=vetorNumero[j++];
  }

  return soma/j;
}
