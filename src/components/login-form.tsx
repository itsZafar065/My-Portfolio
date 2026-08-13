"use client";

import { useActionState, useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { loginAction } from "@/app/actions";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action, pending] = useActionState(loginAction, null);

  return (
    <main className="login-page">
      <section className="login-visual" aria-hidden="true">
        <div className="login-mark"><ShieldCheck size={30} /></div>
        <p className="eyebrow">Portfolio Control Room</p>
        <h1>Manage every page, project, and setting from one secure dashboard.</h1>
        <div className="login-metrics">
          <span>Role-based access</span>
          <span>Audit logging</span>
          <span>CMS publishing</span>
        </div>
      </section>

      <section className="login-panel">
        <form action={action} className="login-card">
          <div>
            <p className="eyebrow">Secure Admin</p>
            <h2>Welcome back</h2>
            <p className="login-muted">Sign in to manage your portfolio content.</p>
          </div>

          {state?.error && <p className="login-error">{state.error}</p>}

          <label className="field login-field">
            Email
            <span><Mail size={18} /><input type="email" name="email" defaultValue="admin@portfolio.local" required /></span>
          </label>

          <label className="field login-field">
            Password
            <span>
              <LockKeyhole size={18} />
              <input type={showPassword ? "text" : "password"} name="password" defaultValue="Admin@12345" minLength={8} required />
              <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </span>
          </label>

          <div className="login-row">
            <label><input type="checkbox" name="remember" /> Remember me</label>
            <a href="mailto:admin@example.com">Forgot password?</a>
          </div>

          <button className="btn primary login-submit" type="submit" disabled={pending}>
            {pending ? "Signing in..." : "Sign in"}
          </button>

          <p className="login-hint">Local demo: admin@portfolio.local / Admin@12345</p>
        </form>
      </section>
    </main>
  );
}
