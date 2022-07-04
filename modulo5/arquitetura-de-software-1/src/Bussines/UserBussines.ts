import { compare, hash } from "../services/hashManager"
import  insertUser  from "../data/insertUser"
import { generateToken, getTokenData } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { userLogin, userInput } from "../types/user"

class UserBussines {
   async signup(User: userInput) {
    const { name, email, password, role } = User

      if (
         !name ||         
         !email ||
         !password ||
         !role
      ) {
         throw new Error('Preencha os campos "name", "email" e "password"')
      }

      const id: string = generateId()
   
      const cypherPassword = await hash(password)
   
      const userData = new insertUser()

      await userData.insertUser({
         id,
         name,         
         email,
         password: cypherPassword,
         role
     })

     const token: string = generateToken({
      id,
      role: role
   })

   return token
   }

   async login(Login:userLogin) {
      const { email, password } = Login

      if (!email || !password) {
         throw new Error("'email' e 'senha' são obrigatórios")
      }

      const login = new insertUser() 
      const usuario = await login.loginUser(email)

      if (!usuario) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }
      
      const passwordIsCorrect: boolean = await compare(password, usuario.password)

      if (!passwordIsCorrect) {
         throw new Error("Senha incorreta")
      }

      const token: string = generateToken({
         id: usuario.id,
         role: usuario.role
      })

      return token
   }

   async getUsers(token: string){
      if(!token){
         throw new Error("Preencha o token!")
      }
      const data = getTokenData(token)
      
      if(!data){
         throw new Error("Token inválido!")
      }

      const getUserDB = new insertUser()

      const listaDeUsuarios = getUserDB.get()

      return listaDeUsuarios
      
   }

   async deleteUser(id: string, token: string){
      if(!token){
         throw new Error("Preencha o token!")
      }
      const data = getTokenData(token)
      
      if(!data){
         throw new Error("Token inválido!")
      }
      if(data.role !== "ADMIN"){
         throw new Error("Apenas administradores podem deletar usuários!")
      }

      const delUserDB = new insertUser()
      
      const deleteU = delUserDB.deleteUser(id)           

      return deleteU
      
   }

}

export default UserBussines