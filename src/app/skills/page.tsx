import { getPublicData } from "@/lib/data";
export default async function SkillsPage() { const { skills } = await getPublicData(); return <main className="section"><div className="container"><h1>Skills</h1><div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{skills.map((s: any) => <span className="btn" key={s._id}>{s.name}</span>)}</div></div></main>; }
