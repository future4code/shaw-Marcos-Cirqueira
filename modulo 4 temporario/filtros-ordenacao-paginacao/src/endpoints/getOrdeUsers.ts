import { connection } from "../data/connection"
import { Request, Response } from "express"
import { selectAllUsers } from "./getAllUsers"



export const getOrdeUsers = async (req: Request, res: Response) => {
    try {

        let order = req.query.order
        let filter = req.query.filter

        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }

        if (filter !== 'name' && filter !== 'type') {
            filter = 'email'
        }

        const result = await connection("aula48_exercicio")
            .orderBy(filter, order)


        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}