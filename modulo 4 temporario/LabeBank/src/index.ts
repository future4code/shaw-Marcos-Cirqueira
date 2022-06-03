import express from "express"
import cors from "cors"
import { users, User } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

// Crie um método GET na entidade users função que será responsável por pegar todos os usuários existentes no array de usuários.
app.get("/users", (req, res) => {
  res.send(users)
})

// Pegar Saldo
// O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF. 
app.get("/users/saldo", (req, res) => {

  try {
    const nome = req.query.nome
    const cpf = req.query.cpf

    const [findNome] = users.filter((user) => {
      return user.nome === nome
    })
    if (!findNome) {
      res.status(409)
      throw new Error("Usuário já existe")
    }
    const [findCpf] = users.filter((user) => {
      return user.cpf === cpf
    })
    if (!findCpf) {
      res.status(409)
      throw new Error("CPF já existe")
    }

    res.status(200).send([findCpf.saldo])

  } catch (error: any) {
    res.send(error.message)
  }
})


// Criar Conta>>
// Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: nome, CPF e data de nascimento. As contas devem guardar essas informações e uma propriedade para representar o saldo do usuário. Além disso devem ser guardados, também, todos os gastos do usuário num array de extrato (possuindo o valor, a data e uma descrição). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.

app.post("/criarConta", (req, res) => {
  try {
    const id = new Date().getTime()

    const { nome, cpf, dataDeNascimento }: User = req.body

    if (!nome || !cpf || !dataDeNascimento) {
      res.status(422)
      throw new Error("Campo não informado")
    }
    const conversorData = (dataDeNascimento: string) => {
      const ano = dataDeNascimento.substring(6, 12)
      return ano
    }
    const anoNascimento: number = Number(conversorData(dataDeNascimento))
    if (2022 - anoNascimento < 18) {
      res.status(403)
      throw new Error("Idade não permitida")
    }

    const findCpf = users.filter((user) => {
      return user.cpf === cpf
    })
    if (findCpf) {
      res.status(409)
      throw new Error("CPF já existe")
    }
    const newConta = {
      id,
      nome,
      cpf,
      dataDeNascimento
    }
    users.push(newConta)
    res.status(200).send(users)
    
  } catch (error: any) {
    res.send(error.message)
  }
})


// Adicionar Saldo
// O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
app.put("/users/adicionarSaldo", (req, res) => {
  try {
    const { saldo } = req.body
    const nome = req.query.nome
    const cpf = req.query.cpf


    if (!nome || !cpf || !saldo) {
      res.status(422)
      throw new Error("Campo não informado")
    }
    const usuario = users.find((user: User) => {
      if (user.nome === nome && user.cpf === cpf) {
        return user.saldo = saldo
      }
    })
    if (!usuario) {
      res.status(422)
      throw new Error("Usuário ou CPF ausentes")
    }
    const index: number = users.findIndex((user: User): boolean =>
      user.nome === nome && user.cpf === cpf
    )
    users[index] = usuario
    res.status(200).send(usuario)

  } catch (error: any) {
    res.send(error.message)
  }
})



