import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../constants/Url";
import { goToBack } from "../routes/coordinator";
import { useForm } from "../hooks/useForm";
import {Container, Second, Botao} from "./StyleTodos/LoginStyle"


export const LoginPage = () => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    const navigate = useNavigate()

    const onSubmitLogin = (event) => {
        event.preventDefault()

        axios.post(`${Url}/login`, form)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                navigate('/admin/trips/list')
            })
            .catch((err) => {
                alert("Senha incorreta!!!")
            })
    }

    return (
        <Container>
            <Second>
            <h2>Login</h2>
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
                    placeholder="password"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <Botao>
                <button onClick={() => goToBack(navigate)}>Voltar</button>
                <button>Entrar</button>
                </Botao>
            </form>
            </Second>
        </Container>
    )
}