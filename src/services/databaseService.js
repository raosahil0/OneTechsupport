import { supabase, isSupabaseEnabled } from "./supabaseClient";

const _ensureSupabase = () => {
  if (!isSupabaseEnabled) {
    throw new Error(
      "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file."
    );
  }
};

const _throwIfError = (error) => {
  if (error) {
    // Make RLS errors explicit so they are easier to diagnose
    if (error.message?.includes("row-level security")) {
      throw new Error(
        "Supabase row-level security blocked this request. Add RLS policies for the table."
      );
    }
    if (error.message?.includes("Invalid API key")) {
      throw new Error(
        "Supabase API key is invalid or missing. Check VITE_SUPABASE_ANON_KEY in .env."
      );
    }
    throw new Error(error.message || "Database service error");
  }
};

export const saveContact = async (contact) => {
  _ensureSupabase();

  const { data, error } = await supabase
    .from("contacts")
    .insert([contact])
    .select();
  _throwIfError(error);
  return data;
};

export const getContacts = async () => {
  _ensureSupabase();

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });
  _throwIfError(error);
  return data;
};

export const saveFeedback = async (feedback) => {
  _ensureSupabase();

  const { data, error } = await supabase
    .from("feedbacks")
    .insert([feedback])
    .select();
  _throwIfError(error);
  return data;
};

export const getFeedbacks = async () => {
  _ensureSupabase();

  const { data, error } = await supabase
    .from("feedbacks")
    .select("*")
    .order("created_at", { ascending: false });
  _throwIfError(error);
  return data;
};

export const saveLead = async (lead) => {
  _ensureSupabase();

  const { data, error } = await supabase
    .from("leads")
    .insert([lead])
    .select();
  _throwIfError(error);
  return data;
};

export const getLeads = async () => {
  _ensureSupabase();

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });
  _throwIfError(error);
  return data;
};
