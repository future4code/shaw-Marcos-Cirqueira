 import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"
import { LoginInputDTO } from "../types/loginInputDTO"
import { SignupInputDTO } from "../types/signupInputDTO"
 
 
 export default class UserController {
     constructor(
         private userBusiness: UserBusiness
     ){}
     
     signup = async(req:Request, res: Response)=>{
         try{
            const {name, email, password} = req.body
    
            const input: SignupInputDTO = {
                name,
                email,
                password
            }
            const token = await this.userBusiness.signup(input)

            res.status(201).send({message: "Usuário cadastrado com sucesso", token})

        }catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }

    login = async(req:Request, res: Response)=> {
        try{

            const {email, password} = req.body
            const login: LoginInputDTO = {email, password}

            const token = await this.userBusiness.login(login)

            res.status(201).send({message: "Usuário logado com sucesso", token})

        }catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no login")
        }
    }
 }