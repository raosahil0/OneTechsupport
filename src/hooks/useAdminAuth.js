import { useState, useEffect } from "react";
import { supabase, isSupabaseEnabled } from "../services/supabaseClient";

/**
 * useAdminAuth — Secure admin authentication via Supabase Auth + Master Administrator Fallback.
 */

const ADMIN_EMAILS = ["skonetechsupport@gmail.com"];
const FALLBACK_ADMIN_PASSWORD = "Yadav@32!";

export function useAdminAuth() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const checkAdminRole = (authUser) => {
    if (!authUser) return false;
    if (authUser.app_metadata?.role === "admin") return true;
    if (ADMIN_EMAILS.includes(authUser.email?.toLowerCase())) return true;
    return false;
  };

  useEffect(() => {
    // Check if there is an active local/master session saved
    try {
      const stored = sessionStorage.getItem("admin_session");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && ADMIN_EMAILS.includes(parsed.email?.toLowerCase())) {
          setUser(parsed);
          setIsAdmin(true);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      console.warn("Session read error:", e);
    }

    if (!isSupabaseEnabled || !supabase) {
      setLoading(false);
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

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const authUser = session?.user ?? null;
      if (authUser) {
        setUser(authUser);
        setIsAdmin(checkAdminRole(authUser));
      }
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    setError("");
    setLoading(true);

    const normalizedEmail = (email || "").trim().toLowerCase();
    const isMasterEmail = ADMIN_EMAILS.includes(normalizedEmail);
    const isMasterPassword = password === FALLBACK_ADMIN_PASSWORD;

    // 1. If Supabase is not enabled, use master credentials directly
    if (!isSupabaseEnabled || !supabase) {
      if (isMasterEmail && isMasterPassword) {
        const mockAdminUser = {
          id: "local-admin-id",
          email: normalizedEmail,
          app_metadata: { role: "admin" },
          user_metadata: { name: "System Administrator" },
        };
        try {
          sessionStorage.setItem("admin_session", JSON.stringify(mockAdminUser));
        } catch (_) {}
        setUser(mockAdminUser);
        setIsAdmin(true);
        setError("");
        setLoading(false);
        return true;
      } else {
        setError(
          !isMasterEmail
            ? "Access denied. Unrecognized admin email."
            : "Incorrect password. Please try again."
        );
        setLoading(false);
        return false;
      }
    }

    // 2. If Supabase is enabled, attempt Supabase Auth
    try {
      let { data, error: authError } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

      // If user does not exist yet in Supabase Auth or invalid credentials:
      if (
        authError &&
        isMasterEmail &&
        isMasterPassword
      ) {
        // Attempt to auto-provision admin user in Supabase Auth
        try {
          const signUpRes = await supabase.auth.signUp({
            email: normalizedEmail,
            password: password,
          });

          if (!signUpRes.error && signUpRes.data?.user) {
            data = signUpRes.data;
            authError = null;
          }
        } catch (_) {}

        // Grant master admin session so administrator is never locked out
        const masterUser = {
          id: data?.user?.id || "master-admin-id",
          email: normalizedEmail,
          app_metadata: { role: "admin" },
          user_metadata: { name: "System Administrator" },
        };
        try {
          sessionStorage.setItem("admin_session", JSON.stringify(masterUser));
        } catch (_) {}

        setUser(masterUser);
        setIsAdmin(true);
        setError("");
        setLoading(false);
        return true;
      }

      if (authError) {
        setError(authError.message || "Invalid login credentials.");
        setLoading(false);
        return false;
      }

      const authUser = data?.user;
      if (!authUser) {
        setError("Authentication failed. Please try again.");
        setLoading(false);
        return false;
      }

      if (!checkAdminRole(authUser)) {
        await supabase.auth.signOut();
        setError("Access denied. This account does not have admin privileges.");
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
        return false;
      }

      setUser(authUser);
      setIsAdmin(true);
      setError("");
      setLoading(false);
      return true;
    } catch (err) {
      if (isMasterEmail && isMasterPassword) {
        const masterUser = {
          id: "master-admin-id",
          email: normalizedEmail,
          app_metadata: { role: "admin" },
          user_metadata: { name: "System Administrator" },
        };
        try {
          sessionStorage.setItem("admin_session", JSON.stringify(masterUser));
        } catch (_) {}
        setUser(masterUser);
        setIsAdmin(true);
        setError("");
        setLoading(false);
        return true;
      }

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
      try {
        await supabase.auth.signOut();
      } catch (_) {}
    }
    setUser(null);
    setIsAdmin(false);
  };

  return { user, isAdmin, loading, error, signIn, signOut };
}
