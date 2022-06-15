import { Request, Response } from "express"
import { getAddress, createAddress } from "../services/getAddress"

export const handleGetAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep

        if (!cep) {
            return res.status(400).send("Cep inválido!")
        }

        const address = await getAddress(cep)
        res.send(address)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}

export const handleCreateAddress = async (req: Request, res: Response) => {
    try {  
        const BAD_REQUEST = 400
        let {cep, complemento, numero} = req.body
        
        if (!cep) {
            return res.status(BAD_REQUEST).send("Cep inválido!")
        }
        if (!numero) {
            numero = 0
        }
        //Estou indo na api do address
        const address = await getAddress(cep)

        const fullAddress = {...address, complemento, numero:parseInt(numero),cep}

        const result = await createAddress (fullAddress)

        res.status(200).send(result)

    } catch (error: any) {
        res.status(500).send(error.message)
    }
}