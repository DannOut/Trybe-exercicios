/*  
Depois, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

  *
 ***
***** 

*/

var n = 5;
generateNumberTriangle(n);

function generateNumberTriangle(n) {
    let width = (2 * n) -1; // Always the case.
    let midpoint = Math.floor(width / 2); // Middle of pyramid.
    let level = ''; // will be reset each level loop

    for(var i = 0; i < n; i++) { // Looping through levels
        level = '';
        for(var j = 0; j < width; j++) {
            if(j < midpoint-i || j > midpoint+i) {
                level += '.';
            } else {
                level += '#';
            }
        }
        console.log(level);
    }
}