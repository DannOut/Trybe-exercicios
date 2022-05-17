//1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
/* 
n = 5

*****
*****
*****
*****
***** 

*/


function quadrado(n){

  for (let index = 0; index < n; index += 1){
    let print = '';
    
    for (let index2=0; index2 <n; index2 +=1){
      print = print + '*';
    }
    console.log(print);
  }


}
quadrado(5);