import React from 'react'
import './ProfileContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGoogleScholar, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const links = [
    {
        icon: faGoogleScholar,
        url: "https://scholar.google.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faLinkedinIn,
        url: "https://linkedin.com",
    },
    {
        icon: faBuildingColumns,
        url: "https://orcid.org",
    },
    {
        icon: faLink,
        url: "https://portfolio.com",
    },
]

const ProfileContent = () => {
    const [isEditable, setIsEditable] = React.useState(false)

    const triggerFileInput = (event) => {
        event.preventDefault()
        console.log("triggerFileInput")
        document.getElementById("picture").click()
    }

    const triggerFileSubmit = (event) => {
        event.preventDefault()
        console.log("triggerFileSubmit")
        document.getElementById("picture-form").submit()
    }

    const handleEditToggle = (event) => {
        event.preventDefault()
        console.log("handleEditToggle")
        if (isEditable) {
            document.getElementById("details-form").submit()
            console.log("Submitted form")
        }
        setIsEditable(!isEditable)
    }

    return (
        <div className="profile-container">
            <form action="/" id="picture-form" className="picture-form">
                <div className="picture-container">
                    <img src="https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" alt="profile" className="profile-picture" />
                </div>
                <button className="edit-picture-button" onClick={triggerFileInput}>
                    Change Picture
                </button>
                <input onChange={triggerFileSubmit} type="file" name="picture" id="picture" accept="image/png, image/jpeg, image/jpg, image/gif" hidden />
            </form>
            <form action="/" id="details-form" className="details-form">
                <div className="name-details">
                    <div className="salutation-row">
                        <div className="salutation-container">
                            <select name="salutation" id="salutation" className="salutation" disabled={!isEditable}>
                                <option value="mr">Mr.</option>
                                <option value="ms">Ms.</option>
                                <option value="dr">Dr.</option>
                                <option value="prof">Prof.</option>
                            </select>
                        </div>
                        <button className={isEditable ? "submit-profile-button" : "edit-profile-button"} onClick={handleEditToggle}>
                            {isEditable ? "Submit" : "Edit profile"}
                        </button>
                    </div>
                    <div className="about-container">
                        <input placeholder="Name" name="name" className="name-input" disabled={!isEditable} />
                        <textarea placeholder="Bio" name="bio" className="about-input" disabled={!isEditable}></textarea>
                    </div>
                    <div className="socials-container">
                        {links.map((link, index) => (
                            <div key={index} className="social-container">
                                <div className="social-icon-container">
                                    <FontAwesomeIcon icon={link.icon} className="social-icon" />
                                </div>
                                <input type="text" placeholder={link.url} className="social-link-container" disabled={!isEditable} />
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileContent
