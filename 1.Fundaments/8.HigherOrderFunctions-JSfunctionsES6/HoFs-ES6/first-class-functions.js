function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum(1, 4);

console.log(sumVariable);
//  [Function: sum]

/* ------------------------------------------ */

const sum2 = (number1, number2) => {
  return number1 + number2;
};
console.log(sum2(3, 4));

/* ------------------------------------------ */

const sayHello = () => {
  return ('hello trybers');
}

/* ------------------------------------------ */

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);

/* ------------------------------------------ */

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

/* ------------------------------------------ */


const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

/* ------------------------------------------ */

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator);