import React from 'react';
import { Code2, Database, Palette, Globe, Server, MapPin, Calendar, Briefcase, Award } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'MERN Stack (React, Redux, Node.js, Express)', level: '95%', icon: Code2 },
    { name: 'Database Management (MongoDB, Mongoose, PostgreSQL)', level: '90%', icon: Database },
    { name: 'Figma UI/UX Design & Prototyping', level: '92%', icon: Palette },
    { name: 'WordPress Custom Themes & Custom Fields (ACF)', level: '90%', icon: Globe },
    { name: 'Real-time APIs & WebSockets (Socket.io)', level: '85%', icon: Server }
  ];

  const milestones = [
    {
      year: '2023 - Present',
      title: 'Full-Stack Developer & UI Designer',
      company: 'Digital Solutions Agency',
      desc: 'Led development for React-based client portals and custom dashboards. Created Figma wireframes, designed dark/light interface tokens, and optimized backend APIs for peak performance.'
    },
    {
      year: '2022 - 2023',
      title: 'MERN Stack Developer',
      company: 'WebTech Builders',
      desc: 'Developed and maintained custom user directories, interactive mapping modules, and secure payment pathways using Express and MongoDB.'
    },
    {
      year: '2021 - 2022',
      title: 'WordPress Developer & UI Designer',
      company: 'Freelance Software Hub',
      desc: 'Designed custom glassmorphic UI dashboards in Figma and converted layouts into clean, responsive WordPress themes and custom PHP modules.'
    }
  ];

  return (
    <main style={{ paddingTop: '50px' }}>
      
      {/* About Biography Section */}
      <section className="about-hero section-padding">
        <div className="container">
          <h2 style={{ marginBottom: '2.5rem' }}>About Me</h2>
          
          <div className="about-grid">
            <div className="about-biography">
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Hi, I'm Zafar Muhammad, a developer based in Pakistan who is passionate about crafting clean, responsive, and visually engaging web applications. I bridge the gap between design concepts and production-ready code.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Over the past 3+ years, I have worked with different clients to design intuitive interface systems in Figma and build robust applications using the MERN stack and WordPress custom solutions. I focus on writing maintainable code and building smooth user experiences that look and perform beautifully.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <a href="#skills" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>Core Skills</a>
                <a href="#journey" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>My Journey</a>
              </div>
            </div>

            <div className="about-visual glass-card animate-fade-in" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={20} />
                Professional Summary
              </div>
              <div className="meta-info-list" style={{ gap: '1rem' }}>
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Briefcase size={12} /> Key Specialties</span>
                  <span className="meta-info-val" style={{ fontSize: '0.9rem' }}>MERN Stack, Figma Design, WordPress Customizations</span>
                </div>
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} /> Work Experience</span>
                  <span className="meta-info-val" style={{ fontSize: '0.9rem' }}>3+ Years of Hands-on Development</span>
                </div>
                <div className="meta-info-item">
                  <span className="meta-info-label" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={12} /> Location</span>
                  <span className="meta-info-val" style={{ fontSize: '0.9rem' }}>Pakistan (Available for Remote Roles)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="skills-matrix section-padding" id="skills" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <h2>Core Skills</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            A breakdown of my technical specialties across user interface design, full-stack programming, and custom content management systems.
          </p>

          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="skill-progress-card glass-card" style={{ padding: '1.2rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.6rem', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <IconComponent size={18} style={{ color: 'var(--color-primary)' }} />
                      {skill.name}
                    </span>
                    <span style={{ color: 'var(--color-secondary)' }}>{skill.level}</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: skill.level, background: 'var(--grad-primary)', borderRadius: '3px' }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Journey Section */}
      <section className="career-journey section-padding" id="journey">
        <div className="container">
          <h2>Professional Journey</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 4rem' }}>
            My career path and achievements as a developer and designer.
          </p>

          <div className="about-timeline">
            <div className="about-timeline-line"></div>

            {milestones.map((m, index) => (
              <div key={index} className="about-timeline-item" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                {index % 2 === 0 ? (
                  <>
                    <div>
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
                    <div>
                      <span className="badge">{m.year}</span>
                      <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0 0.2rem', color: 'var(--color-text-primary)' }}>{m.title}</h3>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '0.8rem' }}>{m.company}</div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{m.desc}</p>
                    </div>
                  </>
                )}
                <div className="about-timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
