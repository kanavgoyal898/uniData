import React from 'react'
// import './Page.css'
import './Profile.css'
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

const qualifications = [
    {
        level: "Bachelors",
        title: "Computer Science",
    },
    {
        level: "Masters",
        title: "Computer Science",
    },
    {
        level: "PhD",
        title: "Computer Science",
    },
]

const collaborators = [
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
    {
        name: "John Doe",
        url: "https://123456.com",
        image: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg",
    },
]



const Profile = () => {
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

    return (
        <div className="page">
            <nav className="navigation-bar">
                <a className="home-navigation-button" href="/">uniData</a>
                <div className="search-container">
                    <form action="/">
                        <input placeholder="Search" className="search-bar" type="text" />
                    </form>
                </div>
                <button className="primary-button">
                    Sign out
                </button>
            </nav>
            <div className="main-content">
                <div className="profile-left-container">
                    <form action="/" id="picture-form" className="picture-form">
                        <div className="picture-container">
                            <img src="https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" alt="/" className="picture" />
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
                                    <select name="salutation" id="salutation" className="salutation">
                                        <option value="mr">Mr.</option>
                                        <option value="ms">Ms.</option>
                                        <option value="dr">Dr.</option>
                                        <option value="prof">Prof.</option>
                                    </select>
                                </div>
                                <button className="edit-button">
                                    Edit profile
                                </button>
                            </div>
                            <div className="about-container">
                                <input placeholder="Name" name="bio" type="text" className="name-input" />
                                <textarea placeholder="Bio" name="bio" className="about-input"></textarea>
                                <div className="gender-container">
                                    <input type="radio" id="he" name="pronouns" className="gender-radio-button-input" value="he" />
                                    <label htmlFor="he" className="gender-radio-button">he/him</label>
                                    <input type="radio" id="she" name="pronouns" className="gender-radio-button-input" value="she" />
                                    <label htmlFor="she" className="gender-radio-button">she/her</label>
                                    <input type="radio" id="them" name="pronouns" className="gender-radio-button-input" value="they" />
                                    <label htmlFor="them" className="gender-radio-button">they/them</label>
                                </div>
                            </div>
                            <div className="socials-container">
                                {links.map((link, index) => (
                                    <div key={index} className="social-container">
                                        <div className="social-icon-container">
                                        <FontAwesomeIcon icon={link.icon} className="social-icon" />
                                        </div>
                                        <input type="text" placeholder={link.url} className="social-link-container" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="center-container">
                    <div className="education">
                        <div className="main-content-heading">
                            Education
                        </div>
                        {qualifications.map((qualification, index) => (
                            <form key={index} className="education-container">
                                <div>{qualification.level}</div>
                                <div className="degree-container">
                                    <input type="text" placeholder="Degree Name" className="degree-name" />
                                    <input type="text" placeholder="YYYY" className="degree-year" />
                                </div>
                                <input type="text" placeholder="University Name" className="university-name" />
                            </form>
                        ))}
                    </div>
                    <div className="new-publication">
                        <div className="publication-row">
                            <div className="main-content-heading">
                                New Publication
                            </div>
                            <button className="import-button">
                                Import
                            </button>
                        </div>
                        <form className="publication-details-row">
                            <div className="publication-details">
                                <input type="text" placeholder="Publication title" className="publication-title" />
                                <textarea name="abstract" id="abstract" placeholder="Publication abstract" className="publication-abstract"></textarea>
                                <button className="submit-button">Submit</button>
                            </div>
                            <div className="publication-sub-details">
                                <input type="text" placeholder="Publication domain" className="publication-domain" />
                                <input type="text" placeholder="Publication sub-domain" className="publication-domain" />
                                <div className="collaborators-container">
                                    <div className="collaborators-sub-container">
                                        {collaborators.slice(0, 11).map((collaborator, index) => (
                                            <div key={index} className="collaborator-container">
                                                <a href={collaborator.url} className="collaborator-link">
                                                    <img src={collaborator.image} alt="collaborator-picture" className="collaborator-picture" />
                                                </a>
                                            </div>
                                        ))}
                                        {collaborators.length == 12 && (
                                            <div className="collaborator-container">
                                                <a href={collaborators.at(collaborators.length-1).url} className="collaborator-link">
                                                    <img src={collaborators.at(collaborators.length-1).image} alt="collaborator-picture" className="collaborator-picture" />
                                                </a>
                                            </div>
                                        )}
                                        {collaborators.length > 12 && (
                                            <a href="/">
                                                <div className="extra-collaborators">
                                                        + {collaborators.length - 12}
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                    <button className="add-collaborators-button">
                                        Add Collaborators
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
