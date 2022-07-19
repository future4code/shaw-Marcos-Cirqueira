import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from '../constants/baseURL'

export const GetNumeros = (concursoId, concurso) => {
    const [numeros, setNumeros] = useState([])
    const [infs, setInfs] = useState([])
    useEffect(() => {
        if (concursoId) {
            axios.get(`${baseURL}/concursos/${concursoId}`)
                .then((response) => {
                    setInfs(response.data)
                    setNumeros(response.data.numeros)
                })
                .catch((error) => {
                    console.log("Deu erro", error);
                })
        }
    }, [concurso])
    return [numeros, infs]
} 