const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt("Digite a quantidade de eleitores:"));
let votosBranco = parseInt(prompt("Digite a quantidade de votos brancos:"));
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos:"));
let votosValidos = parseInt(prompt("Digite a quantidade de votos validos:"));


console.log("percentual de votos brancos: " + ((votosBranco*100)/eleitores));
console.log("percentual de votos nulos: " + ((votosNulos*100)/eleitores));
console.log("percentual de votos validos: " + ((votosValidos*100)/eleitores));