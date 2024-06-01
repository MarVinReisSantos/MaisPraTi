// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    function contarPropriedadesString(objeto) {
        let contador = 0;

        for (let chave in objeto) {
            if (typeof objeto[chave] === 'string') {
                contador++;
            }
        }

        return contador;
    }

    let exemploObjeto = {
        nome: "João",
        idade: 30,
        email: "joao@example.com"
    };

    let numeroPropriedadesString = contarPropriedadesString(exemploObjeto);
    console.log("Número de propriedades do tipo string:", numeroPropriedadesString);

})();


