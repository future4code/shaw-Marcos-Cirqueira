import axios from "axios";
import React from "react";
import { Url } from "../constants/Url";
import { useForm } from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtected";
import { goToAdminPa } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Container, Down } from "./StyleTodos/CreateTripStyle"


export const CreateTripPage = () => {
    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    useProtectedPage()
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${Url}/trips`, form, {
            headers: {

                "Content-Type": "application/json",
                auth: token
            }
        })
            .then((response) => {
                console.log("Deu certo", response.data.trip);
            })
            .catch((err) => {
                console.log("Deu erro", err);
            })

    }

    return (
        <Container>          
            
            
                <form onSubmit={createTrip}>
                <h2>Criar Viagem</h2>
                    <input
                        name="name"
                        placeholder="Nome da viagem"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        required
                    />
                    
                    <select name="planet" onChange={onChange}>
                        <option value={"Mercúrio"}>Mercúrio</option>
                        <option value={"Vênus"}>Vênus</option>
                        <option value={"Terra"}>Terra</option>
                        <option value={"Marte"}>Marte</option>
                        <option value={"Jupiter"}>Jupiter</option>
                        <option value={"Saturno"}>Saturno</option>
                        <option value={"Urano"}>Urano</option>
                        <option value={"Neturno"}>Neturno</option>
                        <option value={"Plutão"}>Plutão</option>
                    </select>
                    
                    <input
                        name="date"
                        placeholder="date"
                        type="date"
                        value={form.date}
                        onChange={onChange}
                        required
                    />
                    <input
                        name="description"
                        placeholder="Descrição"
                        type="text"
                        value={form.description}
                        onChange={onChange}
                        required
                    />
                    <input
                        name="durationInDays"
                        placeholder="Duração em dias"
                        type="number"
                        value={form.durationInDays}
                        onChange={onChange}
                        required
                    />
                    <Down>
                    <button onClick={() => goToAdminPa(navigate)}> Voltar</button>
                    <button>Criar</button>
                    </Down>
                </form>
            
        </Container>
    )
}