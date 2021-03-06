import Post from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export default class PostData extends BaseDatabase {
    protected TABLE_NAME = "labook_posts"

    public insert = async (post: Post) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(post)

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    public getPostById = async(id: string) => {
        try{

           const result = await this.connection(this.TABLE_NAME)
            .where({id})

            return result [0]
        }catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
}