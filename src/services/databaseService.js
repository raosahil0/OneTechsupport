import { supabase, isSupabaseEnabled } from "./supabaseClient.js";

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

// Native Web Crypto password hashing for demo fallback (never store plaintext)
const _hashPassword = async (password, salt) => {
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const enc = new TextEncoder();
    const data = enc.encode(`${salt}:${password}`);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return btoa(`${salt}:${password}`);
};

export const signUpClient = async (email, password) => {
  if (!isSupabaseEnabled) {
    try {
      const users = JSON.parse(localStorage.getItem("demo_users") || "[]");
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        throw new Error("User already exists with this email.");
      }
      const salt = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2);
      const passwordHash = await _hashPassword(password, salt);
      const newUser = {
        id: "usr_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36),
        email: email.toLowerCase(),
        passwordHash,
        salt,
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
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (!user) {
        throw new Error("Invalid email or password.");
      }

      let passwordMatches = false;
      if (user.passwordHash && user.salt) {
        const computedHash = await _hashPassword(password, user.salt);
        passwordMatches = computedHash === user.passwordHash;
      } else if (user.password) {
        // Migration: match legacy plaintext once, then upgrade immediately to hash
        passwordMatches = user.password === password;
        if (passwordMatches) {
          const salt = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2);
          user.salt = salt;
          user.passwordHash = await _hashPassword(password, salt);
          delete user.password;
          localStorage.setItem("demo_users", JSON.stringify(users));
        }
      }

      if (!passwordMatches) {
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
  // Helper: strip sensitive fields before returning user data
  const sanitizeUsers = (users) =>
    users.map(({ password, passwordHash, salt, ...safeFields }) => safeFields);

  if (!isSupabaseEnabled) {
    try {
      const raw = JSON.parse(localStorage.getItem("demo_users") || "[]");
      return sanitizeUsers(raw);
    } catch (e) {
      console.error("Error reading localStorage for all accounts:", e);
      return [];
    }
  }

  try {
    const raw = JSON.parse(localStorage.getItem("demo_users") || "[]");
    return sanitizeUsers(raw);
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

export const deleteTicket = async (ticketId) => {
  if (!isSupabaseEnabled) {
    try {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      const filtered = tickets.filter(
        (t) => String(t.ticket_id) !== String(ticketId) && String(t.id) !== String(ticketId)
      );
      localStorage.setItem("tickets", JSON.stringify(filtered));
      return filtered;
    } catch (e) {
      console.error("Error deleting ticket from localStorage:", e);
      throw new Error("Local storage delete failed.");
    }
  }

  const { data, error } = await supabase
    .from("tickets")
    .delete()
    .eq("ticket_id", ticketId)
    .select();

  _throwIfError(error);
  return data;
};

export const seedDemoData = () => {
  const sampleContacts = [
    {
      id: "cnt_101",
      name: "Rajesh Malhotra",
      email: "rajesh.malhotra@zenithcorps.com",
      phone: "+91 98112 34567",
      inquiryType: "managed-it",
      message: "Looking for an annual maintenance contract (AMC) and 24/7 server monitoring for our Gurugram corporate office (50+ workstations).",
      created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
    {
      id: "cnt_102",
      name: "Sneha Kapoor",
      email: "sneha.k@novatechsolutions.in",
      phone: "+91 98200 87654",
      inquiryType: "network-support",
      message: "Urgent need for Cisco firewall reconfiguration and dual-WAN load balancing setup after recent office expansion.",
      created_at: new Date(Date.now() - 3600000 * 18).toISOString(),
    },
    {
      id: "cnt_103",
      name: "Vikram Singhania",
      email: "vikram@apexlogistics.co.in",
      phone: "+91 99101 23456",
      inquiryType: "server-support",
      message: "Need dedicated on-site IT engineers for server migration from local hardware to private cloud setup.",
      created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
    },
    {
      id: "cnt_104",
      name: "Ananya Deshmukh",
      email: "ananya.d@fintechinnovate.com",
      phone: "+91 98450 11223",
      inquiryType: "consulting",
      message: "Requesting IT compliance audit and cybersecurity hardening before our external ISO certification.",
      created_at: new Date(Date.now() - 3600000 * 72).toISOString(),
    },
  ];

  const sampleFeedbacks = [
    {
      id: "fb_101",
      name: "Rahul Sharma",
      rating: 5,
      message: "Excellent IT support and incredibly fast turnaround times. Resolved our server downtime within 30 minutes!",
      created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
    },
    {
      id: "fb_102",
      name: "Priya Verma",
      rating: 5,
      message: "Very reliable manpower support. The technical staffing they provided integrated seamlessly into our engineering team.",
      created_at: new Date(Date.now() - 3600000 * 36).toISOString(),
    },
    {
      id: "fb_103",
      name: "Amit Singh",
      rating: 4,
      message: "Great hiring service for IT and non-IT talent. They understood our requirements and provided candidates quickly.",
      created_at: new Date(Date.now() - 3600000 * 60).toISOString(),
    },
    {
      id: "fb_104",
      name: "Karan Mehta",
      rating: 5,
      message: "The AMC contract has saved us both cost and headaches. Proactive printer and computer maintenance across our Jaipur branch.",
      created_at: new Date(Date.now() - 3600000 * 96).toISOString(),
    },
  ];

  const sampleLeads = [
    {
      id: "lead_101",
      email: "itdirector@alphacorp.in",
      source: "footer-newsletter",
      created_at: new Date(Date.now() - 3600000 * 6).toISOString(),
    },
    {
      id: "lead_102",
      email: "operations@zenlogistics.com",
      source: "footer-newsletter",
      created_at: new Date(Date.now() - 3600000 * 30).toISOString(),
    },
    {
      id: "lead_103",
      email: "procurement@himalayanexports.com",
      source: "footer-newsletter",
      created_at: new Date(Date.now() - 3600000 * 80).toISOString(),
    },
  ];

  const sampleTickets = [
    {
      ticket_id: "tkt_9021a4",
      client_email: "rajesh.malhotra@zenithcorps.com",
      client_id: "client_usr_01",
      title: "Active Directory user sync failing on branch DC",
      description: "Users created at the head office are not replicating to the Jaipur branch domain controller. Error 1722 RPC server unavailable.",
      attachment_url: null,
      attachment_name: null,
      status: "In Progress",
      created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
    },
    {
      ticket_id: "tkt_481b0c",
      client_email: "sneha.k@novatechsolutions.in",
      client_id: "client_usr_02",
      title: "VPN connection dropping intermittently for remote staff",
      description: "Employees on FortiClient reporting connection drops every 20-30 minutes during video conferencing.",
      attachment_url: null,
      attachment_name: null,
      status: "Open",
      created_at: new Date(Date.now() - 3600000 * 14).toISOString(),
    },
    {
      ticket_id: "tkt_37c9f1",
      client_email: "vikram@apexlogistics.co.in",
      client_id: "client_usr_03",
      title: "Thermal printer setup in dispatch warehouse",
      description: "Configured 4 Zebra ZT230 barcode printers over static IP network. Testing completed successfully.",
      attachment_url: null,
      attachment_name: null,
      status: "Resolved",
      created_at: new Date(Date.now() - 3600000 * 52).toISOString(),
    },
  ];

  const sampleAccounts = [
    {
      id: "client_usr_01",
      email: "rajesh.malhotra@zenithcorps.com",
      name: "Rajesh Malhotra",
      created_at: new Date(Date.now() - 3600000 * 120).toISOString(),
    },
    {
      id: "client_usr_02",
      email: "sneha.k@novatechsolutions.in",
      name: "Sneha Kapoor",
      created_at: new Date(Date.now() - 3600000 * 100).toISOString(),
    },
  ];

  try {
    localStorage.setItem("contacts", JSON.stringify(sampleContacts));
    localStorage.setItem("feedbacks", JSON.stringify(sampleFeedbacks));
    localStorage.setItem("leads", JSON.stringify(sampleLeads));
    localStorage.setItem("tickets", JSON.stringify(sampleTickets));
    localStorage.setItem("demo_users", JSON.stringify(sampleAccounts));
  } catch (e) {
    console.error("Failed to seed sample data to localStorage:", e);
  }

  return {
    contacts: sampleContacts,
    feedbacks: sampleFeedbacks,
    leads: sampleLeads,
    tickets: sampleTickets,
    accounts: sampleAccounts,
  };
};

export const clearAllLocalData = () => {
  try {
    localStorage.removeItem("contacts");
    localStorage.removeItem("feedbacks");
    localStorage.removeItem("leads");
    localStorage.removeItem("tickets");
    localStorage.removeItem("demo_users");
  } catch (e) {
    console.error("Failed to clear local data:", e);
  }
};

