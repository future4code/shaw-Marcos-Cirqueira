import { CuboUserDataBase } from "../data/CuboUserDataBase";
import { CuboUser, CuboUserDTO } from "../model/CuboUser";
import { IdGenerator } from "../services/IdGenerator";

export class CuboUserBusiness {

    constructor(
        private cuboData: CuboUserDataBase,
        private idGenerator: IdGenerator
    ) { }

    createUser = async (newCuboUser: CuboUserDTO) => {

        const {first_name,last_name,participation} = newCuboUser

        if(!first_name || !last_name || !participation){
            throw new Error("fill in all fields");
            
        }
        const id: string = this.idGenerator.generate() 

         const response = await this.cuboData.InsertUser(id, first_name,last_name,participation)
           
         return response
    }

    getAllUsers = async () => {

        return await this.cuboData.selectUsers()
    }

    deleteUser = async (id:string) => {

        return await this.cuboData.deleteUsers(id)
    }
}