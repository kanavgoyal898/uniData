import React from 'react'
import './EducationContent.css'

const qualifications = [
    {
        level: "Bachelors",
        year: 2000,
        university: "University of London",
    },
    {
        level: "Masters",
        title: "Computer Science",
        university: "University of London",
    },
    {
        level: "PhD",
        title: "Computer Science",
        year: 2008,
    },
]

const EducationContent = () => {
    return (
        <div className="education-section">
            <div className="main-content-heading">
                Education
            </div>
            {qualifications.map((qualification, index) => (
                <form key={index} className="education-form">
                    <div>{qualification.level}</div>
                    <div className="degree-container">
                        <input type="text" placeholder={qualification.title ? qualification.title : "Degree Title"} className="degree-name" />
                        <input type="text" placeholder={qualification.year ? qualification.year : "YYYY"} className="degree-year" />
                    </div>
                    <input type="text" placeholder={qualification.university ? qualification.university : "University Name"} className="university-name" />
                </form>
            ))}
        </div>
    )
}

export default EducationContent
