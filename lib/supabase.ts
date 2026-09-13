import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const url = rawUrl.trim().replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing or invalid on the server.");
  }
  if (!key) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing on the server. Please add your Supabase service_role key to Vercel/environment variables.");
  }

  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
