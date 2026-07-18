import React, { useState } from 'react';
import { ArrowRight, Mail, Box, Image as ImageIcon, Tag, Terminal, Play, FileCode, FileJson } from 'lucide-react';
import { projects } from '../data/projects';

export default function Home({ setPage, onSelectProject }) {
  // Sandbox State Switchers
  const [activeTab, setActiveTab] = useState('figma');

  // Figma state
  const [figmaElement, setFigmaElement] = useState('card-container');

  // VS Code state
  const [vscodeFile, setVscodeFile] = useState('server.js');
  const [vscodeTerminalLog, setVscodeTerminalLog] = useState('// Press the green "Run Server" button above to run Express + MongoDB server setup...');
  const [isServerRunning, setIsServerRunning] = useState(false);

  // WordPress state
  const [wpColor, setWpColor] = useState('indigo');
  const [wpLayout, setWpLayout] = useState('minimal');
  const [wpTitle, setWpTitle] = useState('Zafar Portfolio');

  const featured = projects.slice(0, 3); // top 3 highlights

  const figmaSpecs = {
    'card-container': { width: '320px', height: '320px', radius: '16px', fill: 'rgba(255, 255, 255, 0.05)' },
    'card-image': { width: '280px', height: '160px', radius: '8px', fill: 'linear-gradient(135deg, #ff007f, #7f00ff)' },
    'badge-pill': { width: '80px', height: '24px', radius: '12px', fill: 'rgba(99, 102, 241, 0.2)' }
  };

  const handleRunServer = () => {
    setIsServerRunning(true);
    setVscodeTerminalLog('Scaffolding backend variables...\nConnecting to Database at mongodb+srv://cluster0...\nDatabase connection [SUCCESS].\nServer is running on port 5000.\nGET /api/projects 200 OK (5ms)');
  };

  const handleProjectClick = (proj) => {
    onSelectProject(proj);
    setPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <span></span> Open to work & collaboration
            </div>
            <h1 className="hero-title">
              Architecting <span>Digital Products</span> from Figma to Code
            </h1>
            <p className="hero-desc">
              Hi, Zafar Muhammad here. A Senior Architect-level developer specializing in the MERN Stack, Figma Design Systems, and WordPress custom theme integrations. I craft blazing-fast, responsive user experiences with aesthetic precision.
            </p>
            <div className="hero-actions">
              <button onClick={() => setPage('projects')} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                View Showcase <ArrowRight size={16} />
              </button>
              <button onClick={() => setPage('contact')} className="btn btn-secondary" style={{ cursor: 'pointer' }}>
                Get in Touch <Mail size={16} />
              </button>
            </div>
          </div>
          
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-backdrop"></div>
            <div className="glass-object">
              <div className="glass-object-inner">
                <span className="glass-obj-badge">Senior Architect</span>
                <div className="glass-obj-logo">ZM</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                  Full Stack MERN<br />
                  Figma UI/UX Specialist<br />
                  WordPress Engineer
                </p>
              </div>
              <div className="glass-obj-footer">
                <span>Exp: 3+ Years</span>
                <span>v3.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section-padding">
        <div className="container stats-grid">
          <div className="stat-item glass-card animate-fade-in">
            <div className="stat-num">3+</div>
            <h3 className="stat-title">Years Experience</h3>
            <p className="stat-desc">Building and shipping responsive web apps.</p>
          </div>
          <div className="stat-item glass-card animate-fade-in">
            <div className="stat-num">40+</div>
            <h3 className="stat-title">Projects Shipped</h3>
            <p className="stat-desc">Custom MERN platforms, Figma systems & WP nodes.</p>
          </div>
          <div className="stat-item glass-card animate-fade-in">
            <div className="stat-num">100%</div>
            <h3 className="stat-title">Client Retention</h3>
            <p className="stat-desc">Delivering standards of Senior Architect levels.</p>
          </div>
        </div>
      </section>

      {/* Interactive Workspaces (Sandbox) */}
      <section className="workspace-section section-padding" id="workspaces">
        <div className="container">
          <div className="workspace-intro">
            <h2>Interactive Workspace Sandbox</h2>
            <p>Explore Zafar's multi-disciplinary development workflows. Toggle between designing high-fidelity layouts, testing backends, or adjusting live WordPress variables below.</p>
          </div>

          <div className="workspace-tabs">
            <button 
              className={`workspace-tab ${activeTab === 'figma' ? 'active' : ''}`} 
              onClick={() => setActiveTab('figma')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/></svg> 
              Figma UI Canvas
            </button>
            <button 
              className={`workspace-tab ${activeTab === 'vscode' ? 'active' : ''}`} 
              onClick={() => setActiveTab('vscode')}
            >
              <Terminal size={18} /> MERN Console (VS Code)
            </button>
            <button 
              className={`workspace-tab ${activeTab === 'wp' ? 'active' : ''}`} 
              onClick={() => setActiveTab('wp')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 8-3.4 9.6-2.1-6.1-2.1 6.1L5.6 8"/><path d="M12 22a10 10 0 0 1-5.6-1.7l3-8.6 2.3 6.6 2.3-6.6 2.7 7.7A10 10 0 0 1 12 22z"/></svg> 
              WordPress Configurator
            </button>
          </div>

          <div className="workspace-content-wrapper">
            
            {/* Figma Panel */}
            {activeTab === 'figma' && (
              <div className="workspace-pane active">
                <div className="workspace-canvas-wrapper animate-fade-in">
                  <div className="figma-canvas">
                    <div className="figma-sidebar">
                      <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Layers</div>
                      <div 
                        className={`figma-layer-item ${figmaElement === 'card-container' ? 'active' : ''}`} 
                        onClick={() => setFigmaElement('card-container')}
                      >
                        <Box size={14} /> Card-Container
                      </div>
                      <div 
                        className={`figma-layer-item ${figmaElement === 'card-image' ? 'active' : ''}`} 
                        onClick={() => setFigmaElement('card-image')}
                      >
                        <ImageIcon size={14} /> Card-Image
                      </div>
                      <div 
                        className={`figma-layer-item ${figmaElement === 'badge-pill' ? 'active' : ''}`} 
                        onClick={() => setFigmaElement('badge-pill')}
                      >
                        <Tag size={14} /> Badge-Pill
                      </div>
                    </div>
                    
                    <div className="figma-artboard">
                      <div 
                        className="figma-card-preview" 
                        style={{
                          background: figmaElement === 'card-container' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                          border: figmaElement === 'card-container' ? '1.5px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <div 
                          className="figma-card-image"
                          style={{
                            background: figmaElement === 'card-image' ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' : 'linear-gradient(135deg, #ff007f, #7f00ff)',
                            border: figmaElement === 'card-image' ? '1.5px solid #fff' : 'none'
                          }}
                        ></div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                          Figma Design Component
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#aaa', marginBottom: '1rem' }}>
                          Select elements on the left side to inspect specs dynamically.
                        </p>
                        <div className="figma-prop-group">
                          <span 
                            className="glass-obj-badge" 
                            style={{ 
                              fontSize: '0.6rem', 
                              padding: '0.1rem 0.4rem',
                              border: figmaElement === 'badge-pill' ? '1.5px solid #fff' : '1px solid rgba(255,255,255,0.2)'
                            }}
                          >
                            UI Spec
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="figma-sidebar right">
                      <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Inspect Properties</div>
                      <div className="figma-prop-group" style={{ fontSize: '0.8rem' }}>
                        <div className="figma-prop-row"><span>Width</span> <span style={{ color: '#4fc1ff' }}>{figmaSpecs[figmaElement].width}</span></div>
                        <div className="figma-prop-row"><span>Height</span> <span style={{ color: '#4fc1ff' }}>{figmaSpecs[figmaElement].height}</span></div>
                        <div className="figma-prop-row"><span>Radius</span> <span style={{ color: '#4fc1ff' }}>{figmaSpecs[figmaElement].radius}</span></div>
                        <div className="figma-prop-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
                          <span>Fill</span> 
                          <span style={{ color: '#4fc1ff', wordBreak: 'break-all', fontSize: '0.7rem' }}>{figmaSpecs[figmaElement].fill}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VS Code Panel */}
            {activeTab === 'vscode' && (
              <div className="workspace-pane active">
                <div className="workspace-canvas-wrapper animate-fade-in">
                  <div className="vscode-editor">
                    <div className="vscode-header">
                      <div className="vscode-tabs-container">
                        <div 
                          className={`vscode-file-tab ${vscodeFile === 'server.js' ? 'active' : ''}`}
                          onClick={() => setVscodeFile('server.js')}
                        >
                          <FileCode size={14} style={{ color: '#ce9178' }} /> server.js
                        </div>
                        <div 
                          className={`vscode-file-tab ${vscodeFile === 'App.jsx' ? 'active' : ''}`}
                          onClick={() => setVscodeFile('App.jsx')}
                        >
                          <FileJson size={14} style={{ color: '#569cd6' }} /> App.jsx
                        </div>
                      </div>
                      <button 
                        className="vscode-run-btn" 
                        onClick={handleRunServer}
                        style={{ cursor: 'pointer', opacity: isServerRunning ? 0.7 : 1 }}
                        disabled={isServerRunning}
                      >
                        <Play size={12} style={{ marginRight: '0.3rem' }} /> {isServerRunning ? 'Server Active' : 'Run Server'}
                      </button>
                    </div>
                    
                    <div className="vscode-body">
                      <div className="vscode-line-numbers">
                        1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15
                      </div>
                      <pre className="vscode-code-content" style={{ margin: 0, fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '0.85rem' }}>
                        {vscodeFile === 'server.js' ? (
`const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MERN Backend Database API Setup
app.use(express.json());
mongoose.connect(process.env.MONGO_URI);

app.get('/api/projects', async (req, res) => {
  const list = await Project.find();
  res.json({ success: true, data: list });
});`
                        ) : (
`import React, { useEffect, useState } from 'react';

export default function App() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(res => setList(res.data));
  }, []);
  
  return <div>Count: {list.length}</div>;
}`
                        )}
                      </pre>
                    </div>

                    <div className="vscode-terminal" style={{ whiteSpace: 'pre-line' }}>
                      {vscodeTerminalLog}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WordPress Panel */}
            {activeTab === 'wp' && (
              <div className="workspace-pane active">
                <div className="workspace-canvas-wrapper animate-fade-in">
                  <div className="wp-customizer">
                    <div className="wp-panel">
                      <div className="wp-panel-header">Customizer Settings</div>
                      
                      <div className="wp-control-group">
                        <label className="wp-control-label">Theme Color</label>
                        <select 
                          className="wp-control-select" 
                          value={wpColor} 
                          onChange={(e) => setWpColor(e.target.value)}
                        >
                          <option value="indigo">Deep Indigo Theme</option>
                          <option value="teal">Dark Teal Theme</option>
                          <option value="pink">Ruby Pink Theme</option>
                          <option value="emerald">Emerald Theme</option>
                        </select>
                      </div>

                      <div className="wp-control-group">
                        <label className="wp-control-label">Hero Layout</label>
                        <select 
                          className="wp-control-select" 
                          value={wpLayout} 
                          onChange={(e) => setWpLayout(e.target.value)}
                        >
                          <option value="minimal">Centered Layout</option>
                          <option value="boxed">Left-Aligned</option>
                        </select>
                      </div>

                      <div className="wp-control-group">
                        <label className="wp-control-label">Mock Title</label>
                        <input 
                          type="text" 
                          className="wp-control-color" 
                          value={wpTitle} 
                          onChange={(e) => setWpTitle(e.target.value)}
                          placeholder="Zafar Portfolio" 
                        />
                      </div>
                    </div>
                    
                    <div className="wp-preview-screen">
                      <div className="wp-mock-site">
                        <div 
                          className="wp-mock-header" 
                          style={{ 
                            background: wpColor === 'indigo' ? '#312e81' : 
                                        wpColor === 'teal' ? '#0f766e' : 
                                        wpColor === 'pink' ? '#be185d' : '#047857'
                          }}
                        >
                          <div id="mock-site-logo" style={{ fontWeight: 700, color: '#fff' }}>Zafar Theme</div>
                          <div style={{ fontSize: '0.75rem', display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                            <span>Home</span>
                            <span>Blog</span>
                          </div>
                        </div>
                        <div 
                          className="wp-mock-hero"
                          style={{
                            textAlign: wpLayout === 'minimal' ? 'center' : 'left',
                            padding: '2rem 1.5rem'
                          }}
                        >
                          <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111' }}>
                            {wpTitle || 'Untitled Website'}
                          </h4>
                          <p style={{ fontSize: '0.8rem', color: '#555' }}>
                            WordPress custom theme customization preview.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="portfolio section-padding" id="featured-projects">
        <div className="container">
          <h2>Featured Showcase</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            A handpicked selection of premium web systems. Click on any card to read the complete glassmorphic case study detail.
          </p>
          
          <div className="portfolio-grid">
            {featured.map(project => (
              <div 
                key={project.id} 
                className="portfolio-card glass-card"
                onClick={() => handleProjectClick(project)}
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

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button 
              onClick={() => { setPage('projects'); window.scrollTo({ top: 0 }); }} 
              className="btn btn-primary"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              View All Projects <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
