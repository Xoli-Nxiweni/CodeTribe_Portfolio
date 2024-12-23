import { useState, useEffect } from "react";
import PersonalIntroduction from "../personal introduction/PersonalIntroduction";
import Resume from "../resume/Resume";
import SkillsMatrix from "../skills matrix/SkillsMatrix";
import IndividualProjects from "../individual projects/IndividualProjects";
import GroupProjects from "../group projects/GroupProjects";
import Assessments from "../assessments/Assessments";
import FeedbackAndReflections from "../feedback and reflections/FeedbackAndReflections";
import PostProgramGoals from "../post program goals/PostProgramGoals";
import Contact from "../contact/Contact";
import "./TableOfContents.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiMessage } from "react-icons/bi";

const TableOfContents = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const pages = [
    { id: "personal-introduction", label: "👋 Personal Introduction", component: PersonalIntroduction },
    { id: "resume", label: "📄 Resume", component: Resume },
    { id: "skills-matrix", label: "💪 Skills Matrix", component: SkillsMatrix },
    { id: "individual-projects", label: "👨‍💻 Individual Projects", component: IndividualProjects },
    { id: "group-projects", label: "👥 Group Projects", component: GroupProjects },
    { id: "assessments", label: "📝 Assessments", component: Assessments },
    { id: "feedback-and-reflections", label: "💭 Feedback & Reflections", component: FeedbackAndReflections },
    { id: "post-program-goals", label: "🎯 Post-Program Goals", component: PostProgramGoals },
    { id: "contact-me", label: "Contact Me", component: Contact },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || pages[0].id);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    setCurrentPage(pageId);
    window.location.hash = pageId;
    setIsNavigationOpen(false);
  };

  const renderPage = () => {
    const page = pages.find((p) => p.id === currentPage);
    if (page) {
      const PageComponent = page.component;
      return <PageComponent />;
    }
    return <div className="empty-state">Please select a section from the navigation menu.</div>;
  };

  return (
    <div className="table-of-contents">
      {/* Navigation */}
      <div
        className={`navigation ${isNavigationOpen ? "force-open" : ""}`}
        onMouseEnter={() => setIsNavigationOpen(true)}
        onMouseLeave={() => setIsNavigationOpen(false)}
      >
        <h2>📚 Table of Contents</h2>
        <nav>
          {pages.map((page) => (
            <a
              key={page.id}
              href={`#${page.id}`}
              className={currentPage === page.id ? "active" : ""}
              onClick={(e) => handleNavClick(e, page.id)}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Container */}
      <div className="myContainer">
      <div className="topPart">
    <div className="contact-bar">
        <span>📞 Phone: <a href="tel:+27605450493">+27 60 545 0493</a></span>
        <span>📧 Email: <a href="mailto:xolinxiweni@gmail.com">xolinxiweni@gmail.com</a></span>
        <span className="social-icons">
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin /> Linkedin
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub /> Github
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter">
                <FaSquareXTwitter /> Twitter
            </a>
            <a href={''} target="_blank" rel="noopener noreferrer" title="Twitter">
                <BiMessage /> Contact
            </a>
        </span>
    </div>
</div>

        <div className="content">{renderPage()}</div>
      </div>
    </div>
  );
};

export default TableOfContents;
