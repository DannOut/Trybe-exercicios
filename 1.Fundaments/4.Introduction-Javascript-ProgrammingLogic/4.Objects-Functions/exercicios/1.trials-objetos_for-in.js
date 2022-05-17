//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
        /*  {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim'
        } */

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

  
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//1
console.log('Bem-vinda, ',info.personagem);
//2
info.recorrente = 'Sim'
console.log (info);
//3
for (key in info){
  console.log (key);
}
//4
for (key2 in info){
  console.log (info[key2]);
}



//5  imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
let newInfo = {
  personagem:'Tio Patinhas',
  origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente:'Sim'
}

console.log(info.personagem+ ' e '+newInfo.personagem);
console.log(info.origem+' e '+newInfo.origem);
console.log(info.nota+ ' e '+newInfo.nota);

if (info.recorrente == 'Sim' && newInfo.recorrente == 'Sim'){
  console.log ('Ambos recorrentes');
} else console.log('Um deles não é recorrente');

console.log('________________');
//🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

for (let key3 in leitor['livrosFavoritos']){
  console.log(leitor['livrosFavoritos'][key3]);
}
console.log('O livro favorito de '+leitor.nome+' '+leitor.sobrenome+' se chama '+leitor['livrosFavoritos'][0]['titulo']);

//🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

leitor['livrosFavoritos'].push ({ // lembra que o push precisa ser entre () parêntesis
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

console.log(leitor.livrosFavoritos);

console.log('________________');

//🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(leitor.nome+' tem '+leitor['livrosFavoritos']['length']+' livros favoritos');

console.log('________________');

console.log(leitor.livrosFavoritos.length);