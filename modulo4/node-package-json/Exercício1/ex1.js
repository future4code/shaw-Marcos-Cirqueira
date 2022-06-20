// Exercício 1
// a) Utilizando a propriedade process.argv, que consiste em um array de strings que são os argumentos para que o processo seja executado. 

// b) 
"Olá, (Nome)! Você tem (sua idade) anos."
const nome = process.argv[2]
const idade = process.argv[3]
console.log(`Olá, ${nome} ! Você tem ${idade} anos.`)

// C)
const nome2 = process.argv[2]
const idade2 = process.argv[3]
const novaIdade = Number (process.argv[4])
console.log(`Olá, ${nome2}! Você tem ${idade2} anos. Em sete anos você terá`, novaIdade +7);