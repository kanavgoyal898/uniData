import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [isSignedIn, setIsSignedIn] = React.useState(localStorage.getItem("userToken") ? true : false)
    const [showProfile, setShowProfile] = React.useState(location.pathname == "/feed" ? true : false)
    
    const handleLogout = () => {
        console.log("User signed out")
        localStorage.removeItem("userEmail")
        localStorage.removeItem("userToken")
        navigate("/")
    }

    return (
        <nav className="navigation-bar">
            <Link className="home-navigation-button" to="/">uniData</Link>
            <div className="search-container">
                <form action="/">
                    <input placeholder="Search" className="search-bar" type="text" />
                </form>
            </div>
            {isSignedIn ? (
                    showProfile ? (
                        <div className="navigation-profile-container">
                            <div className="profile-box">
                                <p className="profile-name">FirstName LastName</p>
                                <div className="action-buttons">
                                    <p className="status">Status</p>
                                    <button className="sign-out" onClick={handleLogout}>Sign out</button>
                                </div>
                            </div>
                            <Link to="/profile">
                                <img className="navigation-profile-picture" src="https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" alt="profile" />
                            </Link>
                        </div>
                    ) : (
                        <button onClick={handleLogout} className="filled-button">
                            Sign out
                        </button>
                    )
                ) : (
                    <Link className="filled-button" to="/signin">
                        Sign in
                    </Link>
                )
            }
        </nav>
    )
}

export default Navigation
