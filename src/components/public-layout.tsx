import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PublicPageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description?: string; children: React.ReactNode }) {
  return (
    <main className="site-shell page-shell">
      <div className="mesh mesh-a" />
      <div className="mesh mesh-b" />
      <div className="noise-layer" />
      <nav className="site-nav">
        <Link href="/" className="brand-mark"><span>Z</span><strong>Zafar</strong></Link>
        <div className="nav-links open">
          <Link href="/projects">projects</Link>
          <Link href="/services">services</Link>
          <Link href="/skills">skills</Link>
          <Link href="/faq">faq</Link>
          <Link href="/contact">contact</Link>
        </div>
      </nav>
      <section className="page-hero glass-panel">
        <Link className="back-link" href="/"><ArrowLeft size={16} /> Home</Link>
        <p className="pill muted-pill">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </section>
      {children}
    </main>
  );
}
