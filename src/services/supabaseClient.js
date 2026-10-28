import { createClient } from "@supabase/supabase-js";

const env =
  typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env
    : typeof process !== "undefined" && process.env
    ? process.env
    : {};

const DEFAULT_SUPABASE_URL = "https://qijjkmiqqdjkkyyjsdbt.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_7V46m4MEku9qYG95xAiMBw_KvbeTySG";

const localSupabaseUrl =
  typeof window !== "undefined"
    ? localStorage.getItem("custom_supabase_url") || ""
    : "";
const localSupabaseAnonKey =
  typeof window !== "undefined"
    ? localStorage.getItem("custom_supabase_anon_key") || ""
    : "";

const supabaseUrl =
  env.VITE_SUPABASE_URL || localSupabaseUrl || DEFAULT_SUPABASE_URL;
const supabaseAnonKey =
  env.VITE_SUPABASE_ANON_KEY ||
  env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  localSupabaseAnonKey ||
  DEFAULT_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        realtime: {
          params: {
            eventsPerSecond: 10,
          },
        },
      })
    : null;

export const isSupabaseEnabled = Boolean(supabase);

export const saveCustomSupabaseConfig = (url, key) => {
  if (typeof window !== "undefined") {
    if (url && key) {
      localStorage.setItem("custom_supabase_url", url.trim());
      localStorage.setItem("custom_supabase_anon_key", key.trim());
    } else {
      localStorage.removeItem("custom_supabase_url");
      localStorage.removeItem("custom_supabase_anon_key");
    }
  }
};
