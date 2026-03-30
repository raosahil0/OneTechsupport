# 🎯 Prompt 05: Home Page

**Phase:** 5 of 8  
**Role:** Senior Frontend Developer + Scroll Experience Designer  
**Time:** 20-30 minutes  
**Output:** Complete, production-ready home page with all sections

---

## 📋 COPY THE PROMPT BELOW INTO YOUR LLM:

```markdown
# ROLE: Senior Frontend Developer + Scroll Experience Designer

You are an expert frontend developer who has built scroll-driven experiences for award-winning websites. You understand pacing, visual hierarchy, and how to guide users through a narrative journey.

---

## 🎯 YOUR TASK

Create the complete home page for S'K One Tech Support's Next.js website.

This is the most important page - it needs to:
- Capture attention in 3 seconds
- Communicate value clearly
- Build trust through design
- Guide visitors to take action
- Feel premium and Awwards-worthy
- Load fast and work on all devices

---

## 📊 PROJECT CONTEXT

**Framework:** Next.js 15+ (App Router)  
**Styling:** Tailwind CSS 4  
**Animations:** Framer Motion  
**Components:** [Reference Phase 4 output]  
**Design System:** [Reference Phase 2 output]  
**Data:** [Reference Phase 3 output]

**Business:** S'K One Tech Support - IT Services & Staffing Agency  
**Target:** B2B clients in North India (SME owners, HR managers, IT managers)

---

## 🏠 HOME PAGE STRUCTURE

### Page Flow (Scroll Journey)

```
1. Hero Section (100vh)
   ↓
2. Stats Section (60vh)
   ↓
3. Services Preview (80vh)
   ↓
4. Why Choose Us (80vh)
   ↓
5. Testimonials (100vh)
   ↓
6. About Preview (60vh)
   ↓
7. Contact CTA (80vh)
   ↓
8. Footer
```

**Total Scroll Distance:** ~6-7 viewport heights

---

## 📐 SECTION SPECIFICATIONS

### 1. Hero Section

**Layout:**
- Full viewport height (min-h-screen)
- Centered content
- Gradient animated background
- Subtle floating shapes

**Content:**
```
Headline: "Your Trusted IT & Staffing Partner"
Subheadline: "Backup Manpower | Developers | IT Engineers | Non-IT Hiring"
Description: "Quality IT solutions with speed and reliability."
Primary CTA: "Get Support" → links to /contact
Secondary CTA: "Our Services" → links to /services
```

**Visual Elements:**
- Animated gradient background (navy to slate)
- Floating abstract shapes (circles, gradients)
- Subtle particle effect (optional)
- Text reveal animation

**Animations:**
- Headline: Stagger letter reveal
- Subheadline: Fade in with delay
- Buttons: Slide up with stagger
- Background: Slow gradient shift
- Shapes: Floating animation

**Mobile:**
- Stack vertically
- Adjust font sizes
- Full-width buttons

---

### 2. Stats Section

**Layout:**
- 60vh height
- 3-column grid (stack on mobile)
- Light background (gray-50)
- Centered content

**Content:**
```
Stat 1: "50+" with label "Clients"
Stat 2: "120+" with label "Projects"
Stat 3: "3+" with label "Years Experience"
```

**Visual Elements:**
- Icon above each number (optional)
- Large typography for numbers
- Subtle divider lines

**Animations:**
- Counter animation on scroll trigger
- Icons: Subtle rotation
- Stagger entrance for each stat

---

### 3. Services Preview Section

**Layout:**
- 80vh height
- Section header (title + CTA)
- 3-column grid of service cards
- "View All Services" button below

**Content:**
```
Section Title: "Our Services"
Section Description: "Comprehensive IT solutions for your business"

Cards (show 3 of 6 services):
1. IT Support - icon, title, description
2. Manpower Support - icon, title, description
3. IT Recruitment - icon, title, description
```

**Visual Elements:**
- Card hover: 3D tilt effect
- Icons: Gradient backgrounds
- Section background: Subtle pattern

**Animations:**
- Section header: Fade in
- Cards: Stagger slide up
- Card hover: Tilt + shadow
- Button: Fade in last

---

### 4. Why Choose Us Section

**Layout:**
- 80vh height
- Alternating layout (text left, visuals right)
- 3 value propositions stacked

**Content:**
```
Section Title: "Why Choose Us"

