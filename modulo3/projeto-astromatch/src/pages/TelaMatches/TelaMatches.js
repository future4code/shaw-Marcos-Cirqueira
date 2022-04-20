import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CardList = styled.div`
display: flex;
flex-direction: column;


img{
width: 70px;
border-radius: 40px;
margin-right: 10px;
}
.Seila{
    display: flex;
    margin: 5px;
}


`


export default function TelaMatches (props) {
    const [matches, setMatches] = useState([])


    useEffect(() => {
        pegaMatches()
    },[matches])
    // colocar o matche

    const pegaMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/matches")
        .then(response => {
            setMatches(response.data.matches)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const limparLista = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/clear")
        .then(response => {
            pegaMatches()
        })
        .catch(err => {

        })
    }
    
    const renderizar = matches.map((matche) => {
        return (
            <div className="Seila" key={matche.id}>                
                <img src={matche.photo} alt={matche.name}/>
                <p>{matche.name}</p>
            </div>
        )
    })
    return (
        <CardList>
            {renderizar}                      
            <button onClick={props.trocaTela}>Voltar</button>
            <button onClick={() => limparLista(matches)}>x</button>
        </CardList>
    )
}