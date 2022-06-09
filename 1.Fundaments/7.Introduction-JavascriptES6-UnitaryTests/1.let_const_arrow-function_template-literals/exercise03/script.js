const panicBtn = document.querySelector('#panicBtn');
const btnCounter = document.querySelector('#clickCount');
let counter = 0;

const localChecker = () => {
  !localStorage.getItem('counter') ? counter = 0 : btnCounter.innerHTML = localStorage.getItem('counter')
}

panicBtn.addEventListener('click', (event) => {
  event.target === panicBtn
  ? (btnCounter.innerHTML = counter += 1)
  : btnCounter;
  localStorage.setItem('counter', btnCounter.innerHTML);
});

