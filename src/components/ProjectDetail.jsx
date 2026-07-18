import React from 'react';
import { ArrowLeft, ArrowRight, User, Calendar, Code, Briefcase, ExternalLink } from 'lucide-react';
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
                  <span className="meta-info-label" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Briefcase size={12} /> Client
                  </span>
                  <span className="meta-info-val">{project.client}</span>
                </div>
              )}

              {project.timeline && (
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={12} /> Timeline
                  </span>
                  <span className="meta-info-val">{project.timeline}</span>
                </div>
              )}

              {project.role && (
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <User size={12} /> My Role
                  </span>
                  <span className="meta-info-val">{project.role}</span>
                </div>
              )}

              {project.fullTechStack && (
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Code size={12} /> Tech Stack
                  </span>
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
                <ExternalLink size={14} style={{ marginRight: '0.3rem' }} /> View Repository
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
