import React from 'react'
import Navigation from './Navigation'
import './Page.css'
import './Feed.css'

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

const Publications = [
    {
        title: "A Comprehensive Review and Analysis of Machine Learning Approaches for Big Data Analytics and Data Mining Techniques in the Context of Cloud Computing",
        link: "/",
        authors: [
            { profile: "Emily Carter", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "Exploring Advanced Data Structures, Computational Algorithms, and Their Applications in Bioinformatics for Real-World Healthcare Problems",
        link: "/",
        authors: [
            { profile: "Michael Johnson", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Sophia Taylor", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "Novel Approaches in Graph Neural Networks and Their Applications to Complex Systems: A Detailed Review on Algorithms, Challenges, and Solutions",
        link: "/",
        authors: [
            { profile: "David Brown", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Olivia Davis", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Daniel Wilson", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "Scalable and Efficient Machine Learning Models for High-Dimensional Datasets in Artificial Intelligence and Their Applications to Real-Time Systems",
        link: "/",
        authors: [
            { profile: "Liam Garcia", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Emma Martinez", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "James Anderson", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Grace Thompson", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "An In-Depth Exploration of Multi-Agent Systems and Their Application to Cooperative Robotic Solutions in Autonomous Vehicle Technology",
        link: "/",
        authors: [
            { profile: "Benjamin Lee", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Ava Harris", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Noah Clark", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Charlotte Robinson", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Lucas Perez", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "Deep Reinforcement Learning for Complex Task Environments: Exploring Algorithms, Techniques, and Real-Time Decision Making in Autonomous Systems",
        link: "/",
        authors: [
            { profile: "Mia King", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Alexander Wright", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Amelia Young", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Henry Allen", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Isabella Scott", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Sebastian Walker", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "An Advanced Study on Quantum Computing Algorithms and Their Applications in Cryptography and Data Security for Modern Computational Systems",
        link: "/",
        authors: [
            { profile: "Sophia Adams", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Liam Johnson", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "Neural Network Architectures for Natural Language Processing and Speech Recognition: A Deep Dive into Modern Approaches and Future Directions",
        link: "/",
        authors: [
            { profile: "Lucas Thompson", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Emma White", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Benjamin Lee", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "A Comparative Analysis of Deep Learning Frameworks and Their Performance Metrics in Large-Scale Image and Video Recognition Systems",
        link: "/",
        authors: [
            { profile: "Charlotte Harris", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Amelia Davis", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    },
    {
        title: "Optimizing Machine Learning Algorithms for Edge Computing in the Internet of Things: A Study on Efficiency, Latency, and Scalability",
        link: "/",
        authors: [
            { profile: "Lucas Robinson", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Grace Adams", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" },
            { profile: "Sophia White", imageUrl: "https://media.gq.com/photos/5aa72bbf1d388948225ce5cd/4:3/w_1920,h_1440,c_limit/josh-radnor-gq.jpg" }
        ]
    }
]

const PublicProfile = () => {
    return (
        <div className="page">
            <Navigation />
            <div className="feed-container">
                <div className="left-container">
                    <p className="section-heading">Collaborator(s)</p>
                </div>
                <div className="middle-container">
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
                                        <a key={index} href={social.link} >
                                            <FontAwesomeIcon icon={social.icon} />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="middle-container-heading">Publications</div>
                        <table className="publication-table">
                            {Publications.map((publication, index) => {
                                return (
                                    <a href="{publication.link}">
                                        <tr key={index} className="publication-row">
                                            <td className="table-column-serial">{index+1}.</td>
                                            <td className="table-column-title">{publication.title}</td>
                                            <td className="table-column-profiles">
                                                <a href="/" className="contributor-list">
                                                    <div className="contributor-pictures">
                                                        {publication.authors.slice(0, 3).map((author, index) => {
                                                            return (
                                                                <img key={index} className="contributor-picture" style={{ zIndex: publication.authors.length - index }} src={author.imageUrl} alt="contributor" />
                                                            )
                                                        })}
                                                    </div>
                                                    {publication.authors.length > 3 && <a className="more-contributors" href="/"> + {publication.authors.length - 3} more</a>}
                                                </a>
                                            </td>
                                        </tr>
                                    </a>
                                )
                            })}
                        </table>
                </div>
                <div className="right-container">
                    <p className="section-heading">Author Details</p>
                </div>
            </div>
        </div>
    )
}

export default PublicProfile
