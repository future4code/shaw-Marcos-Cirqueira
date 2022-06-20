import axios from "axios";
import { baseURL } from "./baseURL";

// a)
// Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

// b)
// Por que ele retorna um array de Promises, assim enviando tudo de uma vez.

// c)

type user = {
  id: string,
  name: string,
  email: string
}

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };

