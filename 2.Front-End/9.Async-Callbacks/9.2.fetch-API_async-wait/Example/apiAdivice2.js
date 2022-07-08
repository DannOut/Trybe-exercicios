const { get } = require('http');
const fetch = require('node-fetch');

// const getRandomAdvice = () => {
//   const url = 'https://api.dviceslip.com/advice'
//   const request = fetch(url)
//   .then((response) => response.json())
//   .then(({ slip: { advice, id }}) => console.log(id, advice))
//   .catch((error) => console.log('deu ruim na bleyblade', error.errno));
// }
// getRandomAdvice();

const getRandomAdvice = async () => {
  try {
  const url = 'https://api.adviceslip.com/advice';
  const request = await fetch(url);
  const json = await request.json();
  const { slip:{ advice, id } } = json;
  const workedMsg = `${advice}, Number:${id}`;
  return  console.log(workedMsg);

} catch (error) {
    return console.log('go watch naruto ! -', error.type);
}
}

getRandomAdvice()