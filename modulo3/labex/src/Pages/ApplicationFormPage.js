import axios from "axios";
import React, { useEffect, useState } from "react";
import { Url } from "../constants/Url";
import { useForm } from "../hooks/useForm";
import { goToBackList } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { Paises } from "../constants/Paises";
import { Container, Second } from "./StyleTodos/ApplicationStyle"



export const ApplicationFormPage = () => {
    const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const navigate = useNavigate()

    const [trips, setTrips] = useState([])
    const [id, setId] = useState("")

    const onChangeId = (event) => {
        setId(event.target.value)
    }

    const onSubmitSend = (event) => {
        event.preventDefault()
        cleanFields()
        axios.post(`${Url}/trips/${id}/apply`, form, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                alert("Viagem criada com sucesso")
                console.log("FOI")
            })
            .catch((err) => {
                console.log("Erro", err);
            })
    }

    useEffect(() => {
        axios.get(`${Url}/trips`)
            .then((response) => {
                setTrips(response.data.trips)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [trips])

    const renderTrips = trips.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}>
                {trip.name}
            </option>
        )
    })


    return (
        <Container>
            <Second>
                <h2> Inscreva-se para uma viagem </h2>

                <form onSubmit={onSubmitSend}>
                    <select onChange={onChangeId} >
                        <option value={""}>
                            Escolha uma viagem
                        </option>
                        {renderTrips}
                    </select>

                    <input
                        name="name"
                        placeholder="nome"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        required
                    />
                    <input
                        name="age"
                        placeholder="Idade"
                        type="number"
                        value={form.age}
                        onChange={onChange}
                        required
                    />
                    <input
                        name="applicationText"
                        placeholder="Texto de Candidatura"
                        type="text"
                        value={form.applicationText}
                        onChange={onChange}
                        required
                    />
                    <input
                        name="profession"
                        placeholder="Profissão"
                        type="text"
                        value={form.profession}
                        onChange={onChange}
                        required
                    />

                    <select name="country" onChange={onChange} value={form.country}>
                        <option value={""}>Selecione um País</option>
                        {Paises()}
                    </select>
                    <button onClick={() => goToBackList(navigate)}>Voltar</button>
                    <button>Enviar</button>

                </form>

            </Second>
        </Container>
    )
}