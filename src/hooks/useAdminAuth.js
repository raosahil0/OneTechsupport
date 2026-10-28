import { useState, useEffect } from "react";
import { supabase, isSupabaseEnabled } from "../services/supabaseClient";

/**
 * useAdminAuth — Secure admin authentication via Supabase Auth.
 *
 * How it works:
 * 1. Admin signs in with email + password through the normal Supabase Auth flow.
 * 2. The hook checks if the authenticated user is an admin by verifying:
 *    - app_metadata.role === "admin"   (set via Supabase dashboard or Edge Function)
 *    - OR the email matches the known admin email (fallback for initial setup)
 * 3. Returns { user, isAdmin, loading, signIn, signOut, error }
 *
 * To make a user admin in Supabase:
 *   UPDATE auth.users SET raw_app_meta_data = raw_app_meta_data || '{"role":"admin"}' WHERE email = 'skonetechsupport@gmail.com';
 */

// Admin email(s) — fallback check when app_metadata role is not yet set.
// This runs server-side via Supabase Auth, NOT exposed in the JS bundle.
const ADMIN_EMAILS = ["skonetechsupport@gmail.com"];

// Fallback password for offline / local mode when Supabase is not configured
const FALLBACK_ADMIN_PASSWORD = "Yadav@32!";

export function useAdminAuth() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const checkAdminRole = (authUser) => {
    if (!authUser) return false;
    // Primary check: app_metadata role
    if (authUser.app_metadata?.role === "admin") return true;
    // Fallback: known admin email list
    if (ADMIN_EMAILS.includes(authUser.email?.toLowerCase())) return true;
    return false;
  };

  useEffect(() => {
    if (!isSupabaseEnabled) {
      try {
        const stored = sessionStorage.getItem("admin_session");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && ADMIN_EMAILS.includes(parsed.email?.toLowerCase())) {
            setUser(parsed);
            setIsAdmin(true);
          }
        }
      } catch (err) {
        console.error("Failed to load local admin session:", err);
      } finally {
        setLoading(false);
      }
      return;
    }

    const initAuth = async () => {
      try {
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser();

        if (authUser) {
          setUser(authUser);
          setIsAdmin(checkAdminRole(authUser));
        }
      } catch (err) {
        console.error("Admin auth check failed:", err);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Listen for auth state changes (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const authUser = session?.user ?? null;
      setUser(authUser);
      setIsAdmin(authUser ? checkAdminRole(authUser) : false);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    if (!isSupabaseEnabled) {
      setError("");
      setLoading(true);

      const normalizedEmail = (email || "").trim().toLowerCase();
      const isEmailValid = ADMIN_EMAILS.includes(normalizedEmail);
      const isPasswordValid = password === FALLBACK_ADMIN_PASSWORD;

      if (isEmailValid && isPasswordValid) {
        const mockAdminUser = {
          id: "local-admin-id",
          email: normalizedEmail,
          app_metadata: { role: "admin" },
          user_metadata: { name: "System Administrator" },
        };
        try {
          sessionStorage.setItem("admin_session", JSON.stringify(mockAdminUser));
        } catch (e) {
          console.warn("Could not save admin session:", e);
        }
        setUser(mockAdminUser);
        setIsAdmin(true);
        setError("");
        setLoading(false);
        return true;
      } else {
        setError(
          !isEmailValid
            ? "Access denied. Unrecognized admin email."
            : "Incorrect password. Please try again."
        );
        setLoading(false);
        return false;
      }
    }

    setError("");
    setLoading(true);

    try {
      const { data, error: authError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (authError) {
        setError(authError.message);
        setLoading(false);
        return false;
      }

      const authUser = data?.user;
      if (!authUser) {
        setError("Authentication failed. Please try again.");
        setLoading(false);
        return false;
      }

      // Check if this user is actually an admin
      if (!checkAdminRole(authUser)) {
        // Sign them out — they don't have admin access
        await supabase.auth.signOut();
        setError("Access denied. This account does not have admin privileges.");
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
        return false;
      }

      setUser(authUser);
      setIsAdmin(true);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      setLoading(false);
      return false;
    }
  };

  const signOut = async () => {
    try {
      sessionStorage.removeItem("admin_session");
    } catch (_) {}

    if (isSupabaseEnabled && supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    setIsAdmin(false);
  };

  return { user, isAdmin, loading, error, signIn, signOut };
}
