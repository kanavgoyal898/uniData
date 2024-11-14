import React from 'react'
import './Profile.css'
import Navigation from './components/Navigation'
import ProfileContent from './components/ProfileContent'
import EducationContent from './components/EducationContent'
import PublicationContent from './components/PublicationContent'

const Profile = () => {
    return (
        <div className="page">
            <Navigation isSignedIn={true} showProfile={false} />
            <div className="main-content">
                <ProfileContent />
                <div className="center-container">
                    {/* <EducationContent /> */}
                    <PublicationContent />
                </div>
            </div>
        </div>
    )
}

export default Profile
