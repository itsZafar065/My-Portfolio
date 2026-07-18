/* Portfolio Projects & Dynamic Case Study Router */

const projects = [
  {
    id: 'rohani-rehnumai',
    title: 'Rohani Rehnumai CRM & Client Portal',
    category: 'mern',
    desc: 'A custom student profile management and scheduling CRM for spiritual consultancies. Features client search indexing and automated booking queues.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
    image: 'https://images.unsplash.com/photo-1552581230-c01591d6f597?auto=format&fit=crop&w=600&q=80',
    github: 'https://github.com/itsZafar065',
    demo: '#',
    // Detailed Case Study Fields
    client: 'Rohani Rehnumai Consultancy',
    timeline: '3 Months (2024)',
    role: 'Lead Full-Stack Developer',
    overview: 'Rohani Rehnumai is a tailored CRM designed to digitize counseling logs, user registrations, and consultation records. The platform serves as a secure student directory, allowing staff to easily look up files, schedule appointments, and trace consultation histories.',
    challenge: 'Prior to this solution, student counseling logs were tracked in manual ledger books, leading to data degradation, high file search delays (taking up to 15 minutes per query), and appointment booking clashes during peak hours.',
    strategy: 'We designed a scalable relational schema on MongoDB with compound indexing on student registration numbers. We developed a calendar dashboard in React, scheduling alerts via webhooks, and secure authentication to restrict logs access to authorized consultants only.',
    experience: 'Constructed the frontend with modular React views and custom CSS variables supporting dark mode. Implemented full client search filters that return results in under 50 milliseconds using MongoDB full-text index lookups.',
    impact: 'Admin search delay dropped from 15 minutes to under 1 second. Scheduling overlaps were eliminated entirely, and Zafar secured a 5-star rating for delivering a secure, fast web experience.',
    fullTechStack: ['React', 'NodeJS', 'Express', 'MongoDB', 'Mongoose', 'TailwindCSS', 'JWT', 'Nodemailer']
  },
  {
    id: 'token-system',
    title: 'Token System Queue Dashboard',
    category: 'mern',
    desc: 'Real-time branches queuing monitor leveraging WebSockets. Generates printable slips, updates active counter displays, and delivers load metrics to managers.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'ChartJS'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    github: 'https://github.com/itsZafar065',
    demo: '#',
    // Detailed Case Study Fields
    client: 'Al-Baraka Branch Services',
    timeline: '2 Months (2023)',
    role: 'Full-Stack Developer & Designer',
    overview: 'Token System is a real-time queuing management dashboard. It generates printed tokens for walk-in clients, manages counter assignations, displays active token indicators on TV screens, and runs metric graphs tracking daily client wait cycles.',
    challenge: 'Crowded lobbies, physical queue disputes, and lack of branch capacity reports made client experiences poor. Branch supervisors could not identify cashier bottlenecks.',
    strategy: 'Leveraged WebSockets (Socket.io) to synchronize cashier actions with the lobby screen in real-time. Designed a clean, glassmorphic client dispenser panel to print thermal tickets, backed by Express API queues.',
    experience: 'Created a layout in Figma focusing on high accessibility for elderly visitors. Converted layout elements into clean CSS code, structuring a cashier console, a main lobby board, and a supervisor dashboard.',
    impact: 'Average customer wait times reduced by 40%. Physical lobby queues were replaced with a visual queue screen, and supervisors obtained daily analytics reports on queue patterns.',
    fullTechStack: ['React', 'SocketJS', 'NodeJS', 'Express', 'MongoDB', 'ChartJS', 'CSS Grid', 'Figma']
  },
  {
    id: 'devconnect',
    title: 'DevConnect - Developer Social Ecosystem',
    category: 'mern',
    desc: 'A full-stack social network for engineers. Features real-time text chats via Socket.io, GitHub API integration, post creation, commenting, and developer profile matching.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80',
    github: 'https://github.com/itsZafar065',
    demo: '#',
    client: 'Open Source Community',
    timeline: '4 Months (2023)',
    role: 'Lead Architect',
    overview: 'DevConnect is an ecosystem for engineers to find collaborators, post developer status updates, link GitHub profiles, and communicate in thematic channels.',
    challenge: 'Developers struggled to find collaborators with matching tech stacks. Existing networks lacked direct integration with repositories.',
    strategy: 'Integrated the GitHub API to dynamically pull user repositories, and implemented filter scripts matching similar frontend/backend tags.',
    experience: 'Designed a dark-themed coding aesthetic using CSS variables, built RESTful endpoints, and used Socket.io for immediate chat alerts.',
    impact: 'Over 2,000 developers registered. Featured on product landing highlights, establishing Zafar as a top-tier full-stack architect.',
    fullTechStack: ['React', 'Redux', 'NodeJS', 'Express', 'MongoDB', 'Socket.io', 'GitHub API', 'CSS Glass']
  },
  {
    id: 'shopvibe',
    title: 'ShopVibe - Premium E-Commerce Platform',
    category: 'mern',
    desc: 'Interactive shopping platform. Integrated with Stripe payments, features custom dashboard analytics, inventory management, dynamic filtering, and Redux state management.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Stripe API'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
    github: 'https://github.com/itsZafar065',
    demo: '#',
    client: 'ShopVibe Retail Inc.',
    timeline: '3 Months (2024)',
    role: 'Full Stack Engineer',
    overview: 'ShopVibe is a high-end e-commerce experience featuring smooth filters, Stripe checkout integration, custom user carts, and a comprehensive product inventory admin panel.',
    challenge: 'High customer drop-off due to slow cart loading speeds and multi-step payment screens.',
    strategy: 'Optimized state rendering via Redux Toolkit and integrated Stripe Elements directly inside the cart drawer for one-click payment paths.',
    experience: 'Engineered responsive grid catalogs and styled glassmorphic order receipt overlays with CSS transitions.',
    impact: 'Cart load latency dropped by 50% and customer transaction success rates increased by 22%.',
    fullTechStack: ['React', 'Redux Toolkit', 'NodeJS', 'Express', 'MongoDB', 'Stripe Elements', 'CSS Glass']
  },
  {
    id: 'fintech-dashboard',
    title: 'Fintech Dashboard Design Kit',
    category: 'figma',
    desc: 'A high-fidelity modern UI kit containing 30+ responsive dashboard components, custom dark/light color tokens, typography scales, and modular visual assets.',
    tech: ['Figma', 'UI/UX Design', 'Design System', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    github: '#',
    demo: '#',
    client: 'DesignAssets Marketplace',
    timeline: '1 Month (2024)',
    role: 'Senior UI/UX Designer',
    overview: 'A premium user interface kit with reusable components designed for financial dashboard applications, including transaction grids, wallets, and analytics widgets.',
    challenge: 'Developers waste time converting non-standard styles. The kit needed to support clean, systematic design-to-code components.',
    strategy: 'Utilized Figma auto-layout, custom color/typography tokens, and strict structural component naming schemes.',
    experience: 'Created 30+ dashboard widgets and simulated interactive page flows using Figma smart animate.',
    impact: 'Earned a 4.9-star rating on UI/UX marketplaces, helping over 500 developers scaffold products faster.',
    fullTechStack: ['Figma', 'UI/UX Design', 'Design Tokens', 'Prototyping', 'Auto-Layout']
  },
  {
    id: 'estateflow',
    title: 'EstateFlow - Premium Real Estate Directory',
    category: 'wordpress',
    desc: 'Custom built WordPress property directory using custom taxonomy fields. Features Mapbox geolocation tracking, premium booking scheduling, and custom widgets.',
    tech: ['WordPress', 'PHP', 'Elementor Pro', 'Advanced Custom Fields'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
    github: '#',
    demo: '#',
    client: 'EstateFlow Agency',
    timeline: '2 Months (2024)',
    role: 'WordPress Architect',
    overview: 'A specialized properties listing board built on WordPress utilizing custom queries, interactive geolocators, and appointment booking integration.',
    challenge: 'Default WordPress theme layouts was too slow, and loading 100 properties on map overlays caused interface crashes.',
    strategy: 'Implemented Mapbox cluster overlays and cached custom queries using Advanced Custom Fields (ACF) properties.',
    experience: 'Created customizable grid templates using PHP child themes and integrated theme customizer modules.',
    impact: 'Improved page loads from 4.8s to 1.6s, boosting site listings organic search traffic by 30%.',
    fullTechStack: ['WordPress', 'PHP', 'ACF Pro', 'Mapbox API', 'Elementor Pro', 'CSS Grid']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Renders the cards in projects.html or index.html
  function renderProjects(categoryFilter = 'all') {
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filtered = categoryFilter === 'all' 
      ? projects 
      : projects.filter(p => p.category === categoryFilter);
      
    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = `portfolio-card glass-card animate-slide-up`;
      card.setAttribute('data-category', project.category);
      
      const techTags = project.tech.map(t => `<span class="portfolio-tag">${t}</span>`).join('');
      
      // Direct link to static case study HTML page
      const detailLink = `project-${project.id}.html`;
      
      card.innerHTML = `
        <div class="portfolio-img-wrapper">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="portfolio-overlay">
            ${project.github && project.github !== '#' ? `
              <a href="${project.github}" target="_blank" class="portfolio-link-icon" title="View Source on GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            ` : ''}
            <a href="${detailLink}" class="portfolio-link-icon" title="Read Full Case Study">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </a>
          </div>
        </div>
        <div class="portfolio-details">
          <div class="portfolio-tags">
            ${techTags}
          </div>
          <h3 class="portfolio-card-title">${project.title}</h3>
          <p class="portfolio-card-desc">${project.desc}</p>
        </div>
      `;
      grid.appendChild(card);
    });

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Filter click actions
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        if (typeof gsap !== 'undefined') {
          gsap.to('.portfolio-card', {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.3,
            stagger: 0.05,
            onComplete: () => {
              renderProjects(filter);
              gsap.from('.portfolio-card', {
                opacity: 0,
                y: 20,
                scale: 0.95,
                duration: 0.4,
                stagger: 0.05,
                ease: 'power2.out'
              });
            }
          });
        } else {
          renderProjects(filter);
        }
      });
    });
  }

  // Initial listing invocation
  renderProjects();

  // ==========================================
  // Dynamic Case Study Router Page Handler
  // ==========================================
  const caseStudyContainer = document.getElementById('case-study-template');
  if (caseStudyContainer) {
    // Extract ID parameter from query string
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id') || 'rohani-rehnumai';
    
    // Lookup matching project object
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
      // Document metadata title update
      document.title = `${project.title} | Case Study - Zafar Muhammad`;
      
      const techTags = project.fullTechStack.map(t => `<span class="portfolio-tag" style="font-size:0.85rem; padding:0.4rem 0.8rem;">${t}</span>`).join('');
      
      // Determine index for Next/Previous pagination controls
      const currentIndex = projects.findIndex(p => p.id === projectId);
      const nextIndex = (currentIndex + 1) % projects.length;
      const nextProject = projects[nextIndex];

      caseStudyContainer.innerHTML = `
        <!-- Case Study Header -->
        <section class="case-study-hero">
          <div class="container">
            <span class="badge" style="margin-bottom:1.5rem;">Case Study</span>
            <h1 class="case-study-title">${project.title}</h1>
            <p class="case-study-tagline">${project.desc}</p>
          </div>
        </section>

        <!-- Case Study Content Grid -->
        <section class="container" style="padding-bottom: 8rem;">
          <div class="case-study-grid">
            
            <!-- Detailed Case Study (Left panel) -->
            <div class="case-study-left">
              
              <div class="case-study-section glass-card">
                <h3 class="case-study-section-title">Project Overview</h3>
                <div class="case-study-body">
                  <p>${project.overview}</p>
                </div>
              </div>

              <div class="case-study-section glass-card">
                <h3 class="case-study-section-title">The Challenge</h3>
                <div class="case-study-body">
                  <p>${project.challenge}</p>
                </div>
              </div>

              <div class="case-study-section glass-card">
                <h3 class="case-study-section-title">Our Strategy</h3>
                <div class="case-study-body">
                  <p>${project.strategy}</p>
                </div>
              </div>

              <div class="case-study-section glass-card">
                <h3 class="case-study-section-title">The Experience</h3>
                <div class="case-study-body">
                  <p>${project.experience}</p>
                </div>
              </div>

              <div class="case-study-section glass-card">
                <h3 class="case-study-section-title">The Impact</h3>
                <div class="case-study-body">
                  <p>${project.impact}</p>
                </div>
              </div>

            </div>

            <!-- Metadata Sidebar (Right panel) -->
            <aside class="meta-sidebar glass-card">
              <h3 class="meta-sidebar-title">Project Specs</h3>
              <div class="meta-info-list">
                
                <div class="meta-info-item">
                  <span class="meta-info-label">Client</span>
                  <span class="meta-info-val">${project.client}</span>
                </div>

                <div class="meta-info-item">
                  <span class="meta-info-label">Timeline</span>
                  <span class="meta-info-val">${project.timeline}</span>
                </div>

                <div class="meta-info-item">
                  <span class="meta-info-label">My Role</span>
                  <span class="meta-info-val">${project.role}</span>
                </div>

                <div class="meta-info-item">
                  <span class="meta-info-label">Tech Stack</span>
                  <div class="portfolio-tags" style="margin-top:0.5rem; gap:0.4rem;">
                    ${techTags}
                  </div>
                </div>

              </div>
              
              ${project.github && project.github !== '#' ? `
                <a href="${project.github}" target="_blank" class="btn btn-primary" style="justify-content:center; margin-top:1rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0.3rem;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> View Repository
                </a>
              ` : ''}
            </aside>

          </div>

          <!-- Bottom Case Study Navigation Controls -->
          <div class="case-study-nav">
            <a href="projects.html" class="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0.3rem;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> Back to Showcase
            </a>
            <a href="project-detail.html?id=${nextProject.id}" class="btn btn-primary">
              Next Project (${nextProject.title.split(' ')[0]}) <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:0.3rem;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </section>
      `;
      
      // GSAP smooth entry for dynamic case study elements
      if (typeof gsap !== 'undefined') {
        gsap.from('.case-study-hero .badge', { opacity: 0, y: -20, duration: 0.6, ease: 'power2.out' });
        gsap.from('.case-study-title', { opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: 'power2.out' });
        gsap.from('.case-study-tagline', { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: 'power2.out' });
        gsap.from('.case-study-section', {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.5,
          ease: 'power2.out'
        });
        gsap.from('.meta-sidebar', {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          delay: 0.6,
          ease: 'power2.out'
        });
      }
    } else {
      // Redirect back if project is invalid
      window.location.href = 'projects.html';
    }
  }
});
