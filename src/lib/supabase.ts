import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Supabase client for Realtime Broadcast — D-017.
 *
 * Reads from public env vars (NEXT_PUBLIC_ prefix).
 * Returns null if env vars are missing (graceful degradation).
 */
export function getSupabaseClient() {
  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
}
