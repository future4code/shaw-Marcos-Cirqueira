import React from 'react'
import axios from 'axios';
import { Container, Vote, NumberVote } from '../CardComments/Styled';
import { baseURL } from '../../constants/baseURL';
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";


export const CardComment = (props) => {
  const token = localStorage.getItem('token')


  const createCommentVote = (status) =>{
    const body = {
      "direction": status
    }
    axios.post(`${baseURL}/comments/${props.comment.id}/votes`, body, {
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
      <p>Enviado por: {props.comment.username}</p>
      <p>{props.comment.body}</p>      
      <Vote>
        <HiArrowCircleUp onClick={()=> createCommentVote(1)}></HiArrowCircleUp>
        <NumberVote>
        {props.comment.voteSum }
        </NumberVote> 
        <HiArrowCircleDown onClick={()=> createCommentVote(-1)}></HiArrowCircleDown>
      </Vote>
    </Container>
  )
}

