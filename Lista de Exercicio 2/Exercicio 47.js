// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function transformarObjeto(objeto, funcao) {
        let novoObjeto = {};

        Object.keys(objeto).forEach(chave => {
            novoObjeto[chave] = funcao(objeto[chave]);
        });

        return novoObjeto;
    }

    function multiplicarPorDois(numero) {
        return numero * 2;
    }

    let objetoEntrada = {
        a: 1,
        b: 2,
        c: 3
    };

    let novoObjeto = transformarObjeto(objetoEntrada, multiplicarPorDois);
    console.log(novoObjeto);

})();


