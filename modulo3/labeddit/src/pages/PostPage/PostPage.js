import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../../constants/baseURL';
import { CardPost } from '../../components/CardPost/CardPost';
import { CardComment } from '../../components/CardComments/CardComment';
import { Header } from '../../components/Header/Header';
import { useForm } from '../../hooks/useForm';
import useRequest from '../../hooks/useRequest';


export const PostPage = () => {
  const { form, onChange } = useForm({ body: "" })
  const [update, setUpdate] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const token = localStorage.getItem('token')
  const { listPosts, comments } = useRequest(params.id, update)


  const createComment = (event) => {
    event.preventDefault()
    axios.post(`${baseURL}/posts/${params.id}/comments`, form, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setUpdate(!update)
      })
      .catch((err) => {
        console.log("Deu erro", err.response)
      })
  }

  const postagem = listPosts.filter((post) => {
    return post.id === params.id
  })

  return (
    <div>
      <Header />
      <h2>PostPage</h2>
      <form onSubmit={createComment}>
        <textarea
          name="body"
          placeholder='Adicionar comentário'
          value={form.body}
          onChange={onChange}
        />
        <button>Responder</button>
      </form>
      {listPosts && listPosts.length > 0 ? <CardPost post={postagem[0]} /> : null}
      {comments && comments.map((comment) => {
        return <CardComment key={comment.id} comment={comment} />
      })}
    </div>
  )
}

