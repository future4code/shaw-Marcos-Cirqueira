import axios from "axios";
import React, { useEffect } from "react";
import { Url } from "../constants/Url";
import { useProtectedPage } from "../hooks/useProtected";


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