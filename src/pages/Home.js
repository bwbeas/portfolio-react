import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const h4Style = { color: 'lightgrey' };

const Home = () => {
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @media (max-width: 768px) {
        .home-container {
          padding: 1rem !important;
        }
        .home-description {
          font-size: 0.95rem !important;
        }
        .work-title {
          font-size: 1.1rem !important;
        }
        .social-icons a {
          font-size: 0.9rem !important;
        }
      }
      @media (max-width: 480px) {
        .home-container {
          padding: 0.5rem !important;
        }
        .home-description {
          font-size: 0.85rem !important;
          line-height: 1.4 !important;
        }
        .work-title {
          font-size: 1rem !important;
        }
        .work-date {
          font-size: 13px !important;
        }
        .work-description {
          font-size: 0.9rem !important;
        }
        .social-icons a {
          font-size: 0.85rem !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="home-container" style={{ padding: '2rem' }}>
      
      <div className="name-box">
        <h1 className="typing-effect">im beas</h1>
      </div>
      
      <h2 className="tilde-heading">hi :)</h2>
      <h4 className="home-description" style={h4Style}>20 year old cs undergraduate. i like watching debates online, more of ones which involve women. im a fan of orchestral scores involving hell lot of piano compositions. i love to write. i like speaking. i love the web.</h4>
      <br></br>

      <h2 className="tilde-heading">work</h2>
      <h3 className="work-title">
        <a href="https://internshipstudio.com/" style={{ color: 'pink', textDecoration: 'none'}} target="_blank" rel="noreferrer">
          iStudio
        </a>
      </h3>
      <p className="work-date" style={{ color: 'grey', fontSize: '15px'}}>july 2024</p>
      <p className="work-description">web design and web development | intern</p>
      
      <br></br>
      <h3 className="work-title">
        <a href="https://www.linkedin.com/company/kshitiksha-foundation/" style={{ color: 'pink', textDecoration: 'none'}} target="_blank" rel="noreferrer">
          Kshitiksha Foundation
        </a>
      </h3>
      <p className="work-date" style={{ color: 'grey', fontSize: '15px'}}>may 2024</p>
      <p className="work-description">content writer and volunteer | intern</p>
      
      <br></br>

      <h2 className="tilde-heading">socials</h2> <br></br>
      <div className="social-icons">
        <a href="https://github.com/bwbeas" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />  bwbeas
        </a> <br></br><br></br>
        <a href="https://linkedin.com/in/beas-jana/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />  beas jana
        </a><br></br> <br></br>
        <a href="mailto:bellbuuuwork6@example.com">
          <FaEnvelope size={20} />  bellbuuuwork6@gmail.com
        </a><br></br><br></br>
      </div>

    </div>
  );
};

export default Home;