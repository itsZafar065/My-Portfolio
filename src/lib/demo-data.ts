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

export const demoProjects = [{
  _id: "demo-project-1",
  title: "CMS Commerce Platform",
  slug: "cms-commerce-platform",
  shortDescription: "A secure commerce dashboard and storefront built for fast catalog operations.",
  fullDescription: "A full stack commerce platform with role-aware admin workflows, publishing controls, SEO fields, and optimized public pages.",
  technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
  projectType: "SaaS / E-commerce",
  status: "published",
  featured: true,
  order: 1,
  galleryImages: [],
  caseStudy: {
    overview: "A scalable storefront and admin CMS for a growing product team.",
    problem: "The team needed to ship portfolio and product changes without developer intervention.",
    goals: "Improve content velocity, search visibility, and admin safety.",
    solution: "A protected CMS with structured content, validation, publishing status, and dynamic public rendering.",
    keyFeatures: ["Role-based admin", "Database-driven content", "SEO controls", "Audit log"],
    results: "Reduced content publishing time and improved maintainability."
  },
  seo: { title: "CMS Commerce Platform Case Study", description: "A full stack CMS case study." }
}];

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
