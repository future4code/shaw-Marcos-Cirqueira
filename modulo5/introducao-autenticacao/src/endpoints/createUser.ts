import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../types";
import { Generator } from "../services/Generator"
import { Authenticator } from "../services/Authenticator";
import { HashManage } from "../services/HashManage";


export const createUser = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email");
      }

      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
      }

      const { email, password, role } = req.body

      const generate = new Generator()
      const id: string = generate.generateId()

      const hashManage1 = new HashManage()
      const hash = await hashManage1.hash(password)

      const userDB = new UserDatabase()

      const newUser = new User(id, email, hash, role)

      await userDB.create (newUser)
      
      const authenticator = new Authenticator()
      const token = authenticator.generateToken({
         id,
         role
      })

      res.status(201).send({token})


   } catch (error: any) {
      console.log(error);
      
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}