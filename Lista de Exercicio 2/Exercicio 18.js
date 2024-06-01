// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let registro = {
    nome: null,
    cargo: null,
    salario: null
  }
    

  let nome = prompt("Digite o nome do funcionario: ");
  let cargo = prompt(`Digite o cargo de ${nome}: `);
  let salario = parseInt(prompt(`Digite o salario de ${nome}: `));
  
  registro.nome = nome;
  registro.cargo = cargo;
  registro.salario = salario;
  
  console.log(registro);
})();


