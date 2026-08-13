import { getPublicData } from "@/lib/data";
export default async function AboutPage() { const { settings } = await getPublicData(); return <main className="section"><div className="container"><p className="eyebrow">About</p><h1>{settings.about.heading}</h1><p>{settings.about.description}</p></div></main>; }
