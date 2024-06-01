// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  function calcularPesoIdeal(alt, sexo) {
    let pesoIdeal;
    if (sexo === 'M') {
        pesoIdeal = 72.7 * alt - 58;
    } else if (sexo === 'F') {
        pesoIdeal = 62.1 * alt - 44.7;
    } else {
        throw new Error('Sexo inválido. Use "M" para masculino ou "F" para feminino.');
    }
    return pesoIdeal;
  }

  // Exemplos de uso:
  const alturaHomem = 1.75;
  const sexoHomem = 'M';
  const pesoIdealHomem = calcularPesoIdeal(alturaHomem, sexoHomem);
  console.log(`Peso ideal para homem de ${alturaHomem}m: ${pesoIdealHomem.toFixed(2)} kg`);

  const alturaMulher = 1.65;
  const sexoMulher = 'F';
  const pesoIdealMulher = calcularPesoIdeal(alturaMulher, sexoMulher);
  console.log(`Peso ideal para mulher de ${alturaMulher}m: ${pesoIdealMulher.toFixed(2)} kg`);

})();


