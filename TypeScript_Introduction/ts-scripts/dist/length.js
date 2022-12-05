"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
function convert(value, baseUnit, convertUnit) {
    const conversionTable = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const findBaseUnit = conversionTable.findIndex((value) => value === baseUnit);
    const findConvertUnit = conversionTable.findIndex((value) => value === convertUnit);
    if (findBaseUnit > findConvertUnit) {
        const total = value * 10 ** (findConvertUnit - findBaseUnit);
        return console.log(`o valor é ${value}, e convertendo de "${baseUnit}" para "${convertUnit}" fica "${total} ${convertUnit}" `);
    }
    if (findBaseUnit < findConvertUnit) {
        const total = value * 10 ** (findConvertUnit + findBaseUnit);
        return console.log(`o valor é ${value}, e convertendo de "${baseUnit}" para "${convertUnit}" fica "${total} ${convertUnit}" `);
    }
    return;
}
exports.convert = convert;
