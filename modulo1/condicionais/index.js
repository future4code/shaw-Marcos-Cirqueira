// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// 1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) O código pede para pessoa digitar um número, esse número irá ser
// testado na condição (numero %2===0), para decidir se passa ou não.
// b) Em que o restante da divisão retorne = 0.
// c) Em que o restante não seja igual a 0.

// 2.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para simplificar!
// b) "O preço da fruta, Maçã, é, R$ 2.25"
// c) Ele continuaria imprimindo, pq o breack serve para execução do código sair do bloco em questão.
//  e executará o preço = 5.

// 3.
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(numero)

// a) Está pedindo ao usuário para digitar um número.
// b) "Esse número passou no teste". Se fosse -10, não pareceria nada.
// c) Sim. Pois não foi colocada a condição ELSE, caso o numero fosse menor que 0.

// EXERCÍCIO DE ESCRITA DE CÓDIGO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Exercício 
// 1.

// const idade = Number(prompt("Digite sua idade"))

// function idadeCorrespondente(){
//     if (idade >= 18 ){
//         console.log("Você pode dirigir")
//     }else{
//         console.log("Você não pode dirigir")
//     }
// }
// idadeCorrespondente()

// 2.
// function horario(){
//     const turno = prompt("Digite as letras M, V ou N para os seus respectivos turnos");
   
//     if(turno === "M"){
//         console.log("Bom dia!")
//     }else if (turno ==="V"){
//         console.log("Boa tarde!")
                
//     }else if (turno === "N"){
//         console.log("Boa noite!")
//     }
// }
// horario()

// 3.
// function horario(){
//  const turno = prompt("Digite as letras M, V ou N para os seus respectivos turnos")

//  switch (turno){
//      case "M":
//          console.log("Bom dia!")
//          break
//          case "V":
//             console.log("Bom tarde!")
//             break
//             case "N":
//                 console.log("Bom noite!")
//                 break         
//  }
// }
// horario()

// Exercício 4.


// function cinema(){  
//     const genero = prompt("Digite qual gênero do filme")
//     const valorIngresso = Number(prompt("Digite o valor do ingresso"))

//     if(genero === "fantasia" && valorIngresso <= 15) {
//         console.log("Bom filme!")
//     }else {
//         console.log("Escolha outro filme :( ")
//     }
// }
// cinema()

// DESAFIOS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1.
// function cinema(){  
//     const genero = prompt("Digite qual gênero do filme")
//     const valorIngresso = Number(prompt("Digite o valor do ingresso"))
//     const lanche = prompt("Qual lanchinho você vai comprar?")

//     if(genero == "fantasia" && valorIngresso <= 15) {
//         console.log("Bom filme!")
//         console.log("Aproveite o seu", lanche);
//     }else {
//         console.log("Escolha outro filme :( ")
//     }
    
// }
// cinema()



