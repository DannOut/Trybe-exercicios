const API_URL = `https://api.coincap.io/v2/assets`;

const cryptoAPI = async () => {
  try {
  const teste = await fetch(API_URL)
  const { data } = await teste.json()

  data.filter((_, index) => index < 10).map(({ name, priceUsd }) => {
    const valueWorked = Number(priceUsd).toFixed(4)
    const getUl = document.querySelector('#ul');
    const createLi = document.createElement('li');
    createLi.innerHTML = `a moeda é ${name} : e o valor em USD é ${valueWorked}`;
    getUl.appendChild(createLi);
  })

  } catch (error) {
    
  }

}

window.onload = () => cryptoAPI();