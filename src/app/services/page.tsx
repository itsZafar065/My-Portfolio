import { PublicPageShell } from "@/components/public-layout";
import { getPublicData } from "@/lib/data";

export default async function ServicesPage() {
  const { services } = await getPublicData();
  return (
    <PublicPageShell eyebrow="Services" title="Focused services for modern web products." description="Clean public UI, robust admin systems, and scalable full stack architecture.">
      <section className="section service-list">
        {services.map((service: any) => (
          <article className="glass-card service-card" key={service._id}>
            <span>{service.icon || "UI"}</span>
            <div><h3>{service.title}</h3><p>{service.description}</p></div>
          </article>
        ))}
      </section>
    </PublicPageShell>
  );
}
