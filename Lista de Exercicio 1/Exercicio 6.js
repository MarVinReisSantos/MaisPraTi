const prompt = require('prompt-sync')();

let ladoA = parseInt(prompt("Digite o lado a:"));
let ladoB = parseInt(prompt("Digite o lado b:"));
let ladoC = parseInt(prompt("Digite o lado c:"));

if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
  if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
    console.log("Triângulo isósceles: ")
  }else if((ladoA != ladoB) && (ladoB != ladoC)){
    console.log("Triângulo escaleno: ")
  }else if((ladoA == ladoB) && (ladoB == ladoC)){
    console.log("Triângulo equilátero: ")
  }
}else{
  console.log("Os lados fornecidos não formam um triangulo")
}
