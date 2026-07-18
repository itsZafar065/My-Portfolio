import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Header({ currentPage, setPage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header" id="nav-header">
      <div className="container nav-container">
        
        {/* Brand Logo Container */}
        <div 
          style={{ cursor: 'pointer' }}
          className="logo-container" 
          onClick={() => handleNavClick('home')}
        >
          <div className="logo-box">ZM</div>
          <span className="logo-text">Zafar</span>
        </div>
        
        {/* Desktop Navigation Menu */}
        <nav className="nav-menu">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`nav-link-btn ${currentPage === link.id ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'inherit',
                cursor: 'pointer',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                color: 'inherit',
                padding: '0.5rem 1rem'
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        
        {/* Actions (Theme Toggle & talk buttons) */}
        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle Theme Mode"
            style={{ cursor: 'pointer', border: 'none', background: 'none' }}
          >
            {theme === 'dark' ? (
              <Moon size={20} className="moon-icon" style={{ color: 'var(--color-primary)' }} />
            ) : (
              <Sun size={20} className="sun-icon" style={{ color: 'var(--color-secondary)' }} />
            )}
          </button>
          
          <button 
            onClick={() => handleNavClick('contact')}
            className="btn btn-secondary talk-btn-desktop" 
            style={{ padding: '0.6rem 1.2rem', cursor: 'pointer' }}
          >
            Let's Talk
          </button>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            style={{ cursor: 'pointer', border: 'none', background: 'none', color: 'inherit' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer glass-card animate-fade-in" style={{
          position: 'absolute',
          top: '80px',
          left: '2rem',
          right: '2rem',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 1000
        }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`nav-link-btn ${currentPage === link.id ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'inherit',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'inherit',
                textAlign: 'left',
                padding: '0.5rem 0'
              }}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary" 
            style={{ padding: '0.8rem 1.8rem', justifyContent: 'center' }}
          >
            Let's Talk
          </button>
        </div>
      )}
    </header>
  );
}
