import React, { useState } from "react";
import axios from "axios";
import userForm, { useForm } from "../hooks/userForm"
import { baseURL } from "../constants/baseURL";


export const HomePage = () => {
    const { form, onChange, cleanFields } = useForm({ nome: "", loteriaId: 0, concursoId: "" })
    const [loterias, setLoterias] = useState([])
    const [loteriaConcursos, setLoteriaConcursos] = useState([])

    const selectJogo = (event) => {
        event.preventDefault()
        axios.get(`${baseURL}/loterias`, form)
            .then((response) => {
                setLoterias("Deu certo", response.nome);
            })
            .catch((error) => {
                console.log("Deu erro", error);
            })
    }
    console.log(loterias);

    const IdsLoteriasConcursos = () => {
        axios.get(`${baseURL}/loterias-concursos`, form)
            .then((response) => {
                setLoteriaConcursos("Deu certo", response.concursoId);

            })
            .catch((error) => {
                console.log("Deu erro", error);
            })
    }

    const Concursos = () => {
        axios.get(`${baseURL}/concursos/${form.concursoId}`, form)
            .then((response) => {
                console.log("Deu certo", response);

            })
            .catch((error) => {
                console.log("Deu erro", error);
            })
    }

    const renderizar = loterias.filter((loteria) => {
        return (
            <div className="Seila" key={loteria.id}>
                <p>{loteria.nome}</p>
            </div>
        )
    })

    return (
        <div>
            <form onSubmit={selectJogo}>
                <select name="nome" onChange={onChange}>
                    <option value={"mega-sena"}>MEGA-SENA</option>
                    <option value={"quina"}>QUINA</option>
                    <option value={"lotofácil"}>LOTOFACIL</option>
                    <option value={"lotomania"}>LOTOMANIA</option>
                    <option value={"timemania"}>TIMEMANIA</option>
                    <option value={"dia de sorte"}>DIA DE SORTE</option>
                </select>
                {renderizar}
            </form>
        </div>
    )
}