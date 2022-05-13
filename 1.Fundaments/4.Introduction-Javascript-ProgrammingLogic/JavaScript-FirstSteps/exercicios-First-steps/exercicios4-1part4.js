let peca = 'BISpo'.toLowerCase(); //é um método, por isso precisa de parêntesis

if ((peca == 'rei')) {
  console.log(peca, ': horizontal,vertical e diagonal,uma casa apenas');
} else if ((peca == 'rainha')) {
  console.log(peca, ': horizontal,vertical e diagonal, quantas casas quiser');
} else if ((peca == 'torre')) {
  console.log(peca, ': horizontal e vertical, quantas casas quiser');
} else if ((peca == 'bispo')) {
  console.log(peca, ': diagonal, quantas casas quiser');
} else if ((peca == 'cavalo')) {
  console.log(
    peca,
    ': em L para qualquer direção possível, sendo a unica peça que pode passar por cima das demais'
  );
} else if ((peca == 'peao')) {
  console.log(
    peca,
    ': uma casa na vertical, porém se está na casa inicial, ele pode fazer um avanço para ir para a linha 4 ou 6,denpendendo se pretas ou brancas'
  );
} else console.log('essa peça não existe');