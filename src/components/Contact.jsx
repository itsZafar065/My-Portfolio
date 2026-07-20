import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    text: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validations
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        type: 'error',
        text: 'All fields are required. Please fill out the form.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        text: 'Please provide a valid email address.'
      });
      return;
    }

    // Success response trigger
    setStatus({
      type: 'success',
      text: 'Thank you! Your message has been sent successfully. Zafar will respond shortly.'
    });

    // Reset inputs
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main style={{ paddingTop: '50px' }}>
      
      {/* Contact Section */}
      <section className="contact section-padding">
        <div className="container">
          <h2>Get in Touch</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Have a project in mind, looking to hire a developer, or just want to connect? Send me a message using the form or reach out directly.
          </p>
          
          <div className="contact-grid">
            
            {/* Info Cards Column */}
            <div className="contact-info">
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                I am always open to discussing new projects, collaboration opportunities, or general development needs.
              </p>
              
              <div className="contact-card-wrapper">
                <div className="contact-icon"><Mail size={20} /></div>
                <div className="contact-card-details">
                  <h3>Direct Email</h3>
                  <p><a href="mailto:zafar.mern.designer@gmail.com">zafar.mern.designer@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-card-wrapper">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <div className="contact-card-details">
                  <h3>GitHub Profile</h3>
                  <p><a href="https://github.com/itsZafar065" target="_blank" rel="noopener noreferrer">github.com/itsZafar065</a></p>
                </div>
              </div>

              <div className="contact-card-wrapper">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div className="contact-card-details">
                  <h3>LinkedIn Profile</h3>
                  <p><a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/zafar-muhammad</a></p>
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
              
              {status.text && (
                <div className={`form-status ${status.type}`} style={{ display: 'block' }}>
                  {status.text}
                </div>
              )}
              
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  className="form-input" 
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="name" className="form-label">Full Name</label>
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  className="form-input" 
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="email" className="form-label">Email Address</label>
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  id="subject" 
                  className="form-input" 
                  placeholder=" " 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="subject" className="form-label">Subject</label>
              </div>

              <div className="form-group">
                <textarea 
                  id="message" 
                  className="form-input" 
                  placeholder=" " 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message" className="form-label">Message details</label>
              </div>

              <button type="submit" className="btn btn-primary neon-glow-primary" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                Send Message <Send size={16} style={{ marginLeft: '0.4rem' }} />
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
