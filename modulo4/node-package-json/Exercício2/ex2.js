// Exercício 2

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const operacao = process.argv[4]
switch (operacao) {
    case "soma":
        console.log(num1 + num2)
        break;
    case "subt":
        console.log(num1 - num2)

        break;
    case "mult":
        console.log(num1 * num2)

        break;
    case "div":
        console.log(num1 / num2)

        break;
    default:
        console.log("Não foi possivel fazer a operação");

}