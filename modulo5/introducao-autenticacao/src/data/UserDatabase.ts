import { User } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async create(newUser: User) {
        try {
            await BaseDatabase.connection("User")
                .insert(newUser)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getUserByEmail = async (email: string): Promise<any> => {
        try {
            const result = await BaseDatabase.connection("User")
                .where({ email });
            return result[0];
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public getUserById = async (id: string): Promise<any> => {
        try {
            const result = await BaseDatabase.connection("User")
                .where({ id });
            return result[0];
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

}