Point 1:
  Title: "Fast Support"
  Description: "Quick response and reliable IT solutions"
  Icon: Zap or Clock

Point 2:
  Title: "Expert Team"
  Description: "Skilled professionals for all IT & hiring needs"
  Icon: Users or Award

Point 3:
  Title: "Trusted Service"
  Description: "Trusted by multiple clients across cities"
  Icon: Shield or CheckCircle
```

**Visual Elements:**
- Checkmark icons
- Dark cards on light background
- Subtle connecting lines

**Animations:**
- Each point: Slide in from left
- Icons: Pulse on hover
- Stagger timing

---

### 5. Testimonials Section

**Layout:**
- 100vh height
- Full-width carousel
- Auto-playing with manual controls
- Dark background option

**Content:**
```
Section Title: "What Our Clients Say"

Testimonial Cards (3-5 from data):
- Star rating (5 stars)
- Quote/message
- Client name
- Client role/company (optional)
```

**Visual Elements:**
- Large quote marks
- Star ratings in amber
- Client photos (or initials)
- Navigation arrows

**Animations:**
- Carousel: Fade transition
- Stars: Subtle sparkle
- Arrows: Slide on hover
- Auto-play: 5 second intervals

---

### 6. About Preview Section

**Layout:**
- 60vh height
- Centered content
- Service area badges below text

**Content:**
```
Section Title: "About Us"
Description: "S'K One Tech Support is dedicated to delivering reliable IT services and recruitment solutions. We bridge the gap between companies and talent with efficiency and trust."

Locations: "Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana"
CTA: "Learn More" → links to /about
```

**Visual Elements:**
- Location badges (pills with icons)
- Subtle map background (optional)
- Divider lines

**Animations:**
- Text: Fade in
- Badges: Pop in with stagger
- CTA: Slide up

---

### 7. Contact CTA Section

**Layout:**
- 80vh height
- Large centered headline
- Contact info with icons
- Action buttons
- WhatsApp floating button

**Content:**
```
Headline: "Ready to Get Started?"
Subheadline: "Contact us today for all your IT needs"

Contact Info:
- Phone: +91 7678627526
- Email: allsolution.1402@gmail.com

Buttons:
- Primary: "Contact Us" → /contact
- WhatsApp: "Chat on WhatsApp" → wa.me link
```

**Visual Elements:**
- Large typography
- Icon illustrations
- Gradient background
- Floating WhatsApp button (fixed)

**Animations:**
- Headline: Scale in
- Contact info: Slide up
- Buttons: Fade in
- WhatsApp: Subtle pulse

---

### 8. Footer

**Layout:**
- 4-column grid (responsive)
- Newsletter signup section
- Copyright bar

**Sections:**
1. Company Info (logo, description)
2. Quick Links (navigation)
3. Services (links)
4. Contact (info + social)

**Content:**
```
Newsletter:
- Title: "Stay Updated"
- Description: "Tech tips and updates"
- Email input + Subscribe button

Social Links:
- Instagram → @thekeda.r
- WhatsApp → wa.me link

Copyright:
"© 2026 S'K One Tech Support. All rights reserved."
```

---

## 💻 CODE REQUIREMENTS

### Component Structure

```tsx
// app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <AboutPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}
```

### Section Component Template

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, Counter, Stagger } from '@/components/animations';
import { Button, Card } from '@/components/ui';
import { services } from '@/data/services';

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background */}
      
      {/* Content */}
    </section>
  );
}
```

---

## 📝 OUTPUT FORMAT

Provide complete code in this structure:

