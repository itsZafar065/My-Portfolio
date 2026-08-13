import Link from "next/link";
import { deleteProject } from "@/app/actions";
import { listProjectsForAdmin } from "@/lib/data";

export default async function ProjectsAdmin() {
  const projects = await listProjectsForAdmin();
  return <div className="grid"><div style={{ display: "flex", justifyContent: "space-between" }}><h1>Projects</h1><Link className="btn primary" href="/admin/projects/create">Add Project</Link></div>
    <table className="table"><thead><tr><th>Title</th><th>Status</th><th>Featured</th><th>Actions</th></tr></thead><tbody>{projects.map((p: any) => <tr key={p._id}><td>{p.title}</td><td>{p.status}</td><td>{p.featured ? "Yes" : "No"}</td><td><Link href={`/admin/projects/${p._id}/edit`}>Edit</Link> · <form action={deleteProject.bind(null, p._id)} style={{ display: "inline" }}><button>Delete</button></form></td></tr>)}</tbody></table>
  </div>;
}
