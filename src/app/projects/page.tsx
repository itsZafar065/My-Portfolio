import Link from "next/link";
import { PublicPageShell } from "@/components/public-layout";
import { getPublicData } from "@/lib/data";

export default async function ProjectsPage() {
  const { projects } = await getPublicData();
  return (
    <PublicPageShell eyebrow="Projects" title="Selected work with real product thinking." description="Case studies are pulled from the CMS and presented with consistent responsive UI.">
      <section className="section project-grid">
        {projects.map((project: any, index: number) => (
          <Link className="project-card glass-card" href={`/projects/${project.slug}`} key={project._id}>
            <div className="project-art"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <p className="pill muted-pill">{project.projectType || "Project"}</p>
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
          </Link>
        ))}
      </section>
    </PublicPageShell>
  );
}
