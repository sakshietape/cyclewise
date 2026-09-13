import { NextRequest, NextResponse } from "next/server";
import { isValidAdminSession } from "../../../../lib/admin-auth";
import { getSupabaseAdmin } from "../../../../lib/supabase";

function formatSupabaseError(error: unknown, fallback: string): string {
  if (!error) return fallback;
  if (error instanceof Error) return error.message;
  if (typeof error === "object") {
    const errObj = error as { message?: string; details?: string; hint?: string; code?: string };
    const parts: string[] = [];
    if (errObj.message) parts.push(errObj.message);
    if (errObj.details) parts.push(`Details: ${errObj.details}`);
    if (errObj.hint) parts.push(`Hint: ${errObj.hint}`);
    if (parts.length > 0) {
      return `${parts.join(" — ")}${errObj.code ? ` (${errObj.code})` : ""}`;
    }
  }
  return fallback;
}

export async function POST(request: NextRequest) {
  if (!isValidAdminSession(request.cookies.get("admin_session")?.value)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const supabase = getSupabaseAdmin();

    if (body.action === "approve") {
      const { error } = await supabase.from("guideline_drafts").update({ status: "approved", reviewed_at: new Date().toISOString() }).eq("status", "draft");
      if (error) {
        console.error("Supabase approve error:", error);
        return NextResponse.json({ error: formatSupabaseError(error, "Failed to approve draft in Supabase.") }, { status: 500 });
      }
      return NextResponse.json({ ok: true });
    }

    if (body.action === "save-page" && typeof body.introduction === "string") {
      const { error } = await supabase.from("page_content").upsert(
        { slug: "home", title: "Home", body: { introduction: body.introduction }, updated_at: new Date().toISOString() },
        { onConflict: "slug" }
      );
      if (error) {
        console.error("Supabase save-page error:", error);
        return NextResponse.json({ error: formatSupabaseError(error, "Failed to save draft to Supabase.") }, { status: 500 });
      }
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Invalid content action." }, { status: 400 });
  } catch (error: unknown) {
    console.error("Admin content route error:", error);
    return NextResponse.json({ error: formatSupabaseError(error, "Unable to update Supabase.") }, { status: 500 });
  }
}