//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;


for (let index = 0; index < n; index += 1){
  let ast = ''
  for (let index2 = 0;index2 < n; index2 +=1){
      if(index > index2){
       ast = ast + '*'
      }
  }
  console.log (ast);
}