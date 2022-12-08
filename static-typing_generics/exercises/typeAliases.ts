type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log('O valor da cordenada x é: ' + pt.x);
  console.log('O valor da coordenada y é: ' + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100

type Bird = {
  age: number;
  name: string;
  species: string;
  canFly: boolean;
};

// podem ser funções inteiras
type Sum = (x: number, y: number) => number;

const sum: Sum = (x, y) => x + y;

console.log(sum(2, 3));


type Address = {
  number: number;
  district: string;
  city: string;
  state: string;
};

