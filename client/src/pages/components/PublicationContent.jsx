import React from 'react'
import { useForm } from 'react-hook-form'
import './PublicationContent.css'

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

const PublicationContent = () => {
    const {register, handleSubmit, reset, setError, formState: {errors}} = useForm()

    const onSubmit = async (data) => {
        try {
            const url = "http://localhost:3000/user/publication"
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("userToken"),
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (result.success) {
                reset()
                console.log("Publication created successfully")
            } else {
                console.log("Publication creation failed:", result.message)
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="new-publication">
            <div className="publication-row">
                <div className="main-content-heading">
                    Add new publication
                </div>
                <button className="import-button">
                    Import
                </button>
            </div>
            <form className="publication-details-row" onSubmit={handleSubmit(onSubmit)}>
                <div className="publication-details">
                    <input name="title" id="title" placeholder="Publication title" className="publication-title" {...register("title")} />
                    <textarea name="abstract" id="abstract" placeholder="Publication abstract" className="publication-abstract" {...register("abstract")}></textarea>
                    <div className="publication-row-submit">
                        <button type="submit" className="submit-button">Submit</button>
                        <input name="external-link" id="external-link" placeholder="External Link" className="publication-domain" {...register("link")} />
                    </div>
                </div>
                <div className="publication-sub-details">
                    <input type="text" placeholder="Publication domain" className="publication-domain" />
                    <input type="text" placeholder="Publication sub-domain" className="publication-domain" />
                    <div className="collaborators-container">
                        <div className="collaborators-sub-container">
                            {collaborators.slice(0, 11).map((collaborator, index) => (
                                <div key={index} className="collaborator-container">
                                    <a href={collaborator.url} target="_blank">
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
    )
}

export default PublicationContent
