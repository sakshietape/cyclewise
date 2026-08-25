import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const valid = email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;

  if (!valid) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  return NextResponse.json({ ok: true });
}
