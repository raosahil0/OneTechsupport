import { supabase, isSupabaseEnabled } from "./supabaseClient";

// ─── Error Handler ────────────────────────────────────────────────────────────
const _throwIfError = (error) => {
  if (!error) return;

  const msg = error.message || "";

  if (msg.includes("row-level security") || msg.includes("RLS")) {
    throw new Error(
      "Permission denied by Supabase RLS. Make sure public INSERT/SELECT policies are enabled for this table."
    );
  }
  if (msg.includes("Invalid API key") || msg.includes("apikey")) {
    throw new Error(
      "Supabase API key is invalid or missing. Check VITE_SUPABASE_ANON_KEY in your .env file."
    );
  }
  if (msg.includes("does not exist") || msg.includes("relation")) {
    throw new Error(
      "Table does not exist in Supabase. Please run the SQL setup script in your Supabase SQL Editor."
    );
  }

  throw new Error(msg || "An unknown database error occurred.");
};

// ─── LocalStorage Fallback ────────────────────────────────────────────────────
const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch (e) {
    console.error(`Error reading localStorage key "${key}":`, e);
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
    throw new Error("Local storage save failed.");
  }
};

// ─── Contacts ─────────────────────────────────────────────────────────────────

/**
 * Save a contact form submission.
 * NOTE: The Postgres column is case-sensitive "inquiryType" (double-quoted).
 * We explicitly map the JS key to the correct Postgres column name.
 */
export const saveContact = async (contact) => {
  if (!isSupabaseEnabled) {
    console.warn("Supabase not configured — saving contact to localStorage.");
    return saveLocalStorageItem("contacts", contact);
  }

  // Remap camelCase JS field → exact Postgres column name (double-quoted in DB)
  const payload = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone || null,
    inquiryType: contact.inquiryType,   // matches "inquiryType" column in Supabase
    message: contact.message,
  };

  const { data, error } = await supabase
    .from("contacts")
    .insert([payload])
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

// ─── Feedbacks ────────────────────────────────────────────────────────────────

export const saveFeedback = async (feedback) => {
  if (!isSupabaseEnabled) {
    console.warn("Supabase not configured — saving feedback to localStorage.");
    return saveLocalStorageItem("feedbacks", feedback);
  }

  const payload = {
    name: feedback.name,
    rating: Number(feedback.rating),
    message: feedback.message,
  };

  const { data, error } = await supabase
    .from("feedbacks")
    .insert([payload])
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

// ─── Leads ────────────────────────────────────────────────────────────────────

export const saveLead = async (lead) => {
  if (!isSupabaseEnabled) {
    console.warn("Supabase not configured — saving lead to localStorage.");
    return saveLocalStorageItem("leads", lead);
  }

  const payload = {
    email: lead.email,
    source: lead.source || "website",
  };

  const { data, error } = await supabase
    .from("leads")
    .insert([payload])
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
