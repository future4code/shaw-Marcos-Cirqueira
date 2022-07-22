import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async signup(newUser: User) {
        try {
            await BaseDatabase.connection("Usuario")
                .insert(newUser)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async buscarPorEmail(email: string): Promise <User> {
        try {
            const result = await BaseDatabase.connection("Usuario")
                .where({ email })

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public buscarPorId = async (id: string): Promise<any> => {
        try {
            const result = await BaseDatabase.connection("Usuario")
                .where({id});

            return result[0];
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public buscarTodosUsuarios = async (): Promise<any> => {
        try {
            const result = await BaseDatabase.connection("Usuario")
            .select("id", "nome", "email")                

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}

