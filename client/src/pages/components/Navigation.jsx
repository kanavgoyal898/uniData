import React from 'react'
import './Navigation.css'

const Navigation = ({isSignedIn = false, showProfile=true}) => {
    return (
        <nav className="navigation-bar">
            <a className="home-navigation-button" href="/">uniData</a>
            <div className="search-container">
                <form action="/">
                    <input placeholder="Search" className="search-bar" type="text" />
                </form>
            </div>
            {isSignedIn ? (
                    showProfile ? (
                        <div className="profile-container">
                            <div className="profile-box">
                                <p className="profile-name">FirstName LastName</p>
                                <div className="action-buttons">
                                    <p className="status">Status</p>
                                    <button className="sign-out">Sign out</button>
                                </div>
                            </div>
                            <div>
                                <img className="profile-picture" src="https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" alt="profile" />
                            </div>
                        </div>
                    ) : (
                        <button className="filled-button">
                            Sign out
                        </button>
                    )
                ) : (
                    <button className="filled-button">
                        Sign in
                    </button>
                )
            }
        </nav>
    )
}

export default Navigation
