import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const RefreshHandler = ( {setIsSignedIn} ) => {
    const navigate = useNavigate()
    const location = useLocation()

    React.useEffect(() => {
        const isAuthenticated = localStorage.getItem("userToken") ? true : false
        setIsSignedIn(isAuthenticated)
        if (isAuthenticated && (location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/")) {
            navigate("/feed")
        }
        if (!isAuthenticated && location.pathname === "/profile") {
            navigate("/signin")
        }
    }, [location, navigate, setIsSignedIn])

    return (
        null
    )
}

export default RefreshHandler
