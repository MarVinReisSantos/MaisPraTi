// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    let pessoa = {
        nome: "João",
        idade: 30
    };


    console.log("Idade:", pessoa.idade);

    pessoa.email = "joao@example.com";


    console.log("Pessoa:", pessoa);

})();


