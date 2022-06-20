import express from "express";
import cors from "cors";
import {Users} from './data'
import {Posts} from './data'

const app = express();

app.use(express.json());
app.use(cors());


// Exercicio1

app.get('/users', (req, res) => {

    const usuarios = Users.map((user) => {
        return user
    })

    // const resultado = users.flat(1)
    res.send(usuarios)
})

// Exercicio7

app.get('/posts', (req, res) => {
    const postes = Posts.map((post) => {
        return post
    })   
    res.send(postes)
})


// Exercicio8
app.get('/posts/:userId', (req, res) => {

    const userId = req.params.userId

    const teste = Posts.filter((post) => {
       return  post.userId === parseInt(userId)
    })

    res.send(teste)
})

// // Exercicio9
app.delete('/posts/:id', (req, res) => {

    const Id = req.params.id

    const dadosAtualizados = Posts.filter((user) => {
        return user.id !== parseInt(Id)
    });

    res.send(dadosAtualizados)
})

// // Exercicio10
app.delete("/users/:Id", (req, res) => {
       
    const userId = req.params.Id;

    const dadosAtualizados = Users.filter((user) => {
        return user.id !== parseInt(userId)
    });

    res.send(dadosAtualizados);
});



app.listen(3003, () => {
    console.log("Ta rodando!")
});