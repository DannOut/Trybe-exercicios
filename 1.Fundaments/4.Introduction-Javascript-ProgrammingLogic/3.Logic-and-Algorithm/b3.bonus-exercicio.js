//3- Agora inverta o lado do triângulo. Por exemplo:
/* 
  n = 5

    *
   **
  ***
 ****
*****

*/

function meioTriangulo(n) {
  for (let index = 0; index <= n; index += 1) {
    let linha = '';
    for (let index2 = 0; index2 <= n ; index2 += 1) {
      if (index2 > n - index) {
        linha += '*';
      } else linha += ' ';
    }
    console.log(linha);
  }
}
meioTriangulo(5);
