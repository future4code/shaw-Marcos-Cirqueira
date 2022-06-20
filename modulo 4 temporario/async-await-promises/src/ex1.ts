import axios from "axios";
import { baseURL } from "./baseURL";


// a) GET

// b) 
// Quando ela está esperando receber alguma informação.

// c)

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}


const main = async (): Promise<void> => {
    try {
      const result =  await getSubscribers()
      console.log(result);
      
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}
main()