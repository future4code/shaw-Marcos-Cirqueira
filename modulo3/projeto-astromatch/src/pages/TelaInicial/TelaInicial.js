import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardPerfil from "../../components/CardPerfil/CardPerfil";


const Paizao = styled.div`

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
            <CardPerfil perfil={perfil} />
            <div>
                <button onClick={pegaPerfil}>Deslike</button>
                <button onClick={() => { escolherPessoa(perfil.id) }}>Like</button>
                <button onClick={props.trocaTela}>Tela</button>
            </div>
        </Paizao>

    )
}