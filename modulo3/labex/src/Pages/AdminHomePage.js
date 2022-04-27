import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBackHome, goToCreateTrip } from "../routes/coordinator";




export const AdminHomePage = () => {
    const navigate = useNavigate()
    


    return (
        <div>
            <h2>Painel Administrativo</h2>
            <button onClick={() => goToBackHome(navigate)}>Voltar</button>
            <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
            {/* <button onClick={}> Logout</button> */}
        </div>
    )
}