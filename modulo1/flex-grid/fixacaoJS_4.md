```let array = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let resultado = 0
  for(let i = 0; arrayDeNumeros.length; i++){
    let posicao = arrayDeNumeros[i]
    if(posicao === numeroEscolhido){
      resultado +=1
    }
  }
  return resultado;```