import { getPublicData } from "@/lib/data";
import { PublicHome } from "@/components/public-site";
export default async function ContactPage() { const data = await getPublicData(); return <PublicHome data={{ ...data, projects: [], services: [], skills: [], testimonials: [], faqs: [] }} />; }
