import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"


export const getPerfilOutro = async (req: Request, res: Response): Promise<void> => {
    try {

        const token = req.headers.authorization as string
        
        if (!token) {
            throw new Error("Token não enviado")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        const userDB = new UserDatabase()
        const user = await userDB.buscarPorId(req.params.id)

        res.send({
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email                
            }
        })
    } catch(error:any){       
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}