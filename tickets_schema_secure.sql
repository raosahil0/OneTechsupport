-- =============================================================
-- One Tech Support — SECURE Database Setup Script
-- Fixes: Bug #1 (Public RLS), Bug #2 (Ticket RLS), Bug #4 (Storage)
-- =============================================================
-- ⚠️  Run this in the Supabase SQL Editor.
-- =============================================================

-- -------------------------------------------------------------
-- 1. Tables
-- -------------------------------------------------------------

CREATE TABLE IF NOT EXISTS contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  "inquiryType" text NOT NULL,
  message text NOT NULL
);

CREATE TABLE IF NOT EXISTS feedbacks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  rating numeric NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message text NOT NULL
);

CREATE TABLE IF NOT EXISTS leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  email text NOT NULL,
  source text DEFAULT 'website'::text NOT NULL
);

CREATE TABLE IF NOT EXISTS tickets (
  ticket_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  client_email text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  status text DEFAULT 'Open' NOT NULL,
  attachment_url text,
  attachment_name text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- -------------------------------------------------------------
-- 2. Admin Helper Function (Works for Supabase Auth JWT)
-- -------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT coalesce(
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    OR (auth.jwt() ->> 'email') = 'skonetechsupport@gmail.com',
    false
  );
$$;

-- -------------------------------------------------------------
-- 3. Enable Row Level Security (RLS)
-- -------------------------------------------------------------
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;

-- -------------------------------------------------------------
-- 4. Drop ALL old insecure policies (safe to run even if not present)
-- -------------------------------------------------------------
DROP POLICY IF EXISTS "Allow public insert contacts" ON contacts;
DROP POLICY IF EXISTS "Allow public read contacts" ON contacts;
DROP POLICY IF EXISTS "Allow public delete contacts" ON contacts;
DROP POLICY IF EXISTS "Public insert contacts" ON contacts;
DROP POLICY IF EXISTS "Service role read contacts" ON contacts;
DROP POLICY IF EXISTS "Service role delete contacts" ON contacts;
DROP POLICY IF EXISTS "Admin read contacts" ON contacts;
DROP POLICY IF EXISTS "Admin delete contacts" ON contacts;

DROP POLICY IF EXISTS "Allow public insert feedbacks" ON feedbacks;
DROP POLICY IF EXISTS "Allow public read feedbacks" ON feedbacks;
DROP POLICY IF EXISTS "Allow public delete feedbacks" ON feedbacks;
DROP POLICY IF EXISTS "Public insert feedbacks" ON feedbacks;
DROP POLICY IF EXISTS "Public read feedbacks" ON feedbacks;
DROP POLICY IF EXISTS "Service role delete feedbacks" ON feedbacks;
DROP POLICY IF EXISTS "Admin delete feedbacks" ON feedbacks;

DROP POLICY IF EXISTS "Allow public insert leads" ON leads;
DROP POLICY IF EXISTS "Allow public read leads" ON leads;
DROP POLICY IF EXISTS "Allow public delete leads" ON leads;
DROP POLICY IF EXISTS "Public insert leads" ON leads;
DROP POLICY IF EXISTS "Service role read leads" ON leads;
DROP POLICY IF EXISTS "Service role delete leads" ON leads;
DROP POLICY IF EXISTS "Admin read leads" ON leads;
DROP POLICY IF EXISTS "Admin delete leads" ON leads;

DROP POLICY IF EXISTS "Allow authenticated insert tickets" ON tickets;
DROP POLICY IF EXISTS "Allow authenticated read tickets" ON tickets;
DROP POLICY IF EXISTS "Allow admin read tickets" ON tickets;
DROP POLICY IF EXISTS "Allow admin update tickets" ON tickets;
DROP POLICY IF EXISTS "Auth insert own tickets" ON tickets;
DROP POLICY IF EXISTS "Auth read own tickets" ON tickets;
DROP POLICY IF EXISTS "Auth read tickets" ON tickets;
DROP POLICY IF EXISTS "Admin update tickets" ON tickets;
DROP POLICY IF EXISTS "Service role read all tickets" ON tickets;
DROP POLICY IF EXISTS "Service role update tickets" ON tickets;

DROP POLICY IF EXISTS "Allow public select on attachments" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated insert on attachments" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated delete on attachments" ON storage.objects;
DROP POLICY IF EXISTS "Auth read own attachments" ON storage.objects;
DROP POLICY IF EXISTS "Auth upload safe files" ON storage.objects;
DROP POLICY IF EXISTS "Auth delete own attachments" ON storage.objects;
DROP POLICY IF EXISTS "Service role manage attachments" ON storage.objects;
DROP POLICY IF EXISTS "Admin read all attachments" ON storage.objects;

-- -------------------------------------------------------------
-- 5. SECURE Policies — Contacts
-- -------------------------------------------------------------
-- Public can submit contact forms
CREATE POLICY "Public insert contacts"
  ON contacts FOR INSERT TO public
  WITH CHECK (true);

-- Authenticated Admin can READ contacts
CREATE POLICY "Admin read contacts"
  ON contacts FOR SELECT TO authenticated
  USING (public.is_admin());

-- Authenticated Admin can DELETE contacts
CREATE POLICY "Admin delete contacts"
  ON contacts FOR DELETE TO authenticated
  USING (public.is_admin());

-- -------------------------------------------------------------
-- 6. SECURE Policies — Feedbacks
-- -------------------------------------------------------------
-- Public can submit feedback
CREATE POLICY "Public insert feedbacks"
  ON feedbacks FOR INSERT TO public
  WITH CHECK (true);

-- Public can read feedbacks (testimonials displayed on site)
CREATE POLICY "Public read feedbacks"
  ON feedbacks FOR SELECT TO public
  USING (true);

-- Authenticated Admin can DELETE feedbacks
CREATE POLICY "Admin delete feedbacks"
  ON feedbacks FOR DELETE TO authenticated
  USING (public.is_admin());

-- -------------------------------------------------------------
-- 7. SECURE Policies — Leads
-- -------------------------------------------------------------
-- Public can subscribe to newsletter
CREATE POLICY "Public insert leads"
  ON leads FOR INSERT TO public
  WITH CHECK (true);

-- Authenticated Admin can READ leads
CREATE POLICY "Admin read leads"
  ON leads FOR SELECT TO authenticated
  USING (public.is_admin());

-- Authenticated Admin can DELETE leads
CREATE POLICY "Admin delete leads"
  ON leads FOR DELETE TO authenticated
  USING (public.is_admin());

-- -------------------------------------------------------------
-- 8. SECURE Policies — Tickets
-- -------------------------------------------------------------
-- Authenticated clients can INSERT their own tickets
CREATE POLICY "Auth insert own tickets"
  ON tickets FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = client_id);

