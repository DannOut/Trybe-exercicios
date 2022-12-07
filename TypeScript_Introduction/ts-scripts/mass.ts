import readLine from 'readline-sync';

const conversionTable: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
export function convert(value: number, baseUnit: string, convertUnit: string) {
  const findBaseUnit: number = conversionTable.indexOf(baseUnit);
  const findConvertUnit: number = conversionTable.indexOf(convertUnit);
  return value * Math.pow(10, findConvertUnit - findBaseUnit);
}

export function exec() {
  let baseChoice: string = '';
  let convertChoice: string = '';

  const value = readLine.questionFloat('Digite um valor a ser convertido: \n');
  const baseUnit = readLine.keyInSelect(
    conversionTable,
    'escolha a unidade base desejada: \n'
  );
  const convertUnit = readLine.keyInSelect(
    conversionTable,
    'escolha a unidade que deseje converter:\n'
  );

  baseChoice = conversionTable[baseUnit];
  convertChoice = conversionTable[convertUnit];

  if (!baseChoice || !convertChoice) {
    console.log(`Função cancelada`);
    return 0; // 0 é cancelar a escolha
  }

  const result = convert(value, baseChoice, convertChoice);
  const message = `${value}${baseChoice} é igual a ${result}${convertChoice}`;

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();

export default exec;
