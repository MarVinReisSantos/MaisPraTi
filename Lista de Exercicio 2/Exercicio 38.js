// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function lerVetor() {
        let vetor = [];
        for (let i = 0; i < 6; i++) {
            let valor = parseInt(prompt(`Digite o valor para a posição ${i + 1} do vetor:`));
            vetor.push(valor);
        }
        return vetor;
    }

    function calcularSoma(vetor) {
        let soma = 0;
        for (let valor of vetor) {
            soma += valor;
        }
        return soma;
    }

    function calcularProduto(vetor) {
        let produto = 1;
        for (let valor of vetor) {
            produto *= valor;
        }
        return produto;
    }

    function calcularMedia(vetor) {
        let soma = calcularSoma(vetor);
        return soma / vetor.length;
    }

    function ordenarCrescente(vetor) {
        return vetor.sort((a, b) => a - b);
    }

    function mostrarVetor(vetor) {
        console.log("Vetor:", vetor.join(', '));
    }

    let vetor = lerVetor();

    let operacao = parseInt(prompt("Escolha a operação (1 - Soma, 2 - Produto, 3 - Média, 4 - Ordenar, 5 - Mostrar Vetor):"));

    switch (operacao) {
        case 1:
            console.log("Soma dos elementos:", calcularSoma(vetor));
            break;
        case 2:
            console.log("Produto dos elementos:", calcularProduto(vetor));
            break;
        case 3:
            console.log("Média dos elementos:", calcularMedia(vetor));
            break;
        case 4:
            console.log("Vetor em ordem crescente:", ordenarCrescente(vetor));
            break;
        case 5:
            mostrarVetor(vetor);
            break;
        default:
            console.log("Operação inválida!");
    }
})();


