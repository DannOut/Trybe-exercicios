//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
totalNumbers = 50;
primeNumbers = [];

for (let index = 2; index < totalNumbers; index += 1) {
  //console.log ('base: ',index)
  let contador = 0 // precisa ser dentro do array para resetar a 0 a cada nova rotação
  for (let sum = 2; sum < index; sum += 1) {
    //console.log ('rotação :', sum)
    if (index % sum == 0) {
      contador += 1;
     //console.log('o numero: ', primeNumbers, 'é primo');
    }
  }
  if (contador === 0) {
    primeNumbers.push (index);
  }
}

console.log(primeNumbers);
