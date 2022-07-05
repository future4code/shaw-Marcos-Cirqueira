import moment from "moment";
import PostData from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { CreateInputDTO } from "../types/createInputDTO";

export default class PostBusiness{
    constructor(
        private postData: PostData,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
    ) { }

    createPost = async (input: CreateInputDTO, token: string) => {

         const {photo, description, type } = input

         if (!photo || !description || !type ) {
            throw new Error("Campos inválidos")
        }

        const id = this.idGenerator.generateId()

        const createdAt = moment().format("YYYY-MM-DD")

        const tokenData = this.authenticator.getTokenData(token)

        if (!tokenData) {
            throw new Error("Token não enviado")
        }

        const post = new Post(
            id,
            photo,
            description,
            type,
            createdAt,
            tokenData.id
                      
        )
        await this.postData.insert(post)


        return token
    }
}