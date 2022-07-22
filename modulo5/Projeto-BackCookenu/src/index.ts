import app from "./app"
import { criarReceita } from "./endpoints/CriarReceita"
import { getPerfil } from "./endpoints/getPerfil"
import { getPerfilOutro } from "./endpoints/getPerfilOutro"
import { getReceitaId } from "./endpoints/getReceita"
import { Login } from "./endpoints/Login"
import { createUser } from "./endpoints/Signup"



app.post('/signup', createUser)
app.post('/login', Login)
app.get('/user/profile', getPerfil)
app.get('/user/:id', getPerfilOutro)
app.post('/recipe', criarReceita)
app.get('/recipe/:id',getReceitaId )


