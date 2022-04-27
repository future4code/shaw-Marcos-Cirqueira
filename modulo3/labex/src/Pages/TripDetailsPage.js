import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../constants/Url";


const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            console.log('Não está logado');
            navigate('/login')
        }
    }, [])
}

export const TripDetailsPage = () => {
    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`${Url}/trip/CGu2gMKmaN75TQOKKu3G`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                console.log("Deu certo", response.data);
            })
            .catch((err) => {
                console.log("Deu erro", err.response);
            })
    }, [])
    return (
        <div>
            <h2> TripDetailsPage </h2>
        </div>
    )
}