type Filme = {
    nomeDoFilme: string,
    anoDeLancamento: number,
    genero: string,
    nota: number
}

enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}


function filme (nome:string, anoDeLancamento:number, genero: string, nota?:number){
    const Filme1: Filme = {
        nomeDoFilme: nome,
        anoDeLancamento: anoDeLancamento,
        genero: genero,
        nota: nota
    }
    return Filme1
}

console.log(filme("Duna", 2021, GENERO.ACAO, 74))
console.log(filme("Duna", 2021, GENERO.ACAO))