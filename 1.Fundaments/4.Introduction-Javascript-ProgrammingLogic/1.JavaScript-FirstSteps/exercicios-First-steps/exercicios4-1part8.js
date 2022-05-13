function meuSalario(salarioBruto) {
  let aliquota;
  let desconto;
  let salarioBase;
  // IfElse para descobrir a aliquota
  console.log('Seu salário bruto é de: R$', salarioBruto);
  if (salarioBruto <= 1556.94) {
    aliquota = salarioBruto * 0.08;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquota = salarioBruto * 0.09;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquota = salarioBruto * 0.11;
  } else if (salarioBruto > 5189.82) {
    aliquota = 570.88;
  } else console.log('ERROR');
  console.log('O valor da sua aliquota é: R$', aliquota);

  // Calculo para descobrir o sálario base
  salarioBase = salarioBruto - aliquota;
  console.log('O valor do seu salário base é: R$', salarioBase);

  // If else para descobrir o resto das infos
  if (salarioBase <= 1903.98) {
    // caso seja isento do imposto de renda
    console.log('Isento de imposto de renda');
    console.log('seu salário líquido é: R$', salarioBase);
    //caso pague aliquota de 7.5% com parcelas de R$142.80
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    desconto = salarioBase * 0.075;
    console.log('valor atribuido apoś aplicar 7.5%: R$', desconto);
    desconto = desconto - 142.8;
    console.log('Desconto: R$', desconto);
    console.log('seu salário líquido é de: R$', salarioBase - desconto);
    //caso pague aliquota de 15% com parcelas de R$354.80
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    desconto = salarioBase * 0.15;
    console.log('valor atribuido apoś aplicar 15%: R$', desconto);
    desconto = desconto - 354.8;
    console.log('Desconto: R$', desconto);
    console.log('seu salário líquido é de: R$', salarioBase - desconto);
    //caso pague aliquota de 22.5% e parcela de R$ 869.36
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    desconto = salarioBase * 0.225;
    console.log('valor atribuido apoś aplicar 22,5%: R$', desconto);
    desconto = desconto - 869.36;
    console.log('Desconto: R$', desconto);
    console.log('seu salário líquido é de: R$', salarioBase - desconto);
    //caso paque aliquota de 27.5% e parcela de R$869.36
  } else if (salarioBase >= 4664.69) {
    desconto = salarioBase * 0.275;
    console.log('valor atribuido apoś aplicar 27,5%: R$', desconto);
    desconto = desconto - 869.36;
    console.log('Desconto: R$', desconto);
    console.log('seu salário líquido é de: R$ ${salarioBase - desconto}');
  }
  console.log ('teste ${testando}')
}

meuSalario(3000.00);
