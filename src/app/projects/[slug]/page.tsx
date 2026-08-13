import { notFound } from "next/navigation";
import { getProject } from "@/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project: any = await getProject(slug);
  if (!project) return {};
  return { title: project.seo?.title || project.title, description: project.seo?.description || project.shortDescription, robots: project.seo?.noIndex ? "noindex,nofollow" : "index,follow" };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project: any = await getProject(slug);
  if (!project) notFound();
  const sections = ["overview", "problem", "goals", "solution", "designProcess", "developmentProcess", "keyFeatures", "challenges", "results", "lessonsLearned"];
  return <main><section className="container" style={{ padding: "80px 0" }}><p className="eyebrow">{project.projectType}</p><h1 style={{ fontSize: "clamp(42px, 7vw, 92px)" }}>{project.title}</h1><p style={{ fontSize: 22, color: "var(--muted)" }}>{project.fullDescription}</p></section>{sections.map((s) => project.caseStudy?.[s] ? <section className="section" key={s}><div className="container"><p className="eyebrow">{s}</p>{Array.isArray(project.caseStudy[s]) ? <ul>{project.caseStudy[s].map((x: string) => <li key={x}>{x}</li>)}</ul> : <p style={{ maxWidth: 760 }}>{project.caseStudy[s]}</p>}</div></section> : null)}</main>;
}
