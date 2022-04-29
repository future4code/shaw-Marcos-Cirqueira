import React from "react";
import { useNavigate } from "react-router-dom";
import { Main, Second } from "./StyleTodos/HomeStyle"
import { goToListTripsPage, goToAdmin } from "../routes/coordinator";



export const HomePage = () => {
    const navigate = useNavigate()




    return (
        <Main>
            <Second>
                <h2>Home</h2>

                <div>
                    <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens </button>
                    <button onClick={() => goToAdmin(navigate)}> Área de Admin </button>
                </div>
            </Second>
        </Main>
    )
}