import axios from "axios";
import React, { useEffect, useState } from "react";
import { Url } from "../constants/Url";
import { useProtectedPage } from "../hooks/useProtected";
import { useParams, useNavigate } from "react-router-dom";
import { goToAdmin2 } from "../routes/coordinator";
import { Container, ClickButton, TripCard } from "./StyleTodos/TripDetailsStyle";


export const TripDetailsPage = () => {
    const [trip, setTrip] = useState({})
    const [atualizar, setAtualizar] = useState(false)
    useProtectedPage()

    const nagivate = useNavigate()

    const params = useParams()


    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`${Url}/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setTrip(response.data.trip)
                console.log("Deu certo", response.data.trip);
            })
            .catch((err) => {
                console.log("Deu erro", err);
            })
    }, [atualizar])

    const approve = (idCandidato, status) => {
        const body = {
            "approve": status
        }
        const token = localStorage.getItem('token')        
        axios.put(`${Url}/trips/${params.id}/candidates/${idCandidato}/decide`, body, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setAtualizar(!atualizar)
                alert("Operação bem sucedida!")
            })
            .catch((err) => {
                console.log("Erro", err);
            })
    }


    return (
        <Container>
            <TripCard>
                <h2> {trip.name} </h2>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description} </p>
                <p>Planeta: {trip.planet} </p>
                <p>duração: {trip.durationInDays} </p>
                <p>Data: {trip.date} </p>
                <button onClick={() => goToAdmin2(nagivate)}>Voltar</button>
            </TripCard>
            <h2>Candidatos Pendentes</h2>
            {trip && trip.id && trip.candidates.length > 0 ? trip.candidates.map((candidat) => {
                return (
                    <div className="Candidates" key={candidat.id}>
                        <p>Nome: {candidat.name} </p>
                        <p>Idade: {candidat.age} </p>
                        <p>Motivação: {candidat.applicationText} </p>
                        <p>Profissão: {candidat.profession} </p>
                        <p>País: {candidat.country} </p>
                        <ClickButton>
                            <button onClick={() => approve(candidat.id, true)} >Aprovar</button>
                            <button onClick={() => approve(candidat.id, false)}>Reprovar</button>
                        </ClickButton>
                    </div>
                )
            }) :
                <h2>Não há mais candidatos</h2>
            }
            <h1>Candidatos aprovados</h1>
            {trip && trip.id && trip.approved.length > 0 ? trip.approved.map((candidat) => {
                return (
                    <div key={candidat.id}>
                        <p>Nome: {candidat.name}</p>
                    </div>
                )
            }) :
                <h2>Não há candidatos aprovados</h2>
            }
        </Container>
    )
}