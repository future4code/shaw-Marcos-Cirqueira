// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1.

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Está fazendo a soma dos números entre 0 e 4.

// Exercício 2.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }	


// a) Somente os números maiores do que 18.
// b) Sim. Tiro a condição if (numero > 18), e dou um console.log(numero).

// Exercício 3.

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Vai ser impresso no console, 4 linhas com asteriscos representando os números de linhas de cada um.
// primeira linha, 1 asteriscos
// segunda linha, 2 asteriscos
// ...

// Exercícios de escrita de código>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1.
// let i = 0

// let nomeBicho = []
// let numeroBicho = Number(prompt("Quantos bichinhos de estimação você tem?"))
// if (numeroBicho === 0){
//     console.log("Que pena! Você pode adotar um pet");
// }
// else{

//     while(i < numeroBicho){
//         nome = prompt("Me fale o nome do seu bicho")
//         nomeBicho.push(nome)
//         i++
//     }
// }
// console.log(nomeBicho)


// 2.

// const arrayOriginal = [14, 67, 89, 15, 23]

// a)
// console.log(array)

// b)
// function dividirArray(array){
//     for (let numeros of array){
//         console.log(numeros/10)
//     }
// }
// dividirArray(arrayOriginal)

// C)

// function restoArray(array) {
//     const novoArray = []
//     for (let numeros of array) {
//         if (numeros % 2 === 0) {
//             novoArray.push(numeros)
//         }
//     }
//     console.log(novoArray)
// }
// restoArray(arrayOriginal)

// D)
// function stringArray(array){
//     const novoArray = [""]
//     for(let i = 0; i < array.length; i++)
// }

// E)

// function descobreMaiorEMenor(array) {
//     let maior = array[0]
//     let menor = array[0]
//     for (number of array) {
//         if (number > maior) {
//             maior = number
//         }
//         if (number < menor) {
//             menor = number
//         }
//     }
//     console.log(maior);
//     console.log(menor);
// }
// descobreMaiorEMenor(arrayOriginal)