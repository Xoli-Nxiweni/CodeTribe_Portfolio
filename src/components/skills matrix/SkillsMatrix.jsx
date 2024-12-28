// Import React and styles
// import React from 'react';
import './SkillsMatrix.css';

const SkillsMatrix = () => {
    const techSkills = ["JavaScript", "React", "Node.js", "MongoDB", "Express", "CSS", "HTML", "Git", "Firebase"];
    const technicalSkills = ["Problem Solving", "Debugging", "API Integration", "Database Management", "Code Optimization"];
    const softSkills = ["Team Collaboration", "Communication", "Adaptability", "Critical Thinking", "Time Management"];
    const hardSkills = ["UI/UX Design", "Data Analysis", "Project Management", "Technical Writing"];

    return (
        <div className="skills-matrix">
            <h1 className="skills-title">My Skills Matrix</h1>
            <div className="skills-section">
                <h2>Tech Skills</h2>
                <ul>
                    {techSkills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-section">
                <h2>Technical Skills</h2>
                <ul>
                    {technicalSkills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-section">
                <h2>Soft Skills</h2>
                <ul>
                    {softSkills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-section">
                <h2>Hard Skills</h2>
                <ul>
                    {hardSkills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillsMatrix;