-- Authenticated clients can read their OWN tickets, and Admins can read ALL tickets
CREATE POLICY "Auth read tickets"
  ON tickets FOR SELECT TO authenticated
  USING (auth.uid() = client_id OR public.is_admin());

-- Authenticated Admin can UPDATE ticket status
CREATE POLICY "Admin update tickets"
  ON tickets FOR UPDATE TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- -------------------------------------------------------------
-- 9. SECURE Policies — Storage (ticket-attachments bucket)
-- -------------------------------------------------------------
-- Users can READ their own attachments; Admins can READ all ticket attachments
CREATE POLICY "Auth read attachments"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'ticket-attachments'
    AND (
      auth.uid()::text = (storage.foldername(name))[1]
      OR public.is_admin()
    )
  );

-- Authenticated users can UPLOAD only safe file types into their own folder
CREATE POLICY "Auth upload safe files"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'ticket-attachments'
    AND auth.uid()::text = (storage.foldername(name))[1]
    AND storage.extension(name) IN ('jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf')
  );

-- Users can DELETE their own attachments; Admins can DELETE any
CREATE POLICY "Auth delete attachments"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'ticket-attachments'
    AND (
      auth.uid()::text = (storage.foldername(name))[1]
      OR public.is_admin()
    )
  );

-- Service role full access fallback
CREATE POLICY "Service role manage attachments"
  ON storage.objects FOR ALL TO service_role
  USING (bucket_id = 'ticket-attachments');
