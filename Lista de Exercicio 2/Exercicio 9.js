// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let opcao = 0;
  let masculino = [];
  let feminino = [];

  do{
    let sexo = prompt("Qual o sexo masculino ou feminino: ");
    let salario = parseInt(prompt("Salario: "));

    if(sexo.toUpperCase() == "MASCULINO"){
      masculino.unshift(salario);
    }else if(sexo.toUpperCase() == "FEMININO"){
      feminino.unshift(salario);
    }else{
      console.log("erro");
      return;
    }

    opcao = parseInt(prompt("Deseja encerrar o cadastro, digite 1 para sim ou 2 para não: "))

  }while(opcao != 1);

  let somaFeminino = feminino.reduce(soma);
  let somaMasculino = masculino.reduce(soma);
  
  function soma(total, num) {
    return total + num;
  }
  
  console.log(`A soma dos salarios das mulheres R$: ${somaFeminino.toFixed(2)}`)
  console.log(`A soma dos salarios dos homens R$: ${somaMasculino.toFixed(2)}`)
})();


