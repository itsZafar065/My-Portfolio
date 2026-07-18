import React from 'react';

export default function Footer({ setPage }) {
  const handleNavClick = (pageId) => {
    setPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div 
              style={{ cursor: 'pointer' }}
              className="logo-container" 
              onClick={() => handleNavClick('home')}
            >
              <div className="logo-box">ZM</div>
              <span className="logo-text">Zafar</span>
            </div>
            <p className="footer-tagline" style={{ marginTop: '0.5rem' }}>
              Full-stack developer specializing in React, Node.js, Figma UI designs, and custom WordPress themes.
            </p>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/itsZafar065" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Figma Profile Link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WordPress Profile Link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 8-3.4 9.6-2.1-6.1-2.1 6.1L5.6 8"/><path d="M12 22a10 10 0 0 1-5.6-1.7l3-8.6 2.3 6.6 2.3-6.6 2.7 7.7A10 10 0 0 1 12 22z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Zafar Muhammad. All rights reserved.</p>
          <p>Designed and built with care.</p>
        </div>
      </div>
    </footer>
  );
}
