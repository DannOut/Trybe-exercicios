const custo2 = 10; //valor de custo
const venda2 = 20; // valor de venda

let lucro2; 
// lucro sem imposto
lucro2 = venda2 - custo2;
console.log(lucro2);
console.log('___________');

//lucro com imposto + codigo se valor for negativo
function produtos(custo, venda){
if (custo < 0 || venda < 0){
  console.log("ERROR")
} else {
let lucro =venda - (custo * 1.2);
  console.log(lucro);
};
}
produtos(10,20);