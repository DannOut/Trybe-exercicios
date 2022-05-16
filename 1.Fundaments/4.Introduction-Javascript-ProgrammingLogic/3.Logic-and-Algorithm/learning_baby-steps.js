//crie um algoritmo que retorne o fatorial de 10.

let fatorial = 4;
let valor;
let total= 0;
for (fatorial; fatorial > 0; fatorial -= 1){
  console.log ('repetição: ',fatorial);
    if ((fatorial-1) != 0){
  valor = fatorial * (fatorial - 1);
  console.log (`soma de ${fatorial} * ${(fatorial - 1)} é: `,valor);
    total = valor * fatorial;
    console.log('o total é: ', total);
    }

  }
