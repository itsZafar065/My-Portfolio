import type { SiteSettings } from "./types";

export const demoSettings: SiteSettings = {
  siteName: "Zafar",
  siteDescription: "Full stack developer portfolio for refined web apps, dashboards, and CMS platforms.",
  email: "hello@zafar.dev",
  phone: "+1 555 0100",
  location: "Remote / Worldwide",
  social: { github: "https://github.com/itsZafar065", linkedin: "https://linkedin.com" },
  hero: {
    label: "Full Stack Developer",
    heading: "I design and build polished web products that feel fast, clear, and premium.",
    description: "I am Zafar, a full stack developer focused on modern interfaces, secure dashboards, CMS platforms, and responsive product experiences.",
    primaryButton: "Explore work",
    secondaryButton: "Contact me"
  },
  about: {
    heading: "Frontend taste with full stack discipline.",
    description: "I care about the full experience: clean screens, fast interactions, strong backend architecture, and admin tools that make content easy to manage.",
    profileImage: ""
  },
  contact: {
    heading: "Let us shape your next web product.",
    description: "Share the project goal, timeline, and what needs to feel better. I will reply with a clear next step.",
    cta: "Send message"
  },
  footer: { text: "Premium full stack development.", copyright: "Copyright 2026" },
  seo: { title: "Zafar | Full Stack Developer", description: "Premium full stack developer portfolio and CMS.", keywords: ["Next.js", "MongoDB", "CMS"] }
};

