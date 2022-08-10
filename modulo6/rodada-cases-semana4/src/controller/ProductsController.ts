import { ProductsBusiness } from "../business/ProductsBusiness";
import { Request, Response } from "express";
import { inputCreateProductDTO } from "../model/Products";



export class ProductsController {
    constructor(
        private productBusiness: ProductsBusiness
    ) { }

    signup = async (req: Request, res: Response) => {
        try {

            const {name, tags} = req.body

            const newProduct: inputCreateProductDTO = {
                name,
                tags
            }

            await this.productBusiness.signupProducts(newProduct)

            res.status(201).send("successfully created")

        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }

    getByProductsId = async (req: Request, res: Response) => {
        try{

            const id = req.query.id as string

            const response = await this.productBusiness.getByProductsId(id)

            res.status(201).send(response)
        }catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
    getByProductsName = async (req: Request, res: Response) => {
        try{

            const Name = req.query.name as string

            const response = await this.productBusiness.getByProductsName(Name)

            res.status(201).send(response)
        }catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
    getByProductsTag = async (req: Request, res: Response) => {
        try{

            const Tags = req.query.tags as string

            const response = await this.productBusiness.getByProductsTag(Tags)

            res.status(201).send(response)
        }catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
}
