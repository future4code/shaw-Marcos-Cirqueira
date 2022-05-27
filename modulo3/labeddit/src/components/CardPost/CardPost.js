import React, {useState} from 'react'
import { Container, Comment, NumberVote, Borda1, Borda2, Nome } from '../CardPost/Styled'
import axios from 'axios'
import { goToPost } from "../../routes/coordinator"
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { BiComment } from "react-icons/bi";
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";


export const CardPost = (props) => {
  const [update, setUpdate] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const token = localStorage.getItem('token')


  const createPostVote = (status) => {
    const body = {
      "direction": status
    }
    axios.post(`${baseURL}/posts/${props.post.id}/votes`, body, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setUpdate(!update)
        alert("Votou")
      })
      .catch((err) => {
        alert("Erro")
      })
  }
  return (
    <Container>
      <Nome>
      <p> Enviado por:{props.post.username} </p> 
      </Nome>           
      <p>{props.post.title}</p>      
      {!params.id ?
        <Comment>
          <Borda1>
            <HiArrowCircleUp onClick={() => createPostVote(1)}></HiArrowCircleUp>
            <NumberVote>
              {props.post.voteSum}
            </NumberVote>
            <HiArrowCircleDown onClick={() => createPostVote(-1)}></HiArrowCircleDown>
          </Borda1>
          <Borda2>            
              <BiComment onClick={() => goToPost(navigate, props.post.id)} />            
            {props.post.commentCount === null ? <p>0</p> :
              <p>{props.post.commentCount}</p>}
          </Borda2>

        </Comment>
        : null}
    </Container>
  )
}

