import React, { useEffect } from 'react';
import { FaExternalLinkAlt , FaGithub} from 'react-icons/fa';

const projects = [
  {
    title: '🦋 huamemo',
    description: 'an everyday private memobook to<br>note down thoughts',
    link: 'https://huamemofe.vercel.app/',
    github: 'https://github.com/bwbeas/huamemo',
    techStack: ['MERN'],
  },
  
];

const Projects = () => {
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @media (max-width: 768px) {
        .projects-container {
          padding: 1rem !important;
        }
        .project-card h3 {
          font-size: 1.1rem !important;
        }
        .project-description {
          font-size: 0.9rem !important;
        }
        .github-link {
          font-size: 0.8rem !important;
        }
      }
      @media (max-width: 480px) {
        .projects-container {
          padding: 0.5rem !important;
          max-width: 100vw !important;
          overflow-x: hidden !important;
          box-sizing: border-box !important;
        }
        .project-card {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
          max-width: calc(100vw - 1rem) !important;
          box-sizing: border-box !important;
          white-space: normal !important;
          display: block !important;
          width: 100% !important;
          overflow: hidden !important;
          padding: 0.5rem !important;
          margin: 0 !important;
        }
        .project-card h3 {
          font-size: 1rem !important;
          word-wrap: break-word !important;
          white-space: normal !important;
          overflow: hidden !important;
          max-width: 100% !important;
        }
        .project-description {
          font-size: 0.85rem !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
          line-height: 1.4 !important;
          white-space: normal !important;
          overflow: hidden !important;
          max-width: 100% !important;
          padding-right: 0.5rem !important;
        }
        .github-link {
          font-size: 0.75rem !important;
          word-wrap: break-word !important;
          max-width: 100% !important;
        }
        .tech-badge {
          font-size: 0.8rem !important;
          padding: 2px 6px !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="projects-container" style={{ padding: '2rem' }}>
      <h2 className="tilde-heading">projects</h2>

      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3>
            {project.title} <FaExternalLinkAlt size={12} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
          </h3>

          <p className="graytext project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              style={{
                display: 'inline-flex',
                textDecoration:'none',
                alignItems: 'center',
                marginTop: '0.5rem',
                color: '#ccc',
                fontSize: '0.9rem',
              }}
            >
              <FaGithub style={{ marginRight: '6px' }} /> view on github
            </a>
          )} <br></br><br></br>
          <div className="tech-stack">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;