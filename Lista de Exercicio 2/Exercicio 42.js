// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    let dados = {
        numero: 10,
        texto: "Olá",
        array1: [1, 2, 3],
        array2: ["a", "b", "c"],
        array3: ["x", "y", "z"]
    };

    function filtrarArrays(objeto) {
        let novoObjeto = {};
        for (let chave in objeto) {
            if (Array.isArray(objeto[chave])) {
                novoObjeto[chave] = objeto[chave];
            }
        }
        return novoObjeto;
    }

    let apenasArrays = filtrarArrays(dados);
    console.log("Novo objeto apenas com propriedades que são arrays:", apenasArrays);

})();


