const prompt = require('prompt-sync')();

let celsius = parseInt(prompt("Informe a temperatura em graus Celsius:"));
let fahrenheit = (1.8 * celsius) + 32;

console.log("Graus Fahrenheit: " + fahrenheit)