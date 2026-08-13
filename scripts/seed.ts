import "dotenv/config";
import { connectDb } from "../src/lib/db";
import { hashPassword } from "../src/lib/security";
import { Admin } from "../src/models/Admin";
import { Category, FAQ, Project, Service, SiteSettings, Skill, Testimonial } from "../src/models/Content";

async function main() {
  await connectDb();
  const email = process.env.ADMIN_EMAIL ?? "admin@example.com";
  const password = process.env.ADMIN_PASSWORD ?? "change-this-password";
  await Admin.updateOne({ email }, { $setOnInsert: { name: "Site Administrator", email, role: "super_admin", status: "active", passwordHash: await hashPassword(password) } }, { upsert: true });
  const category = await Category.findOneAndUpdate({ slug: "full-stack-development" }, { name: "Full Stack Development", slug: "full-stack-development", description: "End-to-end product engineering.", enabled: true }, { upsert: true, new: true });
  await SiteSettings.findOneAndUpdate({ singleton: "site" }, {
    singleton: "site",
    siteName: "Zafar",
    siteDescription: "Premium full stack developer portfolio.",
    email: "hello@example.com",
    phone: "+1 555 0100",
    location: "Available worldwide",
    social: { github: "https://github.com", linkedin: "https://linkedin.com" },
    hero: { label: "Full Stack Developer", heading: "I build secure, CMS-driven web platforms with a premium finish.", description: "A production portfolio powered by Next.js, MongoDB, protected admin workflows, and database-managed content.", primaryButton: "View projects", secondaryButton: "Start a project" },
    about: { heading: "Product-minded engineering for serious web experiences.", description: "I design and develop robust interfaces, APIs, and content systems that teams can operate without touching source code." },
    contact: { heading: "Tell me what you are building.", description: "Project brief, goals, timeline, and constraints are enough to start.", cta: "Send message" },
    footer: { text: "Premium full stack development.", copyright: "Copyright 2026" },
    seo: { title: "Zafar | Full Stack Developer", description: "Premium full stack developer portfolio and CMS.", keywords: ["Next.js", "MongoDB", "Full Stack Developer"] }
  }, { upsert: true });
  await Project.updateOne({ slug: "cms-commerce-platform" }, { $setOnInsert: { title: "CMS Commerce Platform", slug: "cms-commerce-platform", shortDescription: "A secure commerce dashboard and storefront built for fast catalog operations.", fullDescription: "A full stack commerce platform with role-aware admin workflows, product publishing, media management, and optimized public pages.", category: category._id, technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"], projectType: "SaaS / E-commerce", status: "published", featured: true, order: 1, caseStudy: { overview: "A scalable storefront and admin CMS for a growing product team.", problem: "The team needed to ship content changes quickly without developer intervention.", goals: "Improve content velocity, search visibility, and admin safety.", solution: "A protected CMS with structured content, validation, and dynamic public rendering.", keyFeatures: ["Role-based admin", "Database-driven content", "SEO controls", "Audit log"], results: "Reduced content publishing time and improved maintainability." }, seo: { title: "CMS Commerce Platform Case Study", description: "A full stack commerce CMS case study." } } }, { upsert: true });
  await Service.updateOne({ title: "Full Stack Development" }, { title: "Full Stack Development", description: "Secure frontend, backend, database, and deployment-ready architecture.", features: ["Next.js", "APIs", "MongoDB"], enabled: true, order: 1 }, { upsert: true });
  await Skill.updateOne({ name: "Next.js" }, { name: "Next.js", category: "Frontend", experienceLevel: 95, featured: true, order: 1 }, { upsert: true });
  await Testimonial.updateOne({ clientName: "Avery Stone" }, { clientName: "Avery Stone", position: "Founder", company: "Northstar Labs", testimonial: "The CMS gave our team control without compromising design quality.", rating: 5, status: "published", order: 1 }, { upsert: true });
  await FAQ.updateOne({ question: "Can I edit portfolio content without code?" }, { question: "Can I edit portfolio content without code?", answer: "Yes. Projects, services, FAQs, testimonials, skills, SEO, settings, and messages are managed through the protected dashboard.", category: "CMS", status: "published", order: 1 }, { upsert: true });
  console.log(`Seed complete. Admin: ${email}`);
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
