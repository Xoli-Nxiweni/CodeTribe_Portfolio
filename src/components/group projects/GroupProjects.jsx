import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GroupProjects.css';

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    team: ["John Doe", "Jane Smith", "Your Name"],
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/600x400", // Updated placeholder URL
    role: "Frontend Developer",
    contributions: [
      "Implemented responsive product catalog",
      "Built shopping cart functionality",
      "Integrated payment gateway"
    ],
    duration: "3 months",
    status: "Completed",
    github: "https://github.com/project1"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Team collaboration tool with real-time updates and task tracking",
    team: ["Alice Johnson", "Bob Wilson", "Your Name"],
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    image: "https://via.placeholder.com/600x400", // Updated placeholder URL
    role: "Full Stack Developer",
    contributions: [
      "Designed database schema",
      "Built REST API endpoints",
      "Implemented real-time notifications"
    ],
    duration: "2 months",
    status: "In Progress",
    github: "https://github.com/project2"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management and monitoring",
    team: ["Chris Brown", "Diana Miller", "Your Name"],
    technologies: ["Next.js", "Python", "AWS"],
    image: "https://via.placeholder.com/600x400", // Updated placeholder URL
    role: "Backend Developer",
    contributions: [
      "Implemented data aggregation logic",
      "Built analytics API",
      "Set up AWS infrastructure"
    ],
    duration: "4 months",
    status: "Completed",
    github: "https://github.com/project3"
  }
];

const ProjectCard = ({ project, onClick }) => (
  <motion.div 
    className="project-card"
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(project)}
    role="button" // Added for accessibility
    tabIndex={0} // Added for keyboard navigation
  >
    <img src={project.image} alt={`${project.title} project`} className="project-image" />
    <div className="project-content">
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className={`status-badge ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="technology-tags">
        {project.technologies.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-meta">
        <p>Role: {project.role}</p>
        <p>Duration: {project.duration}</p>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div 
    className="modal-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div 
      className="modal-content"
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      onClick={e => e.stopPropagation()}
    >
      <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
      <h2>{project.title}</h2>
      
      <img src={project.image} alt={`${project.title} project`} className="modal-image" />

      <div className="modal-grid">
        <div className="modal-section">
          <h3>Project Details</h3>
          <p>{project.description}</p>
          
          <h4>Technologies Used</h4>
          <div className="technology-tags">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="status-section">
            <h4>Project Status</h4>
            <span className={`status-badge ${project.status.toLowerCase()}`}>
              {project.status}
            </span>
          </div>
        </div>

        <div className="modal-section">
          <h3>My Role</h3>
          <p>{project.role}</p>
          
          <h4>Key Contributions</h4>
          <ul className="contributions-list">
            {project.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
          
          <h4>Team Members</h4>
          <div className="team-members">
            {project.team.map((member, index) => (
              <span key={index} className="member-tag">{member}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const GroupProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="group-projects">
      <header className="projects-header">
        <h1>Group Projects</h1>
        <p>
          Explore the collaborative projects I've worked on with talented team members. 
          Each project showcases our combined skills and dedication to creating impactful solutions.
        </p>
      </header>

      <div className="projects-grid">
        {MOCK_PROJECTS.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GroupProjects;