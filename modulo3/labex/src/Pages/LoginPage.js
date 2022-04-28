import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../constants/Url";
import { goToBack } from "../routes/coordinator";
import { useForm } from "../hooks/useForm";


export const LoginPage = () => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")


    const navigate = useNavigate()


    // const onChangeEmail = (event) => {
    //     setForm({ ...form, email: event.target.value })
    // }
    // const onChangePassword = (event) => {
    //     setForm({ ...form, password: event.target.value })
    // }
    const onSubmitLogin = (event) => {
        event.preventDefault()

        // const body = {
        //     email: email,
        //     password: password
        // }
        axios.post(`${Url}/login`, form)
            .then((response) => {
                // console.log("Deu certor", response.data.token);
                localStorage.setItem('token', response.data.token)
                navigate('/admin/trips/list')
            })
            .catch((err) => {
                alert("Senha incorreta!!!")
                // console.log("Deu erro", err.response);
            })
    }
    
    return (
        <div>
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
                <button>Entrar</button>
                <button onClick={() => goToBack(navigate)}>Voltar</button>
            </form>
        </div>
    )
}