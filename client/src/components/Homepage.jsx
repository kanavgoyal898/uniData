import React from 'react'
import './Homepage.css'

const Homepage = () => {
    return (
        <div className="hero-section">
            <div className="hero-text">
                <h1 className="hero-heading">uniData</h1>
                <h2 className="sub-hero-heading">Your Hub for Research, Records, and Collaboration</h2>
            </div>
            <div className="hero-buttons">
                <button className="explore-button">Explore</button>
                <button className="sign-button">Sign In</button>
            </div>
        </div>
    )
}

export default Homepage
