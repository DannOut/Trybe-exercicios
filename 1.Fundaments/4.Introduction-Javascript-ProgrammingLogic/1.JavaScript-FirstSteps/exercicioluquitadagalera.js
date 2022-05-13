/* Maior ou menor de idade: Escreva um algoritmo que verifica se a pessoa é maior ou menor de idade. Caso a pessoa for maior idade retorna: "A pessoa é maior de idade", Caso contrário: "A pessoa é menor de idade". 
Bônus: Crie a condição utilizando O Operador Ternário.  */

//If Else normal
function idadeId(xablau) {
  if (xablau >= 18) {
    console.log('A pessoa é maior de idade');
  } else if (xablau < 18 && xablau >= 0) {
    console.log('A pessoa é menor de idade');
  } else console.log('ERROR');
}
idadeId(10);

console.log('______________________');

//Utilizando o operador ternário .
// ? - inicia o operador ternário .
// : - condicional else no operador ternário.

//UTILIZANDO OPERADOR TERNÁRIO
function ternarioId(ternario) {
  return ternario >= 18 ? "A pessoa é maior de idade" : (ternario < 0) ? "ERROR" : "menor de idade" ; 
}
console.log(ternarioId(-12));

// condição ? valor se for verdadeiro : valor se for falso.
//só é aconselhado usar para coisas simples E OLHE LÁ.