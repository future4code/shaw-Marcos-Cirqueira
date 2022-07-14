import { User } from "../model/User"
import BaseDataBase from "./BaseDatabase"

export class userData extends BaseDataBase {
    protected TABLE_NAME = "User_Arq"

    public getUserById = async (id: string) => {
        try {

            const result = await BaseDataBase.connection(this.TABLE_NAME)
                .select()
                .where({ id })

            return result[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    public getAllUsers = async (): Promise<User []>=> {
        try {


            const result = await BaseDataBase.connection(this.TABLE_NAME)
                .select()
                
            const usermodel = result.map((model)=>{
                return User.UserModel(model)
            })

            return usermodel
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
}