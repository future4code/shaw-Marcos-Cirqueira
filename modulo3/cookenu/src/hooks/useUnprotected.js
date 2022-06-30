import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const useUnProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {            
            navigate('/recipeslist')
        }
    }, [navigate])
} 