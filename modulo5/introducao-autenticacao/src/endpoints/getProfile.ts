import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export const getProfile = async(req: Request, res: Response):Promise<void> =>{
    try{
        const token = req.headers.authorization       

        if(!token){
            throw new Error("Token não enviado")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        const userDB = new UserDatabase()
        const user = await userDB.getUserById(data.id)

        res.send({
            user: {
                id: user.id,
                email: user.email
            }
        })
    }catch (error: any) {  
        console.log(error);
           
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}