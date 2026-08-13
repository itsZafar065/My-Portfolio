import type { Metadata } from "next";
import "./globals.css";
import { getSettings } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings().catch(() => null);
  const title = settings?.seo?.title ?? "Premium Full Stack Developer Portfolio";
  const description = settings?.seo?.description ?? "A CMS-backed full stack developer portfolio.";
  return {
    title,
    description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary_large_image", title, description },
    robots: settings?.seo?.robots ?? "index, follow"
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
