const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const allLi = document.querySelectorAll('li');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

function ChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech'); // removendo todas as classes Tech de quem tem o function
  event.target.classList.add('tech'); // adicionando a class tech para todo o item que for clicado, assim um item só fica com a classe tag por vez.
  input.value = ''; // responsavel por limpar o texto
}

firstLi.addEventListener('click', ChangeTech);
secondLi.addEventListener('click', ChangeTech);
thirdLi.addEventListener('click', ChangeTech);
firstLi.addEventListener('dblclick', resetText);

input.addEventListener('input', function (event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

myWebpage.addEventListener('dblclick', function () {
  window.location.replace('https://blog.betrybe.com/');
  // se eu quisesse criar uma nova aba, usaria window.open ('https://blog.betrybe.com/', '_blank')
});

myWebpage.addEventListener('mouseover', function (event) {
  event.target.style.color = 'red';
});
myWebpage.addEventListener('mouseout', function (event) {
  event.target.style.color = 'unset'; // unset reseta o estilo da fonte qundo o mouse sair (mouseout)
});

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

// classname = remove as classes e atribui as novas que você está colocando
// classList = adiciona e remove classes sem afetar as outras.
