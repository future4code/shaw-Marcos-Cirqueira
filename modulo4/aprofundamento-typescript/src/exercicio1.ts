// A)
// const minhaString: string = "Marcos"
// console.log( minhaString);

// >>Vai apresentar o seguinte erro: Type 'number' is not assignable to type 'string'.
// Que quer dizer, que tipo "number" não pode ser atribuido ao tipo "string".

// B)
// Criando um tipo chamado UNION TYPE, inserindo uma | entre os tipos:
// Ex1:
const meuNumero: number = 10

// Ex:2
// let meuNumero: string | number

// C)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string   
}

// D)
enum corFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL =  "azul",
    ANIL =  "anil",
    VIOLETA = "violeta"
}
const Pessoa1: Pessoa = {
    nome: "marcos",
    idade: 27,
    corFavorita: corFavorita.AZUL    
}
const Pessoa2: Pessoa = {
    nome: "victor",
    idade: 24,
    corFavorita: corFavorita.AMARELO    
}
const Pessoa3: Pessoa = {
    nome: "renan",
    idade: 28,
    corFavorita: corFavorita.LARANJA    
}

console.table({Pessoa1, Pessoa2, Pessoa3});
