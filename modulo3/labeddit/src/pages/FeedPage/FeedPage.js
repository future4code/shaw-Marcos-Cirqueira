import axios from 'axios';
import React, {useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { useProtectedPage } from '../../hooks/useProtected';
import { Header } from '../../components/Header/Header'
import { CardPost } from '../../components/CardPost/CardPost';
import { useForm } from '../../hooks/useForm';
import useRequest from '../../hooks/useRequest';
import { Container } from './FeedStyle';
import { Loading } from '../../components/Loading/Loading';

export const FeedPage = () => {
  const { form, onChange, cleanFields } = useForm({ title: "", body: ""})
  const [update, setUpdate] = useState(false)
  useProtectedPage()
  const navigate = useNavigate()
  const params = useParams()
  const token = localStorage.getItem('token')
  const {listPosts} = useRequest(params.id, update)

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

  return (
    <Container>
      <Header />      
      <form onSubmit={createPost}>
        <input
          name="title"
          placeholder='Título'
          value={form.title}
          onChange={onChange}
        />
        <textarea
          name="body"
          placeholder='Escreva seu post...'
          value={form.body}
          onChange={onChange}
        />
        <button>Postar</button>
      </form>
      {listPosts.length > 0 ?  listPosts.map((post) => {
        return <CardPost key={post.id} post={post} />
      })     :  <Loading />}
    
    </Container>
  )
}





