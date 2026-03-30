# 🏆 Awwards-Winning Next.js Migration Prompt

**Project:** S'K One Tech Support Website Migration  
**Target:** Next.js 15+ with Award-Winning UI/UX  
**Business Type:** B2B IT Services & Staffing Agency  
**Market:** North India (Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana)

---

# 🎨 ROLE: God-Level UI/UX Designer + Next.js Architect + Digital Experience Researcher

You are a world-class UI/UX designer who has won Awwwards Site of the Day multiple times, combined with a senior Next.js architect who has built award-winning digital experiences for Fortune 500 companies. You think like a researcher, design like an artist, and code like an engineer.

---

## 📋 MISSION

Migrate the existing React + Vite IT Support & Staffing Agency website to a **Next.js 15+ Awwwards-winning digital experience** that:

1. **Wins design awards** while maintaining business credibility
2. **Converts visitors** into leads (B2B focus)
3. **Showcases expertise** in IT services and staffing
4. **Feels premium** but remains accessible to Indian SME market
5. **Loads instantly** (Core Web Vitals: 90+ across all metrics)

---

## 🎯 PHASE 1: DEEP RESEARCH & THEME ANALYSIS

### 1.1 Business DNA Decoding

Analyze the business at a fundamental level:

**Business Type:** B2B IT Services & Staffing Agency

**Target Audience:** 
- SME business owners (25-55 years)
- HR managers seeking staffing solutions
- IT managers needing support
- Manufacturing/tech companies in North India

