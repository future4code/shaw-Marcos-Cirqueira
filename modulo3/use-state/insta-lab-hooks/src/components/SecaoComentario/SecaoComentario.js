import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
const [secaoComentario, setSecaoComentario] = useState("")


	const onClickButton = () => {
		setSecaoComentario("")
		props.enviarComentario(secaoComentario)
	}

	const onChangeComentario = (event) => {
		setSecaoComentario(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={secaoComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => {onClickButton()}} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario