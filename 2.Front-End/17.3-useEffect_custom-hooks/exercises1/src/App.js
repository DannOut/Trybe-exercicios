import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  // setando o numero aleatório no estado
  const [number, setNumber] = useState(1);

  // estado responsável por verificar se é multiplo de 3 ou 5, caso seja muda para true
  const [isMultiple, setMultiple] = useState(false);

  // timer
  const [timer, setTimer] = useState(1);

  const ONE_SECOND = 1000;
  const MESSAGE_TIMEOUT = 4000;
  const TEN_SECONDS = 10000;
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;

  //função que vai ser chamada dentro do useEffect
  const increaseTimerInterval = () => setTimer((interval) => interval + 1);

  //função que verifica se é multiplo de 3 ou 5
  const verifyMultiple = (randomNumber) => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMultiple(true);

      setTimeout(() => setMultiple(false), MESSAGE_TIMEOUT);
    }
  };

  const handleRandomNumber = () => {
    // Vamos retornar um número aleatório de 1 a 100.

    const randomNumber = Math.round(
      /* O Math.random retorna um valor entre 0 e 1, com o 0 incluso,
    então o cálculo será multiplicar o valor aleatório por 100,
    e, com o uso do Math.floor, o resultado será um valor entre 0 e 99,
    após somar mais 1, o menor valor será 1 e o maior valor será 100 */
      Math.floor(Math.random() * MAX_RANDOM) + MIN_RANDOM
    );

    // Vamos verificar se o número aleatório é múltiplo de 3 ou 5.
    verifyMultiple(randomNumber);
    setNumber(randomNumber);
    setTimer(0);
  };

  useEffect(() => {
    const interval = setInterval(handleRandomNumber, TEN_SECONDS);
    const setTimerInterval = setInterval(increaseTimerInterval, ONE_SECOND);

    //component didMount
    return () => {
      clearInterval(interval);
      clearInterval(setTimerInterval);
    };
  });

  return (
    <div className='App'>
      <p>{`Número aleatório: ${number}`}</p>
      <p>{isMultiple && 'Acerto'}</p>
      <p>{`Tempo: ${timer}`}</p>
    </div>
  );
}

export default App;
