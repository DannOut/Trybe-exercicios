
const randomNumberGenerator = () => Math.round(Math.random() * 100);

const stringToUpperCase = (string) => string.toUpperCase();

const stringToFirstLetter = (string) => string.charAt(0);

const concatStrings = (stringA, stringB) =>
  `${stringA.trim()}${stringB.trim()}`;

const fetchDog = async () => {
  const URL_FETCH = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(URL_FETCH);
  const value = await response.json();
  return value;
};

// function fetchDog() {
//   return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
//     response
//       .json()
//       .then(json =>
//         response.ok ? Promise.resolve(json) : Promise.reject(json)
//       )
//   );
// }

// const resolveDog = async () => {
//   const val = await fetchDog();
//   if (val.status === 'success') {
//     const myImgHmtl = document.getElementById('img');
//     myImgHmtl.src = val.message;
//   } else {
//     const bodyReturn = document.getElementById('body');
//     const error = document.createElement('p');
//     error.innerText = 'não foi possível recuperar a imagem, favor aguarde';
//     bodyReturn.appendChild(error);
//   }
// };

// resolveDog();

module.exports = {
  randomNumberGenerator,
  stringToUpperCase,
  stringToFirstLetter,
  concatStrings,
  fetchDog
};
