// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function lerValores() {
        let valores = [];
        for (let i = 0; i < 30; i++) {
            let valor = parseInt(prompt(`Digite o valor ${i + 1} de 30:`), 10);
            valores.push(valor);
        }
        return valores;
    }

    function processarValores(valores) {
        let pares = [];
        let impares = [];
        let paresResult = [];
        let imparesResult = [];

        for (let i = 0; i < valores.length; i++) {
            let valor = valores[i];
            if (valor % 2 === 0) {
                pares.push(valor);
                if (pares.length === 5) {
                    paresResult.push([...pares]);
                    console.log('Vetor de Pares cheio:', pares);
                    pares = [];
                }
            } else {
                impares.push(valor);
                if (impares.length === 5) {
                    imparesResult.push([...impares]);
                    console.log('Vetor de Ímpares cheio:', impares);
                    impares = [];
                }
            }
        }

        if (pares.length > 0) paresResult.push([...pares]);
        if (impares.length > 0) imparesResult.push([...impares]);

        return { paresResult, imparesResult };
    }

    function imprimirVetores(vetores, tipo) {
        console.log(`\nConteúdo dos vetores de ${tipo}:`);
        vetores.forEach((vetor, index) => {
            console.log(`Vetor ${index + 1}:`, vetor);
        });
    }

    let valores = lerValores();

    let { paresResult, imparesResult } = processarValores(valores);

    imprimirVetores(paresResult, 'Pares');
    imprimirVetores(imparesResult, 'Ímpares');
    
})();


