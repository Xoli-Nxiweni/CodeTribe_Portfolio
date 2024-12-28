import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IndividualProjects.css';

const IndividualProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "CSS", "Node.js"],
      role: "Frontend Developer",
      contributions: [
        "Implemented responsive UI components",
        "Integrated REST APIs",
        "Optimized performance"
      ],
      duration: "3 months",
      status: "Completed"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      technologies: ["TypeScript", "Next.js", "MongoDB"],
      role: "Full Stack Developer",
      contributions: [
        "Designed database schema",
        "Built REST API endpoints",
        "Implemented authentication"
      ],
      duration: "2 months",
      status: "In Progress"
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      technologies: ["Python", "Django", "PostgreSQL"],
      role: "Backend Developer",
      contributions: [
        "Implemented data models",
        "Built API endpoints",
        "Set up CI/CD pipeline"
      ],
      duration: "4 months",
      status: "Completed"
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Individual Projects</h1>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            aria-label={`View details of ${project.title}`}
          >
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
            </div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              <div className="technology-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
                ×
              </button>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="modal-details">
                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="technology-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-section">
                  <h3>My Role</h3>
                  <p>{selectedProject.role}</p>
                </div>
                <div className="modal-section">
                  <h3>Key Contributions</h3>
                  <ul className="contributions-list">
                    {selectedProject.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-section">
                  <h3>Duration</h3>
                  <p>{selectedProject.duration}</p>
                </div>
                <div className="modal-section">
                  <h3>Status</h3>
                  <span className={`status-badge ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                    {selectedProject.status}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndividualProjects;