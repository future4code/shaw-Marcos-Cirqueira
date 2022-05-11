import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import {useProtectedPage} from '../../hooks/useProtected';
import {goToPost} from '../../routes/coordinator';
import {Header} from '../../components/Header/Header'
import { CardPost } from '../../components/CardPost/CardPost';

export const FeedPage = () => {
  const [posts, setPosts] = useState([]) 
  useProtectedPage()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  // Get do POSTS >>>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    axios.get(`${baseURL}/posts`, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {      
      setPosts(response.data)            
     
    })
    .catch((err) => {
      console.log("Deu erro", err.response)
    })
  }, [])

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



  
  return (
    <div>
      <Header />
      <h2>Feed</h2>      
      {posts && posts.map((post) => {
         return <CardPost key={post.id} post={post} />
       }) } 
             
    </div>
  )
}





