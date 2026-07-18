import React, { useState } from 'react';
import { projects } from '../data/projects';

export default function Projects({ setPage, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mern', label: 'MERN Stack' },
    { id: 'figma', label: 'Figma Designs' },
    { id: 'wordpress', label: 'WordPress' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleCardClick = (project) => {
    onSelectProject(project);
    setPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main style={{ paddingTop: '50px' }}>
      
      {/* Portfolio Section */}
      <section className="portfolio section-padding">
        <div className="container">
          <h2>My Projects</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            A selection of my web applications, backend APIs, user interface design systems, and custom theme integrations.
          </p>
          
          {/* Filters Bar */}
          <div className="portfolio-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="portfolio-card glass-card animate-slide-up"
                onClick={() => handleCardClick(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="portfolio-img-wrapper">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <button className="portfolio-link-icon" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'inherit' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                  </div>
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="portfolio-tag">{t}</span>
                    ))}
                  </div>
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-desc">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
