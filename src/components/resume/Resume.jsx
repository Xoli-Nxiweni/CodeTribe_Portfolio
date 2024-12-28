// Import React and styles
// import React from 'react';
import './Resume.css';

const Resume = () => {
  const education = [
    { degree: "B.Sc. Computer Science", institution: "XYZ University", year: "2018-2022" },
    { degree: "High School Diploma", institution: "ABC High School", year: "2014-2018" }
  ];

  const experience = [
    { role: "Frontend Developer", company: "TechCorp", duration: "2022-Present" },
    { role: "Intern", company: "WebSolutions", duration: "2021-2022" }
  ];

  const skills = ["React", "JavaScript", "CSS", "HTML", "Node.js", "Git"];

  return (
    <div className="resume">
      <h1 className="resume-title">My Resume</h1>
      <div className="resume-section">
        <h2>Education</h2>
        <ul>
          {education.map((item, index) => (
            <li key={index} className="resume-item">
              <strong>{item.degree}</strong> - {item.institution} ({item.year})
            </li>
          ))}
        </ul>
      </div>
      <div className="resume-section">
        <h2>Experience</h2>
        <ul>
          {experience.map((item, index) => (
            <li key={index} className="resume-item">
              <strong>{item.role}</strong> - {item.company} ({item.duration})
            </li>
          ))}
        </ul>
      </div>
      <div className="resume-section">
        <h2>Skills</h2>
        <ul className="resume-skills">
          {skills.map((skill, index) => (
            <li key={index} className="resume-skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
