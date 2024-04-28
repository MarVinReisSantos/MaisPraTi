const prompt = require('prompt-sync')();

let numero;

do{
  console.log("Para encerrar o programa digite 0 ou um numero negativo \nDigite um numero par ou impar")
  numero = parseInt(prompt('Numero: '));
  
  if(numero == 0 || numero < 0){
    break
  }else if(numero % 2 == 0){
    console.log(`O ${numero} é par`)
  }else{
    console.log(`O ${numero} é impar`)
  }
  prompt()
  console.clear() 
}while(numero != 0 || numero > 0);


