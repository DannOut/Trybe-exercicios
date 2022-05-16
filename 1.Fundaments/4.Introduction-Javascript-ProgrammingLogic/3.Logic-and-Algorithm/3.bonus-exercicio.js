//3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;

for (let index = n; index > 0; index -= 1){
  let save = ' ';
    for (let coluna = n; coluna > 0; coluna -=1){
      if (coluna > index){
        save = '*' + save ;
      }
    }
    console.log (save);
}