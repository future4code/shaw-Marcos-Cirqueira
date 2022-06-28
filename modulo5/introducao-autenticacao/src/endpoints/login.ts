import { compare, hash } from "bcryptjs"
import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManage } from "../services/HashManage"


export const login = async (req: Request,
    res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        const userDB = new UserDatabase()
        const user = await userDB.getUserByEmail(email)

        if (!user) {
            throw new Error("Email ou senha incorreta")
        }

        const hashManage1 = new HashManage()
        const comparePassword = await hashManage1.compare(password, user.password)
        

        if(!comparePassword){
            throw new Error("Email ou senha incorreta")
        }       

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.id, role: user.role})
        res.send({token})
        
    } catch (error: any) {
        console.log(error);
        
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}