// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let idades = [];
  let nomes = [];
  let idade;
  let nome
  for (let i = 0; i < 9; i++) {
    nome = prompt("Digite o nome da pessoa: ");
    idade = parseInt(prompt(`Digite a idade de ${nome}: `));
    
    idades.push(idade);
    nomes.push(nomes);
  }

  idades.map((idade, index)=>{
    if(idade<18)
      console.log(`Nome: ${nomes[index]}; Idade: ${idade}`)
  })

  
})();


