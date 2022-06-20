import axios from "axios"
import connection from "../data/connection"
import { Address } from "../types/typesAddress"

export const getAddress = async (cep: string) => {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    const address: Address = {
        cep: result.data.cep,
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    }
    return address
}

export const createAddress = async (address: Address) => {
    const { logradouro, bairro, cidade, estado, complemento, numero, cep } = address

    const result = await connection("user_address")
        .insert(
            address
        )
    return result
}