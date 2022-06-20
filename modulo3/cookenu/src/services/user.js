import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import {goToRecipesList} from '../routes/coordinator'

export const login = (body, cleanFields, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      cleanFields()
      goToRecipesList(navigate)
      setRightButtonText("Logout")
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
  }

  export const signUp = (body, cleanFields, navigate, setRightButtonText) => {
      axios.post(`${BASE_URL}/user/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        cleanFields()
        goToRecipesList(navigate)
        setRightButtonText("Logout")
      })
      .catch((err) => {
          alert(alert(err.response.data.message))
      })
  }