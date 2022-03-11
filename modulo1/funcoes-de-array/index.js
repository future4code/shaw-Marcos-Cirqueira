// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

/* A) Será impresso cada um dos arrays um em baixo do outro e 
seguidos de outro array, mostrando o que tem dentro de cada um*/

// Exercícios 2

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)

/* A) Será impresso somente o que foi pedido lá em return, que no caso
foi somente o nome*/

// EXERCÍCIOS 3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)

// a) O que vai ser impresso no console?
//  Será impresso somente os arrays que não contém as palavra "chijo".


// EXERCÍCIOS DE ESCRITA DE CÓDIGO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Exercicio 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  a)
// const nomeDosDoguinhos = pets.map((item, index, array) => {
//     return item.nome
// })
// console.log(nomeDosDoguinhos)

// b) 
// const cachorrosSalsicha = pets.filter((item, index, array) =>{
//     return item.raca === "Salsicha"
// })
// console.log(cachorrosSalsicha);

// c)
// const cachorrosPoodle = pets.filter((item, index, array) =>{
//     return item.raca === "Poodle"
// }) .map(item =>console.log("Você ganhou um cupom de desconto de 10% para tosar o/a ",[ item.nome], "!"))

// Exercício 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// A)
// const nomeProdutos = produtos.map((item, index, array) =>{
//     return item.nome

// })
// console.log(nomeProdutos);

// B) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles


// const desconto = produtos.map((produto) => {
//     return {
//         nome: produto.nome.toUpperCase(),
//         precoProduto: (produto.preco * 0.95).toFixed(2)
//     }
// })
// console.log(desconto);

// C)

// const bebidas = produtos.filter((item, index, array) =>{
//     return item.categoria === "Bebidas"
// })
// console.log(bebidas);


// D)
// const nomeYpe = produtos.filter(item => item.nome.includes ("Ypê"));
// console.log(nomeYpe);

// E)
// const frase = produtos.filter(item => item.nome.includes ("Ypê"))
//  .map(item => `Compre ${item.nome}por ${item.preco}`)
// console.log(frase);




