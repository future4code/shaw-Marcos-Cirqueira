import PostBusiness from "../business/PostBusiness";
import UserBusiness from "../business/UserBusiness";
import { app } from "../controller/app";
import PostData from "../data/PostData";
import UserData from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import PostController from "./PostController";
import UserController from "./UserController"


const userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const userController = new UserController(
    userBusiness
);


const postBusiness = new PostBusiness(
    new PostData(),
    new IdGenerator(),
    new Authenticator()
)

const postController = new PostController(
    postBusiness
);

// Criar e Fazer login - Usuário
app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)

// Criar Post
app.post('/post/create', postController.createPost)
app.get('/post/:id', postController.getPostById)


console.log("Bora lá!!!");


