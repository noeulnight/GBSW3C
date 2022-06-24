import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Logout = ({ isLogin }) => {
    const navigate = useNavigate()
    useEffect(() => {

        document.cookie = "SESSION_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
        isLogin(false)
    
        navigate('/')

    }, [])

    return (
        <></>
    )
}

export default Logout