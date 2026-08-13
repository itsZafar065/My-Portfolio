import { notFound } from "next/navigation";
import { PublicPageShell } from "@/components/public-layout";
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
  const sections = [
    ["Overview", project.caseStudy?.overview],
    ["Problem", project.caseStudy?.problem],
    ["Goals", project.caseStudy?.goals],
    ["Solution", project.caseStudy?.solution],
    ["Design Process", project.caseStudy?.designProcess],
    ["Development", project.caseStudy?.developmentProcess],
    ["Challenges", project.caseStudy?.challenges],
    ["Results", project.caseStudy?.results],
    ["Lessons Learned", project.caseStudy?.lessonsLearned]
  ].filter(([, value]) => value);

  return (
    <PublicPageShell eyebrow={project.projectType || "Case study"} title={project.title} description={project.fullDescription}>
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
