import { CuboUser, CuboUserDTO } from "../model/CuboUser";
import { BaseDatabase } from "./BaseDatabase";

export class CuboUserDataBase extends BaseDatabase {

    private static TABLE_NAME = "Cubo_Users"

    public InsertUser = async (id: string,
        first_name: string,
        last_name: string,
        participation: number) => {
        try {
            const result = await this.getConnection()
                .insert({
                    id,
                    first_name,
                    last_name,
                    participation
                })
                .from(CuboUserDataBase.TABLE_NAME)

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectUsers = async () => {
        try {
            let users = await this.getConnection()
                .from(CuboUserDataBase.TABLE_NAME)
                .select('id').select('first_name as First Name').select("last_name as Last Name").select('participation as Participation')

            let totalParticipation = await this.getConnection()
                .from(CuboUserDataBase.TABLE_NAME)
                .sum('participation as totalParticipation')

            const response = {
                users,
                totalParticipation: totalParticipation[0].totalParticipation
            }

            return response;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public deleteUsers = async (id: string) => {
        try {
            const response = await this.getConnection()
                .from(CuboUserDataBase.TABLE_NAME)
                .where({ id })
                .del()

            return response;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}