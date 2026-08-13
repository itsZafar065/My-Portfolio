import { getPublicData } from "@/lib/data";
import Link from "next/link";
export default async function ProjectsPage() {
  const { projects } = await getPublicData();
  return <main className="section"><div className="container"><h1>Projects</h1><div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>{projects.map((p: any) => <Link className="card" href={`/projects/${p.slug}`} key={p._id}><h2>{p.title}</h2><p>{p.shortDescription}</p></Link>)}</div></div></main>;
}
