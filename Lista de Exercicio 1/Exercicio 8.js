const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Digite o primeiro numero:"));
let numero2 = parseInt(prompt("Digite o primeiro numero:"));


if(numero1 != numero2){
  if(numero1 < numero2){
    console.log(numero1 + ' - ' + numero2)
  }else{
    console.log(numero2 + ' - ' + numero1)
  }
}else{
  console.log("Erro: numeros são iguais!!!")
}

