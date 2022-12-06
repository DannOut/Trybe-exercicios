import readline from 'readline-sync';

const conversionTable: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(value: number, baseUnit: string, convertUnit: string) {
  const findBaseUnit: number = conversionTable.indexOf(baseUnit);
  const findConvertUnit: number = conversionTable.indexOf(convertUnit);
  return value * Math.pow(10, findConvertUnit - findBaseUnit);
}

export function exec() {
  let baseChoice: string = '';
  let convertChoice: string = '';

  const value = readline.questionFloat('Digite um valor a ser convertido: \n');
  const baseUnit = readline.keyInSelect(
    conversionTable,
    'escolha a unidade base desejada: \n'
  );
  const convertUnit = readline.keyInSelect(
    conversionTable,
    'escolha a unidade que deseje converter:\n'
  );

  convertChoice = conversionTable[baseUnit];
  baseChoice = conversionTable[convertUnit];

  if (!convertChoice || !baseChoice) {
    console.log(`Função cancelada`);
    return 0; // 0 é cancelar a escolha
  }

  const result = convert(value, convertChoice, baseChoice);
  const message = `${value}${convertChoice} é igual a ${result}${baseChoice}`;

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();

export default exec;
