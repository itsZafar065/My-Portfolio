import { getSettings } from "@/lib/data";
export default async function robots() {
  const settings = await getSettings().catch(() => ({ seo: { robots: "index, follow" } }));
  return { rules: { userAgent: "*", allow: "/", disallow: settings.seo?.robots?.includes("noindex") ? "/" : "/admin" }, sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/sitemap.xml` };
}
