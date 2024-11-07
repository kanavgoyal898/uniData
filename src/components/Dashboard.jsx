import React from 'react'
import { useState } from 'react'
import './Dashboard.css'

const publications = [
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque natus, odit beatae soluta incidunt aut nostrum voluptatem perspiciatis modi ad odio debitis et necessitatibus deleniti corporis. Dolores maiores ipsum praesentium? Ratione!",
        year: 2020,
        topics: ["Computer Science", "Artificial Intelligence", "Machine Learning"],
        category: "Journal",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque natus, odit beatae soluta incidunt aut nostrum voluptatem perspiciatis modi ad odio debitis et necessitatibus deleniti corporis. Dolores maiores ipsum praesentium? Ratione!",
        year: 2021,
        topics: ["Computer Science", "Artificial Intelligence", "Machine Learning"],
        category: "Journal",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque natus, odit beatae soluta incidunt aut nostrum voluptatem perspiciatis modi ad odio debitis et necessitatibus deleniti corporis. Dolores maiores ipsum praesentium? Ratione!",
        year: 2022,
        topics: ["Computer Science", "Artificial Intelligence", "Machine Learning"],
        category: "Conference",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque natus, odit beatae soluta incidunt aut nostrum voluptatem perspiciatis modi ad odio debitis et necessitatibus deleniti corporis. Dolores maiores ipsum praesentium? Ratione!",
        year: 2023,
        topics: ["Computer Science", "Artificial Intelligence", "Machine Learning"],
        category: "Conference",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque natus, odit beatae soluta incidunt aut nostrum voluptatem perspiciatis modi ad odio debitis et necessitatibus deleniti corporis. Dolores maiores ipsum praesentium? Ratione!",
        year: 2024,
        topics: ["Computer Science", "Artificial Intelligence", "Machine Learning"],
        category: "Book",
    },
]

const Dashboard = () => {
    const [expandedIndex, setExpandedIndex] = useState(null)
    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    
    return (
        <div className="dashboard-content">
            <div className="left-panel">
                Something
            </div>
            <div className="center-panel">
                <div className="overview">
                    <img src="https://pbs.twimg.com/profile_images/1395276684207734785/Jrx4nECg_400x400.jpg" alt="profile" className="rounded-full h-[144px] w-[144px] object-cover overflow-hidden"/>
                    <div className="flex flex-col my-lg items-start px-2xl details">
                        <h1 className="text-4xl my-xs">Dr. Sheldon Cooper</h1>
                        <h2 className="text-lg my-xs">Theoretical Physicist, Caltech US</h2>
                    </div>
                </div>
                <div className="publications">
                    <h2 className="publication-heading">Publications</h2>
                    <table className="publication-table">
                        <thead>
                            <tr className="publication-table-header">
                                <th className="publication-table-column-title">Title</th>
                                <th className="publication-table-column-year">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            { publications.map((publication, index) => {
                                return (    
                                    <tr className="publication-data-entry" onClick={()=>{toggleExpand(index)}} key={index}>
                                        <td className="publication-table-column-title">{publication.title}
                                        {expandedIndex === index && (
                                            <div className="flex flex-col items-start">
                                                
                                            </div>
                                        )}
                                        </td>
                                        <td className="publication-table-column-year">{publication.year}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="right-panel">
                Something
            </div>
        </div>
    )
}

export default Dashboard
