import axios from "axios";
import { baseURL } from "./baseURL";

// a) Do tipo assincrona. Por que ela espera receber uma informação.

// b)

const news = {
    title: "PlayStation Libera PsPlus grástis?",
    content: "Sony resolve liberar por tempo indeterminado sua plataforma de assinatura, a partir do dia 13/06/2022.",
    date: Date.now()
}

type createNews = {
    title: string,
    content: string,
    date: Number
}

const createNews =async (news:any): Promise<void> => {
      return await axios.put(`${baseURL}/news`, news)
    }

const main = async():Promise<void> => {
    try{
       const result=  createNews(news)
       console.log(result);      
        
    }catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }  
    
}
main()