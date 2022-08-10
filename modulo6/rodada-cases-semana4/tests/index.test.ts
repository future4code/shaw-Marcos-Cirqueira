import { ProductsBusiness } from "../src/business/ProductsBusiness"
import { inputCreateProductDTO } from "../src/model/Products"
import { IdGeneratorMocks } from "./mocks/idGeneratorMocks"
import { Product1, tag1 } from "./mocks/ProductMock"
import { ProductDatabaseMock } from "./mocks/ProductsDataMocks"



const productBusinessMock = new ProductsBusiness(
    new ProductDatabaseMock as any,
    new IdGeneratorMocks

)

describe("tests of amaro_products and amaro_tags", () => {
    test("Test getByProductsName sucess", async () => {
        expect.assertions(2)
        try {
            await productBusinessMock.getByProductsName("")
        } catch (error: any) {
            expect(error.code).toBe(422)
            expect(error.message).toBe("Missing input!")
        }

    }

    )
})

test("Sucess test signup", async () => {
    try {

        const newProduct: inputCreateProductDTO ={
            name: "Calça",
            tags: ["slim", "boca de sino"]
        }
        const result = await productBusinessMock.signupProducts(newProduct)
        expect(result).toBe(tag1)

    } catch (error: any) {
        console.log(error)
    }
})

test("Sucess invalid signup", async () => {
    try {
        const newProduct: inputCreateProductDTO ={
            name: " ",
            tags: ["slim", "boca de sino"]
        }
        const result = await productBusinessMock.signupProducts(newProduct)

        expect(result).toBe("fill in all fields")
    } catch (error: any) {
        console.log(error)
    }
})

test("Sucess test getProdyctByName", async () => {
    expect.assertions(1)
    try {
        const result = await productBusinessMock.getByProductsName("Calça pantalona")
        expect(result).toBe(Product1)

    } catch (error: any) {
        console.log(error)
    }
})

test("Test getByProductsId sucess", async () => {
    expect.assertions(2)
    try {
        await productBusinessMock.getByProductsId("")
    } catch (error: any) {
        expect(error.code).toBe(422)
        expect(error.message).toBe("Missing input!")
    }

})
test("Test getByProductsTag sucess", async () => {
    expect.assertions(2)
    try {
        await productBusinessMock.getByProductsTag("")
    } catch (error: any) {
        expect(error.code).toBe(422)
        expect(error.message).toBe("Missing input!")
    }

})

