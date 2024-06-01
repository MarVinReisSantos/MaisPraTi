// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function contarOcorrencias(array) {
        let objeto = {};

        for (let i = 0; i < array.length; i++) {
            let chave = array[i];
            
            if (objeto[chave]) {
                objeto[chave]++;
            } else {
                objeto[chave] = 1;
            }
        }

        return objeto;
    }

    let arrayDeStrings = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

    let resultado = contarOcorrencias(arrayDeStrings);
    console.log(resultado);

})();


