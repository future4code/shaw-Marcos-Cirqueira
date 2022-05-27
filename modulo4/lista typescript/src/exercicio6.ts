const clientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const emprestimo = clientes.filter((item) => {
    let somaTotal = 0
    item.debitos.forEach((item2) => {
        somaTotal += item2
    })
    let saldoFinal = item.saldoTotal - somaTotal
    if (saldoFinal < 0) {
        return [item.cliente, item.saldoTotal = saldoFinal, item.debitos = []]
    }
})
console.log(emprestimo);

// <<Função que não deu certo com a lógica>>

// function emprestimo (clientes: Cliente[]): any{
//     clientes.filter((item)=>{
//         let somaTotal = 0
//         item.debitos.forEach((item2)=>{
//             somaTotal += item2
//         })
//         let saldoFinal = item.saldoTotal - somaTotal
//         if(saldoFinal < 0){
//             return [item.cliente, item.saldoTotal = saldoFinal, item.debitos = []]
//         }
//     })
// }
// console.log(emprestimo(clientes));

