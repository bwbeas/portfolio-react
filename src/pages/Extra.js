import React, { useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Extra = () => {
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @media (max-width: 768px) {
        .extra-container {
          padding: 1rem !important;
        }
        .extra-title {
          font-size: 1.1rem !important;
        }
        .extra-description {
          font-size: 0.9rem !important;
        }
      }
      @media (max-width: 480px) {
        .extra-container {
          padding: 0.5rem !important;
        }
        .extra-title {
          font-size: 1rem !important;
        }
        .extra-description {
          font-size: 0.85rem !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="extra-container" style={{ padding: '2rem' }}>
      <h2 className="tilde-heading">my blogsites online</h2>
      <br></br>
      <h3 className="extra-title">
        <a href="https://shiulii.wordpress.com/" style={{ color: 'pink', textDecoration: 'none'}} target="_blank" rel="noreferrer">
          - a million pieces
        </a> 
        <FaExternalLinkAlt size={12} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
      </h3>
      <p className="graytext extra-description">my thoughts but mirrored and happier.</p>
      <br></br>
      <h3 className="extra-title">
        <a href="https://bellbuuu5.wordpress.com/" style={{ color: 'pink', textDecoration: 'none'}} target="_blank" rel="noreferrer">
          - what once was
        </a> 
        <FaExternalLinkAlt size={12} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
      </h3>
      <p className="graytext extra-description">impressions of love and grief throughout a year.</p>
    </div>
  );
};

export default Extra;