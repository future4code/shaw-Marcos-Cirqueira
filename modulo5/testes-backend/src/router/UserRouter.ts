import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController} from "../controller/UserController";
import { userData } from "../data/userData";

export const userRouter = express.Router();

const userBusiness = new UserBusiness(
    new userData()
)
const userController = new UserController(userBusiness)

userRouter.get("/users/profile/:id", userController.getUserById);

