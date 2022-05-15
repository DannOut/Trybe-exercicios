let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let it; //numero de iterações
let pos; // sempre uso a posicao atual
let temp; //variavel para troca

for (it = 0; it < array.length; it += 1) {
  for (pos = 0; pos < array.length - it; pos += 1) {
    //comparar elemento da posição
    if (array[pos] > array[pos + 1]) {
      // o elemento atual é maior que seu proximo ?
      //então troca !
        temp =array[pos];
        array[pos]= array[pos+1];
        array[pos+1] = temp;
    }
  }
  console.log ("final da iteração: ",it);
  console.log (array);
}

//console.log[vetor];
