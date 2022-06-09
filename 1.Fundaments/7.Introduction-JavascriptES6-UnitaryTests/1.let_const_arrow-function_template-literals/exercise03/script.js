// Global
const panicBtn = document.querySelector('#panicBtn');
let counterText = document.querySelector('#clickCount');

// local storage
const setItem = (keyname, value) => localStorage.setItem(keyname, value);

const getItem = (keyname) => localStorage.getItem(keyname);

// onClick

panicBtn.addEventListener('click', () => {
  let clickCount = !getItem('counter') ? 0 : Number(getItem('counter'));

  counterText.innerHTML = clickCount += 1;
  setItem('counter', clickCount);
});

// page refresh
Window.onload = () =>counterText.innerHTML = getItem('counter');