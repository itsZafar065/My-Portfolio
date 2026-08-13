import type { SiteSettings } from "./types";

export const demoSettings: SiteSettings = {
  siteName: "Ali Nawaz",
  siteDescription: "Premium full stack developer portfolio and CMS.",
  email: "hello@example.com",
  phone: "+1 555 0100",
  location: "Remote / Worldwide",
  social: { github: "https://github.com", linkedin: "https://linkedin.com" },
  hero: {
    label: "Full Stack Developer",
    heading: "I build secure, CMS-driven web platforms with a premium finish.",
    description: "A production-style portfolio powered by Next.js, protected admin workflows, and database-ready content modules.",
    primaryButton: "View projects",
    secondaryButton: "Start a project"
  },
  about: {
    heading: "Product-minded engineering for serious web experiences.",
    description: "I design and develop robust interfaces, APIs, and content systems that teams can operate without touching source code.",
    profileImage: ""
  },
  contact: {
    heading: "Tell me what you are building.",
    description: "Share the shape of your project and I’ll reply with the next practical step.",
    cta: "Send message"
  },
  footer: { text: "Premium full stack development.", copyright: "Copyright 2026" },
  seo: { title: "Ali Nawaz | Full Stack Developer", description: "Premium full stack developer portfolio and CMS.", keywords: ["Next.js", "MongoDB", "CMS"] }
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
  services: [{ _id: "service-1", title: "Full Stack Development", description: "Secure frontend, backend, database, and deployment-ready architecture." }],
  skills: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"].map((name, index) => ({ _id: `skill-${index}`, name, featured: true })),
  testimonials: [{ _id: "testimonial-1", clientName: "Avery Stone", company: "Northstar Labs", testimonial: "The CMS gave our team control without compromising design quality." }],
  faqs: [{ _id: "faq-1", question: "Can I edit portfolio content without code?", answer: "Yes. In production, content is managed from the protected dashboard and served dynamically from MongoDB." }]
};

export const demoAdmin = {
  _id: "demo-admin",
  name: "Ali Nawaz",
  email: process.env.ADMIN_EMAIL ?? "admin@portfolio.local",
  role: "super_admin",
  status: "active"
};
