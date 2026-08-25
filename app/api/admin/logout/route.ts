import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_session", "", { expires: new Date(0), httpOnly: true, path: "/" });
  return response;
}