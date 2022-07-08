// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  try {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const teste = await fetch(API_URL, myObject)
  const teste2 = await teste.json()
  document.querySelector('#jokeContainer').textContent = teste2.joke
}
catch (error) {
  console.log(error);
}

};

window.onload = () => fetchJoke();


function teste (apt) {
  try {

  }
  catch {
    
  }
} 