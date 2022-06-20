import { connection } from "../data/connection"
import { Request, Response } from "express"


// Exercicio 1

// a)
export const getAllName = async (req: Request, res: Response) => {
    try {
        const name = req.query.name


        const result = await connection("aula48_exercicio")
        .where("name", "like", `%${name}%`)

        res.status(200).send(result)

        } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

// b)
export const getFilterUser = async (req: Request, res: Response) => {
    try {
        const type = req.params.type
        
        const result = await connection("aula48_exercicio")
        .where("type", "like", `%${type}%`)

        res.status(200).send(result)

        } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}