/* Main JS - Core Interactivity */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Management
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'dark';
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', storedTheme);
  
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Spotlight Cursor Tracker
  const spotlight = document.querySelector('.spotlight');
  
  window.addEventListener('mousemove', (e) => {
    // Spotlight follows cursor
    if (spotlight) {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY + window.scrollY}px`;
    }
    
    // Set custom CSS variables for gradients
    const x = (e.clientX / window.innerWidth) * 100;
    const y = ((e.clientY) / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
  });

  // Keep spotlight updated on scroll
  window.addEventListener('scroll', () => {
    // Scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      scrollProgress.style.width = `${scrolled}%`;
    }
  });

  // Mobile Hamburger Menu Toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Toggle Hamburger Icon between menu & close
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.setAttribute('data-lucide', 'x');
        } else {
          icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons(); // Refresh Lucide icons
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      });
    });
  }

  // Active link indicator based on current page filename
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  
  const navMenuLinks = document.querySelectorAll('.nav-link');
  navMenuLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (page === href || 
        (page === '' && href === 'index.html') ||
        (href === 'index.html' && page === 'index.html') ||
        (href === 'projects.html' && page.startsWith('project-detail.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Initialize GSAP Entry Animations
  if (typeof gsap !== 'undefined') {
    // Hero entry animations
    gsap.from('.hero-tag', { opacity: 0, y: -20, duration: 0.8, ease: 'power3.out' });
    gsap.from('.hero-title', { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: 'power3.out' });
    gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 1, delay: 0.4, ease: 'power3.out' });
    gsap.from('.hero-actions', { opacity: 0, y: 15, duration: 0.8, delay: 0.6, ease: 'power3.out' });
    gsap.from('.hero-visual', { opacity: 0, scale: 0.9, rotate: 5, duration: 1.2, delay: 0.3, ease: 'power2.out' });

    // Stats Section ScrollTrigger
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats',
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: animateStatsCounters
    });

    // Workspace Section ScrollTrigger
    gsap.from('.workspace-intro', {
      scrollTrigger: {
        trigger: '.workspace-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    });
    gsap.from('.workspace-tabs', {
      scrollTrigger: {
        trigger: '.workspace-section',
        start: 'top 75%',
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    });
    gsap.from('.workspace-content-wrapper', {
      scrollTrigger: {
        trigger: '.workspace-section',
        start: 'top 70%',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out'
    });

    // Skills Sections ScrollTrigger
    gsap.from('.skills-category', {
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%',
      },
      opacity: 0,
      x: (index) => index === 0 ? -40 : 40,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      onComplete: fillSkillProgress
    });

    // Contact Form Grid
    gsap.from('.contact-info', {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
      },
      opacity: 0,
      x: -40,
      duration: 0.8,
      ease: 'power2.out'
    });
    gsap.from('.contact-form', {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
      },
      opacity: 0,
      x: 40,
      duration: 0.8,
      ease: 'power2.out'
    });

  } else {
    // Fallback if GSAP fails to load
    document.querySelectorAll('.stat-item').forEach(item => item.style.opacity = 1);
    animateStatsCounters();
    fillSkillProgress();
  }

  // Stats numerical counter animation
  function animateStatsCounters() {
    const counters = document.querySelectorAll('.stat-num');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = target / 50; // speed increments

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.floor(count) + suffix;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + suffix;
        }
      };
      updateCount();
    });
  }

  // Trigger progress fill
  function fillSkillProgress() {
    const bars = document.querySelectorAll('.skill-progress-fill');
    bars.forEach(bar => {
      const percentage = bar.getAttribute('data-percent');
      bar.style.width = `${percentage}%`;
    });
  }
});
