import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public getUserById = async (req: Request, res: Response) => {
        try {
            const userId = req.params.id

            const result = await this.userBusiness.getUserById(userId)

            res.status(201).send({ message: "Usuário encontrado com sucesso!", result })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no getUserById")
        }
    }
}