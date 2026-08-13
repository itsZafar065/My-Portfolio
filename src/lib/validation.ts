import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.coerce.boolean().optional()
});

export const projectSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/),
  shortDescription: z.string().min(10),
  fullDescription: z.string().min(20),
  thumbnail: z.string().optional(),
  coverImage: z.string().optional(),
  galleryImages: z.array(z.string()).default([]),
  logo: z.string().optional(),
  client: z.string().optional(),
  category: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  projectType: z.string().optional(),
  projectUrl: z.string().url().or(z.literal("")).optional(),
  githubUrl: z.string().url().or(z.literal("")).optional(),
  completionDate: z.string().optional(),
  duration: z.string().optional(),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
  featured: z.coerce.boolean().default(false),
  order: z.coerce.number().default(0),
  caseStudy: z.record(z.string(), z.union([z.string(), z.array(z.string())])).default({}),
  seo: z.record(z.string(), z.union([z.string(), z.boolean(), z.array(z.string())])).default({})
});

export const messageSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  company: z.string().max(120).optional(),
  subject: z.string().min(3).max(160),
  message: z.string().min(10).max(4000)
});
