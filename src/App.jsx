import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState(() => {
    // Initial read from localStorage or default dark
    return localStorage.getItem('zafar-portfolio-theme') || 'dark';
  });

  // Sync theme attribute with document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('zafar-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Render components based on page state switch
  const renderContent = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} onSelectProject={setSelectedProject} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects setPage={setPage} onSelectProject={setSelectedProject} />;
      case 'contact':
        return <Contact />;
      case 'detail':
        return (
          <ProjectDetail 
            project={selectedProject} 
            setPage={setPage} 
            onSelectProject={setSelectedProject} 
          />
        );
      default:
        return <Home setPage={setPage} onSelectProject={setSelectedProject} />;
    }
  };

  return (
    <div className="app-layout">
      {/* Ambient Backdrop Spotlight & Dot Grid */}
      <div className="background-container" aria-hidden="true">
        <div className="dot-grid"></div>
        <div className="spotlight"></div>
      </div>

      {/* Header Navigation */}
      <Header 
        currentPage={page} 
        setPage={setPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Body */}
      {renderContent()}

      {/* Footer Navigation */}
      <Footer setPage={setPage} />
    </div>
  );
}
