export type User = {

    id: number,
    nome: string,
    cpf: string,
    dataDeNascimento: string
    saldo?: number,
    extrato?: [
      {
        valor: number,
        data: string,
        descricao: string 
      }
    ]
  }



export const users: User[] = [
    {
        id: 1,
        nome: "Jubileu",
        cpf: "34567898715",
        dataDeNascimento: "",
        saldo: 3300,
        extrato: [
            {
                valor: 0,
                data: "",
                descricao: ""
            }
        ]
        
    }, 
    {
        id: 2,
        nome: "Maria",
        cpf: "33344455510",
        dataDeNascimento: "",
        saldo: 10,
        extrato: [
            {
                valor: 0,
                data: "",
                descricao: ""
            }
        ]
        
    },
    {
        id: 3,
        nome: "Ivan",
        cpf: "11122233310",
        dataDeNascimento: "",
        saldo: 0,
        extrato: [
            {
                valor: 0,
                data: "",
                descricao: ""
            }
        ]
        
    }

    
]