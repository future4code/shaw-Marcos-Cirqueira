import React from 'react'
import { LogoImage, ScreenContainer, SignUpButtonContainer } from './Styled'
import logo from '../../assets/logo.png'
import { Button } from '@material-ui/core/'
import { LoginForm } from './LoginForm'
import { goToSignup } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { useUnProtectedPage } from '../../hooks/useUnprotected'

export const Login = ({setRightButtonText}) => {
  const navigate = useNavigate()
  useUnProtectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm setRightButtonText={setRightButtonText} />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignup(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

