// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  const funcionarios = [];

  const INSS_RATE = 0.12;

  function calcularINSS(salarioBruto) {
    return salarioBruto * INSS_RATE;
  }

  function calcularSalarioLiquido(salarioBruto, deducaoINSS) {
    return salarioBruto - deducaoINSS;
  }

  function emitirContracheques(funcionarios) {
    funcionarios.forEach(funcionario => {
        const deducaoINSS = calcularINSS(funcionario.salarioBruto);
        const salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, deducaoINSS);

        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
        console.log('----------------------------------');
    });
  }

  function cadastrarFuncionarioVetor(matricula, nome, salarioBruto) {
    const novoFuncionario = { matricula, nome, salarioBruto };
    funcionarios.push(novoFuncionario);
  }

  function cadastrarFuncionarioVetor(){
    let nome;
    let matricula;
    let salarioBruto;

    for(let i = 0; i<80; i++){
      nome = prompt("Digite o nome:")
      matricula = parseInt(prompt("Digite o nome:"))
      salarioBruto = parseInt(prompt("Digite o nome:"))
      cadastrarFuncionarioVetor(matricula, nome, salarioBruto);
    }
  }
  cadastrarFuncionarioVetor();
  emitirContracheques(funcionarios);

})();


