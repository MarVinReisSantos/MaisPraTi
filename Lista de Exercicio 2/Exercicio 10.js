// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let opcao = 0;
  let listaNumeros = [];

  do{
    let numero = parseInt(prompt("numero: "));  

    listaNumeros.push(numero);

    opcao = parseInt(prompt("Parar cadastro, digite 1: "))

  }while(opcao != 1);

  let somatorio = listaNumeros.reduce((total, num)=>{ return total + num; });
  let menorValor = listaNumeros.reduce((menorValor, elemento) =>{return menorValor < elemento ? menorValor : elemento})
  let media = somatorio/listaNumeros.length;

  let quantidadePares = 0;

  listaNumeros.map((numero, index)=>{
    if(numero % 2 == 0)
      quantidadePares++;
  })

  console.log(`A soma dos numeros: ${somatorio}`)
  console.log(`O menor Valor: ${menorValor}`)
  console.log(`A media: ${media}`)
  console.log(`A quantidade de pares: ${quantidadePares}`)
})();


