import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { useForm } from '../../hooks/useForm';
import { Container, Confirm } from '../RegistrationPage/RegistrationStyle'

export const RegistrationPage = () => {
  const { form, onChange } = useForm({ username: "", email: "", password: "" })
  const navigate = useNavigate()



  const onRegister = (event) => {
    event.preventDefault();

    axios.post(`${baseURL}/users/signup`, form)
      .then((response) => {
        console.log("Cadastrou");
        localStorage.setItem('token', response.data.token)
        navigate('/feed')

      })
      .catch((err) => {
        alert("Senha incorreta!!!")
      })
  }

  return (
    <Container>
      <h2>Olá, boas vindas ao LabEddit ;)</h2>
      <form onSubmit={onRegister}>
        <input
          name="username"
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
        <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
        <Confirm>
          <input
            type="checkbox"
            name="opcao"
            value="op"
          />
          <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
        </Confirm>

        <button>Cadastrar</button>
        {/* <button onClick={() => goRegister(navigate)}>Criar uma conta!</button> */}

      </form>
    </Container>
  )
}

