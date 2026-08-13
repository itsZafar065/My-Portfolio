import { getPublicData } from "@/lib/data";
export default async function ServicesPage() { const { services } = await getPublicData(); return <main className="section"><div className="container"><h1>Services</h1><div className="grid">{services.map((s: any) => <article className="card" key={s._id}><h2>{s.title}</h2><p>{s.description}</p></article>)}</div></div></main>; }
