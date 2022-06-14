import { connection } from "../data/connection"
import { Request, Response } from "express"

export const getAll = async (req: Request, res: Response) => {
    try {
        const name = req.query.name
        // const type = req.query.type
        let order = req.query.order
        let filter = req.query.filter
        let page = Number(req.query.page)
        let type = req.query.type

        if (order !== 'asc' && order !== 'desc') {
            order = 'desc'
        }

        if (filter !== 'name' && filter !== 'type') {
            filter = 'name'
        }

        if (type !== 'type' && type !== 'email') {
            type = 'name'
        }

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        const size = 5

        let offset = (page - 1) * size

        if (page === 0) {
            page = 1;
        }

        const result = await connection("aula48_exercicio")
            .where(`${type}`, "like", `%${name}%`)
            .orderBy(filter, order)
            .limit(size)
            .offset(offset)

        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}