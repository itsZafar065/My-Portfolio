import { PublicPageShell } from "@/components/public-layout";
import { getPublicData } from "@/lib/data";

export default async function AboutPage() {
  const { settings } = await getPublicData();
  return (
    <PublicPageShell eyebrow="About Zafar" title={settings.about.heading} description={settings.about.description}>
      <section className="section about-grid">
        {["Interface clarity", "Backend reliability", "Content control"].map((item) => (
          <article className="glass-card intro-card" key={item}>
            <h3>{item}</h3>
            <p>Every decision supports a portfolio that looks refined and remains easy to manage from the dashboard.</p>
          </article>
        ))}
      </section>
    </PublicPageShell>
  );
}
