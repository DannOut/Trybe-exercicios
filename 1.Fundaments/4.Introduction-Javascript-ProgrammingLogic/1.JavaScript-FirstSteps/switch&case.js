//Switch -- Case

let trafficLight = 'verde';

switch (trafficLight) {
  case 'vermelho':
    console.log('pare');
    break; //vai acabar na codição, vai freiar
  case 'amarelo':
    console.log('atenção');
    break;
  case 'verde':
    console.log('siga');
    break;

  default: //caso nenhuma ação seja executada, ele utiliza o default
    console.log('valor não identificado');
}

console.log('fim da explicação de switch e case');

let candidatePerson = "";

switch (candidatePerson) {
  case 'aprovada':
    console.log('siga');
    break;
  case 'lista':
    console.log('atenção');
    break;
  case 'reprovada':
    console.log('pare');
    break;
  default:
    console.log('não se aplica');
}
