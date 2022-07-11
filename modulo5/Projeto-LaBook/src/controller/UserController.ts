import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"
import { LoginInputDTO } from "../types/loginInputDTO"
import { SignupInputDTO } from "../types/signupInputDTO"


export default class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body

            const input: SignupInputDTO = {
                name,
                email,
                password
            }
            const token = await this.userBusiness.signup(input)

            res.status(201).send({ message: "User registered successfully", token })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Error no signup")
        }
    }

    login = async (req: Request, res: Response) => {
        try {

            const { email, password } = req.body
            const login: LoginInputDTO = { email, password }

            const token = await this.userBusiness.login(login)

            res.status(201).send({ message: "User logged in successfully", token })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Error no login")
        }
    }

    followUser = async (req: Request, res: Response) => {

        const token = req.headers.authorization as string
        const { id_follow } = req.body
        try {

            const result = await this.userBusiness.followUser(id_follow, token)

            res.status(201).send({ message: "User follow in successfully", result })

        } catch (error) {

            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Error no follow")
        }
    }

    removeFollow = async (req: Request, res: Response) => {

        const token = req.headers.authorization as string

        const { id_follow } = req.body

        try {

            const result = await this.userBusiness.removeFollow(token, id_follow)

            res.status(201).send({ message: "User unfollow in successfully", result })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Error no removeFollow")
        }
    }
}