export type Role = "super_admin" | "editor";
export type PublishStatus = "draft" | "published" | "archived";

export type Project = {
  _id?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail?: string;
  coverImage?: string;
  galleryImages: string[];
  logo?: string;
  client?: string;
  category?: string;
  technologies: string[];
  projectType?: string;
  projectUrl?: string;
  githubUrl?: string;
  completionDate?: string;
  duration?: string;
  status: PublishStatus;
  featured: boolean;
  order: number;
  caseStudy: Record<string, string | string[]>;
  seo: SeoFields;
  createdAt?: string;
  updatedAt?: string;
};

export type SeoFields = {
  title?: string;
  description?: string;
  focusKeyword?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
};

export type AdminUser = {
  _id?: string;
  name: string;
  email: string;
  role: Role;
  status: "active" | "disabled";
  profileImage?: string;
  lastLogin?: string;
  createdAt?: string;
};

export type SiteSettings = {
  siteName: string;
  logo?: string;
  favicon?: string;
  siteDescription: string;
  email: string;
  phone: string;
  location: string;
  social: Record<string, string>;
  hero: Record<string, string>;
  about: Record<string, string>;
  contact: Record<string, string>;
  footer: Record<string, string>;
  seo: SeoFields & {
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    twitterCard?: string;
    robots?: string;
    googleVerification?: string;
  };
};
