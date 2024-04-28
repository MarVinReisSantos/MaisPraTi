const prompt = require('prompt-sync')();

let qtdMarca = parseFloat(prompt("Digite a quantidade de maça comprada:"));

console.log("Preco das marcas: ")
if(qtdMarca >= 12){
  console.log(qtdMarca*0.25)
}else{
  console.log(qtdMarca*0.30)
}

