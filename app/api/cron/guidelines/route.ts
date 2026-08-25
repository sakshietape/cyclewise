import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../../lib/supabase";

const source = {
  title: "International PCOS guideline review",
  summary: "A new source update was detected and is ready for a human review. Check the linked guideline and write a plain-language summary before approving.",
  source_name: "Monash University PCOS Guideline",
  source_url: "https://www.monash.edu/medicine/mchri/pcos/guideline",
};

export async function GET(request: NextRequest) {
  if (request.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from("guideline_drafts").insert({ ...source, status: "draft" }).select("id").single();
    if (error) throw error;
    return NextResponse.json({ created: true, draftId: data.id, status: "draft" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to create draft" }, { status: 500 });
  }
}
