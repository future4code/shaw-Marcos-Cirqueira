import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { goRegister } from '../../routes/coordinator';

export const LoginPage = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
  const navigate = useNavigate()

  const onSubmitLogin = (event) => {
      event.preventDefault()

      axios.post(`${baseURL}/users/login`, form)
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
                  placeholder="senha"
                  type="password"
                  value={form.password}
                  onChange={onChange}
                  required
              />
              
              <button>Entrar</button>
              <button onClick={() => goRegister(navigate)}>Criar uma conta!</button>
              
          </form>
          </div>
      </div>
  )
}

