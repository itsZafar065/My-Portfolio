import { connectDb } from "@/lib/db";
import { Project } from "@/models/Content";
export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  let projects: any[] = [];
  try {
    await connectDb();
    projects = await Project.find({ status: "published" }).select("slug updatedAt").lean();
  } catch {
    projects = [];
  }
  return [{ url: base, lastModified: new Date() }, ...projects.map((p: any) => ({ url: `${base}/projects/${p.slug}`, lastModified: p.updatedAt }))];
}
