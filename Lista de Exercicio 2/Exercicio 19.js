// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
  let horarios=[];
  let hora;
  let minuto;
  let segundos;
  let horario;
  for(let i = 0; i < 5; i++){
    do{
      horario = prompt(`Digite o horario no formato HH.MM.SS: `);
      horario = horario.split(".")

      hora = parseInt(horario[0]);
      minuto = parseInt(horario[1]);
      segundos = parseInt(horario[2]);

      console.log(hora, minuto, segundos)
      if((hora>=24 || hora<0) || (minuto>=60 || minuto<0)|| (segundos>=60 || segundos<0))
        console.log("Data invalida, tente novamente!")

    }while((hora>=24 || hora<0) || (minuto>=60 || minuto<0)|| (segundos>=60 || segundos<0));
    horarios.push(`${hora}:${minuto}:${segundos}`);
  }

  console.log(horarios);
})();


