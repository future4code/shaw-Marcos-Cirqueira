import { CuboUserBusiness } from "../business/CuboUserBusiness";
import { Request, Response } from "express";
import { CuboUser, CuboUserDTO } from "../model/CuboUser";


export class CuboUserController {

    constructor(
        private cuboUserBusiness: CuboUserBusiness
    ) { }

    createUser = async (req: Request, res: Response) => {
        try {

            const {first_name, last_name, participation } = req.body

            const newUser: CuboUserDTO = {                             
                first_name,
                last_name,
                participation
            }

            await this.cuboUserBusiness.createUser(newUser)

            res.status(201).send("successfully created")

        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }


    getAllUsers = async (req: Request, res: Response) => {
        try {

            const response = await this.cuboUserBusiness.getAllUsers()

            res.status(201).send(response)
''
        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }

    deleteUser = async (req: Request, res: Response) => {
        try {

             await this.cuboUserBusiness.deleteUser(req.params.id)

            res.status(201).send("successfully deleted")

        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
}