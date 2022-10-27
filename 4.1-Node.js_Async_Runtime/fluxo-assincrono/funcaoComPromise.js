function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0)
      reject(new Error('Não pode dividir o número por zero'));

    const resultado = num1 / num2;
    resolve(resultado);
  });

  return promise;
}

// //* usando .then
// calcularDivisao(2, 0)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(`Erro: ${error.message}`));

//* usando Async/Await
// const doSomething = async () => {
//   try {
//     const resultado = await calcularDivisao(2,1);
//     console.log("%s", resultado);
//     console.log(resultado);
//   }
//   catch (e) {
//     console.log(e.message);
//   }
// }
// doSomething();


const doSomething = async () => {
  console.log(await calcularDivisao(2,2));
};
doSomething()
