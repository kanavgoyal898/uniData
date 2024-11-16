import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    const [user, setUser] = React.useState({})
    const [profile, setProfile] = React.useState()

    const navigate = useNavigate()
    const location = useLocation()
    
    const [isSignedIn, setIsSignedIn] = React.useState(localStorage.getItem("userToken") ? true : false)
    const [showProfile, setShowProfile] = React.useState(location.pathname == "/feed" ? true : false)

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const url = "http://localhost:3000/user"
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("userToken"),
                    }
                })
                const result = await response.json()
                if (result.success) {
                    setUser(result.user)
                } else {
                    console.error(result.message)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    }, [])

    React.useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const url = "http://localhost:3000/user/picture"
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("userToken"),
                    }
                })
                const result = await response.json()
                if (result.success) {
                    setProfile(result.user || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541")
                } else {
                    console.error(result.message)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchUserProfile()
    }, [])
    
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
                                <p className="profile-name">{user.name ? user.name : "Guest"}</p>
                                <div className="action-buttons">
                                    <p className="status">Status</p>
                                    <button className="sign-out" onClick={handleLogout}>Sign out</button>
                                </div>
                            </div>
                            <Link to="/profile">
                                <img className="navigation-profile-picture" src={profile} alt="profile" />
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
