import { saveProject } from "@/app/actions";

export function ProjectForm({ project }: { project?: any }) {
  const p = project ?? {};
  return <form action={saveProject} className="grid card">
    {p._id && <input type="hidden" name="id" value={p._id} />}
    {["title", "slug", "shortDescription", "fullDescription", "thumbnail", "coverImage", "logo", "projectType", "projectUrl", "githubUrl", "completionDate", "duration"].map((name) => (
      <label className="field" key={name}>{name}<input name={name} defaultValue={p[name] ?? ""} required={["title", "shortDescription", "fullDescription"].includes(name)} /></label>
    ))}
    <label className="field">technologies<input name="technologies" defaultValue={(p.technologies ?? []).join(", ")} /></label>
    <label className="field">galleryImages<input name="galleryImages" defaultValue={(p.galleryImages ?? []).join(", ")} /></label>
    <label className="field">status<select name="status" defaultValue={p.status ?? "draft"}><option>draft</option><option>published</option><option>archived</option></select></label>
    <label className="field">order<input type="number" name="order" defaultValue={p.order ?? 0} /></label>
    <label style={{ display: "flex", gap: 8 }}><input type="checkbox" name="featured" defaultChecked={p.featured} /> Featured</label>
    {["overview", "problem", "goals", "solution", "designProcess", "developmentProcess", "keyFeatures", "challenges", "results", "lessonsLearned"].map((name) => <label className="field" key={name}>{name}<textarea name={name} rows={4} defaultValue={Array.isArray(p.caseStudy?.[name]) ? p.caseStudy[name].join("\n") : p.caseStudy?.[name] ?? ""} /></label>)}
    {["seoTitle", "metaDescription", "focusKeyword", "ogImage", "canonicalUrl"].map((name) => <label className="field" key={name}>{name}<input name={name} defaultValue={p.seo?.[name] ?? ""} /></label>)}
    <label style={{ display: "flex", gap: 8 }}><input type="checkbox" name="noIndex" defaultChecked={p.seo?.noIndex} /> Noindex</label>
    <button className="btn primary" type="submit">Save project</button>
  </form>;
}
