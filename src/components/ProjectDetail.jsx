import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail({ project, setPage, onSelectProject }) {
  if (!project) {
    return (
      <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h3>No project selected.</h3>
        <button onClick={() => setPage('projects')} className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Back to Projects
        </button>
      </div>
    );
  }

  // Find next project for pagination
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  const handleNextProject = () => {
    onSelectProject(nextProject);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main style={{ paddingTop: '50px' }}>
      
      {/* Case Study Hero */}
      <section className="case-study-hero">
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>Case Study</span>
          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-tagline">{project.desc}</p>
        </div>
      </section>

      {/* Case Study Content Grid */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div className="case-study-grid">
          
          {/* Narratives Column */}
          <div className="case-study-left">
            
            {project.overview && (
              <div className="case-study-section glass-card">
                <h3 className="case-study-section-title">Project Overview</h3>
                <div className="case-study-body">
                  <p>{project.overview}</p>
                </div>
              </div>
            )}

            {project.challenge && (
              <div className="case-study-section glass-card">
                <h3 className="case-study-section-title">The Challenge</h3>
                <div className="case-study-body">
                  <p>{project.challenge}</p>
                </div>
              </div>
            )}

            {project.strategy && (
              <div className="case-study-section glass-card">
                <h3 className="case-study-section-title">Our Strategy</h3>
                <div className="case-study-body">
                  <p>{project.strategy}</p>
                </div>
              </div>
            )}

            {project.experience && (
              <div className="case-study-section glass-card">
                <h3 className="case-study-section-title">The Experience</h3>
                <div className="case-study-body">
                  <p>{project.experience}</p>
                </div>
              </div>
            )}

            {project.impact && (
              <div className="case-study-section glass-card">
                <h3 className="case-study-section-title">The Impact</h3>
                <div className="case-study-body">
                  <p>{project.impact}</p>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Specifications */}
          <aside className="meta-sidebar glass-card">
            <h3 className="meta-sidebar-title">Project Specs</h3>
            <div className="meta-info-list">
              
              {project.client && (
                <div className="meta-info-item">
                  <span className="meta-info-label">Client</span>
                  <span className="meta-info-val">{project.client}</span>
                </div>
              )}

              {project.timeline && (
                <div className="meta-info-item">
                  <span className="meta-info-label">Timeline</span>
                  <span className="meta-info-val">{project.timeline}</span>
                </div>
              )}

              {project.role && (
                <div className="meta-info-item">
                  <span className="meta-info-label">My Role</span>
                  <span className="meta-info-val">{project.role}</span>
                </div>
              )}

              {project.fullTechStack && (
                <div className="meta-info-item">
                  <span className="meta-info-label">Tech Stack</span>
                  <div className="portfolio-tags" style={{ marginTop: '0.4rem', gap: '0.4rem' }}>
                    {project.fullTechStack.map((t, idx) => (
                      <span key={idx} className="portfolio-tag">{t}</span>
                    ))}
                  </div>
                </div>
              )}

            </div>
            
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '1rem', fontSize: '0.85rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.3rem' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Repository
              </a>
            )}
          </aside>

        </div>

        {/* Navigation pagination buttons */}
        <div className="case-study-nav">
          <button 
            onClick={() => { setPage('projects'); window.scrollTo({ top: 0 }); }} 
            className="btn btn-secondary"
            style={{ cursor: 'pointer' }}
          >
            <ArrowLeft size={16} style={{ marginRight: '0.3rem' }} /> Back to Showcase
          </button>
          
          <button 
            onClick={handleNextProject} 
            className="btn btn-primary"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Next Project ({nextProject.title.split(' ')[0]}) <ArrowRight size={16} style={{ marginLeft: '0.3rem' }} />
          </button>
        </div>
      </section>

    </main>
  );
}
