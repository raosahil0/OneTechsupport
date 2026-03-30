# 🎯 Prompt 06: Inner Pages

**Phase:** 6 of 8  
**Role:** Senior Next.js Developer + Information Architect  
**Time:** 20-30 minutes  
**Output:** Complete Services, Projects, About, Clients, and Contact pages

---

## 📋 COPY THE PROMPT BELOW INTO YOUR LLM:

```markdown
# ROLE: Senior Next.js Developer + Information Architect

You are an expert Next.js developer who has built complex, multi-page websites with dynamic routing, optimal information architecture, and seamless user experiences.

---

## 🎯 YOUR TASK

Create all inner pages for S'K One Tech Support's Next.js website:

1. **Services Page** (/services) + Dynamic Service Detail (/services/[slug])
2. **Projects Page** (/projects) + Dynamic Project Detail (/projects/[slug])
3. **About Page** (/about)
4. **Clients/Testimonials Page** (/clients)
5. **Contact Page** (/contact)

Each page must be:
- Fully functional and production-ready
- Consistent with the home page design
- Optimized for SEO
- Accessible (WCAG 2.1 AA)
- Mobile-responsive
- Awwards-worthy

---

## 📊 PROJECT CONTEXT

**Framework:** Next.js 15+ (App Router)  
**Styling:** Tailwind CSS 4  
**Animations:** Framer Motion  
**Components:** [Reference Phase 4 & 5 output]  
**Design System:** [Reference Phase 2 output]  
**Data:** [Reference Phase 3 output]

---

## 📄 PAGE SPECIFICATIONS

### 1. Services Page (/services)

#### Services Overview Page

**Purpose:** Showcase all services with detailed information

**Structure:**
```
1. Page Hero (40vh)
   - Title: "Our Services"
   - Subtitle: "Comprehensive IT solutions for your business"
   - Background: Gradient

2. Services Grid (100vh+)
   - All 6 services in 3-column grid
   - Each card: Icon, title, description, features list
   - Hover effects

3. Process Section (60vh)
   - Title: "How We Work"
   - 4-step process with icons
   - Timeline-style layout

4. CTA Section (40vh)
   - Title: "Ready to Get Started?"
   - Contact button
   - WhatsApp button
```

**Services Data (from data/services.ts):**
1. IT Support
2. Manpower Support
3. IT Recruitment
4. Non-IT Hiring
5. Consulting Services
6. Training & Development

**Features:**
- Filter by category (optional)
- Search functionality (optional)
- Each service card links to detail page

---

#### Service Detail Page (/services/[slug])

**Purpose:** Deep dive into individual services

**Structure:**
```
1. Hero Section (50vh)
   - Service title
   - Icon/illustration
   - Brief description

2. Overview Section
   - Full service description
   - Key benefits

3. Features List
   - Bullet points of what's included

4. Process for This Service
   - Step-by-step breakdown

5. Related Projects
   - 2-3 projects using this service

6. Testimonial
   - Client quote about this service

7. CTA Section
   - "Get Started" button
   - Contact form or link
```

**Dynamic Route:**
- Use generateStaticParams for all service slugs
- Not found page for invalid slugs
- SEO metadata per service

---

### 2. Projects Page (/projects)

#### Projects Overview Page

**Purpose:** Portfolio showcase of completed work

**Structure:**
```
1. Page Hero (40vh)
   - Title: "Our Projects"
   - Subtitle: "Delivering results across industries"
   - Background: Gradient

2. Filter Bar (sticky)
   - All | IT Infrastructure | Staffing | Recruitment | Consulting
   - Active state indicator

3. Projects Grid (100vh+)
   - Masonry or grid layout
   - Project cards with image, title, category, status
   - Hover reveal effect

4. CTA Section
   - "Want to see your project here?"
   - "Start Your Project" button
```

**Project Categories:**
- IT Infrastructure
- Staffing Solutions
- Recruitment
- Security
- Cloud Services
- Analytics

**Features:**
- Filter by category (client-side)
- Sort by date or category
- Each project links to detail page

---

#### Project Detail Page (/projects/[slug])

**Purpose:** Case study format for individual projects

**Structure:**
```
1. Hero Section (60vh)
   - Project image
   - Title
   - Category badge
   - Status badge (Completed/In Progress)

2. Project Overview
   - Client name (or anonymous)
   - Duration
   - Services used
   - Location

