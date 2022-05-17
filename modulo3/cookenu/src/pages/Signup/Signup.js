import React from 'react'
import { SingnupForm } from './SignupForm'
import {ScreenContainer, LogoImage} from './Styled'
import logo from '../../assets/logo.png'
import { useUnProtectedPage } from '../../hooks/useUnprotected'


export const Signup = ({setRightButtonText}) => {
  useUnProtectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SingnupForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

