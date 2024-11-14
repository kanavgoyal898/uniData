import React from 'react'
import './Homepage.css'

const Homepage = () => {
    return (
        <div className="page">
            <div className="hero-section-container">
                <div className="hero-text-container">
                    <h1 className="hero-heading">uniData</h1>
                    <h2 className="sub-hero-heading">Your Hub for Research, Records, and Collaboration</h2>
                </div>
                <div className="hero-buttons">
                    <button className="outline-button">Explore</button>
                    <button className="filled-button">Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage
