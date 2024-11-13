import React from 'react'
import Navigation from './Navigation'
import './Page.css'
import './Paper.css'

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
                <div className="paper-content">
                    <div className="paper-details">
                        <div className="paper-category">
                            Category
                        </div>
                        <div>
                            <a href="/" className="paper-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sed excepturi dignissimos, veniam magni commodi cumque reiciendis facere nobis deserunt qui voluptatibus iure provident, ipsam repellendus facilis. Nihil magnam aut provident veniam.</a>
                        </div>
                    </div>
                    <div className="paper-abstract">
                        <div className="abstract-title">
                            Abstract
                        </div>
                        <div className="abstract">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim nihil earum nesciunt deleniti blanditiis voluptatem quaerat illum officia quo repudiandae fuga sit odio necessitatibus, incidunt quam molestias, nisi neque accusamus qui eius quod illo? Tenetur molestias atque ut id molestiae exercitationem, quasi voluptatem minus odit animi quae aliquam necessitatibus doloremque est autem qui tempore consectetur illo quaerat culpa! Nostrum dolores, unde natus culpa accusantium laudantium reprehenderit at omnis tempore error eveniet eius laborum perferendis animi inventore sit dolorum ab. Vero molestiae numquam ea voluptatibus eaque ex obcaecati delectus! Odio optio repellendus sint quam id sapiente vitae? Provident facilis voluptatum aliquam nostrum ducimus? Saepe facere excepturi libero, ipsa recusandae exercitationem assumenda eaque quos dicta porro perspiciatis beatae nesciunt reprehenderit, ratione, ipsam consequatur laboriosam dolorem quisquam maxime expedita optio.
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="sub-container">
                        <div className="contributor-heading">
                            Contributors
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
                        <div className="references-title">
                            References
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paper
