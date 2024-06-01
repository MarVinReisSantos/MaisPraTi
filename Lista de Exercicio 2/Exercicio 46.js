// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function totalVendasPorVendedor(vendas) {
        let resumoVendas = {};

        for (let i = 0; i < vendas.length; i++) {
            let venda = vendas[i];
            let vendedor = venda.vendedor;
            let valorVenda = venda.valor;

            if (resumoVendas[vendedor]) {
                resumoVendas[vendedor] += valorVenda;
            } else {
                resumoVendas[vendedor] = valorVenda;
            }
        }

        return resumoVendas;
    }

    let vendas = [
        { vendedor: "João", valor: 100 },
        { vendedor: "Maria", valor: 150 },
        { vendedor: "João", valor: 200 },
        { vendedor: "Carlos", valor: 120 },
        { vendedor: "Maria", valor: 180 }
    ];

    let resumo = totalVendasPorVendedor(vendas);
    console.log(resumo);

})();


