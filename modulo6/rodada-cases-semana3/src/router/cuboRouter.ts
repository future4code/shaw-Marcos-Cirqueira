import express from "express";
import { CuboUserBusiness } from "../business/CuboUserBusiness";
import { CuboUserController } from "../controller/CuboUserController";
import { CuboUserDataBase } from "../data/CuboUserDataBase";
import { IdGenerator } from "../services/IdGenerator";

export const cuboRouter = express.Router();


const userBusiness = new CuboUserBusiness(
    new CuboUserDataBase(), 
    new IdGenerator()
)

const userController = new CuboUserController(userBusiness);

cuboRouter.post('/createuser', userController.createUser)
cuboRouter.get('/getallusers', userController.getAllUsers)
cuboRouter.delete('/deleteUser/:id', userController.deleteUser)