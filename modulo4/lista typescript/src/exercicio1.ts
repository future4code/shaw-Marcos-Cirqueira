let nome:string = "Marcos"
let data:string = "21/10/1994"

const conversorData = (data:string) => { //a data originalmente vem muito extensa
    const dia = data.substring(0, 2) //então pegamos esse valor e 
    const mes = data.substring(3, 5) //cortamos oque vem antes e depois 
    const ano = data.substring(6, 12) //dos valores que precisamos
    return `Olá me chamo ${nome}, nasci no dia ${dia} do ${mes} do ano de ${ano}`//e retornamos eles com as barras de datas
}

const dataConvertida:string = conversorData(data)
console.log(dataConvertida)