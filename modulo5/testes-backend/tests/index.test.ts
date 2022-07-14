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
    expect.assertions(2)

    try {
      await userBussinesMock.getUserById("abc")
    } catch (error) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })
    
	// (b)
  test("Should return respective user when id is registered", async () => {
    // expect.assertions(2)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBussinesMock.getUserById(id)
      )
        
      const result = await getUserById("id_mock_admin")

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error) {
      console.log(error.message)
    }
  })

  
})