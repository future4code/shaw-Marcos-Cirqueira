import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { useProtectedPage } from '../../hooks/useProtected';
import { goToPost } from '../../routes/coordinator';
import { Header } from '../../components/Header/Header'
import { CardPost } from '../../components/CardPost/CardPost';
import { useForm } from '../../hooks/useForm';
import useRequest from '../../hooks/useRequest';

export const FeedPage = () => {
  const { form, onChange, cleanFields } = useForm({ title: "", body: ""})
  // const [posts, setPosts] = useState([])
  const [update, setUpdate] = useState(false)
  useProtectedPage()
  const navigate = useNavigate()
  const params = useParams()
  const token = localStorage.getItem('token')
  const {listPosts} = useRequest(params.id, update)

  // Get do POSTS >>>>>>>>>>>>>>>>>>>>>>>>>
  // const getListPosts = () => {
  //   axios.get(`${baseURL}/posts`, {
  //     headers: {
  //       Authorization: token
  //     }
  //   })
  //     .then((response) => {
  //       setPosts(response.data)
  //     })
  //     .catch((err) => {
  //       console.log("Deu erro", err.response)
  //     })
  // }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const createPost = (event) => {
    event.preventDefault()
    axios.post(`${baseURL}/posts`, form, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setUpdate(!update)
        cleanFields()
      })
      .catch((err) => {
        console.log("Deu erro", err.response)
      })
  }

  // useEffect(() =>{
  //   getListPosts()    
  // },[update])
  return (
    <div>
      <Header />
      <h2>Feed</h2>
      <form onSubmit={createPost}>
        <input
          name="title"
          placeholder='Título'
          value={form.title}
          onChange={onChange}
        />
        <textarea
          name="body"
          value={form.body}
          onChange={onChange}
        />
        <button>Postar</button>
      </form>
      {listPosts && listPosts.map((post) => {
        return <CardPost key={post.id} post={post} />
      })}
    </div>
  )
}





