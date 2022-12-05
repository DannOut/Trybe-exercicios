import { parse } from 'path';

// Implementação da área de um quadrado A = S²;
export function getSquareArea(side: number): number {
  return side ** 2;
}

// Implementação da área de um retangulo A = b * h;
export function getRectangleArea(base: number, heigth: number): number {
  return base * heigth;
}

// Implementação da área de um triangulo A = b * h / 2;
export function getTriangleArea(base: number, heigth: number): number {
  return (base * heigth) / 2;
}

// Implementação do perímetro de um polígono P = a + b + c + d + e + f ...;
export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

// verifica se o triangulo é valido
export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
  const checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
  const checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
  return checkSideA && checkSideB && checkSideC;
}

export function getDiamondArea(
  higherDiagonal: number,
  lowerDiagonal: number
): number {
  return (higherDiagonal * lowerDiagonal) / 2;
}

export function getTrapezeArea(
  higherArea: number,
  lowerArea: number,
  height: number
): number {
  return ((higherArea + lowerArea) * height) / 2;
}

export function getCircleArea(radius: number): number {
  return parseFloat((Math.PI * radius ** 2).toFixed(2));
}
