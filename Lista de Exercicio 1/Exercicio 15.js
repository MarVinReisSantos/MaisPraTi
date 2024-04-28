const prompt = require('prompt-sync')();

let vetorNumero = [], i = 0, numero = 0, peso = [];

while(true){
  numero = parseFloat(prompt(`Digite o ${i+1} numero: `));
  if(numero == 0){
    break;
  }else{
    peso[i] = parseFloat(prompt(`Digite o Peso do numero ${numero}: `));
    vetorNumero[i++] = numero;
  }
}

console.log(imprimirMedia(vetorNumero, peso));

function imprimirMedia(vetorNumero, peso){
  let somaNumeroPeso = 0, j = 0, somaPesos = 0;

  while(vetorNumero[j] != undefined){
    somaNumeroPeso+=(vetorNumero[j] * peso[j]);
    j++;
  }

  j=0;
  while(peso[j] != undefined){
    somaPesos+=peso[j++];
  }

  return somaNumeroPeso/somaPesos;
}