export const demoProjects = [
  {
    _id: "wp-project-1",
    title: "Pastaliano – Italian Restaurant",
    slug: "pastaliano-italian-restaurant",
    shortDescription: "A fully functional E-commerce website for a food brand, built using WooCommerce and Elementor.",
    fullDescription: "Pastaliano is a fully functional E-commerce web platform engineered for an authentic Italian food brand. Built with WordPress, WooCommerce, and Elementor, it features a custom product menu, dynamic ordering capabilities, seamless payment integration, and a mobile-optimized UI.",
    thumbnail: "/pastaliano.png",
    coverImage: "/pastaliano.png",
    galleryImages: ["/pastaliano.png"],
    technologies: ["WordPress", "WooCommerce", "Elementor", "PHP", "CSS3", "Responsive UI"],
    projectType: "E-Commerce / Food & Beverage",
    projectUrl: "https://pastaliano.co.uk/",
    status: "published",
    featured: true,
    order: 1,
    caseStudy: {
      overview: "An end-to-end e-commerce experience for Pastaliano Italian Restaurant, enabling online food ordering, menu exploration, and customer checkout.",
      problem: "The client needed a modern, appetizing online store to showcase their Italian culinary menu and drive direct online orders.",
      goals: "Build a fast-loading, mobile-friendly WooCommerce storefront with custom product categories and intuitive checkout flow.",
      solution: "Designed and developed a sleek WordPress storefront using Elementor and WooCommerce custom styling with optimized speed and mobile UX.",
      keyFeatures: ["Custom Menu Showcase", "WooCommerce Ordering & Cart", "Seamless Online Checkout", "Fully Responsive Layout", "SEO & Performance Optimization"],
      results: "Significantly enhanced online brand presence and increased direct digital food orders for the restaurant."
    },
    seo: { title: "Pastaliano – Italian Restaurant E-Commerce", description: "WooCommerce and Elementor website for Pastaliano Italian Restaurant." }
  },
  {
    _id: "wp-project-2",
    title: "The Paleta Bar",
    slug: "the-paleta-bar",
    shortDescription: "A vibrant and engaging WordPress website for a dessert brand with custom product showcases.",
    fullDescription: "The Paleta Bar is a vibrant, engaging WordPress web platform built for a premier dessert brand. Designed using Elementor, it features visually stunning product galleries, store location finders, interactive menus, and fluid responsive design across all devices.",
    thumbnail: "/paletabar.png",
    coverImage: "/paletabar.png",
    galleryImages: ["/paletabar.png"],
    technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "HTML5/CSS3"],
    projectType: "Brand Showcase / Dessert & Retail",
    projectUrl: "https://thepaletabar.com/",
    status: "published",
    featured: true,
    order: 2,
    caseStudy: {
      overview: "A brand-focused showcase website for The Paleta Bar designed to highlight handcrafted gelatos and frozen treats with an energetic aesthetic.",
      problem: "The brand required a modern digital presence that reflected their fun, colorful identity while helping customers find nearby locations.",
      goals: "Deliver a visually immersive website with smooth animations, location lookup, and seamless mobile usability.",
      solution: "Crafted a custom Elementor-driven layout with custom color schemes, high-res media integration, and location discovery features.",
      keyFeatures: ["Interactive Flavor & Product Showcase", "Store Location Finder", "Vibrant Brand Identity UI", "Fully Responsive Design"],
      results: "Increased customer engagement and streamlined store location discovery for visitors."
    },
    seo: { title: "The Paleta Bar – Dessert Brand Website", description: "Vibrant WordPress and Elementor website for The Paleta Bar." }
  },
  {
    _id: "wp-project-3",
    title: "Founders of Pakistan",
    slug: "founders-of-pakistan",
    shortDescription: "A professional corporate platform designed for high-level networking and award recognitions.",
    fullDescription: "Founders of Pakistan is a sophisticated corporate digital platform created for executive networking and leadership recognition. Developed with WordPress and Elementor, it features high-tier corporate branding, award winner profiles, event showcases, and leadership directories.",
    thumbnail: "/founders.png",
    coverImage: "/founders.png",
    galleryImages: ["/founders.png"],
    technologies: ["WordPress", "Elementor", "PHP", "Corporate UI", "Custom Post Types"],
    projectType: "Corporate / Networking Platform",
    projectUrl: "https://foundersofpakistan.com/",
    status: "published",
    featured: true,
    order: 3,
    caseStudy: {
      overview: "A prestigious platform highlighting business pioneers, award recipients, and networking opportunities across Pakistan.",
      problem: "The organization needed an elegant, authoritative portal to present profiles of prominent founders and facilitate executive connections.",
      goals: "Establish a clean, modern corporate layout with structured member profiles and high-level visual polish.",
      solution: "Built a customized WordPress platform leveraging Elementor for flexible content sections, custom directories, and event highlights.",
      keyFeatures: ["Executive Member Directories", "Award Winner Profiles", "Event & Recognition Modules", "Sophisticated Corporate Aesthetic"],
      results: "Elevated the platform's prestige and streamlined delegate directory navigation."
    },
    seo: { title: "Founders of Pakistan – Corporate Networking", description: "Corporate WordPress website for Founders of Pakistan leadership platform." }
  },
  {
    _id: "wp-project-4",
    title: "MRQ Production",
    slug: "mrq-production",
    shortDescription: "A WordPress media production platform showcasing Islamic audio, video, and digital content.",
    fullDescription: "MRQ Production is a modern media production web platform built on WordPress. Designed to showcase Islamic audio, video releases, and digital media production services, it features media players, portfolio galleries, and service request channels.",
    thumbnail: "/mrq.png",
    coverImage: "/mrq.png",
    galleryImages: ["/mrq.png"],
    technologies: ["WordPress", "Elementor", "Media Embeds", "PHP", "UI/UX"],
    projectType: "Media & Production",
    projectUrl: "https://mrqproduction.com/",
    status: "published",
    featured: true,
    order: 4,
    caseStudy: {
      overview: "A digital portal for MRQ Production to stream and distribute media content while highlighting video/audio production services.",
      problem: "The client needed a organized, clean media portfolio to feature audio/video productions without cluttering user navigation.",
      goals: "Create a structured, fast-loading site with seamless video/audio embedding and clear service inquiry paths.",
      solution: "Developed an Elementor-based media portfolio featuring customized audio/video grid layouts and clean service landing sections.",
      keyFeatures: ["Audio & Video Media Galleries", "Service Showcase", "Responsive Media Players", "Contact & Booking Forms"],
      results: "Centralized digital media catalog and expanded client service outreach."
    },
    seo: { title: "MRQ Production – Media & Production Portal", description: "WordPress media production platform for MRQ Production." }
  }
];

export const demoPublicData = {
  settings: demoSettings,
  projects: demoProjects,
  categories: [{ _id: "cat-1", name: "Full Stack Development", slug: "full-stack-development", enabled: true }],
  services: [
    { _id: "service-1", title: "Full Stack Development", description: "Secure frontend, backend, database, and deployment-ready architecture.", icon: "FS" },
    { _id: "service-2", title: "Dashboard UI", description: "Clean admin panels, analytics screens, and CMS interfaces built for daily use.", icon: "UI" },
    { _id: "service-3", title: "API Integration", description: "Reliable integrations, validation, authentication, and scalable data flows.", icon: "API" }
  ],
  skills: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Mongoose"].map((name, index) => ({ _id: `skill-${index}`, name, featured: true })),
  testimonials: [{ _id: "testimonial-1", clientName: "Avery Stone", company: "Northstar Labs", testimonial: "Zafar turned a rough idea into a sharp product experience with a dashboard our team actually enjoys using." }],
  faqs: [{ _id: "faq-1", question: "Can I edit portfolio content without code?", answer: "Yes. In production, content is managed from the protected dashboard and served dynamically from MongoDB." }]
};

export const demoAdmin = {
  _id: "demo-admin",
  name: "Zafar",
  email: process.env.ADMIN_EMAIL ?? "admin@portfolio.local",
  role: "super_admin",
  status: "active"
};
