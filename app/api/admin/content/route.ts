import { NextRequest, NextResponse } from "next/server";
import { isValidAdminSession } from "../../../../lib/admin-auth";
import { getSupabaseAdmin } from "../../../../lib/supabase";

export async function POST(request: NextRequest) {
  if (!isValidAdminSession(request.cookies.get("admin_session")?.value)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const supabase = getSupabaseAdmin();

    if (body.action === "approve") {
      const { error } = await supabase.from("guideline_drafts").update({ status: "approved", reviewed_at: new Date().toISOString() }).eq("status", "draft");
      if (error) throw error;
      return NextResponse.json({ ok: true });
    }

    if (body.action === "save-page" && typeof body.introduction === "string") {
      const { error } = await supabase.from("page_content").upsert({ slug: "home", title: "Home", body: { introduction: body.introduction }, updated_at: new Date().toISOString() });
      if (error) throw error;
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Invalid content action." }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to update Supabase." }, { status: 500 });
  }
}