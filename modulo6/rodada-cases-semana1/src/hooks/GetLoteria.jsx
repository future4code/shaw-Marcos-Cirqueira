import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from '../constants/baseURL'

export const GetLoterias = () => {
    const [loterias, setLoterias] = useState([])
    useEffect(() => {
        axios.get(`${baseURL}/loterias`)
            .then((response) => {
                setLoterias(response.data);
            }).catch((erro) => {
                console.log(erro);
            })
    }, [])
    return loterias
} 