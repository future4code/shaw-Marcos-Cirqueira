import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, ButtonHeader} from '../Style';
import logo_labenu from '../../assets/img/logo_labenu.png'


export const Header = () => {
    const token = localStorage.getItem('token')
    const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")
    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.clear('token')
        navigate('/')
    }

    const rightButtonAction = () => {
        if(token){
            logout()
            setRightButton("Login")
            navigate('/')

        }else {
            navigate('/')
        }
    }
    return (
        <Container>
            <img src= {logo_labenu} />
            <ButtonHeader onClick={rightButtonAction}>{rightButton}</ButtonHeader>
        </Container>
    )
}



