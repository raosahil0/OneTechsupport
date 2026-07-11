import { supabase, isSupabaseEnabled } from "./supabaseClient";

// ─── Error Handler ────────────────────────────────────────────────────────────
const _throwIfError = (error) => {
  if (!error) return;

  const msg = error.message || "";

  if (msg.includes("row-level security") || msg.includes("RLS")) {
    throw new Error(
      "Permission denied by Supabase RLS. Make sure public INSERT/SELECT/DELETE policies are enabled."
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

const deleteLocalStorageItem = (key, id) => {
  try {
    const items = getLocalStorageItem(key);
    const filtered = items.filter((item) => String(item.id) !== String(id));
    localStorage.setItem(key, JSON.stringify(filtered));
    return filtered;
  } catch (e) {
    console.error(`Error deleting from localStorage key "${key}":`, e);
    throw new Error("Local storage delete failed.");
  }
};

// ─── Contacts ─────────────────────────────────────────────────────────────────

export const saveContact = async (contact) => {
  if (!isSupabaseEnabled) {
    console.warn("Supabase not configured — saving contact to localStorage.");
    return saveLocalStorageItem("contacts", contact);
  }

  const payload = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone || null,
    inquiryType: contact.inquiryType,
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

export const deleteContact = async (id) => {
  if (!isSupabaseEnabled) {
    return deleteLocalStorageItem("contacts", id);
  }

  const { data, error } = await supabase
    .from("contacts")
    .delete()
    .eq("id", id)
    .select();

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

export const deleteFeedback = async (id) => {
  if (!isSupabaseEnabled) {
    return deleteLocalStorageItem("feedbacks", id);
  }

  const { data, error } = await supabase
    .from("feedbacks")
    .delete()
    .eq("id", id)
    .select();

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

export const deleteLead = async (id) => {
  if (!isSupabaseEnabled) {
    return deleteLocalStorageItem("leads", id);
  }

  const { data, error } = await supabase
    .from("leads")
    .delete()
    .eq("id", id)
    .select();

  _throwIfError(error);
  return data;
};

// ─── Tickets ──────────────────────────────────────────────────────────────────

export const saveTicket = async (ticket, file = null) => {
  if (!isSupabaseEnabled) {
    console.warn("Supabase not configured — saving ticket to localStorage.");
    try {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      
      let attachmentUrl = null;
      let attachmentName = null;

      if (file) {
        attachmentName = file.name;
        // Convert file to Base64 data URL for mock localStorage storage
        try {
          attachmentUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsDataURL(file);
          });
        } catch (fileErr) {
          console.error("Error encoding file to Base64:", fileErr);
        }
      }

      const newTicket = {
        ticket_id: "tkt_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36),
        client_id: ticket.clientId,
        client_email: ticket.clientEmail,
        title: ticket.title,
        description: ticket.description,
        status: ticket.status || "Open",
        attachment_url: attachmentUrl,
        attachment_name: attachmentName,
        created_at: new Date().toISOString(),
      };
      tickets.push(newTicket);
      localStorage.setItem("tickets", JSON.stringify(tickets));
      return [newTicket];
    } catch (e) {
      console.error("Error writing to localStorage for tickets:", e);
      throw new Error("Local storage save failed.");
    }
  }

  let attachmentUrl = null;
  let attachmentName = null;

  if (file) {
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2, 11)}_${Date.now()}.${fileExt}`;
      const filePath = `${ticket.clientId}/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("ticket-attachments")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("ticket-attachments")
        .getPublicUrl(filePath);

      attachmentUrl = publicUrlData.publicUrl;
      attachmentName = file.name;
    } catch (uploadErr) {
      console.error("Supabase Storage upload error:", uploadErr);
      throw new Error("Failed to upload ticket attachment: " + uploadErr.message);
    }
  }

  const payload = {
    client_id: ticket.clientId,
    client_email: ticket.clientEmail,
    title: ticket.title,
    description: ticket.description,
    status: ticket.status || "Open",
    attachment_url: attachmentUrl,
    attachment_name: attachmentName,
  };

  const { data, error } = await supabase
    .from("tickets")
    .insert([payload])
    .select();

  _throwIfError(error);
  return data;
};

export const getTicketsForClient = async (clientId) => {
  if (!isSupabaseEnabled) {
    try {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      return tickets
        .filter((t) => String(t.client_id) === String(clientId))
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } catch (e) {
      console.error("Error reading localStorage for tickets:", e);
      return [];
    }
  }

  const { data, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("client_id", clientId)
    .order("created_at", { ascending: false });

  _throwIfError(error);
  return data;
};

// ─── Authentication Helpers ───────────────────────────────────────────────────

export const signUpClient = async (email, password) => {
  if (!isSupabaseEnabled) {
    try {
      const users = JSON.parse(localStorage.getItem("demo_users") || "[]");
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        throw new Error("User already exists with this email.");
      }
      const newUser = {
        id: "usr_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36),
        email: email.toLowerCase(),
        password, // Simple plaintext for demo fallback
      };
      users.push(newUser);
      localStorage.setItem("demo_users", JSON.stringify(users));
      
      const session = { id: newUser.id, email: newUser.email };
      localStorage.setItem("demo_session", JSON.stringify(session));
      return { data: { user: session }, error: null };
    } catch (e) {
      return { data: { user: null }, error: { message: e.message || "Sign up failed." } };
    }
  }

  return await supabase.auth.signUp({ email, password });
};

export const signInClient = async (email, password) => {
  if (!isSupabaseEnabled) {
    try {
      const users = JSON.parse(localStorage.getItem("demo_users") || "[]");
      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      if (!user) {
        throw new Error("Invalid email or password.");
      }
      const session = { id: user.id, email: user.email };
      localStorage.setItem("demo_session", JSON.stringify(session));
      return { data: { user: session }, error: null };
    } catch (e) {
      return { data: { user: null }, error: { message: e.message || "Invalid credentials." } };
    }
  }

  return await supabase.auth.signInWithPassword({ email, password });
};

export const signOutClient = async () => {
  if (!isSupabaseEnabled) {
    localStorage.removeItem("demo_session");
    return { error: null };
  }
  return await supabase.auth.signOut();
};

export const getCurrentClient = async () => {
  if (!isSupabaseEnabled) {
    try {
      const session = localStorage.getItem("demo_session");
      return session ? JSON.parse(session) : null;
    } catch (e) {
      console.error("Error reading demo_session:", e);
      return null;
    }
  }
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  } catch (e) {
    console.error("Supabase getUser error:", e);
    return null;
  }
};

