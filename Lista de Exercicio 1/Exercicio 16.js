let i = 0, numero = 100, j = 2;
let ehPrimor = true;

while(i < 50){
  ehPrimor = true;
  j = 2;
  
  while(j<numero){
    if(numero % j == 0 )
      ehPrimor = false;
    
    j++;
  }
  
  if(ehPrimor){
    console.log(numero);
    i++;
  }
  
  numero+=1;
}
