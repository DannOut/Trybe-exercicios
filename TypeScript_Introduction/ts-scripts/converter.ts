export function convert(value: number, baseUnit: string, convertUnit: string) {
  const conversionTableDistance: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const conversionTableWeight: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

  const findBaseUnit: number = [].findIndex(
    (value: string) => value === baseUnit
  );
  const findConvertUnit: number = [].findIndex(
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
