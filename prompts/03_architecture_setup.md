# 🎯 Prompt 03: Architecture & Setup

**Phase:** 3 of 8  
**Role:** Senior Next.js Architect + DevOps Engineer  
**Time:** 10-15 minutes  
**Output:** Complete Next.js project setup with folder structure, configurations, and base files

---

## 📋 COPY THE PROMPT BELOW INTO YOUR LLM:

```markdown
# ROLE: Senior Next.js Architect + DevOps Engineer

You are a seasoned Next.js architect who has built scalable, high-performance applications for Fortune 500 companies. You specialize in App Router, performance optimization, and production-ready setups.

---

## 🎯 YOUR TASK

Create a complete, production-ready Next.js 15+ project setup for S'K One Tech Support's Awwards-winning website.

This setup will be the foundation for the entire development process, so it must be scalable, organized, and optimized from day one.

---

## 📊 PROJECT CONTEXT

**Business:** S'K One Tech Support - IT Services & Staffing Agency  
**Framework:** Next.js 15+ (App Router)  
**Styling:** Tailwind CSS 4  
**Deployment:** Vercel  
**Design System:** [Reference Phase 2 output]

**Pages Required:**
- Home (/)
- Services (/services, /services/[slug])
- Projects (/projects, /projects/[slug])
- About (/about)
- Contact (/contact)
- Clients/Testimonials (/clients)

**Features:**
- Contact form with API route
- Feedback/review system
- Newsletter signup
- WhatsApp integration
- SEO optimization
- Analytics

---

## 🏗️ ARCHITECTURE DELIVERABLES

### 1. Project Initialization

Provide exact commands to:
- Create Next.js 15+ app with TypeScript
- Install all required dependencies
- Set up Tailwind CSS 4
- Configure ESLint and Prettier
- Set up Husky for git hooks (optional)

**Dependencies to include:**
```
Required:
- next (15+)
- react, react-dom
- typescript
- tailwindcss, postcss, autoprefixer
- framer-motion (animations)
- lucide-react (icons)

Forms:
- react-hook-form
- zod (validation)
- @hookform/resolvers

Analytics:
- @vercel/analytics
- @vercel/speed-insights

Optional:
- clsx (conditional classes)
- tailwind-merge (dynamic classes)
- date-fns (date formatting)
```

### 2. Folder Structure

Create the complete folder structure:

```
sk-one-tech/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
├── .vscode/
│   └── settings.json
├── app/
│   ├── (site)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── clients/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── feedback/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── loading.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── Badge.tsx
│   │   ├── Avatar.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── index.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── ContactCTA.tsx
│   │   └── index.ts
│   ├── animations/
│   │   ├── FadeIn.tsx
│   │   ├── SlideUp.tsx
│   │   ├── Counter.tsx
│   │   ├── Stagger.tsx
│   │   └── index.ts
│   └── forms/
│       ├── ContactForm.tsx
│       ├── FeedbackForm.tsx
│       ├── NewsletterForm.tsx
│       └── index.ts
├── data/
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   ├── team.ts
│   └── site.ts
├── lib/
│   ├── utils.ts
│   ├── animations.ts
│   ├── constants.ts
│   ├── seo.ts
│   └── types.ts
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── utilities.css
├── public/
│   ├── images/
│   ├── icons/
│   ├── og-images/
│   └── favicon.ico
├── .env.example
├── .env.local.example
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### 3. Configuration Files

Create complete configurations:

**package.json:**
- All dependencies
- Scripts (dev, build, start, lint, format)
- Engine requirements

**next.config.js:**
- Image optimization settings
- Security headers
- Redirects (if any)
- Environment variables

**tailwind.config.js:**
- Complete theme extension
- Colors from design system
- Fonts
- Animations
- Plugins

**postcss.config.js:**
- Tailwind and autoprefixer

**tsconfig.json:**
- Path aliases (@/components, @/lib, etc.)
- Strict mode enabled
- Proper module resolution

**.eslintrc.json:**
- Next.js recommended
- React best practices
- TypeScript rules

**.prettierrc:**
- Consistent formatting

### 4. Core Files

**app/layout.tsx (Root Layout):**
- HTML lang attribute
- Metadata (title, description)
- Fonts (next/font with Space Grotesk and Inter)
- Providers wrapper
- Analytics scripts

**app/(site)/layout.tsx (Site Layout):**
- Header component
- Footer component
- Main wrapper

**app/page.tsx (Home):**
- Placeholder with section imports
- Proper structure

**styles/globals.css:**
- Tailwind directives
- CSS variables from design system
- Base styles
- Utility classes

**lib/utils.ts:**
- cn() function (clsx + tailwind-merge)
- formatDate()
- Other utilities

**lib/constants.ts:**
- Site-wide constants
- Navigation items
- Social links
- Contact info

### 5. Environment Setup

**.env.example:**
```
# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# API
API_SECRET_KEY=

# Site
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SITE_NAME=
```

**.gitignore:**
- Node modules
- Environment files
- Build outputs
- IDE files
- OS files

### 6. TypeScript Types

**lib/types.ts:**
```typescript
// Service types
export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Project types
export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'completed' | 'in-progress';
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  message: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
}

// ... more types
```

### 7. Data Files

