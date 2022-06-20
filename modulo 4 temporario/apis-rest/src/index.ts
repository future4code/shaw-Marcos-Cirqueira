import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

// Exercicio 1 
// endpoint que busca todos os usuários da lista.
// A) Método GET
// B) Entidade é users

app.get("/users", (req, res) => {
  try{
    res.status(200).send(users)
  }catch (error) {
    res.status(404).send(users)
  }
})

// Exercicio 2 

app.get("/users/:type", (req, res) => {
  try{
    const type: string = req.params.type as string
    
    const user = users.filter((user) => {
     return user.type === type     
      
    })

    if(user.length === 0){
      res.status(404)
      throw new Error("User not Found")
    }
      
    res.status(200).send(user)
    
  }catch(error:any){
    res.send(error.message)
  }
})

// Exercicio 3
// A) Query
app.get("/users", (req, res) => {
  let codeError:number = 400
  try{
    const name: string = req.query.name as string
    
    const user: User | undefined = users.find((user) => {
      return user.name === name
    })
    
    if(!user){
      codeError = 404
      throw new Error ("Uer not Found")
    } 
    res.status(200).send(user)

  }catch (error:any) {
    res.status(codeError).send({message: error.message})
  }
})

// Exercicio 4

app.put("/users/", (req, res) => {
  try{
    const {id, name, email, type, age} = req.body

    if(!id || !name || !email || !type || !age){
      res.status(422)
      throw new Error("Algum campo do produto está vazio")
    }
    users.push({id, name, email, type, age})

     res.status(200).send("Sucesso!") 

  }catch(error:any){
    res.send(error.message)
  }
})
// A) Mudou nada
// B) Não, pois ele é usado para modificar um recurso existente e não criar.



app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
