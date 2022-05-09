import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export const useClearStorage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.clear('token')
    
        if (!token) {
            console.log('Não está logado');
            navigate('/login')
        }
    }, [])
}


