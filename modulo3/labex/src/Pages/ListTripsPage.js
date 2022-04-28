import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../constants/Url";
import { goToHomePage, goToApplication } from "../routes/coordinator";


export const ListTripsPage = () => {
const [listTrips, setLisTrips] = useState([])

const navigate = useNavigate()

useEffect(() => {
    axios.get(`${Url}/trips`)
    .then((response) => {
        setLisTrips(response.data.trips);
    })
    .catch((err) => {
        console.log("Deu erro", err.response)
    })
}, [listTrips])

const render = listTrips.map((list) => {
    return (
        <div className="Lista" key={list.id}>            
            <p>Nome: {list.name} </p>
            <p>Descrição: {list.description} </p>
            <p>Planeta: {list.planet} </p>
            <p>duração: {list.durationInDays} </p>
            <p>Data: {list.date} </p>
        </div>
    )
})

    return (
        <div>
            <h2>Lista de Viagens</h2>

            <div>
                <button onClick={() => goToApplication(navigate)}>Inscrever-se</button>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>                
                {render}
            </div>
        </div>
    )
}