**Emotional Triggers to Target:**
- Trust & Reliability (they're handling critical IT infrastructure)
- Speed & Efficiency (businesses can't afford downtime)
- Expertise & Professionalism (complex technical work)
- Local Presence (serving specific Indian cities)
- Results-Oriented (they want outcomes, not just services)

**Competitive Landscape Research:**
- Study award-winning B2B service websites (Awwwards, Clutch, DesignRush)
- Analyze top IT staffing agency websites globally
- Identify what makes them stand out (animations, storytelling, social proof)

### 1.2 Visual Theme Strategy

**Current Theme:** Basic corporate blue (#1e40af)

**Elevated Theme Direction:**

#### Option A: **"Modern Tech Confidence"**
- Primary: Deep Navy (#0A1628) → Trust, stability
- Accent: Electric Blue (#3B82F6) → Technology, innovation
- Highlight: Teal/Cyan (#06B6D4) → Modern, fresh
- Neutral: Warm Gray (#F8FAFC to #475569) → Professional, clean

#### Option B: **"Bold Innovation"**
- Primary: Charcoal Black (#1E293B) → Premium, serious
- Accent: Vibrant Blue (#2563EB) → Energy, action
- Highlight: Amber (#F59E0B) → Attention, warmth
- Gradient: Blue to Purple → Modern tech feel

#### Option C: **"Minimal Sophistication"**
- Primary: Slate (#334155) → Understated confidence
- Accent: Sky Blue (#0EA5E9) → Clarity, communication
- Abundant White Space → Premium feel
- Subtle Animations → Refined interactions

**RECOMMENDATION:** Option A with subtle gradients from Option C

### 1.3 Awwwards-Winning Elements to Incorporate

Study these reference sites and extract patterns:
- **Apple.com** → Scroll storytelling, product reveals
- **Stripe.com** → Gradient meshes, interactive elements
- **Linear.app** → Smooth animations, keyboard-first UX
- **Raycast.com** → Clean typography, delightful micro-interactions
- **Vercel.com** → Geometric patterns, next-gen feel

**Key Elements to Adapt for B2B IT Services:**
1. **Hero Section:** Animated gradient background + bold value proposition
2. **Scroll Animations:** Fade-in, slide-up, parallax for service cards
3. **Interactive Elements:** Hover states, micro-interactions on buttons
4. **Social Proof:** Animated testimonial carousel with real photos
5. **Stats Counter:** Animated numbers that count up on scroll
6. **Service Cards:** 3D tilt effect or glassmorphism
7. **Contact Form:** Multi-step with progress indicator
8. **Loading States:** Skeleton screens, smooth transitions

---

## 🏗️ PHASE 2: NEXT.JS ARCHITECTURE DESIGN

### 2.1 Technical Stack (Cutting Edge but Stable)

```
Framework: Next.js 15+ (App Router)
Styling: Tailwind CSS 4 + CSS Modules
Animations: Framer Motion (complex) + Tailwind Animations (simple)
Icons: Lucide React (consistent with current) + Custom SVGs
Fonts: Inter (primary) + Space Grotesk (headings) via next/font
Images: next/image with blur placeholders
Forms: React Hook Form + Zod validation
State: Zustand (lightweight) or React Context
Deployment: Vercel (optimal for Next.js)
Analytics: Vercel Analytics + Google Analytics 4
SEO: Next.js SEO metadata + Open Graph images
```

### 2.2 Folder Structure (Awwwards-Ready)

```
sk-one-tech-next/
├── /app
│   ├── /layout.tsx          # Root layout with providers
│   ├── /page.tsx            # Home page (scroll storytelling)
│   ├── /about/
│   │   └── /page.tsx        # About page
│   ├── /services/
│   │   ├── /page.tsx        # Services overview
│   │   └── /[slug]/
│   │       └── /page.tsx    # Individual service pages
│   ├── /projects/
│   │   ├── /page.tsx        # Projects portfolio
│   │   └── /[slug]/
│   │       └── /page.tsx    # Individual project case studies
│   ├── /contact/
│   │   └── /page.tsx        # Contact page with multi-step form
│   ├── /api/
│   │   ├── /contact/
│   │   │   └── /route.ts    # API route for contact form
│   │   └── /feedback/
│   │       └── /route.ts    # API route for feedback
│   ├── /sitemap.ts          # Dynamic sitemap
│   ├── /robots.ts           # Robots.txt
│   ├── /not-found.tsx       # Custom 404
│   └── /loading.tsx         # Global loading state
│
├── /components
│   ├── /ui                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── TextArea.tsx
│   │   ├── Badge.tsx
│   │   └── Avatar.tsx
│   ├── /layout
│   │   ├── Header.tsx       # Sticky header with smooth scroll
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── /sections
│   │   ├── Hero.tsx         # Animated hero with gradient
│   │   ├── Stats.tsx        # Animated counter stats
│   │   ├── ServicesGrid.tsx # Interactive service cards
│   │   ├── Testimonials.tsx # Carousel with animations
│   │   ├── AboutPreview.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── ProcessSteps.tsx # How we work
│   │   └── ServiceAreas.tsx # Location badges
│   ├── /animations
│   │   ├── FadeIn.tsx
│   │   ├── SlideUp.tsx
│   │   ├── Parallax.tsx
│   │   ├── Counter.tsx
│   │   └── RevealText.tsx
│   └── /forms
│       ├── ContactForm.tsx
│       ├── FeedbackForm.tsx
│       └── NewsletterForm.tsx
│
├── /lib
│   ├── utils.ts             # Helper functions
│   ├── animations.ts        # Framer Motion variants
│   ├── constants.ts         # Site-wide constants
│   └── seo.ts               # SEO metadata templates
│
├── /data
│   ├── services.ts          # Service data (for dynamic pages)
│   ├── projects.ts          # Project portfolio data
│   ├── testimonials.ts      # Testimonial data
│   └── team.ts              # Team member data
│
├── /styles
│   ├── globals.css          # Global styles + Tailwind
│   ├── animations.css       # Custom animations
│   └── utilities.css        # Custom utilities
│
├── /public
│   ├── /images
│   ├── /icons
│   └── /og-images           # Dynamic Open Graph images
│
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### 2.3 Performance Strategy

```
✅ Image Optimization: next/image with WebP/AVIF
✅ Font Optimization: next/font with subset
✅ Code Splitting: Automatic with Next.js
✅ Lazy Loading: React.lazy for below-fold components
✅ Streaming: React Suspense for slow sections
✅ Caching: Vercel Edge Caching + Stale-While-Revalidate
✅ Bundle Analysis: @next/bundle-analyzer
✅ Core Web Vitals: Monitor via Vercel Analytics
```

---

## 🎨 PHASE 3: UI/UX DESIGN SYSTEM

### 3.1 Color Palette (Elevated)

```css
/* Primary Colors */
--navy-900: #0A1628    /* Deepest navy - backgrounds */
--navy-800: #1E293B    /* Dark navy - sections */
--navy-700: #334155    /* Medium navy - cards */

/* Accent Colors */
--blue-500: #3B82F6    /* Primary blue - CTAs */
--blue-400: #60A5FA    /* Light blue - hovers */
--cyan-400: #22D3EE    /* Cyan accent - highlights */

/* Neutrals */
--gray-50: #F8FAFC     /* Lightest - backgrounds */
--gray-100: #F1F5F9    /* Light - cards */
--gray-500: #64748B    /* Medium - text secondary */
--gray-900: #0F172A    /* Darkest - text primary */

/* Gradients */
--gradient-hero: linear-gradient(135deg, #0A1628 0%, #1E293B 50%, #334155 100%)
--gradient-accent: linear-gradient(90deg, #3B82F6 0%, #22D3EE 100%)
--gradient-card: linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 100%)
```

### 3.2 Typography System

```css
/* Headings: Space Grotesk (modern, tech-forward) */
--font-heading: 'Space Grotesk', sans-serif
h1: 64px/72px (mobile: 48px/56px)
h2: 48px/56px (mobile: 36px/44px)
h3: 32px/40px (mobile: 24px/32px)
h4: 24px/32px (mobile: 20px/28px)

/* Body: Inter (clean, readable) */
--font-body: 'Inter', sans-serif
body: 16px/24px
small: 14px/20px
large: 18px/28px

/* Letter Spacing */
headings: -0.02em (tight, modern)
body: 0 (neutral)
```

### 3.3 Spacing System (8px Grid)

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-32: 128px
```

### 3.4 Animation Principles

**Duration:**
- Micro-interactions: 150ms
- Small animations: 300ms
- Large transitions: 500ms
- Page transitions: 700ms

**Easing:**
- Enter: cubic-bezier(0.16, 1, 0.3, 1) (smooth deceleration)
- Exit: cubic-bezier(0.16, 1, 0.3, 1)
- Bounce: cubic-bezier(0.34, 1.56, 0.64, 1)

**Scroll Animations:**
- Fade In: opacity 0→1, y: 40px→0
- Slide Up: y: 60px→0, opacity 0→1
- Scale In: scale: 0.95→1, opacity 0→1
- Stagger: 100ms delay between items

---

## 🚀 PHASE 4: PAGE-BY-PAGE EXECUTION

### 4.1 Home Page (/) - Scroll Storytelling

**Structure:**
```
1. Hero Section (100vh)
   - Animated gradient background
   - Bold headline: "Your Trusted IT & Staffing Partner"
   - Subheadline with typing animation
   - Dual CTAs: "Get Support" (primary), "Our Services" (secondary)
   - Floating abstract 3D shapes (subtle)

2. Stats Section (60vh)
   - Animated counter: 50+ Clients, 120+ Projects, 3+ Years
   - Icons with subtle rotation on scroll
   - Background: gradient mesh

3. Services Preview (80vh)
   - 3D tilt cards on hover
   - Glassmorphism effect
   - Service icons with gradient
   - "View All Services" CTA

4. Why Choose Us (80vh)
   - Alternating layout (text left, image right)
   - Checkmark animations
   - Scroll-triggered fade-ins

5. Testimonials (100vh)
   - Auto-playing carousel
   - Star rating animations
   - Client photos in circular frames
   - "View All Reviews" CTA

6. About Preview (60vh)
   - Company story snippet
   - Service area badges (animated)
   - Team preview

7. Contact CTA (80vh)
   - Large bold headline
   - Contact info with icons
   - Direct WhatsApp button
   - Contact form preview

8. Footer
   - Multi-column layout
   - Newsletter signup
   - Social links
   - Copyright
```

### 4.2 Services Page (/services) - Interactive Grid

**Features:**
- Filterable service categories
- Expandable service cards (accordion style)
- Each service has dedicated page with:
  - Hero with service-specific imagery
  - Detailed description
  - Process breakdown
  - Related projects
  - CTA

**Service Categories:**
1. IT Support
2. Manpower Support
3. IT Recruitment
4. Non-IT Hiring
5. Consulting Services
6. Training & Development

### 4.3 Projects Page (/projects) - Portfolio Showcase

**Features:**
- Masonry grid layout
- Filter by category (IT, Staffing, Consulting)
- Project cards with hover reveal
- Individual project pages with:
  - Challenge → Solution → Results format
  - Before/after comparisons
  - Client testimonial
  - Related services

**Project Categories:**
- IT Infrastructure
- Staffing Solutions
- Recruitment
- Security
- Cloud Services
- Analytics

### 4.4 About Page (/about) - Storytelling

**Features:**
- Timeline animation (company journey)
- Team cards with hover effects
- Mission/Vision with iconography
- Service area map (interactive)
- Culture values with animations

**Sections:**
- Company Story
- Mission & Vision
- Why Choose Us
- Service Areas
- Team Members

### 4.5 Contact Page (/contact) - Conversion Optimized

**Features:**
- Multi-step form (Typeform-style)
- Progress indicator
- Step 1: Contact Info
- Step 2: Inquiry Type
- Step 3: Message
- Step 4: Confirmation
- Live chat widget
- WhatsApp floating button
- Contact info with map

**Inquiry Types:**
- IT Support
- Manpower Support
- Hiring Services
- Consulting
- Other

---

## 💻 PHASE 5: CODE IMPLEMENTATION

### 5.1 Start with Setup

```bash
npx create-next-app@latest sk-one-tech --typescript --tailwind --eslint --app
cd sk-one-tech
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers
npm install @vercel/analytics @vercel/speed-insights
```

### 5.2 Core Components to Build First

1. **Button Component** (multiple variants)
2. **Card Component** (with hover effects)
3. **FadeIn Animation Component** (reusable)
4. **Header** (sticky, smooth scroll)
5. **Footer** (multi-column)
6. **Hero Section** (gradient + animations)

### 5.3 Key Animation Patterns

```tsx
// FadeIn component example
<FadeIn delay={0.2} duration={0.8}>
  <h1>Your Trusted IT Partner</h1>
</FadeIn>

// Staggered grid
<StaggerContainer>
  <ServiceCard key={1} />
  <ServiceCard key={2} />
  <ServiceCard key={3} />
</StaggerContainer>

// Counter animation
<Counter end={50} suffix="+" duration={2} />
```

---

## 📊 PHASE 6: SEO & PERFORMANCE

### 6.1 SEO Strategy

```tsx
// Metadata for each page
export const metadata = {
  title: "S'K One Tech Support | IT Services & Staffing Solutions",
  description: "Leading IT support and staffing agency in Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana. Expert IT infrastructure, recruitment, and consulting services.",
  keywords: ['IT support', 'staffing agency', 'IT recruitment', 'Jaipur', 'Gurugram'],
  openGraph: {
    title: "S'K One Tech Support",
    description: 'Your Trusted IT & Staffing Partner',
    images: ['/og-home.jpg'],
  },
}
```

### 6.2 Performance Targets

```
✅ LCP (Largest Contentful Paint): < 2.5s
✅ FID (First Input Delay): < 100ms
✅ CLS (Cumulative Layout Shift): < 0.1
✅ TBT (Total Blocking Time): < 200ms
✅ Speed Index: < 3.4s
✅ Lighthouse Score: 95+
```

---

## 🎯 PHASE 7: DELIVERABLES CHECKLIST

### Must-Have Features (Awwwards Criteria)

- [ ] **Visual Design:** Stunning, cohesive aesthetic
- [ ] **UX:** Intuitive navigation, clear CTAs
- [ ] **Content:** Compelling copy, hierarchy
- [ ] **Interactivity:** Delightful animations
- [ ] **Performance:** Blazing fast load times
- [ ] **Mobile:** Flawless responsive design
- [ ] **Accessibility:** WCAG 2.1 AA compliant
- [ ] **SEO:** Optimized metadata, structured data
- [ ] **Analytics:** Tracking setup
- [ ] **Forms:** Working contact/feedback forms

### Nice-to-Have (Award Winners)

- [ ] Dark mode toggle
- [ ] Smooth page transitions
- [ ] Custom cursor (subtle)
- [ ] Scroll progress indicator
- [ ] Micro-interactions on every button
- [ ] Loading skeleton screens
- [ ] 404 page with personality
- [ ] Easter eggs (fun interactions)

---

## 🚀 EXECUTION ORDER

### Week 1: Foundation
- **Day 1-2:** Next.js setup, folder structure, Tailwind config
- **Day 3-4:** Core components (Button, Card, animations)
- **Day 5-7:** Header, Footer, Hero section

### Week 2: Home Page
- **Day 1-2:** Stats section, Services preview
- **Day 3-4:** Why Choose Us, Testimonials
- **Day 5-6:** About preview, Contact CTA
- **Day 7:** Polish, animations, mobile responsive

### Week 3: Inner Pages
- **Day 1-2:** Services page + individual service pages
- **Day 3-4:** Projects page + case studies
- **Day 5-6:** About page
- **Day 7:** Contact page with multi-step form

### Week 4: Polish & Launch
- **Day 1-2:** SEO optimization, metadata
- **Day 3-4:** Performance optimization
- **Day 5:** Testing (cross-browser, mobile)
- **Day 6:** Analytics setup
- **Day 7:** Deploy to Vercel, go live

---

## ⚠️ CRITICAL SUCCESS FACTORS

1. **Don't Overdesign:** B2B audience needs clarity over creativity
2. **Mobile First:** 60%+ traffic will be mobile
3. **Fast is Non-Negotiable:** Indian internet speeds vary
4. **WhatsApp Integration:** Critical for Indian market
5. **Local SEO:** Optimize for city-specific keywords
6. **Trust Signals:** Prominently display phone, email, locations
7. **Clear CTAs:** Every page should guide to contact
8. **Real Content:** Use actual testimonials, real project data

---

## 🎨 INSPIRATION REFERENCES

### Study These Awwwards Winners:
- https://www.awwwards.com/sites/stripe
- https://www.awwwards.com/sites/linear
- https://www.awwwards.com/sites/raycast
- https://www.awwwards.com/sites/vercel

### B2B Service Inspiration:
- https://www.accenture.com
- https://www.deloitte.com
- https://www.mckinsey.com

### IT Staffing Specific:
- https://www.roberthalf.com
- https://www.teksystems.com
- https://www.randstad.com

### Design Resources:
- https://dribbble.com/search/business-website
- https://www.behance.net/search/projects/website%20design
- https://www.awwwards.com/websites/business/

---

## 📝 FINAL OUTPUT FORMAT

Provide deliverables in this order:

1. **Research Summary** (theme analysis, competitive insights)
2. **Design System** (colors, typography, components)
3. **Architecture** (folder structure, tech stack)
4. **Code Implementation** (complete, production-ready code)
5. **Performance Report** (Lighthouse scores, optimization steps)
6. **SEO Checklist** (metadata, sitemap, robots.txt)
7. **Deployment Guide** (Vercel setup, environment variables)
8. **Maintenance Plan** (updates, monitoring, analytics)

---

## 🔥 YOUR MINDSET

Think like:
- **Designer:** Every pixel matters
- **Engineer:** Performance is a feature
- **Marketer:** Conversion is king
- **User:** Clarity over cleverness

**Remember:** This isn't just a website migration. This is creating a **digital experience** that positions S'K One Tech Support as the **premium choice** in their market.

**Now, let's build something award-winning.** 🏆

---

## 📌 CURRENT PROJECT INFO

**Existing Tech Stack:**
- React 19.2.4
- React Router DOM 7.13.2
- Tailwind CSS 4.2.2
- Vite 8.0.3
- Lucide React icons

**Current Pages:**
- Home (/)
- Services (/services)
- Projects (/projects)
- About (/about)
- Clients (/clients)
- Contact (/contact)

**Current Brand Colors:**
- Brand Blue: #1e40af
- Brand Dark: #0f172a

**Contact Information:**
- Phone: +91 7678627526
- Email: allsolution.1402@gmail.com
- Instagram: @thekeda.r
- Service Areas: Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana

**Key Stats:**
- 50+ Clients
- 120+ Projects
- 3+ Years Experience

---

## 📄 LICENSE & CREDITS

**Created for:** S'K One Tech Support  
**Migration Target:** Next.js 15+  
**Design Standard:** Awwwards Site of the Day  
**Document Version:** 1.0  
**Last Updated:** March 30, 2026
