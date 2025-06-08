import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @media (max-width: 480px) {
        nav {
          padding: 0.5rem 0.5rem !important;
          gap: 1rem !important;
          left: 10px !important;
          right: 10px !important;
          transform: none !important;
          width: auto !important;
          overflow-x: auto;
          border-radius: 20px !important;
        }
        nav::-webkit-scrollbar {
          height: 6px;
        }
        nav::-webkit-scrollbar-thumb {
          background-color: rgba(255, 182, 193, 0.7);
          border-radius: 3px;
        }
        a {
          font-size: 0.9rem !important;
          white-space: nowrap;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const navStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(30, 30, 30, 0.9)',  
    borderRadius: '30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.7)',
    zIndex: 1000,
    overflowX: 'visible',
    maxWidth: 'calc(100% - 40px)', 
  };

  const linkStyle = (path) => ({
    cursor: 'pointer',
    color: location.pathname === path ? 'lightpink' : '#bbb', 
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s',
    whiteSpace: 'nowrap',
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle('/')}>home</Link>
      <Link to="/projects" style={linkStyle('/projects')}>projects</Link>
      <Link to="/blog-tech" style={linkStyle('/blog-tech')}>blog</Link>
      <Link to="/blog-creative" style={linkStyle('/blog-creative')}>i write</Link>
    </nav>
  );
};

export default Navbar;
