import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
    id: string,
    name: string,
    email: string
}

// a) Não.

// b)  

// c)
const getSubscribers  = async (): Promise<user[]> => {
    const response= await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any) =>{
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
    
}
getSubscribers()

const main = async():Promise<void> => {
    try{
     const result = await getSubscribers()
     console.log(result);
     
    }catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}
main()