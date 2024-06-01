// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

let escolhaJogador = prompt("Digite para escolher entre Pedra, Papel ou Tesoura: ");

function analiseJogo(escolhaJogador){
  let listaEscolha = ["PEDRA","PAPEL","TESOURA"];
  let escolhaJogoFlg = Math.floor(Math.random() * 3);

  console.log(`O programa escolheu: ${listaEscolha[escolhaJogoFlg]}`);

  if((listaEscolha[escolhaJogoFlg] == "PEDRA") && (escolhaJogador == "PAPEL")){
    return "O jogador ganhou.";
  }else if((listaEscolha[escolhaJogoFlg] == "PEDRA") && (escolhaJogador == "TESOURA")){
    return "O programa ganhou.";
  }else if((listaEscolha[escolhaJogoFlg] == "PEDRA") && (escolhaJogador == "PEDRA")){
    return "Empate";
  }
  
  else if((listaEscolha[escolhaJogoFlg] == "PAPEL") && (escolhaJogador == "PEDRA")){
    return "O programa ganhou.";
  }else if((listaEscolha[escolhaJogoFlg] == "PAPEL") && (escolhaJogador == "PAPEL")){
    return "Empate";
  }else if((listaEscolha[escolhaJogoFlg] == "PAPEL") && (escolhaJogador == "TESOURA")){
    return "O jogador ganhou.";
  }

  else if((listaEscolha[escolhaJogoFlg] == "TESOURA") && (escolhaJogador == "PEDRA")){
    return "O jogador ganhou.";
  }else if((listaEscolha[escolhaJogoFlg] == "TESOURA") && (escolhaJogador == "PAPEL")){
    return "O programa ganhou.";
  }else if((listaEscolha[escolhaJogoFlg] == "TESOURA") && (escolhaJogador == "TESOURA")){
    return "Empate";
  }

  return "Erro!";
}

console.log(analiseJogo(escolhaJogador.toUpperCase()));
