"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getTrapezeArea = exports.getDiamondArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
// Implementação da área de um quadrado A = S²;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
// Implementação da área de um retangulo A = b * h;
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
// Implementação da área de um triangulo A = b * h / 2;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
// Implementação do perímetro de um polígono P = a + b + c + d + e + f ...;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
// verifica se o triangulo é valido
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
    const checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
    const checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function getDiamondArea(higherDiagonal, lowerDiagonal) {
    return (higherDiagonal * lowerDiagonal) / 2;
}
exports.getDiamondArea = getDiamondArea;
function getTrapezeArea(higherArea, lowerArea, height) {
    return ((higherArea + lowerArea) * height) / 2;
}
exports.getTrapezeArea = getTrapezeArea;
function getCircleArea(radius) {
    return parseFloat((Math.PI * radius ** 2).toFixed(2));
}
exports.getCircleArea = getCircleArea;
