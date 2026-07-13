# 🌐 S'K One Tech Support Web Application

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A premium, interactive business portal for **S'K One Tech Support**. The application delivers a high-performance web experience for client inquiries, feedback gathering, and interactive staffing/IT operations management, backed by a robust serverless architecture with offline resilience.

---

## 🗺️ System Architecture

Below is a diagram of the application's client-serverless architecture and automatic fallback mechanism:

```mermaid
graph TD
    User([User Client]) --> App[React Application]
    App --> Navigation[React Router v7]
    
    subgraph Pages & Views
        Navigation --> Home[Home / Hero & Testimonials]
        Navigation --> About[About / Team & Values]
        Navigation --> Services[Services / Pricing & Tech Stack]
        Navigation --> Projects[Projects / Portfolio Gallery]
        Navigation --> Clients[Clients / Portals]
        Navigation --> Contact[Contact Form]
        Navigation --> Admin[Admin Control Center]
    end

    subgraph Operations Hub
        Contact --> DbService[Database Service]
        Admin --> DbService
    end

    subgraph Data Layer
        DbService --> ConnectionCheck{Supabase Configured?}
        ConnectionCheck -- "Yes (Online)" --> Supabase[(Supabase PostgreSQL)]
        ConnectionCheck -- "No (Failover)" --> LocalStorage[(Browser localStorage)]
    end

    subgraph Email Service
        Contact --> EmailJS[EmailJS Client API]
    end

    classDef tech fill:#0f172a,stroke:#1e40af,stroke-width:2px,color:#f8fafc;
    classDef fallback fill:#7f1d1d,stroke:#b91c1c,stroke-width:1px,color:#fecaca;
    class DbService,Supabase,EmailJS tech;
    class LocalStorage fallback;
```

---

## 🛠️ Tech Stack & Key Integrations

| Technology | Purpose | Key Benefit |
| :--- | :--- | :--- |
| **React 19** | Component Architecture | High performance rendering, declarative state management. |
| **Vite 8** | Build & Dev Server | Sub-second Hot Module Replacement (HMR) and optimized builds. |
| **Tailwind CSS v4** | Style Engine | Contemporary layout design, built with modern CSS themes. |
| **Supabase JS** | Serverless Backend | Live PostgreSQL database synchronization with zero server config. |
| **EmailJS** | Notification Routing | Automatic client auto-reply and dispatching directly to inbox. |
| **Lucide Icons** | Visual Assets | Consistent, modern vector iconography. |

---

## 📁 Repository Structure

```
/
├── .env                    # Environment variables (Supabase & EmailJS keys)
├── index.html              # Vite entry template
├── package.json            # Script commands & package definitions
├── tailwind.config.js      # Tailwind source path settings
├── vercel.json             # Deployment settings (SPA redirects)
├── vite.config.js          # Vite config & React plugin configuration
└── src/
    ├── App.jsx             # Router definition & global layouts
    ├── main.jsx            # React root mount point
    ├── main.css            # Custom CSS utilities & Tailwind directives
    ├── assets/
    │   └── logo.png        # Corporate brand identity
    ├── components/
    │   ├── Header.jsx      # Navigation bar with active link markers
    │   ├── Footer.jsx      # Footer with responsive email lead signup
    │   └── FeedbackForm.jsx# Interactive floating rating & slide-over form
    ├── pages/
    │   ├── Home.jsx        # Landing page with animated hero, services & testimonials
    │   ├── About.jsx       # Mission statement, corporate milestones & teams
    │   ├── Services.jsx    # Managed services catalogue & features lists
    │   ├── Projects.jsx    # Categorized filterable client engagement gallery
    │   ├── Clients.jsx     # Onboarding guidelines and credentials
    │   ├── Contact.jsx     # Email & lead intake forms with validation rules
    │   └── Admin.jsx       # Admin portal with metrics graphs, filters & database logs
    └── services/
        ├── supabaseClient.js  # Supabase client wrapper
        └── databaseService.js # Unified query controller with local fallback
```

---

## ⚙️ Environment Configuration

To set up the database and messaging integrations, add a `.env` file in the project root:

