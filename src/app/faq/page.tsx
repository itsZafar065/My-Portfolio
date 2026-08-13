import { getPublicData } from "@/lib/data";
export default async function FAQPage() { const { faqs } = await getPublicData(); return <main className="section"><div className="container"><h1>FAQ</h1>{faqs.map((f: any) => <details className="card" key={f._id}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></main>; }
