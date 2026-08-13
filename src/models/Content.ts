import mongoose, { Schema, models } from "mongoose";

const seo = {
  title: String,
  description: String,
  focusKeyword: String,
  ogImage: String,
  canonicalUrl: String,
  noIndex: { type: Boolean, default: false }
};

const ProjectSchema = new Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  thumbnail: String,
  coverImage: String,
  galleryImages: [String],
  logo: String,
  client: { type: Schema.Types.ObjectId, ref: "Client" },
  category: { type: Schema.Types.ObjectId, ref: "Category", index: true },
  technologies: [String],
  projectType: String,
  projectUrl: String,
  githubUrl: String,
  completionDate: Date,
  duration: String,
  status: { type: String, enum: ["draft", "published", "archived"], default: "draft", index: true },
  featured: { type: Boolean, default: false, index: true },
  order: { type: Number, default: 0, index: true },
  caseStudy: { type: Schema.Types.Mixed, default: {} },
  seo
}, { timestamps: true });

const CategorySchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  description: String,
  image: String,
  icon: String,
  enabled: { type: Boolean, default: true, index: true },
  seo
}, { timestamps: true });

const ClientSchema = new Schema({
  name: { type: String, required: true },
  company: String,
  logo: String,
  website: String,
  country: String,
  industry: String,
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }]
}, { timestamps: true });

const TestimonialSchema = new Schema({
  clientName: { type: String, required: true },
  position: String,
  company: String,
  photo: String,
  testimonial: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  status: { type: String, enum: ["draft", "published"], default: "published", index: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

const ServiceSchema = new Schema({
  icon: String,
  title: { type: String, required: true },
  description: String,
  features: [String],
  order: { type: Number, default: 0 },
  enabled: { type: Boolean, default: true, index: true }
}, { timestamps: true });

const SkillSchema = new Schema({
  name: { type: String, required: true },
  logo: String,
  category: { type: String, enum: ["Frontend", "Backend", "Database", "CMS", "Design", "Tools"], index: true },
  experienceLevel: { type: Number, min: 1, max: 100, default: 80 },
  order: { type: Number, default: 0 },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

const FaqSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: String,
  order: { type: Number, default: 0 },
  status: { type: String, enum: ["draft", "published"], default: "published", index: true }
}, { timestamps: true });

const ContactMessageSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  subject: String,
  message: String,
  ip: String,
  userAgent: String,
  status: { type: String, enum: ["new", "read", "replied", "archived"], default: "new", index: true }
}, { timestamps: true });

const SiteSettingsSchema = new Schema({
  singleton: { type: String, default: "site", unique: true },
  siteName: String,
  logo: String,
  favicon: String,
  siteDescription: String,
  email: String,
  phone: String,
  location: String,
  social: { type: Schema.Types.Mixed, default: {} },
  hero: { type: Schema.Types.Mixed, default: {} },
  about: { type: Schema.Types.Mixed, default: {} },
  contact: { type: Schema.Types.Mixed, default: {} },
  footer: { type: Schema.Types.Mixed, default: {} },
  seo: { type: Schema.Types.Mixed, default: {} }
}, { timestamps: true });

const MediaSchema = new Schema({
  filename: String,
  url: { type: String, required: true },
  mimeType: String,
  size: Number,
  alt: String,
  uploadedBy: { type: Schema.Types.ObjectId, ref: "Admin" }
}, { timestamps: true });

export const Project = models.Project || mongoose.model("Project", ProjectSchema);
export const Category = models.Category || mongoose.model("Category", CategorySchema);
export const Client = models.Client || mongoose.model("Client", ClientSchema);
export const Testimonial = models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);
export const Service = models.Service || mongoose.model("Service", ServiceSchema);
export const Skill = models.Skill || mongoose.model("Skill", SkillSchema);
export const FAQ = models.FAQ || mongoose.model("FAQ", FaqSchema);
export const ContactMessage = models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema);
export const SiteSettings = models.SiteSettings || mongoose.model("SiteSettings", SiteSettingsSchema);
export const Media = models.Media || mongoose.model("Media", MediaSchema);
