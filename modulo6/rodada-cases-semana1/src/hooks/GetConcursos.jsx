import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from '../constants/baseURL'

export const GetConcursos = () => {
    const [concursos, setConsursos] = useState([])
    useEffect(() => {
        axios.get(`${baseURL}/loterias-concursos`)
            .then((response) => {
                setConsursos(response.data)
            })
            .catch((error) => {
                console.log("Deu erro", error);
            })
    }, [])
    return concursos
} 