import express from 'express'
import cors from 'cors'
import { afazeres } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// Exercicio 1
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})


// Exercicio 4

app.get('/afazeres', (req, res) => {

    const afazer = afazeres.filter((tarefas) => {
        return tarefas.completed === true
    })
    res.send(afazer)
})

// Exercicio 5

app.post('/createAfazeres', (req, res) => {

    const { userId, id, title, completed } = req.body

    afazeres.push({ userId, id, title, completed })
    res.send(afazeres)
})

// Exercicio 6
app.put('/changeAfazeres/:id', (req, res) => {

    const id = Number(req.params.id)

    const edicao = afazeres.map((fazer) => {
        if (fazer.id === id) {
            return {
                ...fazer, completed: !fazer.completed
            }
        }else{
            return fazer
        }
    })
    res.send(edicao)
})

// Exercicio 7

app.delete('/afazeres/:id', (req, res) =>{
    const id = Number(req.params.id) 

    const deleteAfazer = afazeres.filter((fazer) =>{
        return fazer.id !==id
    })
    res.send(deleteAfazer)
})

// Exercicio 8

app.get('/afazeres/:userId', (req, res) =>{

    const userId = Number(req.params.userId)

    const usuarios = afazeres.filter((user) =>{
        return user.userId === userId
    })

    res.send(usuarios)
})

// Exercicio 9

// https://documenter.getpostman.com/view/20351037/Uz5Dqxm1



app.listen(3003, () => {
    console.log("Rodando");

})