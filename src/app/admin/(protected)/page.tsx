import Link from "next/link";
import { ArrowUpRight, FolderKanban, MessageSquare, PanelsTopLeft, UsersRound } from "lucide-react";
import { getAdminStats } from "@/lib/data";

export default async function AdminDashboard() {
  const stats = await getAdminStats();
  const cards = [
    ["Total Projects", stats.totalProjects, FolderKanban, "All case studies in the CMS"],
    ["Published", stats.publishedProjects, PanelsTopLeft, "Visible on the public website"],
    ["Drafts", stats.draftProjects, MessageSquare, "Waiting for review"],
    ["Messages", stats.messages, UsersRound, "Contact form submissions"]
  ];

  return (
    <div className="admin-dashboard">
      <section className="dashboard-hero glass-card">
        <div>
          <p className="pill">Overview</p>
          <h1>Manage the complete portfolio from one polished CMS.</h1>
          <p>Projects, services, skills, FAQs, messages, SEO and site settings all live behind this protected dashboard.</p>
        </div>
        <div className="dashboard-orbit">
          <span>CMS</span>
          <small>Live</small>
        </div>
      </section>

      <section className="stats-grid">
        {cards.map(([label, value, Icon, body]: any) => (
          <article className="stat-card glass-card" key={label}>
            <Icon />
            <p>{label}</p>
            <strong>{value}</strong>
            <small>{body}</small>
          </article>
        ))}
      </section>

      <section className="quick-actions glass-card">
        <div>
          <p className="pill muted-pill">Quick actions</p>
          <h2>Create content fast</h2>
        </div>
        <div>
          {[
            ["Add Project", "/admin/projects/create"],
            ["Add Category", "/admin/categories"],
            ["Add Testimonial", "/admin/testimonials"],
            ["Add Client", "/admin/clients"],
            ["Add Service", "/admin/services"],
            ["Add FAQ", "/admin/faqs"]
          ].map(([label, href]) => (
            <Link className="btn glass-button" key={label} href={href}>{label}<ArrowUpRight size={16} /></Link>
          ))}
        </div>
      </section>

      <section className="dashboard-columns">
        <div className="glass-card activity-card">
          <h2>Recent projects</h2>
          {stats.recentProjects.map((project: any) => (
            <Link href={`/admin/projects/${project._id}/edit`} key={project._id}>
              <span>{project.title}</span>
              <small>{project.status}</small>
            </Link>
          ))}
        </div>
        <div className="glass-card activity-card">
          <h2>Recent messages</h2>
          {stats.recentMessages.length === 0 && <p>No messages yet.</p>}
          {stats.recentMessages.map((message: any) => (
            <div key={message._id}>
              <span>{message.subject}</span>
              <small>{message.status}</small>
            </div>
          ))}
        </div>
        <div className="glass-card activity-card">
          <h2>Audit activity</h2>
          {stats.logs.map((log: any) => (
            <div key={log._id}>
              <span>{log.action}</span>
              <small>{log.entity}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
