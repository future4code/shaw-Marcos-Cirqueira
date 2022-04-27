import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../constants/Url";
import {goToBack} from "../routes/coordinator";


export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onSubmitLogin = () => {
        console.log(email, password);
        const body = {
            email: email,
            password: password
        }
        axios.post(`${Url}/login`, body)
            .then((response) => {
                console.log("Deu certor", response.data.token);
                localStorage.setItem('token', response.data.token)
                navigate('/admin/trips/list')
            })
            .catch((err) => {
                alert("Senha incorreta!!!")
                console.log("Deu erro", err.response);
            })
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                placeholder="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />
            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={onChangePassword}
            />
            <button onClick={onSubmitLogin}>Entrar</button>
            <button onClick={()=> goToBack(navigate)}>Voltar</button>
        </div>
    )
}