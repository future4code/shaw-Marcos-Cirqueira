import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
  id: string,
  name: string,
  email: string
}

const usuario1: user = {
  id: "000022121",
  name: "marcos",
  email: "marcos_dev@gmail.com"
}

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {

  for (const user of users) {
    try {
      await axios.post(`${baseURL}/notifications`, {
        subscriberId: user.id,
        message
      });
      console.log("All notifications sent");
    } catch (error: any) {
      const resp = error.response?.data || error.message
      console.log(resp);
            
    }
  };
}

const main = async (): Promise<void> => {
  try {
    await sendNotifications([usuario1], "oi");

  } catch (error: any) {
    const resp = error.response?.data || error.message
    console.log(resp)
  }

}
main()