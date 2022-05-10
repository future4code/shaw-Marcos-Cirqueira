import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { goRegister } from '../../routes/coordinator';
import logo_labeddit from '../../assets/img/logo_labeddit.png';
import {Container} from './LoginStyle'

export const LoginPage = () => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    const navigate = useNavigate()

    const onSubmitLogin = (event) => {
        event.preventDefault();

        axios.post(`${baseURL}/users/login`, form)
            .then((response) => {
                console.log("Logou");
                localStorage.setItem('token', response.data.token)
                navigate('/feed')
            })
            .catch((err) => {
                alert("Senha incorreta!!!")
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

                <button>Entrar</button>               

            </form>
            <button className='bt' onClick={() => goRegister(navigate)}>Criar uma conta!</button>
        </Container>

    )
}

