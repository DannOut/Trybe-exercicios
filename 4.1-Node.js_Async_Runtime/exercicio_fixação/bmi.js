const readlineSync = require('readline-sync');

function BMI_calculator() {
  const weight = readlineSync.questionFloat('Digite o seu peso: ');
  const height = readlineSync.questionFloat(
    'Digite sua altura em centímetros: '
  );

  const heightInCnt = height / 100;
  const bmi = weight / heightInCnt ** 2;
  console.log('BMI : %s', bmi);

  switch (true) {
    case (bmi < 18.5):
      console.log('Abaixo do peso (magreza)');
      break;
    case (bmi > 18.5 && bmi < 24.9):
      console.log('Peso normal');
      break;
    case (bmi > 25 && bmi < 29.9):
      console.log('Acima do peso (sobrepeso)');
      break;
    case (bmi > 30 && bmi < 34.9):
      console.log('Obesidade grau I');
      break;
    case (bmi > 35 && bmi < 39.9):
      console.log('Obesidade grau II');
      break;
    default: 
      console.log('Obesidade graus III e IV ');
  }
}

BMI_calculator();
