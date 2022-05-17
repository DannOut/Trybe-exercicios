//3- Agora inverta o lado do triângulo. Por exemplo:
/* 
  n = 5

    *
   **
  ***
 ****
*****

*/

function inverseTriangle(n) {
  let teste = '';
  for (let index = n; index > 0; index -= 1) {
    teste = '*' + teste;
    console.log(teste);
  }
}
inverseTriangle(5);
