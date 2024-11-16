import React from 'react'
import './Author.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGoogleScholar, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const socials = [
    { link: "/", icon: faGoogleScholar },
    { link: "/", icon: faGithub },
    { link: "/", icon: faLinkedinIn },
    { link: "/", icon: faBuildingColumns },
    { link: "/", icon: faLink },
]

const Author = () => {
    return (
        <div className="author-details-container">
            <div className="author-picture-container">
                <img src="https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" alt="profile" className="author-picture"/>
            </div>
            <div className="author-details">
                <div className="author-name">
                    Ted Mosby
                </div>
                <div className="author-email">
                    tedmosby@himym.com
                </div>
                <div className="socials">
                    {socials.map((social, index) => {
                        return (
                            <a key={index} href={social.link} target="_blank" >
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Author