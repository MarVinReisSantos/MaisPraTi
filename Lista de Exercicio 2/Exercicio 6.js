// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let numeroEscolhido = Math.floor(Math.random() * 5)+1;
  let escolhaJogador = 0;

  do{
    escolhaJogador = prompt("Escolha um numero entre 1 e 5: ");
    if(escolhaJogador != numeroEscolhido){
      console.log("você errou, tente novamente!");
    }

  }while(escolhaJogador != numeroEscolhido);

  console.log("Parabéns, você escolheu o numero certo!")
})();

//programa();

