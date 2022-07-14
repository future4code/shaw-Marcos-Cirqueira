import { userData } from "../data/userData"

export class UserBusiness {

    constructor(
        private Userdata: userData        
    ) { }

    public getUserById = async (id: string) => {
        if (!id) {
            throw new Error("invalid id!")
        }

        const response = await this.Userdata.getUserById(id)

        return response
    }
}