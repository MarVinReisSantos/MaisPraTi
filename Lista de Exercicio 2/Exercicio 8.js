// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{


  let horasDeAtividade = parseInt(prompt("Quantas horas de atividade fisica: "));
  let pontos = 0;
  
  if(horasDeAtividade <= 10){
    pontos = horasDeAtividade * 2;
  }else if(horasDeAtividade <= 20){
    pontos = horasDeAtividade * 5;
  }else{
    pontos = horasDeAtividade * 10;
  }
  
  console.log(`A pessoas ganhou R$: ${(0.05 * pontos).toFixed(2)}`)
})();


