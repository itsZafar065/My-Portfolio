import { PublicPageShell } from "@/components/public-layout";
import { getPublicData } from "@/lib/data";

export default async function SkillsPage() {
  const { skills } = await getPublicData();
  return (
    <PublicPageShell eyebrow="Skills" title="A practical stack for premium builds." description="Technologies are CMS-managed and presented as a clean, scannable stack.">
      <section className="section skill-panel glass-panel">
        <div><h2>Core toolkit</h2><p>Frontend, backend, database, and product tooling for fast, reliable delivery.</p></div>
        <div className="skill-cloud">{skills.map((skill: any) => <span key={skill._id}>{skill.name}</span>)}</div>
      </section>
    </PublicPageShell>
  );
}
