import PostBusiness from "../business/PostBusiness";
import { Request, Response } from "express"
import { CreateInputDTO } from "../types/createInputDTO";
import moment from "moment"


export default class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    createPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const { photo, description, type } = req.body

            const data_post = moment().format("YYYY-MM-DD")

            const input: CreateInputDTO = {
                photo,
                description,
                type,
                created_at: data_post

            }

            const result = await this.postBusiness.createPost(input, token)

            res.status(201).send(result)

        } catch (error) {

            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no createPost")
        }
    }

    getPostById = async (req: Request, res: Response) => {
        try {
            // pegar o id que vem por params 
            const PostId = req.params.id
            // pega o token
            const token = req.headers.authorization as string

            // solicita ao business que busque o post por id
            const result = await this.postBusiness.getPostById(PostId, token)

            // data convertida
            const created_at = Intl.DateTimeFormat("pt-BR").format(new Date(result.created_at))

            res.status(201).send({
                result: {
                    id: result.id,
                    photo: result.photo,
                    description: result.description,
                    type: result.type,
                    created_at,
                    author_id: result.author_id
                }
            })


        } catch (error) {

            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no getPost")
        }
    }
}