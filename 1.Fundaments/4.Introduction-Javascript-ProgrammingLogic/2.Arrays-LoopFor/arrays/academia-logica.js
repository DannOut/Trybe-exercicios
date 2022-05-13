/*  
1. Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.

Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
--------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade"  
--------------------------------------------------
*/

let maria = 10;
let silvia = 20;
let iza = 30;

if (maria > silvia && maria > iza){
  console.log('Maria é a mais velha com :',maria,'anos.');
} else if (silvia > iza ){
  console.log('Silvia é a mais velha com :',silvia,'anos');
} else console.log('Iza é a mais velha com :',iza,'anos.');
console.log('______________________');




/*  
2. Taxa Metabólica Basal

Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)
em seu site, vamos ajudá-la escrevendo um algoritmo.

Ele recebe os seguintes dados:
- age: número maior que 0
- sex: M ou F
- weight: Em (kg) com número maior que 0
- height: Em (cm) com número maior que 0

A fórmula para homens:
- (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

A fórmula para mulheres:
- (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

Imprima no terminal o resultado do cálculo no formato:
-----------------------------------
"A taxa metabólica basal é: x Kcal"
-----------------------------------
*/

let age = 31;
let sex = 'M';
let weight = 90;
let height = 180;
let basal;

switch (sex) {
  case 'M':
    basal = height * 6.25 + weight * 9.99 - age * 4.92 + 5;
    console.log('A taxa metabólica basal é: x Kcal', basal);
    break;
  case 'F':
    basal = height * 6.25 + weight * 9.99 - age * 4.92 - 161;
    console.log('A taxa metabólica basal é: x Kcal', basal);
    break;
}

/*  
3. Lanchonete da Trybe

A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam
escolher qual lanche maravilhoso irão pedir.

Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo 
e imprima no terminal a mensagem de acordo com a opção escolhida.

Tabela:
"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"

Caso a pessoa escolha uma opção inexistente, imprima no terminal:
-----------------------------------
"Ainda não possuímos esta opção :("
-----------------------------------



_______________________________________________________________________________________________________________
*/
console.log('______________________');

let numeroLanche = '2';

switch (numeroLanche){
    case '1':
      console.log('você escolheu: Trybe Lanche Feliz');
      break;
    case '2':
      console.log('você escolheu: Mctrybe');
      break;
    case '3':
      console.log('você escolheu: TrybeWooper');
      break;
    case '4':
      console.log('você escolheu: x-Trybe');
      break;
    case '5':
      console.log('você escolheu: Triplo Trybe com JS');
      break;
    default:
      console.log('você escolheu: Ainda não possuímos esta opçãi :(');



}