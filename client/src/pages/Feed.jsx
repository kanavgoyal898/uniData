import React from 'react'
import './Feed.css'
import Author from './components/Author'
import Navigation from './components/Navigation'
import Publications from './components/Publications'

const PublicProfile = ({isProfile=false}) => {
    return (
        <div className="page">
            <Navigation />
            <div className="feed-container">
                <div className="feed-left-container">
                    <p className="section-heading">Collaborator(s)</p>
                </div>
                <div className="feed-middle-container">
                    {isProfile && <Author />}
                    <Publications /> 
                </div>
                <div className="feed-right-container">
                    <p className="section-heading">Author Details</p>
                </div>
            </div>
        </div>
    )
}

export default PublicProfile
