-- -------------------------------------------------------------
-- Tickets Table Setup Script (Updated with Attachments)
-- -------------------------------------------------------------

CREATE TABLE IF NOT EXISTS tickets (
  ticket_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  status text DEFAULT 'Open' NOT NULL,
  attachment_url text,
  attachment_name text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- -------------------------------------------------------------
-- Row Level Security (RLS)
-- -------------------------------------------------------------

ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;

-- -------------------------------------------------------------
-- Policies (Access Control)
-- -------------------------------------------------------------

-- Allow clients to insert their own tickets (authenticated users)
CREATE POLICY "Allow authenticated insert tickets" 
ON tickets 
FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = client_id);

-- Allow clients to view only their own tickets
CREATE POLICY "Allow authenticated read tickets" 
ON tickets 
FOR SELECT 
TO authenticated 
USING (auth.uid() = client_id);

-- -------------------------------------------------------------
-- Supabase Storage Bucket Setup
-- -------------------------------------------------------------
-- 1. Create a storage bucket named 'ticket-attachments'
-- 2. Enable Public access, or define policies:
--    - SELECT: authenticated users
--    - INSERT: authenticated users (with client folder restriction)
