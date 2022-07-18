import { UserBusiness } from "../src/business/UserBusiness";
import { userData } from "../src/data/userData";
import { HashGeneratorMocks } from "./mocks/hashGeneratorMocks";
import { IdGeneratorMocks } from "./mocks/idGeneratorMocks";
import { TokenGeneratorMocks } from "./mocks/tokenGeneratorMocks";
import { userDataMocks } from "./mocks/userDataMocks";

// Mocks desenvolvidos no coding together da aula!
const userBussinesMock = new UserBusiness(
    new userDataMocks(new userData) as any
);


describe("getUserById", () => {
	// (a)
   test("Should catch error when id is not registered", async () => {

    try {
      await userBussinesMock.getUserById("abc")
    } catch (error:any) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }finally{
      expect.assertions(2)
    }
  })
    
	// (b)
  test("Should return respective user when id is registered", async () => {
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBussinesMock.getUserById(id)
      )
        
      const result = await getUserById("86b9506c-a99b-4af5-b91b-b0e554600a88")
        console.log("Resultado", result);
        
      expect(getUserById).toHaveBeenCalledWith("86b9506c-a99b-4af5-b91b-b0e554600a88")
      expect(result).toEqual({
        id: "86b9506c-a99b-4af5-b91b-b0e554600a88",
        name: "Laura",
        email: "laura_lab@gmail.com",
        role: "ADMIN",
      })
    } catch (error:any) {
      console.log(error.message)
    }finally{
    // expect.assertions(2)
    }
  })

  
})