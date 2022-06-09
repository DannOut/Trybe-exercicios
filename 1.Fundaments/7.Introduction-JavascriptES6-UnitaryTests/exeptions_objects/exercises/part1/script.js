

// main function
function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    exceptionNoValues(value1, value2);
    exceptionStrings(value1, value2);
    console.log(typeof value1, typeof value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

// onLoad
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};

//first exception input without values
const exceptionNoValues = (param1, param2) => {
  if (param1 === '' || param2 === '') {
    throw new Error(`Digite um número em ambos os campos`);
  }
};

// second exception string received
const exceptionStrings = (param1, param2) => {
  if (isNaN(param1)|| isNaN(param2)) {
    throw new Error(`Isto não é um número !`);
  }
};
