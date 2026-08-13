import Link from "next/link";
import { ArrowUpRight, Code2, Database, LayoutDashboard, Layers3, Mail, ShieldCheck, Sparkles } from "lucide-react";

export function PublicHome({ data }: { data: any }) {
  const { settings, projects, services, skills, testimonials, faqs } = data;
  const featuredProject = projects[0];

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="site-nav">
        <Link href="/" className="brand-mark">
          <span>AN</span>
          <strong>{settings.siteName}</strong>
        </Link>
        <div className="nav-links">
          {["projects", "services", "skills", "faq", "contact"].map((item) => (
            <Link key={item} href={`/${item}`}>{item}</Link>
          ))}
        </div>
        <Link className="nav-admin" href="/admin/login">CMS</Link>
      </nav>

      <section className="hero-grid">
        <div className="hero-copy">
          <p className="pill"><Sparkles size={15} /> {settings.hero.label}</p>
          <h1>{settings.hero.heading}</h1>
          <p className="hero-lead">{settings.hero.description}</p>
          <div className="hero-actions">
            <Link className="btn glass-primary" href="/projects">{settings.hero.primaryButton}<ArrowUpRight size={18} /></Link>
            <Link className="btn glass-button" href="/contact">{settings.hero.secondaryButton}</Link>
          </div>
          <div className="proof-strip">
            <span><strong>12+</strong> CMS modules</span>
            <span><strong>90+</strong> SEO target</span>
            <span><strong>RBAC</strong> admin security</span>
          </div>
        </div>

        <aside className="hero-console glass-panel">
          <div className="console-header">
            <span />
            <span />
            <span />
            <p>portfolio.cms</p>
          </div>
          <div className="console-body">
            <div className="signal-card">
              <LayoutDashboard />
              <div>
                <small>Live CMS status</small>
                <strong>Public content synced</strong>
              </div>
            </div>
            {featuredProject && (
              <Link href={`/projects/${featuredProject.slug}`} className="featured-project">
                <small>Featured case study</small>
                <h2>{featuredProject.title}</h2>
                <p>{featuredProject.shortDescription}</p>
                <span>Open project <ArrowUpRight size={16} /></span>
              </Link>
            )}
            <div className="tech-stack">
              {skills.slice(0, 6).map((skill: any) => <span key={skill._id}>{skill.name}</span>)}
            </div>
          </div>
        </aside>
      </section>

      <section className="section glass-section">
        <div className="section-head">
          <p className="pill muted-pill">System quality</p>
          <h2>Built like a real portfolio management platform.</h2>
        </div>
        <div className="feature-grid">
          {[
            ["Secure APIs", ShieldCheck, "Server-side auth, role checks, validation, and safe session cookies."],
            ["CMS data model", Database, "Projects, services, FAQs, skills, SEO, settings, media, and messages are structured."],
            ["Premium UI", Layers3, "Glass surfaces, strong spacing, and responsive layouts tuned for client impressions."],
            ["Developer craft", Code2, "Next.js, TypeScript, Mongoose models, metadata, sitemap, and protected routes."]
          ].map(([label, Icon, body]: any) => (
            <article className="glass-card feature-card" key={label}>
              <Icon />
              <h3>{label}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head split">
          <div>
            <p className="pill muted-pill">Selected work</p>
            <h2>Case studies managed from the dashboard.</h2>
          </div>
          <Link className="btn glass-button" href="/projects">View all</Link>
        </div>
        <div className="project-grid">
          {projects.map((project: any, index: number) => (
            <Link className="project-card glass-card" href={`/projects/${project.slug}`} key={project._id}>
              <div className="project-art">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="pill muted-pill">{project.projectType || "Project"}</p>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <div className="project-tech">{project.technologies?.slice(0, 4).map((tech: string) => <span key={tech}>{tech}</span>)}</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="services" className="section split-services">
        <div className="section-head">
          <p className="pill muted-pill">Services</p>
          <h2>Database-driven offers, not hard-coded blocks.</h2>
        </div>
        <div className="service-list">
          {services.map((service: any) => (
            <article className="glass-card service-card" key={service._id}>
              <span>{service.icon || "CMS"}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section glass-panel skill-panel">
        <div>
          <p className="pill muted-pill">Technologies</p>
          <h2>Modern stack, clean operations.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill: any) => <span key={skill._id}>{skill.name}</span>)}
        </div>
      </section>

      <section className="section testimonial-grid">
        {testimonials.map((testimonial: any) => (
          <blockquote className="glass-card quote-card" key={testimonial._id}>
            <p>"{testimonial.testimonial}"</p>
            <footer>{testimonial.clientName} · {testimonial.company}</footer>
          </blockquote>
        ))}
      </section>

      <section id="faq" className="section faq-wrap">
        <div className="section-head">
          <p className="pill muted-pill">FAQ</p>
          <h2>Questions your clients will actually ask.</h2>
        </div>
        {faqs.map((faq: any) => (
          <details className="glass-card faq-item" key={faq._id}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <ContactForm settings={settings} />
    </main>
  );
}

function ContactForm({ settings }: { settings: any }) {
  return (
    <section id="contact" className="section contact-grid">
      <div>
        <p className="pill muted-pill"><Mail size={15} /> Contact</p>
        <h2>{settings.contact.heading}</h2>
        <p>{settings.contact.description}</p>
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
  );
}
