"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convert = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const conversionTable = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert(value, baseUnit, convertUnit) {
    const findBaseUnit = conversionTable.indexOf(baseUnit);
    const findConvertUnit = conversionTable.indexOf(convertUnit);
    return value * Math.pow(10, findConvertUnit - findBaseUnit);
}
exports.convert = convert;
function exec() {
    let baseChoice = '';
    let convertChoice = '';
    const value = readline_sync_1.default.questionFloat('Digite um valor a ser convertido: \n');
    const baseUnit = readline_sync_1.default.keyInSelect(conversionTable, 'escolha a unidade base desejada: \n');
    const convertUnit = readline_sync_1.default.keyInSelect(conversionTable, 'escolha a unidade que deseje converter:\n');
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
exports.exec = exec;
exec();
