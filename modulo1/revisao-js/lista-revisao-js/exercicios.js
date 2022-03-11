// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 return array.reverse()
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a, b)=> a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = [];
  for(let i = 0; i < array.length; i++){
     if(array [i] % 2 == 0){
        numerosPares.push(array[i])
     }
  }
  return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 const numerosPares = retornaNumerosPares(array)
 const numerosAoQuadrado = []
 for(let i = 0; i < numerosPares.length; i++){
    numerosAoQuadrado.push(Math.pow(numerosPares[i],2))
 }  
 
 return numerosAoQuadrado;
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   return Math.max.apply(null, array);
  
} 


// EXERCÍCIO 07
function retornafilmeEntreDoisNumeros(num1, num2) {
const filme ={
   maiorNumero: Math.max(num1,num2),
   maiorDivisivelPorMenor: Math.max(num1,num2) % Math.min(num1,num2) == 0,
   diferenca: Math.max(num1,num2) - Math.min(num1,num2)
}
return filme;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
   for (let i = 0; numerosPares.length < n; i++) {
       if (i % 2 == 0) {
           numerosPares.push(i)
       }
   }
   return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   const lado1 = ladoA
   const lado2 = ladoB
   const lado3 = ladoC

   if(ladoA < (ladoB+ladoC) && ladoB < (ladoA+ladoC) && ladoC < (ladoA+ladoB)){
      if(ladoA == ladoB && ladoB == ladoC){
         return "Equilátero"
      }else if(ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
         return "Isósceles"
      }else{
         return "Escaleno"
      }}
   }


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   array.sort((a, b)=> a - b)
   const segundoMenor = array[1]
   const segundoMaior = array[array.length - 2]
return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {   
  
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
let filme = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@labenu.com.br",
      endereco: "Rua do Futuro, 4"
   }
   const filmeClone={...pessoa, nome:"ANÔNIMO"}
   
   return filmeClone;
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const permissao = pessoas.filter((pessoas)=>{
     return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade <= 60
   })
   return permissao;
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const permissao = pessoas.filter((pessoa)=>{
      return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
    })
    return permissao;
 }


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}