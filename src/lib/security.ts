import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies, headers } from "next/headers";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { connectDb } from "./db";
import { hasDatabase } from "./db";
import { demoAdmin } from "./demo-data";
import { Admin } from "@/models/Admin";
import { AuditLog } from "@/models/AuditLog";
import type { Role } from "./types";

const cookieName = "portfolio_admin_session";
const encoder = new TextEncoder();

function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value || value.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters.");
  return encoder.encode(value);
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function createSession(userId: string, remember = false) {
  const maxAge = remember ? 60 * 60 * 24 * 30 : 60 * 60 * 8;
  const token = await new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${maxAge}s`)
    .sign(secret());
  (await cookies()).set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge
  });
}

export async function clearSession() {
  (await cookies()).delete(cookieName);
}

export async function currentAdmin() {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    if (!hasDatabase()) return payload.sub === "demo-admin" ? demoAdmin : null;
    await connectDb();
    return Admin.findById(payload.sub).select("-passwordHash").lean() as Promise<any>;
  } catch {
    return null;
  }
}

export async function requireAdmin(roles: Role[] = ["super_admin", "editor"]) {
  const admin = await currentAdmin();
  if (!admin || admin.status !== "active" || !roles.includes(admin.role)) redirect("/admin/login");
  return admin;
}

export async function assertAdmin(roles: Role[] = ["super_admin", "editor"]) {
  const admin = await currentAdmin();
  if (!admin || admin.status !== "active" || !roles.includes(admin.role)) {
    throw new Error("Unauthorized");
  }
  return admin;
}

export async function logAction(action: string, entity?: string, entityId?: string) {
  const admin = await currentAdmin();
  if (!hasDatabase()) return;
  await connectDb();
  await AuditLog.create({
    action,
    entity,
    entityId,
    user: admin?._id,
    ip: (await headers()).get("x-forwarded-for") ?? "local"
  });
}
