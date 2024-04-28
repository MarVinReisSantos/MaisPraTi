const prompt = require('prompt-sync')();

let codigo = parseInt(prompt("Digite o código de origem:"));

if(codigo == 1){
  console.log("Sul")
}else if(codigo == 2){
  console.log("Norte")
}else if(codigo == 3){
  console.log("Leste")
}else if(codigo == 4){
  console.log("Oeste")
}else if(codigo == 5 || codigo == 6 ){
  console.log("Nodeste")
}else if(codigo >= 7 && codigo < 9){
  console.log("Sudeste")
}else if(codigo >= 10 && codigo <= 20 ){
  console.log("Centro-Oeste")
}else if(codigo >= 25 && codigo <= 50 ){
  console.log("Nodeste")
}else{
  console.log("Fora dos intervalos - Produto importado")
}

