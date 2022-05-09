import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { useForm } from '../../hooks/useForm';

export const RegistrationPage = () => {
  const { form, onChange } = useForm({ name: "", email: "", password: "" })
  const navigate = useNavigate()



  const onRegister = (event) => {
    event.preventDefault()
    console.log("Cadastrou", onRegister());
    axios.post(`${baseURL}/users/signup`,)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        navigate('/feed')

      })
      .catch((err) => {
        alert("Senha incorreta!!!")
      })
  }

  return (
    <div>
      <h2>RegistrationPage</h2>
      <form onSubmit={onRegister}>
        <input
          name="name"
          placeholder="nome"
          type="name"
          value={form.name}
          onChange={onChange}
          pattern="[A-Z][a-z].* [A-Z][a-z].*"
          required
        />
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
          pattern="[0-9a-zA-Z$*&@#]{8,}"
          required
        />

        <button>Cadastrar</button>
        {/* <button onClick={() => goRegister(navigate)}>Criar uma conta!</button> */}

      </form>
    </div>
  )
}