**data/site.ts:**
```typescript
export const siteConfig = {
  name: "S'K One Tech Support",
  description: 'Your Trusted IT & Staffing Partner',
  url: 'https://skonetech.com',
  ogImage: '/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/thekeda.r',
    whatsapp: 'https://wa.me/917678627526',
  },
  contact: {
    phone: '+91 7678627526',
    email: 'allsolution.1402@gmail.com',
    locations: ['Jaipur', 'Gurugram', 'Delhi', 'Noida', 'Chandigarh', 'Neemrana'],
  },
  stats: {
    clients: 50,
    projects: 120,
    years: 3,
  },
}
```

**data/services.ts:**
- All 6 services with full details
- Icons, descriptions, features

**data/testimonials.ts:**
- Sample testimonials (3-5)
- With ratings and details

### 8. SEO Setup

**app/sitemap.ts:**
- Dynamic sitemap generation
- All routes included
- Change frequency and priority

**app/robots.ts:**
- Robots.txt configuration
- Sitemap reference

**SEO metadata template:**
- Reusable metadata function
- Open Graph tags
- Twitter cards

### 9. API Routes

**app/api/contact/route.ts:**
- POST handler
- Input validation with Zod
- Error handling
- Response formatting
- (Mock implementation for now, ready for backend)

**app/api/feedback/route.ts:**
- POST handler
- GET handler (for fetching feedback)
- Validation
- (Mock implementation)

### 10. Component Stubs

Create placeholder components for:
- Header (with navigation)
- Footer (with links)
- Button (with variants)
- Card (basic)
- FadeIn (animation wrapper)

These should be functional but minimal - full implementation comes in Phase 4.

---

## 📝 OUTPUT FORMAT

Provide your setup in this exact structure:

```markdown
# S'K One Tech Support - Architecture & Setup Guide

## 1. Project Initialization

### Commands

```bash
# Create Next.js app
npx create-next-app@latest sk-one-tech --typescript --tailwind --eslint --app --src-dir

# Navigate to project
cd sk-one-tech

# Install additional dependencies
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers clsx tailwind-merge
npm install @vercel/analytics @vercel/speed-insights

# Install dev dependencies
npm install -D prettier prettier-plugin-tailwindcss @types/node
```

### Verification

```bash
# Verify installation
npm run dev
# Open http://localhost:3000
```

---

## 2. Folder Structure

[Tree structure with explanations]

---

## 3. Configuration Files

### package.json
```json
{
  "name": "sk-one-tech",
  "version": "1.0.0",
  ...
}
```

### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Full configuration
}
```

### tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Full configuration with design system
}
```

[Continue for all config files]

---

## 4. Core Files

### app/layout.tsx
```tsx
// Complete code
```

### app/(site)/layout.tsx
```tsx
// Complete code
```

### styles/globals.css
```css
/* Complete CSS */
```

[Continue for all core files]

---

## 5. Environment Setup

### .env.example
```
[Contents]
```

### .gitignore
```
[Contents]
```

---

## 6. TypeScript Types

### lib/types.ts
```typescript
// Complete type definitions
```

---

## 7. Data Files

### data/site.ts
```typescript
// Site configuration
```

### data/services.ts
```typescript
// Services data
```

[Continue for all data files]

---

## 8. SEO Setup

### app/sitemap.ts
```typescript
// Sitemap generation
```

### app/robots.ts
```typescript
// Robots configuration
```

---

## 9. API Routes

### app/api/contact/route.ts
```typescript
// Contact API handler
```

### app/api/feedback/route.ts
```typescript
// Feedback API handler
```

---

## 10. Component Stubs

### components/layout/Header.tsx
```tsx
// Basic header
```

### components/layout/Footer.tsx
```tsx
// Basic footer
```

[Continue for stub components]

---

## 11. Setup Checklist

- [ ] Run initialization commands
- [ ] Create folder structure
- [ ] Copy all configuration files
- [ ] Copy all core files
- [ ] Set up environment variables
- [ ] Verify TypeScript compiles
- [ ] Verify dev server runs
- [ ] Check all pages load
- [ ] Test hot reload
- [ ] Run linter

---

## 12. Troubleshooting

### Common Issues

**Issue:** Tailwind styles not loading
**Solution:** [Fix]

**Issue:** TypeScript errors
**Solution:** [Fix]

[More troubleshooting]
```

---

## ⚠️ RULES

1. **Complete code only** - No placeholders like "// ... rest of code"
2. **Production-ready** - All files should be deployable
3. **TypeScript strict mode** - No `any` types
4. **Tailwind 4 compatible** - Use latest syntax
5. **App Router patterns** - Use latest Next.js 15 conventions
6. **Security first** - Proper headers, input validation
7. **Performance optimized** - Proper imports, no bloat

---

## 🎯 SUCCESS CRITERIA

After following this setup:

- ✅ `npm run dev` starts without errors
- ✅ All pages load at their routes
- ✅ TypeScript compiles with no errors
- ✅ ESLint passes with no warnings
- ✅ Tailwind classes work properly
- ✅ Fonts load correctly
- ✅ Basic SEO is in place
- ✅ Folder structure is scalable

---

## 🔥 START NOW

Create the complete Next.js 15+ setup that will serve as the foundation for an Awwards-winning website.

Remember: A strong foundation makes everything else easier.
```

---

## ✅ What to Do After Running This Prompt

1. **Save the output** to `prompts/outputs/phase3_architecture.md`
2. **Run the commands** in your terminal to set up the project
3. **Copy all files** into your new Next.js project
4. **Verify everything works** with `npm run dev`
5. **Commit to git** once verified

---

**Next:** `04_core_components.md` - Build reusable UI components
