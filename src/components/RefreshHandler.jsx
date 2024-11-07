import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RefreshHandler = ({ setIsAuthenticated }) => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setIsAuthenticated(true)
            if (location.pathname === "/" || location.pathname === "/register" || location.pathname === "/login") {
                navigate("/dashboard", { replace: true })
            }
        }
    }, [location.pathname, setIsAuthenticated])

    return null
}

export default RefreshHandler
