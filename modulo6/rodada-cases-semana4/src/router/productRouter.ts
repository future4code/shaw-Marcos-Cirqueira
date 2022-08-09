import express from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { ProductsController } from "../controller/ProductsController";
import { ProductDataBase } from "../data/ProductDataBase";
import { IdGenerator } from "../services/IdGenerator";


export const productRouter = express.Router()

const productsBusiness = new ProductsBusiness(
    new ProductDataBase(),
    new IdGenerator()
)

const productsController = new ProductsController(productsBusiness)


productRouter.post('/createProduct', productsController.signup)
productRouter.get('/getByProductsId', productsController.getByProductsId)
productRouter.get('/getByProductsName', productsController.getByProductsName)
productRouter.get('/getByProductsTag', productsController.getByProductsTag)
