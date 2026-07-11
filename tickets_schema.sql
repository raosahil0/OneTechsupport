-- -------------------------------------------------------------
-- One Tech Support Database Setup Script
-- Consolidated Schema for Contacts, Feedbacks, Leads & Tickets
-- -------------------------------------------------------------

-- 1. Contacts (Inquiries)
CREATE TABLE IF NOT EXISTS contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  "inquiryType" text NOT NULL,
  message text NOT NULL
);

-- 2. Feedbacks (Reviews)
CREATE TABLE IF NOT EXISTS feedbacks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  rating numeric NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message text NOT NULL
);

-- 3. Leads (Subscribers)
CREATE TABLE IF NOT EXISTS leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  email text NOT NULL,
  source text DEFAULT 'website'::text NOT NULL
);

-- 4. Tickets (Support System)
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
-- Enable Row Level Security (RLS)
-- -------------------------------------------------------------
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;

-- -------------------------------------------------------------
-- Row Level Security (RLS) Access Policies
-- -------------------------------------------------------------

-- Contacts Policies (Inquiries)
CREATE POLICY "Allow public insert contacts" ON contacts FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public read contacts" ON contacts FOR SELECT TO public USING (true);
CREATE POLICY "Allow public delete contacts" ON contacts FOR DELETE TO public USING (true);

-- Feedbacks Policies (Reviews)
CREATE POLICY "Allow public insert feedbacks" ON feedbacks FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public read feedbacks" ON feedbacks FOR SELECT TO public USING (true);
CREATE POLICY "Allow public delete feedbacks" ON feedbacks FOR DELETE TO public USING (true);

-- Leads Policies (Newsletter)
CREATE POLICY "Allow public insert leads" ON leads FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public read leads" ON leads FOR SELECT TO public USING (true);
CREATE POLICY "Allow public delete leads" ON leads FOR DELETE TO public USING (true);

-- Tickets Policies (Support System)
-- Allow clients to insert their own tickets (authenticated users)
CREATE POLICY "Allow authenticated insert tickets" ON tickets FOR INSERT TO authenticated WITH CHECK (auth.uid() = client_id);

-- Allow clients to view only their own tickets
CREATE POLICY "Allow authenticated read tickets" ON tickets FOR SELECT TO authenticated USING (auth.uid() = client_id);

-- Allow public read & update for the admin portal bypass
CREATE POLICY "Allow admin read tickets" ON tickets FOR SELECT TO public USING (true);
CREATE POLICY "Allow admin update tickets" ON tickets FOR UPDATE TO public USING (true);

-- -------------------------------------------------------------
-- Supabase Storage Bucket Setup Recommendation
-- -------------------------------------------------------------
-- 1. Create a storage bucket named 'ticket-attachments'
-- 2. Configure bucket access to PUBLIC or define SELECT & INSERT access.
