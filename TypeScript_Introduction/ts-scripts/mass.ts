export function convert(value: number, baseUnit: string, convertUnit: string) {
  const conversionTable: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

  const findBaseUnit: number = conversionTable.findIndex(
    (value: string) => value === convertUnit
  );
  const findConvertUnit: number = conversionTable.findIndex(
    (value: string) => value === convertUnit
  );

  if (findBaseUnit > findConvertUnit) {
    const total: number = value * 10 ** (findConvertUnit - findBaseUnit);
    return console.log(
      `o valor é ${value}, e convertendo de "${baseUnit}" para "${convertUnit}" fica "${total} ${convertUnit}" `
    );
  }

  if (findBaseUnit < findConvertUnit) {
    const total: number = value * 10 ** (findConvertUnit + findBaseUnit);
    return console.log(
      `o valor é ${value}, e convertendo de "${baseUnit}" para "${convertUnit}" fica "${total} ${convertUnit}" `
    );
  }
  return;
}
