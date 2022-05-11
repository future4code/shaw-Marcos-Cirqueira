import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtected';
import { baseURL } from '../../constants/baseURL';
import { CardPost } from '../../components/CardPost/CardPost';
import { CardComment } from '../../components/CardComments/CardComment';

export const PostPage = () => {
  const [listPosts, setListPosts] = useState([])
  const [comments, setComments] = useState([])
  const navigate = useNavigate()
  const params = useParams()
  const token = localStorage.getItem('token')


  const getPost = () => {
    axios.get(`${baseURL}/posts`, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setListPosts(response.data)        
      }).catch((error) => {

      });
  };

  const getComments = () => {
    const token = localStorage.getItem('token')
    axios.get(`${baseURL}/posts/${params.id}/comments`, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setComments(response.data)
        console.log("OI", response.data);

      })
      .catch((err) => {
        console.log("Deu erro", err.response)
      })
  }

  useEffect(() => {
    getPost()
    getComments()
  }, [])

  const postagem = listPosts.filter((post) => {
    return post.id === params.id
  })

  return (
    <div>
      <h2>PostPage</h2>
      {listPosts && listPosts.length > 0 ? <CardPost post={postagem[0]} /> : null}
      
      {comments && comments.map((comment) => {
        return <CardComment key={comment.id} comment={comment} />
      })}
    </div>
  )
}

