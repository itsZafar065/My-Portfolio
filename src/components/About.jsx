import React from 'react';

export default function About() {
  const skills = [
    { name: 'MERN Stack (React, Redux, Node, Express)', level: '95%' },
    { name: 'Database Architecture (MongoDB, Mongoose, MySQL)', level: '90%' },
    { name: 'Figma UI/UX Design & Token Systems', level: '92%' },
    { name: 'WordPress custom themes & ACF directory nodes', level: '90%' },
    { name: 'WebSockets real-time queues (Socket.io)', level: '88%' }
  ];

  const milestones = [
    {
      year: '2023 - Present',
      title: 'Senior MERN Developer & Designer',
      company: 'Digital Solutions Agency',
      desc: 'Architected multiple full-stack React panels, structured Figma components, and integrated automated workflow systems.'
    },
    {
      year: '2022 - 2023',
      title: 'Full Stack Engineer',
      company: 'WebTech Builders',
      desc: 'Maintained custom MERN directories and crafted highly responsive layouts with Elementor / PHP hooks.'
    },
    {
      year: '2021 - 2022',
      title: 'UI/UX Designer & Theme Developer',
      company: 'Freelance Software Hub',
      desc: 'Designed clean glassmorphic dashboards in Figma and converted wireframes to responsive HTML/CSS structures.'
    }
  ];

  return (
    <main style={{ paddingTop: '50px' }}>
      
      {/* About Biography Section */}
      <section className="about-hero section-padding">
        <div className="container">
          <h2 style={{ marginBottom: '2.5rem' }}>About Zafar Muhammad</h2>
          
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div className="about-biography">
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                I am a Senior Architect-level developer and designer with over 3 years of professional experience building web products. My expertise spans building scalable MERN stack web applications, designing components libraries in Figma, and custom-coding WordPress themes.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                I focus on delivering clean code structures, premium glassmorphism layouts, and highly interactive customer experiences that are responsive across all browser viewports.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                <a href="#skills" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>Inspect Skills</a>
                <a href="#journey" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>Career Timeline</a>
              </div>
            </div>

            <div className="about-visual glass-card animate-fade-in" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-primary)' }}>Architect Credentials</div>
              <div className="meta-info-list" style={{ gap: '1rem' }}>
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ fontSize: '0.75rem' }}>Domain Specs</span>
                  <span className="meta-info-val" style={{ fontSize: '0.9rem' }}>MERN Stack, Figma, WordPress, WebSockets</span>
                </div>
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ fontSize: '0.75rem' }}>Experience</span>
                  <span className="meta-info-val" style={{ fontSize: '0.9rem' }}>3+ Years (Senior Architect Level)</span>
                </div>
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ fontSize: '0.75rem' }}>Location</span>
                  <span className="meta-info-val" style={{ fontSize: '0.9rem' }}>Pakistan (Remote Available)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="skills-matrix section-padding" id="skills" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <h2>Core Skills Matrix</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Structured measurements of Zafar's implementation proficiencies across design tools, frontend codebases, and backend APIs.
          </p>

          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {skills.map((skill, index) => (
              <div key={index} className="skill-progress-card glass-card" style={{ padding: '1.2rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.6rem' }}>
                  <span>{skill.name}</span>
                  <span style={{ color: 'var(--color-secondary)' }}>{skill.level}</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: skill.level, background: 'var(--grad-primary)', borderRadius: '3px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey Section */}
      <section className="career-journey section-padding" id="journey">
        <div className="container">
          <h2>Professional Career Journey</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 4rem' }}>
            A trace of Zafar's architectural milestones developing secure websites and interactive tools.
          </p>

          <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div className="timeline-line" style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--glass-border)',
              transform: 'translateX(-50%)'
            }}></div>

            {milestones.map((m, index) => (
              <div key={index} className="timeline-item" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                marginBottom: '3rem',
                position: 'relative'
              }}>
                {index % 2 === 0 ? (
                  <>
                    <div style={{ textAlign: 'right' }}>
                      <span className="badge">{m.year}</span>
                      <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0 0.2rem', color: 'var(--color-text-primary)' }}>{m.title}</h3>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '0.8rem' }}>{m.company}</div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{m.desc}</p>
                    </div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div style={{ textAlign: 'left' }}>
                      <span className="badge">{m.year}</span>
                      <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0 0.2rem', color: 'var(--color-text-primary)' }}>{m.title}</h3>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '0.8rem' }}>{m.company}</div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{m.desc}</p>
                    </div>
                  </>
                )}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '10px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  boxShadow: '0 0 10px var(--color-primary)',
                  transform: 'translateX(-50%)'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