3. Challenge Section
   - "The Challenge"
   - Problem description

4. Solution Section
   - "Our Solution"
   - Approach and implementation

5. Results Section
   - "The Results"
   - Quantifiable outcomes
   - Stats if available

6. Testimonial
   - Client quote

7. Gallery (optional)
   - Project images

8. Related Projects
   - 2-3 similar projects

9. CTA
   - "Start Your Project"
```

**Format:** Case study storytelling

---

### 3. About Page (/about)

**Purpose:** Company story, mission, team, and credibility

**Structure:**
```
1. Hero Section (40vh)
   - Title: "About S'K One Tech Support"
   - Subtitle: "Your trusted IT partner"

2. Story Section (60vh)
   - Company history
   - Timeline animation
   - Key milestones

3. Mission & Vision (60vh)
   - Two-column layout
   - Icon for each
   - Detailed descriptions

4. Values Section (60vh)
   - 4-5 core values
   - Icon + title + description
   - Grid layout

5. Stats Section (reuse from home)
   - 50+ Clients
   - 120+ Projects
   - 3+ Years

6. Team Section (80vh)
   - Team member cards
   - Photo, name, role
   - Social links (optional)

7. Service Areas (60vh)
   - Map or badge layout
   - List of cities served
   - Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana

8. CTA Section
   - "Work With Us"
   - Contact button
```

**Tone:** Professional yet approachable

---

### 4. Clients Page (/clients)

**Purpose:** Social proof and review collection

**Structure:**
```
1. Hero Section (40vh)
   - Title: "What Our Clients Say"
   - Subtitle: "Trusted by businesses across North India"

2. Testimonials Grid (100vh+)
   - All testimonials in 3-column grid
   - Star ratings
   - Client name and role
   - Company (if available)

3. Stats Section
   - Average rating
   - Total reviews
   - Repeat clients %

4. Leave a Review Section
   - Feedback form
   - Rating input (1-5 stars)
   - Name, email, message
   - Submit button

5. Thank You State
   - Show after submission
   - "Thank you for your feedback!"
```

**Feedback Form:**
- Name (required)
- Email (required)
- Rating (1-5 stars, required)
- Message (required)
- Submit to API route
- Store in localStorage (for now)

---

### 5. Contact Page (/contact)

**Purpose:** Primary conversion point

**Structure:**
```
1. Hero Section (40vh)
   - Title: "Get In Touch"
   - Subtitle: "Ready to transform your IT operations?"

2. Contact Info Section (60vh)
   - Left: Contact details
     - Phone with icon
     - Email with icon
     - Service areas with icon
     - Social links (Instagram, WhatsApp)
   - Right: Contact form

3. Contact Form
   - Multi-step or single page
   - Fields:
     - Name (required)
     - Email (required)
     - Phone (optional)
     - Inquiry Type (dropdown)
     - Message (textarea, required)
   - Submit button
   - Success message

4. Map Section (optional)
   - Service area map
   - Markers for cities

5. FAQ Section (optional)
   - Common questions
   - Accordion format

6. CTA Section
   - WhatsApp button (prominent)
   - "Prefer to chat?" message
```

**Contact Form Features:**
- React Hook Form
- Zod validation
- Loading state
- Success/error messages
- Submit to API route
- Store in localStorage

**Inquiry Types:**
- IT Support
- Manpower Support
- Hiring Services
- Consulting
- Training
- Other

---

## 💻 CODE REQUIREMENTS

### Page Files Structure

```
app/
├── services/
│   ├── page.tsx          # Services overview
│   └── [slug]/
│       └── page.tsx      # Service detail
├── projects/
│   ├── page.tsx          # Projects overview
│   └── [slug]/
│       └── page.tsx      # Project detail
├── about/
│   └── page.tsx          # About page
├── clients/
│   └── page.tsx          # Clients/Testimonials page
└── contact/
    └── page.tsx          # Contact page
```

### Dynamic Route Generation

```typescript
// app/services/[slug]/page.tsx
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }
  
  return (
    // Page content
  );
}
```

### SEO Metadata Per Page

```typescript
// app/services/page.tsx
export const metadata = {
  title: 'Our Services | S'K One Tech Support',
  description: 'IT support, staffing, recruitment, and consulting services in Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana.',
  openGraph: {
    title: 'Services | S'K One Tech Support',
    description: 'Comprehensive IT solutions for your business',
    images: ['/og-services.jpg'],
  },
};
```

---

## 📝 OUTPUT FORMAT

Provide complete code in this structure:

```markdown
# S'K One Tech Support - Inner Pages

