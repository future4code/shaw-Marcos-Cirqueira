import React from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../constants/Url";
import { goToListTripsPage, goToAdminHomePage  } from "../routes/coordinator";



export const HomePage = () => {
const navigate = useNavigate()


    return (
        <div>
            <h2>Home</h2>

            <div>
               <button onClick={() => goToListTripsPage (navigate)}>Ver Viagens </button> 
               <button onClick={() => goToAdminHomePage (navigate)}> Área de Admin </button> 
            </div>
        </div>
    )
}