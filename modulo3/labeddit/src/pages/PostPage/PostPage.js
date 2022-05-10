import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtected';
import { baseURL } from '../../constants/baseURL';

export const PostPage = () => {
 const [comments, setComments] = useState("")

const navigate = useNavigate()
useProtectedPage()


 useEffect((id) => {
  const token = localStorage.getItem('token')
  axios.get(`${baseURL}/posts/${id}/comments`, {
    headers: {
      Authorization: token
    }
  })
  .then((response) => {      
    setComments(response.data)     
    console.log("OI",response.data);      
   
  })
  .catch((err) => {
    console.log("Deu erro", err.response)
  })
}, [])

const render = comments.map((comen) => {
  return (
    <div key={comen.id}>
      <p>{comen.body}</p>
    </div>
  )
})
  return (
    <div>
      <h2>PostPage</h2>
    {render}

    </div>
  )
}

