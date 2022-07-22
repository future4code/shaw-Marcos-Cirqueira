import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManage } from "../services/HashManage"

export const Login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(422).send("Insira corretamente as informações de 'email' e 'password' ")
        }
        
        const userDatabase = new UserDatabase()
        const user = await userDatabase.buscarPorEmail(email)

        if(!user){
            res.statusCode = 409
            throw new Error("Esse email não está cadastrado!")
        }

        const hashManage1 = new HashManage()
        const comparePassword= await hashManage1.compare(password, user.password)        
        

        if(!comparePassword){
            res.statusCode = 401
            throw new Error("Email ou Senha Incorretos!")
        } 
        
        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.id})
        
        res.send({token})

    } catch(error:any){        
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}