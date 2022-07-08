const { get } = require('http');
const fetch = require('node-fetch');

const getRandomAdvice = () => {
  const url = 'https://api.adviceslip.com/advice'
  const request = fetch(url)
  .then((response) => response.json())
  .then(({ slip: { advice, id }}) => console.log(id, advice))
  .catch((error) => console.log('deu ruim na bleyblade', error.errno));
}
getRandomAdvice();