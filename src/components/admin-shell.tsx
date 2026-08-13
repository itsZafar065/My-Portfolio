import Link from "next/link";
import { BarChart3, BookOpenText, BriefcaseBusiness, FolderKanban, Image, LayoutDashboard, LogOut, MessageSquare, Search, Settings, Shield, UserRoundCog, UsersRound } from "lucide-react";
import { logoutAction } from "@/app/actions";

const groups = [
  { title: "Overview", links: [["Dashboard", "/admin", LayoutDashboard]] },
  { title: "Portfolio", links: [["Projects", "/admin/projects", FolderKanban], ["Categories", "/admin/categories", BookOpenText], ["Clients", "/admin/clients", BriefcaseBusiness]] },
  { title: "Content", links: [["Services", "/admin/services", BarChart3], ["Skills", "/admin/skills", Shield], ["Testimonials", "/admin/testimonials", UsersRound], ["FAQs", "/admin/faqs", MessageSquare]] },
  { title: "Communication", links: [["Messages", "/admin/messages", MessageSquare]] },
  { title: "Website", links: [["Site Settings", "/admin/site-settings", Settings], ["SEO", "/admin/seo", Search], ["Media Library", "/admin/media", Image]] },
  { title: "Administration", links: [["Administrators", "/admin/administrator", UserRoundCog], ["Audit Logs", "/admin/audit-logs", Shield], ["My Profile", "/admin/profile", UsersRound]] }
];

export function AdminShell({ children, user }: { children: React.ReactNode; user: any }) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link href="/admin" className="admin-brand">
          <span>AN</span>
          <div>
            <strong>Portfolio CMS</strong>
            <small>Glass admin studio</small>
          </div>
        </Link>

        <nav className="admin-nav">
          {groups.map((group) => (
            <section key={group.title}>
              <p>{group.title}</p>
              {group.links.map(([label, href, Icon]: any) => (
                <Link key={href} href={href}>
                  <Icon size={17} />
                  {label}
                </Link>
              ))}
            </section>
          ))}
        </nav>

        <div className="admin-user glass-card">
          <div>
            <strong>{user.name}</strong>
            <small>{user.role}</small>
          </div>
          <form action={logoutAction}>
            <button aria-label="Logout"><LogOut size={18} /></button>
          </form>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar glass-card">
          <div>
            <p>Workspace</p>
            <strong>Content Operations</strong>
          </div>
          <div className="admin-search"><Search size={17} /><span>Search projects, messages, settings...</span></div>
        </header>
        {children}
      </main>
    </div>
  );
}
