import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BlogTech from './pages/BlogList';
import BlogCreative from './pages/Extra';
import BlogPost from './pages/BlogPost';

import './App.css';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <div
          key={location.pathname}  
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '2rem',
            paddingBottom: '80px',
            color: '#eee',
            backgroundColor: '#121212',
            minHeight: '100vh',
          }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/blog-tech" element={<PageWrapper><BlogTech /></PageWrapper>} />
            <Route path="/blog-creative" element={<PageWrapper><BlogCreative /></PageWrapper>} />
            <Route path="/blogs/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
          </Routes>
        </div>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
