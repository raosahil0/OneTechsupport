import { supabase, isSupabaseEnabled } from "./supabaseClient";

const _throwIfError = (error) => {
  if (error) {
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

// Helper for local storage storage fallback
const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch (e) {
    console.error(`Error reading from localStorage key "${key}":`, e);
    return [];
  }
};

const saveLocalStorageItem = (key, item) => {
  try {
    const items = getLocalStorageItem(key);
    const newItem = { ...item, id: item.id || Date.now().toString() };
    items.push(newItem);
    localStorage.setItem(key, JSON.stringify(items));
    return [newItem];
  } catch (e) {
    console.error(`Error writing to localStorage key "${key}":`, e);
    throw new Error("Local storage save failure");
  }
};

export const saveContact = async (contact) => {
  if (!isSupabaseEnabled) {
    console.warn("Supabase is not configured. Saving contact info to localStorage instead.");
    return saveLocalStorageItem("contacts", contact);
  }

  const { data, error } = await supabase
    .from("contacts")
    .insert([contact])
    .select();
  _throwIfError(error);
  return data;
};

export const getContacts = async () => {
  if (!isSupabaseEnabled) {
    return getLocalStorageItem("contacts");
  }

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });
  _throwIfError(error);
  return data;
};

export const saveFeedback = async (feedback) => {
  if (!isSupabaseEnabled) {
    console.warn("Supabase is not configured. Saving review/feedback to localStorage instead.");
    return saveLocalStorageItem("feedbacks", feedback);
  }

  const { data, error } = await supabase
    .from("feedbacks")
    .insert([feedback])
    .select();
  _throwIfError(error);
  return data;
};

export const getFeedbacks = async () => {
  if (!isSupabaseEnabled) {
    return getLocalStorageItem("feedbacks");
  }

  const { data, error } = await supabase
    .from("feedbacks")
    .select("*")
    .order("created_at", { ascending: false });
  _throwIfError(error);
  return data;
};

export const saveLead = async (lead) => {
  if (!isSupabaseEnabled) {
    console.warn("Supabase is not configured. Saving lead/request to localStorage instead.");
    return saveLocalStorageItem("leads", lead);
  }

  const { data, error } = await supabase
    .from("leads")
    .insert([lead])
    .select();
  _throwIfError(error);
  return data;
};

export const getLeads = async () => {
  if (!isSupabaseEnabled) {
    return getLocalStorageItem("leads");
  }

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });
  _throwIfError(error);
  return data;
};
