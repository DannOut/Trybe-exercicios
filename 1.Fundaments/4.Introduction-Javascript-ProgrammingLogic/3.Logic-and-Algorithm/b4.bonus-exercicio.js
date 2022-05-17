/*  
Depois, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

  *
 ***
***** 

*/

function generateNumberTriangle(n) {
    let midpoint = Math.floor(n / 2); // Middle of pyramid.
    let level = ''; // will be reset each level loop

    for(var i = 0; i < (n/2); i++) { // Looping through levels
        level = '';
        for(var j = 0; j < n; j++) {
            if(j < midpoint-i || j > midpoint+i) {
                level += ' ';
            } else {
                level += '*';
            }
        }
        console.log(level);
    }
}
generateNumberTriangle(5)