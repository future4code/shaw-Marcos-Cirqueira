import axios from "axios";
import React, { useEffect, useState } from "react";
import { Url } from "../constants/Url";
import { useForm } from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtected";




export const CreateTripPage = () => {
    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    useProtectedPage()
    const token = localStorage.getItem('token')

    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${Url}/trip`, form, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                console.log("Deu certo", response.data.trip);
                // setName(response.data.trip)
            })
            .catch((err) => {
                console.log("Deu erro", err);
            })

    }

    return (
        <div>
            <h2>Criar Viagem</h2>
            <form onSubmit={createTrip}>
                <input
                    name="name"
                    placeholder="nome"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <select name="planet">
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Jupiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Neturno</option>
                    <option>Plutão</option>
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
                <button>Criar</button>
            </form>
        </div>
    )
}