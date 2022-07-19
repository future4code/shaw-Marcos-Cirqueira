import React, { useState } from "react";
import axios from "axios";
import userForm, { useForm } from "../hooks/userForm"
import { baseURL } from "../constants/baseURL";


export const HomePage = () => {
    const { form, onChange, cleanFields } = useForm({nome:"", loteriaId: 0, concursoId: ""})
    const [loterias, setLoterias] = useState([{}])
    const [loteriaConcursos, setLoteriaConcursos] = useState([{}])

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

    const IdsLoteriasConcursos = () =>{
        axios.get(`${baseURL}/loterias-concursos`,form)
        .then((response) =>{
            setLoteriaConcursos("Deu certo", response.concursoId);

        })
        .catch((error)=>{
            console.log("Deu erro", error);
        })
    }

    const Concursos = () =>{
        axios.get(`${baseURL}/concursos/${form.concursoId}`,form)
        .then((response) =>{
            console.log("Deu certo", response);

        })
        .catch((error)=>{
            console.log("Deu erro", error);
        })
    }

    return (
        <div>
            <form onSubmit={selectJogo}>
                <select name="nome" onChange={onChange}>
                    <option value={"MEGA-SENA"}>MEGA-SENA</option>
                    <option value={"QUINA"}>QUINA</option>
                    <option value={"LOTOFACIL"}>LOTOFACIL</option>
                    <option value={"LOTOMANIA"}>LOTOMANIA</option>
                    <option value={"TIMEMANIA"}>TIMEMANIA</option>
                    <option value={"DIA DE SORTE"}>DIA DE SORTE</option>
                </select>
            </form>
        </div>
    )
}