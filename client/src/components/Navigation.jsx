import React from 'react'
import './Page.css'

const Navigation = () => {
    return (
        <nav className="navigation-bar">
                <a className="home-navigation-button" href="/">uniData</a>
                <div className="search-container">
                    <form action="/">
                        <input placeholder="Search" className="search-bar" type="text" />
                    </form>
                </div>
                <button className="primary-button">
                    Sign in
                </button>
                <button className="primary-button">
                    Sign out
                </button>
                {/* <div className="profile-container">
                    <div className="profile-box">
                        <p className="profile-name">FirstName LastName</p>
                        <div className="action-buttons">
                            <p className="status" href="/">Status</p>
                            <button className="sign-out">Sign out</button>
                        </div>
                    </div>
                    <div>
                        <img className="profile-picture" src="https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" alt="profile" />
                    </div>
                </div> */}
        </nav>
    )
}

export default Navigation
