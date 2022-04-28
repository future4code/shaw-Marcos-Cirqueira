import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBackHome, goToCreateTrip, goToLogin } from "../routes/coordinator";
import {useProtectedPage} from "../hooks/useProtected";




export const AdminHomePage = () => {
    useProtectedPage()    
    const navigate = useNavigate()

    const useClearStorage = () => {
        window.localStorage.clear('token')
    }

    return (
        <div>
            <h2>Painel Administrativo</h2>
            <button onClick={() => goToBackHome(navigate)}>Voltar</button>
            <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
            <button onClick={ useClearStorage }> Logout</button>
        </div>
    )
}