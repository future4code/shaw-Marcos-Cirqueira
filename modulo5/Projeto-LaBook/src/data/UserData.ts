import User from "../model/User";
import { FindByEmailResponse } from "../types/findByEmailResponse";
import { inputFriends } from "../types/inputFriends";
import { BaseDatabase } from "./BaseDatabase";

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "labook_users"
    protected TABLE_FRIEND = "friends"

    insert = async (user: User) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(user)

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    findByEmail = async (email: string) => {
        try {
            const result: FindByEmailResponse = await this.connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return result[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    followUserInsert = async (id_follow: string, id_followed: string): Promise<any> => {
        try {

            await this.connection(this.TABLE_FRIEND)
                .insert({ id_follow: id_followed, id_followed: id_follow })

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    removeFollow = async (id_follow: string, id_followed: string): Promise<any> => {
        try {

            await this.connection(this.TABLE_FRIEND)
                .delete()
                .where({id_follow}).andWhere({id_followed})
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
}