"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Gauge, LayoutDashboard, Mail, Menu, MousePointer2, ShieldCheck, Sparkles, X } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

export function PublicHome({ data }: { data: any }) {
  const { settings, projects, services, skills, testimonials, faqs } = data;
  const [open, setOpen] = useState(false);
  const featuredProject = projects[0];

  return (
    <main className="site-shell">
      <div className="mesh mesh-a" />
      <div className="mesh mesh-b" />
      <div className="noise-layer" />

      <nav className="site-nav">
        <Link href="/" className="brand-mark">
          <span>Z</span>
          <strong>Zafar</strong>
        </Link>

        <button className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {["projects", "services", "skills", "faq", "contact"].map((item) => (
            <Link key={item} href={`/${item}`} onClick={() => setOpen(false)}>{item}</Link>
          ))}
          <Link className="nav-admin" href="/admin/login">CMS</Link>
        </div>
      </nav>

      <motion.section className="hero-grid" initial="hidden" animate="visible" variants={stagger}>
        <motion.div className="hero-copy" variants={fadeUp}>
          <p className="pill"><Sparkles size={15} /> {settings.hero.label}</p>
          <h1>{settings.hero.heading}</h1>
          <p className="hero-lead">{settings.hero.description}</p>
          <div className="hero-actions">
            <Link className="btn glass-primary" href="/projects">{settings.hero.primaryButton}<ArrowUpRight size={18} /></Link>
            <Link className="btn glass-button" href="/contact">{settings.hero.secondaryButton}</Link>
          </div>
        </motion.div>

        <motion.aside className="hero-stage" variants={fadeUp}>
          <div className="orbit-card glass-card">
            <div className="avatar-orb">Z</div>
            <p>Available for polished full stack builds</p>
          </div>
          <div className="floating-card glass-card card-one">
            <Gauge size={18} />
            <span>Performance minded UI</span>
          </div>
          <div className="floating-card glass-card card-two">
            <ShieldCheck size={18} />
            <span>Secure admin systems</span>
          </div>
          <div className="device-frame glass-panel">
            <div className="device-bar"><span /><span /><span /></div>
            <div className="device-content">
              <small>Featured project</small>
              <h2>{featuredProject?.title ?? "Portfolio CMS"}</h2>
              <p>{featuredProject?.shortDescription ?? "Database-driven portfolio content with a protected dashboard."}</p>
              <div className="mini-metrics">
                <span><strong>Next</strong> App Router</span>
                <span><strong>CMS</strong> Ready</span>
                <span><strong>UX</strong> Focused</span>
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.section>

      <motion.section className="section intro-strip" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
        {[
          ["Frontend polish", "Interfaces with hierarchy, rhythm, glass surfaces, and responsive behavior."],
          ["Full stack logic", "APIs, auth, data models, and CMS workflows that support real content."],
          ["Client confidence", "Portfolio pages that feel premium without becoming noisy or confusing."]
        ].map(([title, body]) => (
          <motion.article className="glass-card intro-card" variants={fadeUp} key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </motion.article>
        ))}
      </motion.section>

      <motion.section id="projects" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
        <div className="section-head split">
          <div>
            <p className="pill muted-pill">Selected work</p>
            <h2>Quietly premium case studies.</h2>
            <p>Each project card is driven by CMS records, but styled like a real designer touched it.</p>
          </div>
          <Link className="btn glass-button" href="/projects">All projects</Link>
        </div>
        <div className="project-grid">
          {projects.map((project: any, index: number) => (
            <motion.div variants={fadeUp} key={project._id}>
              <Link className="project-card glass-card" href={`/projects/${project.slug}`}>
                <div className="project-art">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <MousePointer2 size={28} />
                </div>
                <p className="pill muted-pill">{project.projectType || "Project"}</p>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="project-tech">{project.technologies?.slice(0, 4).map((tech: string) => <span key={tech}>{tech}</span>)}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="services" className="section service-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="section-head">
          <p className="pill muted-pill">Services</p>
          <h2>Design-led development services.</h2>
          <p>Everything here can be edited later from the CMS, but the public layout stays clean and premium.</p>
        </div>
        <div className="service-list">
          {services.map((service: any) => (
            <motion.article className="glass-card service-card" variants={fadeUp} key={service._id}>
              <span>{service.icon || "UI"}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="skills" className="section skill-panel glass-panel" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
        <div>
          <p className="pill muted-pill">Stack</p>
          <h2>Tools I use to ship sharp products.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill: any) => <span key={skill._id}>{skill.name}</span>)}
        </div>
      </motion.section>

      <motion.section className="section proof-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
        <div className="proof-card glass-card">
          <LayoutDashboard />
          <strong>CMS-backed</strong>
          <span>Public portfolio content updates from dashboard records.</span>
        </div>
        <div className="proof-card glass-card">
          <Database />
          <strong>Structured</strong>
          <span>Projects, FAQs, services, skills, testimonials, and settings.</span>
        </div>
        <div className="proof-card glass-card">
          <Code2 />
          <strong>Responsive</strong>
          <span>Layouts are tuned separately for desktop, tablet, and mobile.</span>
        </div>
      </motion.section>

      <motion.section className="section testimonial-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        {testimonials.map((testimonial: any) => (
          <motion.blockquote className="glass-card quote-card" variants={fadeUp} key={testimonial._id}>
            <p>"{testimonial.testimonial}"</p>
            <footer>{testimonial.clientName} · {testimonial.company}</footer>
          </motion.blockquote>
        ))}
      </motion.section>

      <motion.section id="faq" className="section faq-wrap" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="section-head">
          <p className="pill muted-pill">FAQ</p>
          <h2>Simple answers, no clutter.</h2>
        </div>
        {faqs.map((faq: any) => (
          <motion.details className="glass-card faq-item" variants={fadeUp} key={faq._id}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </motion.details>
        ))}
      </motion.section>

      <ContactForm settings={settings} />
    </main>
  );
}

function ContactForm({ settings }: { settings: any }) {
  return (
    <motion.section id="contact" className="section contact-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
      <motion.div variants={fadeUp}>
        <p className="pill muted-pill"><Mail size={15} /> Contact</p>
        <h2>{settings.contact.heading}</h2>
        <p>{settings.contact.description}</p>
        <div className="contact-lines">
          <span>{settings.email}</span>
          <span>{settings.phone}</span>
          <span>{settings.location}</span>
        </div>
      </motion.div>
      <motion.form variants={fadeUp} action="/api/contact" method="post" className="glass-card contact-form">
        {["name", "email", "phone", "company", "subject"].map((name) => (
          <label className="field" key={name}>
            {name}
            <input name={name} required={["name", "email", "subject"].includes(name)} />
          </label>
        ))}
        <label className="field">message<textarea name="message" rows={6} required /></label>
        <button className="btn glass-primary" type="submit">{settings.contact.cta}</button>
      </motion.form>
    </motion.section>
  );
}
