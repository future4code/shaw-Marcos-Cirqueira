import express from 'express'
import cors from 'cors'
import {Produtos} from './data'


const app = express()

app.use(express.json())
app.use(cors())


// Exercicio 1
app.get("/test", (req, res) => {
    res.send("Rodou!")
})

// Exercicio 3

app.post("/createProduto", (req, res) => {
    type Produtos = {
        id: string,
        name: string,
        price: number
    }
    try{
        const id = Math.floor(Date.now() * Math.random()).toString(5)
        const {name, price}: Produtos = req.body

        if(!name || !price){
            res.status(422)
            throw new Error("Algum campo do produto está vazio")
        }
        if(typeof name !== "string"){
            res.status(422)
            throw new Error("Esse campo deve ser preenchido com nome")
        }
        if(typeof price !== "number"){
            res.status(422)
            throw new Error("Esse campo deve ser preenchido com número")
        }
        if(price <= 0){
            res.status(422)
            throw new Error("Número inválido")
        }
        const [findProduto] = Produtos.filter((produto) =>{
            return produto.name === name
        })

        if(findProduto){
        res.status(409)
        throw new Error("Produto já existe")
        }

        Produtos.push({id, name, price})
        res.status(201).send(Produtos)
        
    }catch(error:any){
        res.send(error.message)
    } 
})

// Exercicio 4

app.get("/produtos", (req, res) => {
    res.status(200).send(Produtos)
})

// Exercicio 5

app.put("/changePrice/:id", (req, res) => {
    try{
        const id = req.params.id
        const { price} = req.body

        if(!price){
            res.status(422)
            throw new Error("Algum campo do produto está vazio")
        }
        if(typeof price !== "number"){
            res.status(422)
            throw new Error("Esse campo deve ser preenchido com número")
        }
        if(price <= 0){
            res.status(422)
            throw new Error("Número inválido")
        }

        const [findId] = Produtos.filter((produto) => {
            return produto.id === id
        })
        if(!findId){
            res.status(422)
            throw new Error("Id não Existe")
        }

        const listaAtualizada = Produtos.map((produto) => {
            if(produto.id === id){              
                if(produto.price === price){
                res.status(409)
                throw new Error("Digite um valor diferente!")
                }
            }
            return {...produto, price: price}
        })
        res.send(listaAtualizada)
    }catch(error:any){
        res.send(error.message)
    }

})

// Exercicio 6

app.delete("/deleteProdutos/:id", (req, res) => {
    try{
        const id = req.params.id

        const [findId] = Produtos.filter((produto) => {
            return produto.id === id
        })
        if(!findId){
            res.status(422)
            throw new Error("Id não Existe")
        }
        
        const deletarProduto = Produtos.filter((produto) => {
            return produto.id !== id
        })
        res.send(deletarProduto)

    }catch(error:any){
        res.send(error.message)
    }
})




app.listen(3003, () => {
    console.log("Rodando");

}) 