// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{


  let tipoCarro = prompt("qual foi o tipo de carro alugado popular ou luxo: ");
  let diasAlugado = parseInt(prompt("quantos dias de aluguel: "));
  let percuso = parseInt(prompt("quantos Km foram percorridos: "));
  let valor = 0;

  if(tipoCarro.toUpperCase() == "POPULAR"){
    if(percuso <= 100){
      valor = diasAlugado * percuso * 0.2;
    }else{
      valor = diasAlugado * percuso * 0.1;
    }
  }else if(tipoCarro.toUpperCase() == "LUXO"){
    console.log("entro 1")
    if(percuso <= 200){
      valor = diasAlugado * percuso * 0.3;
      console.log("entrou 2")
    }else{
      valor = diasAlugado * percuso * 0.25;
    }
  }else{
    console.log("Erro");
    return;
  }
  
  console.log(`O aluguel do carro é R$: ${valor}`)
})();


