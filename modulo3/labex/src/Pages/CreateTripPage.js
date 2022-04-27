import axios from "axios";
import React, { useEffect, useState } from "react";
import { Url } from "../constants/Url";


export const CreateTripPage = () => {
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setDurationInDays] = useState("")

    useEffect(() => {
        console.log(name, planet, date, description, durationInDays );
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }
        axios.post(`${Url}/trips`, body)
        // header 
        .then((response) => {
            console.log("Deu certo", response.data.trip);
            // setName(response.data.trip)
        })
        .catch((err) => {
            console.log("Deu erro", err.response);
        })
    }, [])

    return (
        <div>
            <h2>Criar Viagem</h2>
        </div>
    )
}