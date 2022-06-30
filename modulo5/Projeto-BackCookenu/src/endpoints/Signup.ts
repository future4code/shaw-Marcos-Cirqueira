import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/User"
import { Generate } from "../services/Generate"
import { Authenticator } from "../services/Authenticator"
import { HashManage } from "../services/HashManage"

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const { nome, email, password } = req.body

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const userDatabase = new UserDatabase()
        const user1 = userDatabase.buscarPorEmail(email)

        if (!user1) {
            res.status(409).send("Esse email já está cadastrado")
        }

        const generate = new Generate()
        const id = generate.generateId()

        const hashManage1 = new HashManage()
        const hash = await hashManage1.hash(password)
        

        const newUser = new User(id, nome, email, hash)
        await userDatabase.signup(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id
        })

        res.status(201).send({token})
    }catch(error: any){        
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}


