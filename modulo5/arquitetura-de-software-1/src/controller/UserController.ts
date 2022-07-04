import { Request, Response } from "express"
import UserBussines from "../Bussines/UserBussines"
import { userInput, userLogin } from "../types/user"

class UserController {

    async signup(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const newUser: userInput = {
                name,
                email,
                password,
                role
            }

            const userBussines = new UserBussines()

            const token = await userBussines.signup(newUser)

            res.status(201).send({ message: "usuario criado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const credencial: userLogin = { email, password }

            const userBussines = new UserBussines()

            const token = await userBussines.login(credencial)

            res.status(201).send({ message: "usuario logado com sucesso", token })


        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }


    }

    async getUsers(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string

            const userBussines = new UserBussines()

            const users = await userBussines.getUsers(token)


            res.status(200).send(users)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }

    }

    async deleteUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string

            const userBussines = new UserBussines()

            await userBussines.deleteUser(token, req.params.id)

            res.status(200).send({ message: "Usuário apagado com sucesso" })
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}

export default UserController