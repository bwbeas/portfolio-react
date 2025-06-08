import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  function getOrdinal(n) {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
  const ordinal = getOrdinal(day);
  const options = { month: 'long', year: 'numeric' };
  const monthYear = date.toLocaleDateString('en-US', options);
  return `${day}${ordinal} ${monthYear}`;
}

const BlogList = () => {
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @media (max-width: 768px) {
        .blog-list-container {
          padding: 1rem !important;
        }
        .blog-link {
          font-size: 1rem !important;
        }
      }
      @media (max-width: 480px) {
        .blog-list-container {
          padding: 0.5rem !important;
        }
        .blog-link {
          font-size: 0.9rem !important;
        }
        .blog-item {
          margin-bottom: 1rem !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="blog-list-container" style={{ padding: '2rem' }}>
      <h2 className="tilde-heading">blog</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {blogs.map(({ id, slug, title, date }) => (
          <li key={id} className="blog-item" style={{ marginBottom: '1.5rem' }}>
            <Link 
              to={`/blogs/${slug}`} 
              className="blog-link"
              style={{ 
                color: 'lightpink', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: '600' 
              }}
            >
              {title}
            </Link>
            <br />
            <small style={{ color: '#888' }}>{formatDate(date)}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;