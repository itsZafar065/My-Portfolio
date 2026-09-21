import { notFound } from "next/navigation";
import { PublicPageShell } from "@/components/public-layout";
import { getProject } from "@/lib/data";
import { ExternalLink } from "lucide-react";

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
  const sections = [
    ["Overview", project.caseStudy?.overview],
    ["Problem", project.caseStudy?.problem],
    ["Goals", project.caseStudy?.goals],
    ["Solution", project.caseStudy?.solution],
    ["Key Features", project.caseStudy?.keyFeatures],
    ["Design Process", project.caseStudy?.designProcess],
    ["Development", project.caseStudy?.developmentProcess],
    ["Challenges", project.caseStudy?.challenges],
    ["Results", project.caseStudy?.results],
    ["Lessons Learned", project.caseStudy?.lessonsLearned]
  ].filter(([, value]) => value);

  return (
    <PublicPageShell eyebrow={project.projectType || "Case study"} title={project.title} description={project.fullDescription}>
      {project.projectUrl && (
        <div style={{ marginBottom: "2rem" }}>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn glass-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Visit Live Website <ExternalLink size={18} />
          </a>
        </div>
      )}
      {(project.coverImage || project.thumbnail) && (
        <div className="glass-card" style={{ marginBottom: "2.5rem", overflow: "hidden", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.1)" }}>
          <img
            src={project.coverImage || project.thumbnail}
            alt={project.title}
            style={{ width: "100%", maxHeight: "550px", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
        </div>
      )}
      <section className="section skill-panel glass-panel">
        <div><h2>Project stack</h2><p>Technology and delivery context for this build.</p></div>
        <div className="skill-cloud">{project.technologies?.map((tech: string) => <span key={tech}>{tech}</span>)}</div>
      </section>
      <section className="section about-grid">
        {sections.map(([title, value]) => (
          <article className="glass-card intro-card" key={title as string}>
            <h3>{title as string}</h3>
            {Array.isArray(value) ? <ul>{value.map((item: string) => <li key={item}>{item}</li>)}</ul> : <p>{value as string}</p>}
          </article>
        ))}
      </section>
    </PublicPageShell>
  );
}
