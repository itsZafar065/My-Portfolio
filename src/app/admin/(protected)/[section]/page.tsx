import { quickCreate, createAdministrator } from "@/app/actions";
import { getAdminStats } from "@/lib/data";

const labels: Record<string, string[]> = {
  categories: ["name", "slug", "description", "icon"],
  clients: ["name", "company", "website", "country", "industry"],
  testimonials: ["clientName", "position", "company", "testimonial", "rating"],
  services: ["title", "icon", "description", "features"],
  skills: ["name", "logo", "category", "experienceLevel"],
  faqs: ["question", "answer", "category", "order"],
  media: ["filename", "url", "mimeType", "alt"],
  "site-settings": ["siteName", "siteDescription", "email", "phone", "location"],
  seo: ["title", "description", "keywords", "ogTitle", "ogDescription", "canonicalUrl"],
  administrator: ["name", "email", "password", "role"],
  profile: ["name", "email", "password"],
  messages: [],
  "audit-logs": []
};

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const stats = await getAdminStats();
  if (section === "messages") return <List title="Messages" rows={stats.recentMessages} cols={["name", "email", "subject", "status", "createdAt"]} />;
  if (section === "audit-logs") return <List title="Audit Logs" rows={stats.logs} cols={["action", "entity", "entityId", "createdAt"]} />;
  if (section === "administrator") return <Crud title="Administrators" action={createAdministrator} fields={labels[section]} rows={stats.admins} cols={["name", "email", "role", "status", "lastLogin"]} />;
  const rowMap: Record<string, any[]> = { skills: stats.skills, faqs: stats.faqs, media: stats.media };
  return <Crud title={title(section)} action={quickCreate.bind(null, section === "seo" ? "site-settings" : section)} fields={labels[section] ?? []} rows={rowMap[section] ?? []} cols={labels[section]?.slice(0, 4) ?? []} />;
}

function Crud({ title, action, fields, rows, cols }: { title: string; action: any; fields: string[]; rows: any[]; cols: string[] }) {
  return <div className="grid"><h1>{title}</h1><form action={action} className="card grid">{fields.map((f) => <label className="field" key={f}>{f}<input name={f} type={f === "password" ? "password" : "text"} required={["name", "title", "email", "password"].includes(f)} /></label>)}<button className="btn primary">Save</button></form><List title={`Existing ${title}`} rows={rows} cols={cols} /></div>;
}

function List({ title, rows, cols }: { title: string; rows: any[]; cols: string[] }) {
  return <section><h2>{title}</h2><table className="table"><thead><tr>{cols.map((c) => <th key={c}>{c}</th>)}</tr></thead><tbody>{rows.map((r) => <tr key={r._id}>{cols.map((c) => <td key={c}>{String(r[c] ?? "")}</td>)}</tr>)}</tbody></table>{rows.length === 0 && <p className="card">No records yet.</p>}</section>;
}

function title(value: string) {
  return value.split("-").map((x) => x[0].toUpperCase() + x.slice(1)).join(" ");
}
