import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '../constants/baseURL'

const useRequest = (id, update) => {
    const [listPosts, setListPosts] = useState([])
    const [comments, setComments] = useState([])
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
        axios.get(`${baseURL}/posts/${id}/comments`, {
            headers: {
                Authorization: token
            }
        })
            .then((response) => {
                setComments(response.data)
            })
            .catch((err) => {
                console.log("Deu erro")
            })
    }

    useEffect(() => {
        getPost()
        getComments()
    }, [update])
    return { listPosts, comments }

}

export default useRequest