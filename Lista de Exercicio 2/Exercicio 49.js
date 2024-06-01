// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function agruparTransacoesPorCategoria(transacoes) {
        let resultado = {};

        transacoes.forEach(transacao => {
            let categoria = transacao.categoria;
            if (!resultado[categoria]) {
                resultado[categoria] = { transacoes: [transacao], subtotal: transacao.valor };
            } else {
                resultado[categoria].transacoes.push(transacao);
                resultado[categoria].subtotal += transacao.valor;
            }
        });

        return resultado;
    }

    let transacoes = [
        { id: 1, valor: 100, data: "2024-05-01", categoria: "Alimentação" },
        { id: 2, valor: 200, data: "2024-05-02", categoria: "Transporte" },
        { id: 3, valor: 150, data: "2024-05-03", categoria: "Alimentação" },
        { id: 4, valor: 120, data: "2024-05-04", categoria: "Lazer" },
        { id: 5, valor: 180, data: "2024-05-05", categoria: "Transporte" },
        { id: 6, valor: 130, data: "2024-05-06", categoria: "Lazer" }
    ];

    let resultado = agruparTransacoesPorCategoria(transacoes);
    console.log(resultado);

})();


