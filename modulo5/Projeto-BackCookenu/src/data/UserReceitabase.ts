import { Receita } from "../model/Receita"
import { BaseDatabase } from "./BaseDatabase"


export class UserReceitabase extends BaseDatabase {
    public async signup(newReceita: Receita) {
        try {
            await BaseDatabase.connection("Receitas")
                .insert(newReceita)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public buscarReceitaId = async (id: string): Promise<Receita> => {
        try {
            const result = await BaseDatabase.connection("Receitas")
                .where({ id })

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}