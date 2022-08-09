import { response } from "express";
import { ProductDataBase } from "../data/ProductDataBase";
import { BaseError } from "../error/BaseError";
import { inputCreateProductDTO } from "../model/Products";
import { IdGenerator } from "../services/IdGenerator";

export class ProductsBusiness {
    constructor(
        private productData: ProductDataBase,
        private idGenerator: IdGenerator
    ) { }

    signupProducts = async (input: inputCreateProductDTO) => {

        const { name, tags } = input

        if (!name || !tags) {
            throw new Error("fill in all fields");
        }
        const id = this.idGenerator.generate()

        const product = {
            id,
            name,
            tags
        }

        const response = await this.productData.createProduct(product)

        return response
    }

    getByProductsId = async (id: string) => {

        if (!id) {
            throw new BaseError(422, "Missing input!")
        }

        return await this.productData.getProductById(id)
    }

    getByProductsName = async (name: string) => {

        if (!name) {
            throw new BaseError(422, "Missing input!")
        }

        return await this.productData.getProductByName(name)
    }

    getByProductsTag = async (tags: string) => {

        if (!tags) {
            throw new BaseError(422, "Missing input!")
        }

        return await this.productData.getProductByTag(tags)
    }
}