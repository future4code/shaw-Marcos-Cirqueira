import PostBusiness from "../business/PostBusiness";
import { Request, Response } from "express"
import { CreateInputDTO } from "../types/createInputDTO";
import moment from "moment"


export default class PostController{
    constructor(
        private postBusiness: PostBusiness
    ){}

    createPost = async(req:Request, res: Response)=>{
        try{
            const token = req.headers.authorization as string

            const {photo, description, type } = req.body
            

            const input: CreateInputDTO = {
                photo,
                description,
                type               
            }

            const newPost = await this.postBusiness.createPost(input, token)

            res.status(201).send({message: "Post criado com sucesso", newPost})

        }catch (error) {
            console.log(error);
            
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no createPost")
        }
    }
}