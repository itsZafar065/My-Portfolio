import { PublicPageShell } from "@/components/public-layout";
import { getPublicData } from "@/lib/data";

export default async function ContactPage() {
  const { settings } = await getPublicData();
  return (
    <PublicPageShell eyebrow="Contact" title={settings.contact.heading} description={settings.contact.description}>
      <section className="section contact-grid">
        <div className="glass-card intro-card">
          <h3>Project details</h3>
          <p>Send the goal, timeline, budget range, and any reference links. Zafar will reply with a practical direction.</p>
          <div className="contact-lines">
            <span>{settings.email}</span>
            <span>{settings.phone}</span>
            <span>{settings.location}</span>
          </div>
        </div>
        <form action="/api/contact" method="post" className="glass-card contact-form">
          {["name", "email", "phone", "company", "subject"].map((name) => (
            <label className="field" key={name}>
              {name}
              <input name={name} required={["name", "email", "subject"].includes(name)} />
            </label>
          ))}
          <label className="field">message<textarea name="message" rows={6} required /></label>
          <button className="btn glass-primary" type="submit">{settings.contact.cta}</button>
        </form>
      </section>
    </PublicPageShell>
  );
}
