import axios from "axios";
import { baseURL } from "./baseURL";

const getSubscribers  = async (): Promise<any[]> => {
    const response= await axios.get(`${baseURL}/subscribers`)
    console.log(response.data)
    return response.data
    
}
getSubscribers()

// a) Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.