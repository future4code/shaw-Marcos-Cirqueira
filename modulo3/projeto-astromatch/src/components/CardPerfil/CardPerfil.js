import React from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
text-align: start;
width: 80%;
height: 80%;
margin: 20px;
padding: 5px;
box-shadow: 5px 5px 10px black;
border-radius: 15px;
color: black;
background-size: 100%;
background-position: center center;
background: url(${(props) => props.src});
background-repeat: no-repeat;
`

export default function CardPerfil(props) {

    return (        
        <Card>
            <img src={props.perfil.photo}></img>
            <p>{props.perfil.name}</p>
            <p>{props.perfil.age}</p>
            <p>{props.perfil.bio}</p>
        </Card>
    )
}