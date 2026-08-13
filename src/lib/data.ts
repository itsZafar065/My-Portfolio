import "server-only";
import { connectDb, hasDatabase, toPlain } from "./db";
import { demoAdmin, demoProjects, demoPublicData, demoSettings } from "./demo-data";
import { Category, Client, ContactMessage, FAQ, Media, Project, Service, SiteSettings, Skill, Testimonial } from "@/models/Content";
import { Admin } from "@/models/Admin";
import { AuditLog } from "@/models/AuditLog";
import type { SiteSettings as Settings } from "./types";

const defaults: Settings = {
  siteName: "Zafar",
  siteDescription: "Premium full stack developer portfolio and case-study archive.",
  email: "hello@zafar.dev",
  phone: "+1 555 0100",
  location: "Remote",
  social: { github: "https://github.com", linkedin: "https://linkedin.com" },
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
    heading: "Let’s build something durable.",
    description: "Share the shape of your project and I’ll reply with the next practical step.",
    cta: "Send message"
  },
  footer: { text: "Available for selected full stack projects.", copyright: "All rights reserved." },
  seo: { title: "Zafar | Full Stack Developer", description: "Premium full stack developer portfolio.", keywords: ["Next.js", "React", "Full Stack Developer"] }
};

export async function getSettings() {
  if (!hasDatabase()) return demoSettings;
  await connectDb();
  const settings = await SiteSettings.findOne({ singleton: "site" }).lean();
  return settings ? toPlain<Settings>(settings) : defaults;
}

export async function getPublicData() {
  if (!hasDatabase()) return demoPublicData;
  await connectDb();
  const [settings, projects, categories, services, skills, testimonials, faqs] = await Promise.all([
    getSettings(),
    Project.find({ status: "published" }).sort({ featured: -1, order: 1 }).lean(),
    Category.find({ enabled: true }).sort({ name: 1 }).lean(),
    Service.find({ enabled: true }).sort({ order: 1 }).lean(),
    Skill.find({ featured: true }).sort({ order: 1 }).lean(),
    Testimonial.find({ status: "published" }).sort({ order: 1 }).lean(),
    FAQ.find({ status: "published" }).sort({ order: 1 }).lean()
  ]);
  return toPlain<any>({ settings, projects, categories, services, skills, testimonials, faqs });
}

export async function getProject(slug: string) {
  if (!hasDatabase()) return demoProjects.find((project) => project.slug === slug) ?? null;
  await connectDb();
  return toPlain<any>(await Project.findOne({ slug, status: "published" }).populate("category client").lean());
}

export async function getAdminStats() {
  if (!hasDatabase()) {
    return {
      totalProjects: 1,
      publishedProjects: 1,
      draftProjects: 0,
      categories: 1,
      testimonials: 1,
      clients: 0,
      services: 1,
      messages: 0,
      recentProjects: demoProjects,
      recentMessages: [],
      recentTestimonials: demoPublicData.testimonials,
      logs: [{ _id: "log-1", action: "Demo mode active", entity: "System", entityId: "local", createdAt: new Date().toISOString() }],
      admins: [demoAdmin],
      skills: demoPublicData.skills,
      faqs: demoPublicData.faqs,
      media: []
    };
  }
  await connectDb();
  const [totalProjects, publishedProjects, draftProjects, categories, testimonials, clients, services, messages, recentProjects, recentMessages, recentTestimonials, logs, admins, skills, faqs, media] = await Promise.all([
    Project.countDocuments(),
    Project.countDocuments({ status: "published" }),
    Project.countDocuments({ status: "draft" }),
    Category.countDocuments(),
    Testimonial.countDocuments(),
    Client.countDocuments(),
    Service.countDocuments(),
    ContactMessage.countDocuments(),
    Project.find().sort({ updatedAt: -1 }).limit(6).lean(),
    ContactMessage.find().sort({ createdAt: -1 }).limit(6).lean(),
    Testimonial.find().sort({ createdAt: -1 }).limit(5).lean(),
    AuditLog.find().sort({ createdAt: -1 }).limit(20).populate("user", "name email").lean(),
    Admin.find().select("-passwordHash").sort({ createdAt: -1 }).lean(),
    Skill.find().sort({ order: 1 }).lean(),
    FAQ.find().sort({ order: 1 }).lean(),
    Media.find().sort({ createdAt: -1 }).lean()
  ]);
  return toPlain<any>({ totalProjects, publishedProjects, draftProjects, categories, testimonials, clients, services, messages, recentProjects, recentMessages, recentTestimonials, logs, admins, skills, faqs, media });
}

export async function listProjectsForAdmin() {
  if (!hasDatabase()) return demoProjects;
  await connectDb();
  return toPlain<any[]>(await Project.find().sort({ order: 1, updatedAt: -1 }).lean());
}
