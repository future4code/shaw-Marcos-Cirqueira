
// A)
function obterEstatisticas(numeros: number[]): object {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
// a) Entra é um array e a saída é um objeto


// B)
//  numerosOrdenados: number[]
// soma: number
// estatisticas: object

// C)
type amostra = {
    numeros: number [],
    obterEstatisticas: () => {
        estatisticas(numeros: number[]): object
    }
}
