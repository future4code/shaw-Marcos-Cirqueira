import { connection } from "../connection";
import { userLogin, user } from "../types/user";

class insertUser {

   insertUser = async (
      User: user
   ) => {
      await connection.insert({
         id: User.id,
         name: User.name,
         email: User.email,
         password: User.password,
         role: User.role
      }).into('User_Arq')
   }

   async loginUser(email: string): Promise<user> {
      try {
         const result = await connection("User_Arq")
            .where({ email })
         if (!result[0]) {
            throw new Error("Usuário não encontrado");
         }
         return result[0]
      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   async get(): Promise<any[]> {

      try {

         const result = await connection("User_Arq")
            .select("*")

         return result;

      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }

   async deleteUser(
      id: string
   ): Promise<any> {
      try {
         const result = await connection("User_Arq")
            .where({ id })
            .del()
         return result;

      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message);
      }
   }
}

export default insertUser