/*  
Depois, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

  *
 ***
***** 

*/

function pyramid(n) {
  for (let index = 1; index <= n; index += 1) {
    let armazenamento = '';
    if (!(index % 2) == 0) {
      for (let index2 = 1; index2 <= n; index2 += 1) {
        armazenamento += '*';
        value = index2 ;
        if (!(index2 % 2) == 0) {
          console.log(value);
        }
      }
      console.log('');
    }
  }
}
pyramid(5);
