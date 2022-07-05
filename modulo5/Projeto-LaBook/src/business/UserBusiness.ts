import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class UserBusiness {
    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
    ) { }

    signup = async (input: SignupInputDTO) => {

        const { name, email, password } = input
        if (!name || !email || !password) {
            throw new Error("Campos inválidos")

        }

        const registeredUser = await this.userData.findByEmail(email)
        if (registeredUser) {
            throw new Error("Email já cadastrado")
        }

        const id = this.idGenerator.generateId()

        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        await this.userData.insert(user)

        const token = this.authenticator.generateToken({ id })

        return token
    }

    login = async (login: LoginInputDTO) => {

        const { email, password } = login
        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user = await this.userData.findByEmail(email)

        if (!user) {
            throw new Error("Usuário não encontrado")
         }

         const hashedPassword = await this.hashManager.compare(password, user.password)
         if (!hashedPassword) {
            throw new Error("Senha incorreta")
         }

         const token = this.authenticator.generateToken({ id: user.id })

         return token
    }
}