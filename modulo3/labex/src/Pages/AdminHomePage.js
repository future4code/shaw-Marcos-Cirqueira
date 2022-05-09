import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToBackHome, goToCreateTrip, goToDetailsTrips } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtected";
import { Url } from "../constants/Url";
import axios from "axios";
import { Container, Second } from "./StyleTodos/AdminStyle";
import { ImBin2 } from "react-icons/im";


export const AdminHomePage = () => {
    const [listTrips, setLisTrips] = useState([])
    useProtectedPage()
    const token = localStorage.getItem('token')


    useProtectedPage()
    const navigate = useNavigate()

    const useClearStorage = () => {
        window.localStorage.clear('token')
        navigate("/login")
    }

    useEffect(() => {
        axios.get(`${Url}/trips`)
            .then((response) => {
                setLisTrips(response.data.trips);
            })
            .catch((err) => {
                console.log("Deu erro", err.response)
            })
    }, [listTrips])

    const DelTrip = (id) => {
        if (window.confirm("Tem certeza que deseja deletar?")) {
            axios.delete(`${Url}/trips/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    auth: token
                }
            })
                .then((response) => {
                    console.log("Excluiu");
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }

    const render = listTrips.map((list) => {
        return (
            <div className="Lista" key={list.id}>
                <p onClick={() => goToDetailsTrips(navigate, list.id)}>Nome: {list.name}</p>
                <bin onClick={() => DelTrip(list.id)}> <ImBin2 /></bin>
            </div>
        )
    })

    return (
        <Container>
            <h2>Painel Administrativo</h2>
            <Second>
                <button onClick={() => goToBackHome(navigate)}>Voltar</button>
                <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
                <button onClick={useClearStorage}>Logout</button>
            </Second>
            {render}
        </Container>
    )
}