## 1. Services Pages

### app/services/page.tsx
```tsx
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { services } from '@/data/services';

export const metadata = {
  title: 'Our Services | S'K One Tech Support',
  description: '...',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      {/* Services Grid */}
      {/* Process */}
      {/* CTA */}
    </main>
  );
}
```

### app/services/[slug]/page.tsx
```tsx
// Complete service detail page
```

---

## 2. Projects Pages

### app/projects/page.tsx
```tsx
// Complete projects overview page
```

### app/projects/[slug]/page.tsx
```tsx
// Complete project detail page (case study format)
```

---

## 3. About Page

### app/about/page.tsx
```tsx
// Complete about page with timeline, team, values
```

---

## 4. Clients Page

### app/clients/page.tsx
```tsx
'use client';

import { useState } from 'react';
import { FeedbackForm } from '@/components/forms/FeedbackForm';
// Complete testimonials page with form
```

---

## 5. Contact Page

### app/contact/page.tsx
```tsx
'use client';

import { ContactForm } from '@/components/forms/ContactForm';
// Complete contact page with form and info
```

---

## 6. Additional Components

### components/sections/ProcessSection.tsx
```tsx
// 4-step process component
```

### components/sections/Timeline.tsx
```tsx
// Company history timeline
```

### components/sections/TeamGrid.tsx
```tsx
// Team member cards
```

### components/forms/ContactForm.tsx
```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// Complete form with validation
```

### components/forms/FeedbackForm.tsx
```tsx
// Feedback/review form
```

---

## 7. API Routes

### app/api/contact/route.ts
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  inquiryType: z.string(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);
    
    // Store in database (or localStorage for now)
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
```

### app/api/feedback/route.ts
```typescript
// Feedback API handler
```

---

## 8. Data Files

### data/services.ts
```typescript
export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  process: string[];
}

export const services: Service[] = [
  {
    slug: 'it-support',
    title: 'IT Support',
    description: '...',
    icon: 'Monitor',
    features: ['24/7 Support', 'Remote & On-site', 'Preventive Maintenance'],
    process: ['Assessment', 'Implementation', 'Support'],
  },
  // ... all 6 services
];
```

### data/projects.ts
```typescript
// Project portfolio data
```

### data/team.ts
```typescript
// Team member data
```

---

## 9. Shared Components

### components/ui/FilterBar.tsx
```tsx
// Filter component for projects
```

### components/ui/StarRating.tsx
```tsx
// Star rating display and input
```

### components/ui/Accordion.tsx
```tsx
// For FAQ section
```

---

## 10. Page-Specific Styles

### Any custom animations or layouts
```css
/* Additional CSS if needed */
```
```

---

## ⚠️ RULES

1. **Complete code only** - No placeholders
2. **TypeScript** - Full type safety
3. **Dynamic routes** - Proper generateStaticParams
4. **SEO** - Unique metadata per page
5. **Accessibility** - WCAG 2.1 AA
6. **Mobile-first** - Responsive design
7. **Forms** - Validation, error handling, success states
8. **Consistency** - Match home page design

---

## 🎨 PAGE-SPECIFIC GUIDELINES

### Services Pages
- Clear hierarchy of information
- Easy to scan
- Strong CTAs

### Projects Pages
- Case study storytelling
- Visual-heavy
- Results-focused

### About Page
- Authentic storytelling
- Humanize the brand
- Build trust

### Clients Page
- Social proof prominent
- Easy to leave review
- Display ratings clearly

### Contact Page
- Minimal friction
- Multiple contact options
- Clear next steps

---

## 🔥 START NOW

Create all inner pages with complete, production-ready code.

Remember: Each page should feel cohesive with the home page while serving its unique purpose.
```

---

## ✅ What to Do After Running This Prompt

1. **Save the output** to `prompts/outputs/phase6_inner_pages.md`
2. **Create all page files** in your project
3. **Add all data files** (services, projects, team)
4. **Test all routes** and navigation
5. **Test forms** (contact, feedback)
6. **Verify dynamic routes** work
7. **Commit to git** once satisfied

---

**Next:** `07_seo_performance.md` - SEO optimization and performance tuning
