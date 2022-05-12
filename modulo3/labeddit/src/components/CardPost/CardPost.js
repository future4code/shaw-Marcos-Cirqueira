import React from 'react'
import { Container, Comment, Vote } from '../CardPost/Styled'
import axios from 'axios'
import { goToPost } from "../../routes/coordinator"
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { BiComment } from "react-icons/bi";
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";


export const CardPost = (props) => {
    const navigate = useNavigate()
    const params = useParams()    
    const token = localStorage.getItem('token')


    const createPostVote = (status) =>{
        const body = {
          "direction": status
        }
        axios.post(`${baseURL}/posts/${props.post.id}/votes`, body, {
          headers: {
            Authorization: token
          }
        })
        .then((response) => {
            alert("Votou")
        })
        .catch((err) =>{
            alert("Erro")
        })
      }
    return (
        <Container>
            <p> Enviado por: {props.post.username}</p>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            {props.post.voteSum }            
            <Vote>
            <HiArrowCircleUp onClick={()=> createPostVote(1)}></HiArrowCircleUp>
            <HiArrowCircleDown onClick={()=> createPostVote(-1)}></HiArrowCircleDown>
            </Vote>
            {!params.id ?
                <Comment>
                    <BiComment onClick={() => goToPost(navigate, props.post.id)}></BiComment>
                    {props.post.commentCount === null ? <p>0</p> :
                    <p>{props.post.commentCount}</p>}
                </Comment>
                : null}

        </Container>
    )
}

