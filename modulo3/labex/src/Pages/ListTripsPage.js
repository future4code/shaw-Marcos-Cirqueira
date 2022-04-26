import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";


export const ListTripsPage = () => {
const navigate = useNavigate()


    return (
        <div>
            <h2>List Trips</h2>

            <div>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            </div>
        </div>
    )
}