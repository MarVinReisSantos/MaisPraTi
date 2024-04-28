const prompt = require('prompt-sync')();

let numero = [];

for(let i = 0; i<5; i++){
  numero[i] = parseInt(prompt(`Digite o ${i+1} numero: `));
}

for(let i = 0; i<5; i++){
  console.log()
  imprimirTabuada(numero[i])
}

function imprimirTabuada(numero){
  for(let i = 0; i<10; i++){
    console.log(`${i} x ${numero} = ${i*numero}`)
  }
}
