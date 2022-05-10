import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import {useProtectedPage} from '../../hooks/useProtected';
import {goToPost} from '../../routes/coordinator';

export const FeedPage = () => {
  const [posts, setPosts] = useState([])
 

  useProtectedPage()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const onClearStorage = () => {    
    window.localStorage.clear('token')
    navigate('/')
  }

  useEffect(() => {
    axios.get(`${baseURL}/posts`, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {      
      setPosts(response.data)     
      console.log("OI",response.data);      
     
    })
    .catch((err) => {
      console.log("Deu erro", err.response)
    })
  }, [])
  
   const render = posts.map((item) => {
    return (
      <div key={item.id}>       
        <p>Enviado por:{item.username} </p>      
        <p onClick={()=> goToPost(navigate, item.id)}>{item.title} </p>
        <button>{item.voteSum} </button>
        <button>{item.userVote} </button>        
      </div>
    )
   })
  
  return (
    <div>
      <h2>Feed</h2>
      <button onClick={onClearStorage}>Logout</button>
      {render}      
    </div>
  )
}

