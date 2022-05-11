import React from 'react'
import {Container} from '../CardComments/Styled'

export const CardComment = (props) => {
  return (
    <Container>
    <h2>{props.comment.username}</h2>
    <p>{props.comment.body}</p>
    </Container>
  )
}

