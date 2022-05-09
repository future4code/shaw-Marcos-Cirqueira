import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardPerfil from "../../components/CardPerfil/CardPerfil";
import { BsSuitHeart } from "react-icons/bs";
import { RiUserHeartFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa"


const Paizao = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
width: 100%;
`
const Matches = styled.span`
display: flex;
justify-content: right;
font-size: 1.7rem;
color: rgb(117, 49, 146);
margin-top: 20px;
border-bottom: 1px solid black;
:hover{
    font-size: 1.3rem;
}

span{
cursor: pointer;
margin-right: 8px;
}
`
const LikeDeslike = styled.div`
display: flex;
justify-content: center;
gap:50px;
font-size: 2rem;

`
const Deslike = styled.span`
cursor: pointer;
color: #fd5068;
transition:background-color 1s ;
font-size: 2.5rem;
transition: transform 0.3s;

:hover{
    transform: scale(1.5);
}
`
const Like = styled.span`
cursor: pointer;
color: #1be4a1;
font-size: 2.5rem;
transition: transform 0.5s;

:active{
    color:  #fd5068;   
}
:hover{
    transform: scale(1.5);
}
`


export default function TelaInicial(props) {
    const [perfil, setPerfil] = useState({})
    const [atualiza, setAtualiza] = useState(false)

    useEffect(() => {
        pegaPerfil()
    }, [atualiza])


    const pegaPerfil = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/person")
            .then(response => {
                setPerfil(response.data.profile)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const escolherPessoa = (id) => {
        const body = {
            id: id,
            choice: true
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/choose-person
        `, body)
            .then(response => {
                setAtualiza(!atualiza);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Paizao>
            <Matches>
                <span onClick={props.trocaTela} ><RiUserHeartFill /></span>
            </Matches>
            <CardPerfil perfil={perfil} />
            <LikeDeslike>
                <Deslike onClick={pegaPerfil}>
                    <AiOutlineCloseCircle />
                </Deslike>
                <Like onClick={() => { escolherPessoa(perfil.id) }}>
                    <FaHeart />
                </Like>
            </LikeDeslike>
        </Paizao>

    )
}