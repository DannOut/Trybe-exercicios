let array = [5, 3, 2, 4, 7, 1, 0, 6];

for (let index = 0; index < array.length; index += 1) {
  for (let position = 0; position < array.length - index; position += 1) {
    if (array[position] < array[position + 1]) {
      aux = array[position];
      array[position] = array[position + 1];
      array[position + 1] = aux;
    }
  }
  console.log('final da iteração: ', index);
  console.log(array);
}
