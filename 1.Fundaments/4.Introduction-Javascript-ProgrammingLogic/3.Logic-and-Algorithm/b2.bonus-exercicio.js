//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
/* 
n = 5

*
**
***
****
*****

*/

let ast = '';
function quadrado(n) {
  for (let index = 0; index < n; index += 1) {
    ast = ast + '*';
    console.log(ast);
  }
}

quadrado(5);