```markdown
# S'K One Tech Support - Home Page

## 1. Main Page File

### app/page.tsx
```tsx
// Complete page component
```

---

## 2. Section Components

### components/sections/Hero.tsx
```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { FadeIn } from '@/components/animations';

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <FadeIn delay={0.2} duration={0.8}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Your Trusted IT & Staffing Partner
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4} duration={0.8}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Backup Manpower | Developers | IT Engineers | Non-IT Hiring
          </p>
        </FadeIn>
        
        <FadeIn delay={0.6} duration={0.8}>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl">
            Quality IT solutions with speed and reliability.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.8} duration={0.8}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="xl" asLink href="/contact">
              Get Support
            </Button>
            <Button variant="secondary" size="xl" asLink href="/services">
              Our Services
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
```

### components/sections/Stats.tsx
```tsx
// Complete component code
```

### components/sections/ServicesPreview.tsx
```tsx
// Complete component code
```

### components/sections/WhyChooseUs.tsx
```tsx
// Complete component code
```

### components/sections/Testimonials.tsx
```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
// Complete carousel component
```

### components/sections/AboutPreview.tsx
```tsx
// Complete component code
```

### components/sections/ContactCTA.tsx
```tsx
// Complete component code
```

---

## 3. Animation Variants

### Animation configuration
```typescript
// Animation variants for reuse
export const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// More variants...
```

---

## 4. Responsive Breakpoints

### Mobile adjustments
```css
/* Mobile: < 768px */
- Hero headline: 48px
- Buttons: full width, stacked
- Stats: 1 column
- Services: 1 column
- Footer: 1 column

/* Tablet: 768px - 1024px */
- Hero headline: 56px
- Stats: 2 columns
- Services: 2 columns
- Footer: 2 columns

/* Desktop: > 1024px */
- Hero headline: 64-72px
- Stats: 3 columns
- Services: 3 columns
- Footer: 4 columns
```

---

## 5. Performance Optimizations

### Image handling
```tsx
import Image from 'next/image';
// Use next/image for all images
// With blur placeholder
```

### Lazy loading
```tsx
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => 
  import('@/components/sections/Testimonials').then(mod => mod.Testimonials),
  { ssr: false }
);
```

### Code splitting
- Each section is separate component
- Dynamic imports for below-fold sections

---

## 6. SEO Considerations

### Semantic HTML
```html
<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">...</h1>
  </section>
  <section aria-labelledby="stats-heading">...</section>
  <section aria-labelledby="services-heading">...</section>
</main>
```

### Meta tags (in layout)
- Title
- Description
- Open Graph
- Twitter Card

---

## 7. Accessibility Checklist

- [ ] All images have alt text
- [ ] All buttons have accessible names
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] Reduced motion supported
- [ ] Screen reader tested

---

## 8. Testing Checklist

- [ ] Page loads without errors
- [ ] All animations work smoothly
- [ ] Mobile responsive (test all breakpoints)
- [ ] All links work
- [ ] Forms submit correctly
- [ ] WhatsApp button works
- [ ] Lighthouse score 90+
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
```

---

## ⚠️ RULES

1. **Complete code only** - No placeholders
2. **TypeScript** - Full type safety
3. **Mobile-first** - Responsive by default
4. **Performance** - Lazy load below-fold sections
5. **Accessibility** - WCAG 2.1 AA compliant
6. **SEO** - Semantic HTML, proper headings
7. **Animations** - Smooth but not excessive
8. **Consistency** - Follow design system

---

## 🎨 DESIGN PRINCIPLES

- **White space is luxury** - Don't cram content
- **Hierarchy matters** - Clear visual priority
- **Motion with purpose** - Guide attention, don't distract
- **Trust through polish** - Every pixel counts
- **Mobile is primary** - Most traffic will be mobile

---

## 🔥 START NOW

Create the complete home page with all sections, animations, and interactions.

Remember: This is the face of the business. It needs to be exceptional.
```

---

## ✅ What to Do After Running This Prompt

1. **Save the output** to `prompts/outputs/phase5_home_page.md`
2. **Create all section components** in your project
3. **Test the home page** thoroughly
4. **Check animations** on different devices
5. **Run Lighthouse** and optimize
6. **Commit to git** once satisfied

---

**Next:** `06_inner_pages.md` - Build Services, Projects, About, and Contact pages