export const getAllTickets = async () => {
  if (!isSupabaseEnabled) {
    try {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      return tickets.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } catch (e) {
      console.error("Error reading localStorage for all tickets:", e);
      return [];
    }
  }

  const { data, error } = await supabase
    .from("tickets")
    .select("*")
    .order("created_at", { ascending: false });

  _throwIfError(error);
  return data;
};

export const updateTicketStatus = async (ticketId, status) => {
  if (!isSupabaseEnabled) {
    try {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      const updated = tickets.map((t) =>
        t.ticket_id === ticketId ? { ...t, status } : t
      );
      localStorage.setItem("tickets", JSON.stringify(updated));
      return updated.filter((t) => t.ticket_id === ticketId);
    } catch (e) {
      console.error("Error updating ticket status in localStorage:", e);
      throw new Error("Local storage update failed.");
    }
  }

  const { data, error } = await supabase
    .from("tickets")
    .update({ status })
    .eq("ticket_id", ticketId)
    .select();

  _throwIfError(error);
  return data;
};

export const getAllAccounts = async () => {
  if (!isSupabaseEnabled) {
    try {
      return JSON.parse(localStorage.getItem("demo_users") || "[]");
    } catch (e) {
      console.error("Error reading localStorage for all accounts:", e);
      return [];
    }
  }

  try {
    return JSON.parse(localStorage.getItem("demo_users") || "[]");
  } catch (e) {
    return [];
  }
};

export const deleteAccount = async (accountId) => {
  if (!isSupabaseEnabled) {
    try {
      const users = JSON.parse(localStorage.getItem("demo_users") || "[]");
      const filtered = users.filter((u) => String(u.id) !== String(accountId));
      localStorage.setItem("demo_users", JSON.stringify(filtered));
      
      const session = localStorage.getItem("demo_session");
      if (session) {
        const sessionUser = JSON.parse(session);
        if (String(sessionUser.id) === String(accountId)) {
          localStorage.removeItem("demo_session");
        }
      }
      return filtered;
    } catch (e) {
      console.error("Error deleting user from localStorage:", e);
      throw new Error("Local storage delete failed.");
    }
  }

  try {
    const users = JSON.parse(localStorage.getItem("demo_users") || "[]");
    const filtered = users.filter((u) => String(u.id) !== String(accountId));
    localStorage.setItem("demo_users", JSON.stringify(filtered));
    return filtered;
  } catch (e) {
    return [];
  }
};
