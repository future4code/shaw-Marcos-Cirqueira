import { connection } from "../data/connection"
import { Request, Response } from "express"


// Exercicio 3

export const getPage = async (req: Request, res: Response) => {
    try {
        let page = Number(req.query.page)

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        const size = 5

        let offset = (page - 1) * size

        const result = await connection("aula48_exercicio")
            .limit(size)
            .offset(offset)

        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}