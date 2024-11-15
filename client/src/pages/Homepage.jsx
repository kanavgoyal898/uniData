import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Homepage.css'

const Homepage = () => {
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="hero-section-container">
                <div className="hero-text-container">
                    <h1 className="hero-heading">uniData</h1>
                    <h2 className="sub-hero-heading">Your Hub for Research, Records, and Collaboration</h2>
                </div>
                <div className="hero-buttons">
                    <Link className="outline-button" to="/feed">Explore</Link>
                    <Link className="filled-button" to="/signin">Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage
