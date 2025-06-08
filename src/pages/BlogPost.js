import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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

const BlogPost = () => {
  const { slug } = useParams();

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @media (max-width: 768px) {
        .blog-post-container {
          padding: 1rem !important;
        }
        .blog-post-title {
          font-size: 1.5rem !important;
        }
        .blog-post-content {
          font-size: 0.95rem !important;
        }
      }
      @media (max-width: 480px) {
        .blog-post-container {
          padding: 0.5rem !important;
        }
        .blog-post-title {
          font-size: 1.25rem !important;
        }
        .blog-post-content {
          font-size: 0.9rem !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="blog-post-container" style={{ padding: '2rem' }}>
        <h2>blog not found</h2>
        <Link to="/blog-tech">back from bloglist</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-container" style={{ padding: '2rem' }}>
      <h1 className="blog-post-title">{blog.title}</h1>
      <small style={{ color: '#888' }}>{formatDate(blog.date)}</small>
      <div 
        className="blog-post-content"
        style={{ marginTop: '1rem', lineHeight: '1.6', color: 'white' }} 
        dangerouslySetInnerHTML={{ __html: blog.content }} 
      />
      
      <br />
      <Link to="/blog-tech" style={{ color: 'lightpink' }}>back to bloglist</Link>
    </div>
  );
};

export default BlogPost;