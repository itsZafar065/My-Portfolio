import { requireAdmin } from "@/lib/security";
import { AdminShell } from "@/components/admin-shell";

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdmin();
  return <AdminShell user={user}>{children}</AdminShell>;
}
