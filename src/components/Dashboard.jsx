import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Credentials.css'

const Dashboard = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        sessionStorage.removeItem("authToken")
        navigate("/")
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard