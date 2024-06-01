// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function combinarObjetos(obj1, obj2) {
        let novoObjeto = {};

        for (let chave in obj1) {
            novoObjeto[chave] = obj1[chave];
        }

        for (let chave in obj2) {
            novoObjeto[chave] = obj2[chave];
        }

        return novoObjeto;
    }

    let obj1 = { a: 1, b: 2 };
    let obj2 = { b: 3, c: 4 };

    let novoObjeto = combinarObjetos(obj1, obj2);
    console.log("Novo objeto combinado:", novoObjeto);

})();


