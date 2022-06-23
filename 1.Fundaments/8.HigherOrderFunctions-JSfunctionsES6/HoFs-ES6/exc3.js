const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkingResults = (gabarito, estudante, acertos2) => {
return acertos2(gabarito, estudante)
}

function acertos (gabarito, estudante){
  let contador = 0
  for (let i = 0; i < gabarito.length; i+=1){
    if (gabarito[i] === estudante[i]){
      contador += 1
    }
  }
  return contador
};



console.log(checkingResults(RIGHT_ANSWERS,STUDENT_ANSWERS, acertos));