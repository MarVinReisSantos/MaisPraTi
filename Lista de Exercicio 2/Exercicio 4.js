// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

let setaA = parseInt(prompt("Digite o segmento de reta A: "));
let setaB = parseInt(prompt("Digite o segmento de reta B: "));
let setaC = parseInt(prompt("Digite o segmento de reta C: "));

function analiseReta(...retas){
  if(retas[0] < (retas[1] + retas[2])){
    if(retas[1] < (retas[0]+retas[2])){
      if(retas[2] < (retas[1]+retas[0])){
        return "É possível formar um triangulo com esses segmentos de reta!"
      }
    }
  }

  return "Não é possível formar um triangulo com esses segmentos de reta!"
}

console.log(analiseReta(setaA, setaB, setaC));
