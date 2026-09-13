import { NextResponse } from "next/server";
import { createAdminSession, sessionLifetimeSeconds } from "../../../../lib/admin-auth";

export async function POST(request: Request) {
  const configuredEmail = process.env.ADMIN_EMAIL?.trim();
  const configuredPassword = process.env.ADMIN_PASSWORD;

  // Guard: env vars must be set on the server — if missing, return 503 immediately
  if (!configuredEmail || !configuredPassword) {
    return NextResponse.json({ error: "Admin login is not configured on the server." }, { status: 503 });
  }

  const { email, password } = await request.json();

  const valid =
    typeof email === "string" &&
    typeof password === "string" &&
    email.trim().toLowerCase() === configuredEmail.toLowerCase() &&
    password === configuredPassword;

  if (!valid) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });

  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_session", createAdminSession(), {
    httpOnly: true,
    maxAge: sessionLifetimeSeconds,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return response;
}
