import React from 'react'
import { useForm } from 'react-hook-form'
import './ProfileContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGoogleScholar, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function convert64(picture) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(picture)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject("Error: " + error)
    })
}

const links = [
    {
        name: "googleScholar",
        icon: faGoogleScholar,
        url: "https://scholar.google.com",
    },
    {
        name: "github",
        icon: faGithub,
        url: "https://github.com",
    },
    {
        name: "linkedIn",
        icon: faLinkedinIn,
        url: "https://linkedin.com",
    },
    {
        name: "universityDomain",
        icon: faBuildingColumns,
        url: "https://orcid.org",
    },
    {
        name: "portfolio",
        icon: faLink,
        url: "https://portfolio.com",
    },
]

const ProfileContent = () => {
    const [user, setUser] = React.useState({})
    const [profile, setProfile] = React.useState()
    const [isEditable, setIsEditable] = React.useState(false)
    const {register, handleSubmit, reset, formState: {errors}} = useForm()

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const url = "http://localhost:3000/user"
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("userToken"),
                    }
                })
                const result = await response.json()
                if (result.success) {
                    setUser(result.user)
                } else {
                    console.error(result.message)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    }, [])

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const url = "http://localhost:3000/user/picture"
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("userToken"),
                    }
                })
                const result = await response.json()
                if (result.success) {
                    setProfile(result.user || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541")
                } else {
                    console.error(result.message)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    }, [])

    const onSubmit = async (data) => {
        try {
            const url = "http://localhost:3000/user/socials"
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("userToken"),
                },
                body: JSON.stringify({
                    name: data.name,
                    bio: data.bio,
                    googleScholar: data.googleScholar,
                    github: data.github,
                    linkedIn: data.linkedIn,
                    universityDomain: data.universityDomain,
                    portfolio: data.portfolio,
                })
            })
            const result = await response.json()
            if (result.success) {
                console.log("User socials updated successfully")
            } else {
                console.log("User socials update failed:", result.message)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onFileSubmit = async (event) => {
        const file = event.target.files[0]
        if (file) {
            if (file.size > 5000000) {
                alert("File size is too large. Please upload a smaller image.");
                return;
            } else {
                const url = "http://localhost:3000/user/picture"
                const data = await convert64(file)
                try {
                    const response = await fetch(url, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": localStorage.getItem("userToken"),
                        },
                        body: JSON.stringify({picture: data})
                    })
                    const result = await response.json()
                    if (result.success) {
                        setProfile(data)
                        console.log("User picture updated successfully")
                    } else {
                        console.log("User picture update failed:", result.message)
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }

    const handleEditToggle = () => {
        setIsEditable(!isEditable)
    }

    return (
        <div className="profile-container">
            <form id="picture-form" className="picture-form" encType="multipart/form-data">
                <div className="picture-container">
                    <img src={profile} alt="profile" className="profile-picture" />
                </div>
                <button type="button" className="edit-picture-button" onClick={() => document.getElementById("picture").click()}>
                    Change Picture
                </button>
                <input type="file" name="picture" id="picture" accept="image/png, image/jpeg, image/jpg, image/gif" onChange={onFileSubmit} hidden />
            </form>
            <form className="details-form" id="details-form" onSubmit={handleSubmit(onSubmit)}>
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
                        <button type="submit" className={isEditable ? "submit-profile-button" : "edit-profile-button"} onClick={handleEditToggle}>
                            {isEditable ? "Submit" : "Edit profile"}
                        </button>
                    </div>
                    <div className="about-container">
                        <input placeholder={user.name ? user.name : "Name"} name="name" className="name-input" {...register("name")} disabled={!isEditable} />
                        <textarea placeholder={user.bio ? user.bio : "Bio"} name="bio" className="about-input" {...register("bio")} disabled={!isEditable}></textarea>
                    </div>
                    <div className="socials-container">
                        {links.map((link, index) => (
                            <div key={index} className="social-container">
                                <div className="social-icon-container">
                                    <FontAwesomeIcon icon={link.icon} className="social-icon" />
                                </div>
                                <input type="text" name={link.name} placeholder={user.socials?.[link.name] ? user.socials[link.name] : link.url} defaultValue={user.socials?.[link.name] ? user.socials[link.name] : link.url} {...register(link.name)} className="social-link-container" disabled={!isEditable} />
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileContent
