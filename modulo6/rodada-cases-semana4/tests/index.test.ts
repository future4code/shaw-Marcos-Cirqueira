import { ProductsBusiness } from "../src/business/ProductsBusiness"
import { IdGeneratorMocks } from "./mocks/idGeneratorMocks"
import { ProductDatabaseMock } from "./mocks/ProductsDataMocks"



const productBusinessMock = new ProductsBusiness(
    new ProductDatabaseMock as any,
    new IdGeneratorMocks

)

describe("tests of users_amaro, products_amaro and product_tag tables", () => {
    test("Test getByProductsName sucess", async () => {
        expect.assertions(1)
        try {
            await productBusinessMock.getByProductsName("")
        } catch (error: any) {
            expect(error.code).toBe(404)
            expect(error.message).toBe("Missing input!")
        }

    }

    )
})


