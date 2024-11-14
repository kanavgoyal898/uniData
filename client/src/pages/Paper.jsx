import React from 'react'
import './Paper.css'
import Navigation from './components/Navigation'
import PaperContent from './components/PaperContent'

const contributors = [
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

const Paper = () => {
    return (
        <div className="page">
            <Navigation />
            <div className="paper-container">
                <PaperContent />
                <div className="details-container">
                    <div className="sub-container">
                        <div className="sub-container-title ">
                            Contributor(s)
                        </div>
                        <div className="contributor-list">
                            {contributors.map((contributor, index) => (
                                <a href={contributor.url} key={index} className="contributor-container">
                                    <img src={contributor.image} alt={contributor.name} className="contributor" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="sub-container">
                        <div className="sub-container-title">
                            Reference(s)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paper
