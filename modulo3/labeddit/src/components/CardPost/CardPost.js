import React from 'react'
import { Container } from '../CardPost/Styled'
import axios from 'axios'
import { goToPost } from "../../routes/coordinator"
import { useNavigate, useParams } from 'react-router-dom'


export const CardPost = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    return (
        <Container>
            <p> Enviado por: {props.post.username}</p>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            {!params.id ? 
            <button onClick={() => goToPost(navigate, props.post.id)}>Comentar</button>
            : null}

        </Container>
    )
}

