import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Container, ButtonHeader, Clear} from '../Header/Style';
import logo_labenu from '../../assets/img/logo_labenu.png'
import {toFeed} from '../../routes/coordinator';
import { MdClear } from "react-icons/md";


export const Header = (props) => {
    const token = localStorage.getItem('token')
    const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")     
    const navigate = useNavigate()
    const params = useParams()

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
            <Clear>
            {!params.id ? null : <MdClear onClick={()=> toFeed(navigate)}  />} 
            </Clear>          
            <img src= {logo_labenu} />            
            <ButtonHeader onClick={rightButtonAction}>{rightButton}</ButtonHeader>
        </Container>
    )
}



