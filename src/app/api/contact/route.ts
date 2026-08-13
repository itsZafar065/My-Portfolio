import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { hasDatabase } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";
import { messageSchema } from "@/lib/validation";
import { ContactMessage } from "@/models/Content";

export async function POST(request: Request) {
  const form = await request.formData();
  const h = await headers();
  const ip = h.get("x-forwarded-for") ?? "local";
  if (!rateLimit(`contact:${ip}`, 5, 60_000)) return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  const parsed = messageSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  if (!hasDatabase()) return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
  await connectDb();
  await ContactMessage.create({ ...parsed.data, ip, userAgent: h.get("user-agent") });
  return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
}