```ini
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key

# EmailJS Configuration (Optional)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🚀 Running Locally

Follow these quick commands to spin up the project:

### 1. Installation
```bash
npm install
```

### 2. Launch Dev Server
```bash
npm run dev
```

### 3. Production Compilation & Testing
```bash
npm run build      # Build optimized application files inside /dist
npm run preview    # Serve and test the local production build
```

---

## 🗄️ Database Setup (Supabase)

> [!TIP]
> This application automatically detects if Supabase credentials are missing and falls back to browser-level `localStorage` storing so that the app remains fully functional under any configuration.

If configuring Supabase, open your **Supabase SQL Editor** and execute the following schema script to configure tables and Row Level Security (RLS) policies:

<details>
<summary><b>📐 Click to Expand SQL Schema Script</b></summary>

```sql
-- -------------------------------------------------------------
-- 1. Table Declarations
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

-- -------------------------------------------------------------
-- 2. Security Setup (Row Level Security)
-- -------------------------------------------------------------

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- -------------------------------------------------------------
-- 3. Public Accessibility Policies
-- -------------------------------------------------------------

-- Contacts Policies
CREATE POLICY "Allow public insert contacts" ON contacts FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public read contacts" ON contacts FOR SELECT TO public USING (true);
CREATE POLICY "Allow public delete contacts" ON contacts FOR DELETE TO public USING (true);

-- Feedbacks Policies
CREATE POLICY "Allow public insert feedbacks" ON feedbacks FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public read feedbacks" ON feedbacks FOR SELECT TO public USING (true);
CREATE POLICY "Allow public delete feedbacks" ON feedbacks FOR DELETE TO public USING (true);

-- Leads Policies
CREATE POLICY "Allow public insert leads" ON leads FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public read leads" ON leads FOR SELECT TO public USING (true);
CREATE POLICY "Allow public delete leads" ON leads FOR DELETE TO public USING (true);

-- -------------------------------------------------------------
-- 4. Tickets System (Client Support)
-- -------------------------------------------------------------

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

ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;

-- Allow clients to insert their own tickets (authenticated users)
CREATE POLICY "Allow authenticated insert tickets" ON tickets FOR INSERT TO authenticated WITH CHECK (auth.uid() = client_id);

-- Allow clients to view only their own tickets
CREATE POLICY "Allow authenticated read tickets" ON tickets FOR SELECT TO authenticated USING (auth.uid() = client_id);

-- Allow public read & update for the admin portal bypass
CREATE POLICY "Allow admin read tickets" ON tickets FOR SELECT TO public USING (true);
CREATE POLICY "Allow admin update tickets" ON tickets FOR UPDATE TO public USING (true);

-- -------------------------------------------------------------
-- 5. Storage Buckets & Policies Setup
-- -------------------------------------------------------------
-- Ensure you create a public bucket named 'ticket-attachments' in Supabase Storage.
-- Then run the following commands to configure security policies for attachment uploads:

CREATE POLICY "Allow public select on attachments" ON storage.objects FOR SELECT TO public USING (bucket_id = 'ticket-attachments');
CREATE POLICY "Allow authenticated insert on attachments" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'ticket-attachments');
CREATE POLICY "Allow authenticated delete on attachments" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'ticket-attachments');
```
</details>

---

## ✨ Features & User Experience

- **📊 High-Performance Code-Splitting**: All routes are lazy-loaded dynamically, shrinking the initial bundle size from **564 kB down to 429 kB** for sub-second page rendering and layout transitions.
- **⚡ Guided Project Intake Wizard**: The [Contact Page](file:///c:/Users/Sahil.yadav/Desktop/OneTechsupport/src/pages/Contact.jsx) utilizes a high-converting multi-step lead wizard with active step progress trackers.
- **🛠️ Interactive Services Index**: The [Services catalogue](file:///c:/Users/Sahil.yadav/Desktop/OneTechsupport/src/pages/Services.jsx) features dynamic hover-expanding cards that display tools, services, and tech stacks (React, Python, AWS, Docker).
- **🔔 Floating Overlay Toast Alert System**: Overlay toast alerts slide into view dynamically to prevent layout shifts during form validation checks.
- **🔐 Client Support Hub & Resolution Analytics**: Portal for clients to submit support tickets, upload media attachments under 2MB, and view ticket history status distributions via progress charts.
- **🛡️ Full-Featured Administration Center**: Access at `/admin` (password: `Yadav@32!`) to manage inquiries, feedback submissions, subscribers, support tickets, and client accounts with inline status selectors and confirmable account deletion rules.
- **📱 Responsive Glassmorphic Theme**: Designed with an Outfit-based typographic scale, sleek dark hero grids, backdrop-blur cards, and smooth lift animations.

---

## 👥 Authors

- **Sahil Yadav**
  - GitHub: [@raosahil0](https://github.com/raosahil0)
  - GitHub Backup/Secondary: [@sahilyadav-01](https://github.com/sahilyadav-01)