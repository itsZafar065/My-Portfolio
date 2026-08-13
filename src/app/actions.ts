"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { connectDb } from "@/lib/db";
import { hasDatabase } from "@/lib/db";
import { assertAdmin, clearSession, createSession, hashPassword, logAction, verifyPassword } from "@/lib/security";
import { loginSchema, projectSchema } from "@/lib/validation";
import { Admin } from "@/models/Admin";
import { Category, Client, FAQ, Media, Project, Service, SiteSettings, Skill, Testimonial } from "@/models/Content";

export async function loginAction(_: unknown, formData: FormData) {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "Enter a valid email and password." };
  if (!hasDatabase()) {
    const email = process.env.ADMIN_EMAIL ?? "admin@portfolio.local";
    const password = process.env.ADMIN_PASSWORD ?? "Admin@12345";
    if (parsed.data.email !== email || parsed.data.password !== password) return { error: "Invalid credentials." };
    await createSession("demo-admin", parsed.data.remember);
    redirect("/admin");
  }
  await connectDb();
  const admin = await Admin.findOne({ email: parsed.data.email, status: "active" }).select("+passwordHash");
  if (!admin || !(await verifyPassword(parsed.data.password, admin.passwordHash))) return { error: "Invalid credentials." };
  admin.lastLogin = new Date();
  await admin.save();
  await createSession(admin._id.toString(), parsed.data.remember);
  await logAction("Login", "Admin", admin._id.toString());
  redirect("/admin");
}

export async function logoutAction() {
  await logAction("Logout");
  await clearSession();
  redirect("/admin/login");
}

export async function saveProject(formData: FormData) {
  await assertAdmin();
  if (!hasDatabase()) redirect("/admin/projects");
  const data = {
    title: formData.get("title"),
    slug: formData.get("slug") || slugify(String(formData.get("title")), { lower: true, strict: true }),
    shortDescription: formData.get("shortDescription"),
    fullDescription: formData.get("fullDescription"),
    thumbnail: formData.get("thumbnail"),
    coverImage: formData.get("coverImage"),
    galleryImages: String(formData.get("galleryImages") || "").split(",").map((x) => x.trim()).filter(Boolean),
    logo: formData.get("logo"),
    technologies: String(formData.get("technologies") || "").split(",").map((x) => x.trim()).filter(Boolean),
    projectType: formData.get("projectType"),
    projectUrl: formData.get("projectUrl"),
    githubUrl: formData.get("githubUrl"),
    completionDate: formData.get("completionDate"),
    duration: formData.get("duration"),
    status: formData.get("status"),
    featured: formData.get("featured") === "on",
    order: formData.get("order") || 0,
    caseStudy: {
      overview: formData.get("overview"),
      problem: formData.get("problem"),
      goals: formData.get("goals"),
      solution: formData.get("solution"),
      designProcess: formData.get("designProcess"),
      developmentProcess: formData.get("developmentProcess"),
      keyFeatures: String(formData.get("keyFeatures") || "").split("\n").filter(Boolean),
      challenges: formData.get("challenges"),
      results: formData.get("results"),
      lessonsLearned: formData.get("lessonsLearned")
    },
    seo: {
      title: formData.get("seoTitle"),
      description: formData.get("metaDescription"),
      focusKeyword: formData.get("focusKeyword"),
      ogImage: formData.get("ogImage"),
      canonicalUrl: formData.get("canonicalUrl"),
      noIndex: formData.get("noIndex") === "on"
    }
  };
  const parsed = projectSchema.parse(data);
  const id = formData.get("id");
  const project = id ? await Project.findByIdAndUpdate(id, parsed, { new: true }) : await Project.create(parsed);
  await logAction(id ? "Project updated" : "Project created", "Project", project._id.toString());
  revalidatePath("/");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  await assertAdmin();
  if (!hasDatabase()) return;
  await Project.findByIdAndDelete(id);
  await logAction("Project deleted", "Project", id);
  revalidatePath("/");
}

export async function quickCreate(type: string, formData: FormData) {
  await assertAdmin();
  if (!hasDatabase()) return;
  const body = Object.fromEntries(formData);
  const model: Record<string, any> = { categories: Category, clients: Client, testimonials: Testimonial, services: Service, skills: Skill, faqs: FAQ, media: Media, "site-settings": SiteSettings };
  const Model = model[type];
  if (!Model) throw new Error("Invalid content type");
  if (type === "categories" && !body.slug) body.slug = slugify(String(body.name), { lower: true, strict: true });
  if (type === "site-settings") await SiteSettings.findOneAndUpdate({ singleton: "site" }, { ...body, singleton: "site" }, { upsert: true });
  else await Model.create(body);
  await logAction(`${type} saved`, type);
  revalidatePath("/");
}

export async function createAdministrator(formData: FormData) {
  await assertAdmin(["super_admin"]);
  if (!hasDatabase()) return;
  const admin = await Admin.create({
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
    status: "active",
    passwordHash: await hashPassword(String(formData.get("password")))
  });
  await logAction("User created", "Admin", admin._id.toString());
}
