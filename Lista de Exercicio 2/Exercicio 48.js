// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function combinarInventarios(inventarioLojaA, inventarioLojaB) {
        let inventarioCombinado = {};

        for (let item in inventarioLojaA) {
            inventarioCombinado[item] = inventarioLojaA[item];
        }

        for (let item in inventarioLojaB) {
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += inventarioLojaB[item];
            } else {
                inventarioCombinado[item] = inventarioLojaB[item];
            }
        }

        return inventarioCombinado;
    }

    let inventarioLojaA = { "produto1": 10, "produto2": 20, "produto3": 30 };
    let inventarioLojaB = { "produto2": 15, "produto3": 25, "produto4": 35 };

    let inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
    console.log(inventarioCombinado);

})();


