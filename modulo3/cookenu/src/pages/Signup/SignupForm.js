import React from 'react'
import { InputsContainer  } from './Styled'
import { TextField } from '@material-ui/core/'
import { Button } from '@material-ui/core/'
import { useForm } from '../../hooks/useForm'
import {signUp} from '../../services/user'
import { useNavigate } from 'react-router-dom'

export const SingnupForm = ({setRightButtonText}) => {  
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({name: "", email: "", password: "" })


  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, cleanFields, navigate, setRightButtonText)
  }
  return (        
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            autoFocus
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
          type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            Fazer Cadastro
          </Button>
        </form>        
      </InputsContainer>  
  
  )
}

