import moment from "moment";
import PostData from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { CreateInputDTO } from "../types/createInputDTO";

export default class PostBusiness {
    constructor(
        private postData: PostData,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
    ) { }

    createPost = async (input: CreateInputDTO, token: string) => {

        const { photo, description, type, created_at } = input

        if (!photo || !description || !type || !created_at) {
            throw new Error("Invalid fields")
        }

        if (type !== "event" && type !== "normal") {
            throw new Error("Type can only be 'NORMAL' or 'EVENT'.");
        }

        const id = this.idGenerator.generateId()

        const tokenData = this.authenticator.getTokenData(token)

        if (!tokenData) {
            throw new Error("token not sent")
        }

        const post = new Post(
            id,
            photo,
            description,
            type,
            created_at,
            tokenData.id

        )
        await this.postData.insert(post)

        return "success"
    }

    getPostById = async (id: string, token: string) => {
        // valida o postId
        const PostId = id
        if (!PostId) {
            throw new Error("invalid id!")
        }
        // valida token
        if (!token) {
            throw new Error("Unauthorized Token!")

        }
        // solicta ao banco
        const response = await this.postData.getPostById(PostId)

        return response
    }
}