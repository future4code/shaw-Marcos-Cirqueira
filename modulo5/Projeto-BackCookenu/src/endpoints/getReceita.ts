import { Request, Response } from "express"
import { UserReceitabase } from "../data/UserReceitabase"
import { Authenticator } from "../services/Authenticator"

export const getReceitaId = async (req: Request, res: Response): Promise<void> => {
    try {

        const token = req.headers.authorization as string
        
        if (!token) {
            throw new Error("Token não enviado")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        const receitaDB = new UserReceitabase()
        const receita = await receitaDB.buscarReceitaId(req.params.id)
       
        const dataFormatada = Intl.DateTimeFormat("pt-BR").format(new Date(receita.data_criacao))
        
        res.send({
            receita: {
                id: receita.id,
                titulo: receita.titulo,
                descricao: receita.descricao,
                dataFormatada                      
            }
        })
    }catch(error:any){        
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}