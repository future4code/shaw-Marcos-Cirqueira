import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { goRegister } from '../../routes/coordinator';
import logo_labeddit from '../../assets/img/logo_labeddit.png';
import {Container} from './LoginStyle'
import { CircularProgress } from '@material-ui/core';

export const LoginPage = () => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)

    const onSubmitLogin = (event) => {
        event.preventDefault();
        setLoading(true)
        axios.post(`${baseURL}/users/login`, form)
            .then((response) => {                
                localStorage.setItem('token', response.data.token)
                navigate('/feed')
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                alert("Senha incorreta!!!")
                console.log(err.response);
            })
    }

    return (
        <Container>
            <img src={logo_labeddit} />
            <form onSubmit={onSubmitLogin}>
                <input
                    name="email"
                    placeholder="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                />
                <input
                    name="password"
                    placeholder="senha"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                {isLoading ? <CircularProgress color={"inherit"} size={20}/>
                : <button>Entrar</button> }               

            </form>
            <button className='bt' onClick={() => goRegister(navigate)}>Criar uma conta!</button>
        </Container>

    )
}

