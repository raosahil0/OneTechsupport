import { createClient } from "@supabase/supabase-js";

const env =
  typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env
    : typeof process !== "undefined" && process.env
    ? process.env
    : {};

const supabaseUrl = env.VITE_SUPABASE_URL;
// VITE_SUPABASE_ANON_KEY is standard; some projects also include VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY.
const supabaseAnonKey =
  env.VITE_SUPABASE_ANON_KEY ||
  env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const isSupabaseEnabled = Boolean(supabase);
