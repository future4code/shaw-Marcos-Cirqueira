// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1 

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// A) 1- O nome da primeira pessoa do elenco
// A) 2- A última pessoa do elenco
// A) 3- Vai ser impresso o objeto de transmissões

// Exercício 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) Será impresso : {nome: 'Juca', idade: 3, raca: 'SRD'}
// a) Será impresso : {nome: 'Juba', idade: 3, raca: 'SRD'}
// a) Será impresso : {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b) Ela espelha o objeto anterior.

// Exercício 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) False

// b) Por que não foi atribuido nenhuma variável com nome "altura".


// EXERCÍCIOS DE ESCRITA DE CÓDIGO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// EXERCÍCIO 1

// a)

// const pessoa = {
//     nome: "Marcos",
//     apelidos: ["Marquinhos",  "Markin" , "Marcola"]
// }
// function fraseModelo(pessoa) {
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);
// }

// // b) 

// const novoObjeto = {
//     ...pessoa,
//     apelidos: ["Castanha", "Jubileu", "Marco"]

// }
// fraseModelo(novoObjeto)

// Exercício 2

// const pessoas = {
//     nome: ["Marcos", "João"],
//     idade: [27, 25],
//     profissao: ["Motorista", "Pintor"]
// }

// function objetoDeCadaVez(pessoas){
//     const valorDeNome = pessoas.nome
//     const numeroDeCaractresNomes = valorDeNome.length
//     const valorIdade = pessoas.idade
//     const valorProfissao = pessoas.profissao
//     const caracteresProfissao = valorProfissao.length
    
//     resultado = [valorDeNome, numeroDeCaractresNomes, valorIdade, valorProfissao, caracteresProfissao]

//     return resultado;

// }

// console.log(objetoDeCadaVez(pessoas))

// Exercício 3
// a)
// const carrinho = []
// // b)
// const obj1 = {
//     nome: "Mamão",
//     disponibilidade: true
// }
// const obj2 = {
//     nome: "Banana",
//     disponibilidade: true
// }
// const obj3 = {
//     nome: "Maçã",
//     disponibilidade: true
// }
// console.log(carrinho)
// // c)
// function objetosFrutas(obj){
// carrinho.push(obj)
    
// }
// objetosFrutas(obj1)
// objetosFrutas(obj2)
// objetosFrutas(obj3)

// DeSaFios>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


