"use client";

import { Check, FileText, LockKeyhole, LogOut, Plus, RefreshCw, Save, X } from "lucide-react";
import { useState } from "react";
import "../globals.css";
import "./admin.css";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [approved, setApproved] = useState(false);
  const [saved, setSaved] = useState(false);
  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSigningIn(true);
    setLoginError("");
    try {
      const response = await fetch("/api/admin/login", { body: JSON.stringify({ email, password }), headers: { "Content-Type": "application/json" }, method: "POST" });
      if (!response.ok) throw new Error("Invalid email or password.");
      setLoggedIn(true);
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Unable to sign in.");
    } finally {
      setIsSigningIn(false);
    }
  }
  if (!loggedIn) return <main className="admin-shell"><div className="admin-login"><a className="logo" href="/"><span className="logo-mark" />cyclewise</a><div className="admin-icon"><LockKeyhole size={22} /></div><h1>Welcome back.</h1><p>Sign in to review content and guideline drafts.</p><form onSubmit={handleLogin}><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" required /></label>{loginError && <p className="login-error" role="alert">{loginError}</p>}<button className="admin-button" type="submit" disabled={isSigningIn}>{isSigningIn ? "Signing in..." : "Sign in"}</button></form><a className="back-link" href="/">← Back to public site</a></div></main>;
  return <main className="admin-shell"><div className="admin-panel"><header className="admin-header"><div><a className="logo" href="/"><span className="logo-mark" />cyclewise</a><span className="admin-label">Content studio</span></div><button className="icon-button" onClick={() => setLoggedIn(false)} title="Sign out"><LogOut size={17} /></button></header><div className="admin-intro"><div><div className="eyebrow">Monday · 24 August 2026</div><h1>Good morning.</h1><p>One draft is ready for your review. Published pages were last updated 24 August 2026.</p></div><button className="outline-button"><RefreshCw size={16} /> Run source check</button></div><section className="draft-card"><div className="draft-heading"><span className="draft-status">Needs review</span><span className="muted">Found 24 Aug 2026 · Source check</span></div><h2>2023 guideline: PCOS care should be personal, not one-size-fits-all.</h2><p className="muted">Experts recommend shared decision-making: your goals, preferences, symptoms, and overall health should shape your care. Lifestyle support is helpful for everyone, whatever their body size.</p><div className="source-box"><FileText size={17} /><span>International Evidence-based Guideline for the Assessment and Management of PCOS</span><a href="https://www.monash.edu/medicine/mchri/pcos/guideline" target="_blank" rel="noreferrer">View source ↗</a></div>{approved ? <div className="approved"><Check size={17} /> Draft approved and queued for publication.</div> : <div className="draft-actions"><button className="approve-button" onClick={() => setApproved(true)}><Check size={16} /> Approve draft</button><button className="reject-button"><X size={16} /> Send back</button></div>}</section><section className="editor-section"><div className="section-title"><div><div className="eyebrow">Page content</div><h2>Edit a page</h2></div><button className="outline-button"><Plus size={16} /> New page</button></div><label>Home introduction<textarea defaultValue="Polycystic ovary syndrome can look different for everyone. Find clear, kind information to help you feel more informed and ready for your next conversation with a doctor." /></label><div className="save-row"><span className="muted">Changes are saved as a draft until published.</span><button className="approve-button" onClick={() => setSaved(true)}><Save size={16} /> {saved ? "Saved" : "Save draft"}</button></div></section></div></main>;
}
