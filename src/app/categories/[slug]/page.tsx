import Link from "next/link";
import { PublicPageShell } from "@/components/public-layout";
import { getPublicData } from "@/lib/data";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getPublicData();
  const projects = data.projects.filter((project: any) => project.category?.slug === slug || slug === "full-stack-development");
  return (
    <PublicPageShell eyebrow="Category" title={slug.replaceAll("-", " ")} description="Projects filtered from CMS category records.">
      <section className="section project-grid">
        {projects.map((project: any, index: number) => (
          <Link className="project-card glass-card" href={`/projects/${project.slug}`} key={project._id}>
            <div className="project-art"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
          </Link>
        ))}
      </section>
    </PublicPageShell>
  );
}
