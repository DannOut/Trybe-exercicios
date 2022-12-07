"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readLine = require("readline-sync");
//0   //1   //2   //3   //4   //5   //6
const conversionTable = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(value, baseUnit, convertUnit) {
    const findBaseUnit = conversionTable.indexOf(baseUnit);
    const findConvertUnit = conversionTable.indexOf(convertUnit);
    return value * Math.pow(10, findConvertUnit - findBaseUnit);
}
function exec() {
    let baseChoice = '';
    let convertChoice = '';
    const value = readLine.questionFloat('Digite um valor a ser convertido: \n');
    const baseUnit = readLine.keyInSelect(conversionTable, 'escolha a unidade base desejada: \n');
    const convertUnit = readLine.keyInSelect(conversionTable, 'escolha a unidade que deseje converter:\n');
    baseChoice = conversionTable[baseUnit];
    convertChoice = conversionTable[convertUnit];
    if (!baseChoice || !convertChoice) {
        console.log('Função cancelada');
        return 0;
    }
    const result = convert(value, baseChoice, convertChoice);
    const message = `${value}${baseChoice} é igual a ${result}${convertChoice}`;
    console.log(message);
}
exports.exec = exec;
exec();
exports.default = exec;
