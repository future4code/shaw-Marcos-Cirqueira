import { Request, Response } from "express"
import moment from "moment"
import { UserReceitabase } from "../data/UserReceitabase"
import { Receita } from "../model/Receita"
import { Authenticator } from "../services/Authenticator"
import { Generate } from "../services/Generate"

export const criarReceita = async (req: Request, res: Response): Promise<void> => {
    try {

        const token = req.headers.authorization as string

        const { titulo, descricao } = req.body

        const data_post = moment().format("YYYY-MM-DD")

        if (!token) {
            throw new Error("Token não enviado")
        }

        if (!titulo || !descricao) {
            throw new Error("Dados incorretos!")
        }

        const generate = new Generate()
        const id = generate.generateId()

        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        const userReceita = new UserReceitabase()

        const newReceita = new Receita(id, titulo, descricao, data_post)
        await userReceita.signup(newReceita)


        res.send("Receita criada com sucesso")
    }catch(error: any) {        
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}