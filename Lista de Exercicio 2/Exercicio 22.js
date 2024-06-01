// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  function coletarDados() {
    const dados = [];
    let continuar = true;

    while (continuar) {
        const salario = parseFloat(prompt('Digite o salário (ou digite "fim" para terminar):'));
        if (isNaN(salario)) {
            const fim = prompt('Você digitou "fim"? (sim/não)');
            if (fim.toLowerCase() === 'sim') {
                continuar = false;
                break;
            } else {
                alert('Entrada inválida. Por favor, tente novamente.');
                continue;
            }
        }

        const numFilhos = parseInt(prompt('Digite o número de filhos:'));
        if (isNaN(numFilhos)) {
            alert('Entrada inválida. Por favor, tente novamente.');
            continue;
        }

        dados.push({ salario, numFilhos });
    }

    return dados;
  }

  function calcularResultados(dados) {
      if (dados.length === 0) {
          alert('Nenhum dado foi coletado.');
          return null;
      }

      let totalSalario = 0;
      let totalFilhos = 0;
      let maiorSalario = 0;
      let countSalarioAte350 = 0;

      dados.forEach(dado => {
          totalSalario += dado.salario;
          totalFilhos += dado.numFilhos;
          if (dado.salario > maiorSalario) {
              maiorSalario = dado.salario;
          }
          if (dado.salario <= 350) {
              countSalarioAte350++;
          }
      });

      const mediaSalario = totalSalario / dados.length;
      const mediaFilhos = totalFilhos / dados.length;
      const percentualSalarioAte350 = (countSalarioAte350 / dados.length) * 100;

      return {
          mediaSalario,
          mediaFilhos,
          maiorSalario,
          percentualSalarioAte350
      };
  }

  function exibirResultados(resultados) {
      if (resultados === null) {
          return;
      }

      console.log(`
          Média de Salário: R$ ${resultados.mediaSalario.toFixed(2)}
          Média do Número de Filhos: ${resultados.mediaFilhos.toFixed(2)}
          Maior Salário: R$ ${resultados.maiorSalario.toFixed(2)}
          Percentual de Pessoas com Salário até R$ 350,00: ${resultados.percentualSalarioAte350.toFixed(2)}%
      `);
  }

  const dados = coletarDados();
  const resultados = calcularResultados(dados);
  exibirResultados(resultados);


})();


