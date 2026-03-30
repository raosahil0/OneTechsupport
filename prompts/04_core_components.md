# 🎯 Prompt 04: Core Components

**Phase:** 4 of 8  
**Role:** Senior React Component Developer + UI Engineer  
**Time:** 15-20 minutes  
**Output:** Production-ready reusable components with animations

---

## 📋 COPY THE PROMPT BELOW INTO YOUR LLM:

```markdown
# ROLE: Senior React Component Developer + UI Engineer

You are an expert React developer who has built component systems for high-traffic, award-winning websites. You write clean, type-safe, performant components that are a joy to use.

---

## 🎯 YOUR TASK

Create all core reusable components for S'K One Tech Support's Next.js website.

These components will be used throughout the site, so they must be:
- Fully type-safe (TypeScript)
- Accessible (WCAG 2.1 AA)
- Performant (optimized renders)
- Reusable (flexible props)
- Well-documented (JSDoc comments)
- Awwards-worthy (beautiful animations)

---

## 📊 PROJECT CONTEXT

**Framework:** Next.js 15+ (App Router)  
**Styling:** Tailwind CSS 4  
**Animations:** Framer Motion  
**Icons:** Lucide React  
**Design System:** [Reference Phase 2 output]  
**Existing Setup:** [Reference Phase 3 output]

---

## 🧩 COMPONENT DELIVERABLES

### 1. UI Components (components/ui/)

#### Button Component
Create a versatile button with:

**Variants:**
- `primary` - Filled brand color
- `secondary` - Outline with brand color
- `tertiary` - Text only, subtle hover
- `ghost` - Transparent with hover background
- `destructive` - Red for danger actions

**Sizes:**
- `sm` - Small (32px height)
- `md` - Medium (40px height)
- `lg` - Large (48px height)
- `xl` - Extra large (56px height, for hero)

**Props:**
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}
```

**Features:**
- Framer Motion hover/active animations
- Loading state with spinner
- Disabled state
- Focus ring for accessibility
- Icon slots (left/right)
- Full-width option
- Proper ARIA attributes

---

#### Card Component
Create a flexible card container:

**Variants:**
- `default` - Simple border
- `elevated` - With shadow
- `interactive` - Hover lift effect
- `featured` - Special highlight styling

**Props:**
```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive' | 'featured';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
}
```

**Features:**
- Smooth hover animations
- Optional image area
- Content padding options
- Click handler for interactive cards
- Proper semantic HTML

---

#### Badge Component
Small label component for tags, status, etc.:

**Variants:**
- `default` - Brand color
- `success` - Green
- `warning` - Amber
- `error` - Red
- `info` - Blue

**Props:**
```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}
```

---

#### Avatar Component
For team member photos, client logos:

**Props:**
```typescript
interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  className?: string;
}
```

**Features:**
- Image with fallback
- Initials fallback if no image
- Multiple sizes
- Loading state
- Error handling

---

#### Input Component
Form input field:

**Props:**
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

**Features:**
- Label positioning
- Error state styling
- Helper text
- Icon slots
- Focus ring
- Disabled state
- Required indicator

---

#### Textarea Component
Multi-line text input:

**Props:**
```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}
```

---

#### Select Component
Dropdown select:

**Props:**
```typescript
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}
```

---

### 2. Animation Components (components/animations/)

#### FadeIn Component
Scroll-triggered fade animation:

**Props:**
```typescript
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  triggerOnce?: boolean;
  className?: string;
}
```

**Features:**
- Framer Motion animation
- Customizable delay
- Distance control
- Direction options
- Trigger once or repeat
- Intersection Observer

---

#### SlideUp Component
Slide up animation on scroll:

**Props:**
```typescript
interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
}
```

---

#### Counter Component
Animated number counter:

**Props:**
```typescript
interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  className?: string;
}
```

**Features:**
- Smooth counting animation
- Prefix/suffix support (e.g., "50+", "$100")
- Trigger on visibility
- Easing function

---

#### Stagger Component
Stagger children animations:

**Props:**
```typescript
interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}
```

**Features:**
- Animates children in sequence
- Customizable stagger delay
- Works with any children

---

#### Parallax Component
Parallax scroll effect:

**Props:**
```typescript
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  axis?: 'y' | 'x';
}
```

---

### 3. Layout Components (components/layout/)

#### Header Component
Sticky navigation header:

**Features:**
- Logo on left
- Navigation links (center/right)
- Mobile hamburger menu
- Sticky on scroll
- Scroll detection (change style on scroll)
- Active link highlighting
- Smooth scroll to sections

**Data:**
- Use navigation items from `data/site.ts`

---

#### Footer Component
Multi-column footer:

**Sections:**
- Company info (logo, description)
- Quick links
- Services links
- Contact info
- Social links
- Newsletter signup

**Features:**
- Responsive grid (1-4 columns)
- Social icons with hover
- Newsletter form integration
- Copyright section

---

#### MobileMenu Component
Full-screen mobile menu:

**Features:**
- Slide-in animation
- Full viewport height
- Navigation links
- Social links
- Close button
- Scroll lock when open

---

### 4. Section Components (components/sections/)

#### Hero Component
Homepage hero section:

**Content:**
- Headline: "Your Trusted IT & Staffing Partner"
- Subheadline with services
- Two CTAs (primary + secondary)
- Background gradient animation
- Floating shapes (subtle)

**Features:**
- Full viewport height
- Animated gradient background
- Text reveal animation
- Button hover effects
- Mobile responsive

---

#### Stats Component
Animated statistics section:

**Content:**
- 50+ Clients
- 120+ Projects
- 3+ Years Experience

**Features:**
- Counter animation
- Icon for each stat
- Grid layout
- Scroll trigger

---

#### ServicesGrid Component
Service cards preview:

**Content:**
- 6 services from `data/services.ts`
- Icon, title, description
- "View All" CTA

**Features:**
- 3D tilt on hover
- Icon animations
- Stagger entrance
- Responsive grid

---

#### Testimonials Component
Client testimonial carousel:

**Content:**
- Testimonials from `data/testimonials.ts`
- Name, rating, message
- Navigation arrows

**Features:**
- Auto-play carousel
- Manual navigation
- Star ratings
- Fade transitions
- Pause on hover

---

#### AboutPreview Component
About section teaser:

**Content:**
- Section title
- Company description
- Service area badges
- "Learn More" CTA

**Features:**
- Alternating layout
- Animated badges
- Scroll reveal

---

#### ContactCTA Component
Contact call-to-action:

**Content:**
- Headline
- Contact info (phone, email)
- WhatsApp button
- Contact form preview

**Features:**
- Large typography
- Icon animations
- Direct action buttons

---

## 📝 OUTPUT FORMAT

Provide complete code for each component:

```markdown
# S'K One Tech Support - Core Components

## 1. UI Components

### components/ui/Button.tsx
```tsx
'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
// Complete component code
```

### components/ui/Card.tsx
```tsx
// Complete component code
```

[Continue for all UI components]

---

## 2. Animation Components

### components/animations/FadeIn.tsx
```tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
// Complete component code
```

[Continue for all animation components]

---

## 3. Layout Components

### components/layout/Header.tsx
```tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Complete component code
```

### components/layout/Footer.tsx
```tsx
// Complete component code
```

### components/layout/MobileMenu.tsx
```tsx
// Complete component code
```

---

## 4. Section Components

### components/sections/Hero.tsx
```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/components/ui/Link';
// Complete component code
```

[Continue for all section components]

---

## 5. Component Index Files

### components/ui/index.ts
```typescript
export { Button } from './Button';
export { Card } from './Card';
// ... all exports
```

### components/animations/index.ts
// Exports

### components/layout/index.ts
// Exports

### components/sections/index.ts
// Exports

---

## 6. Usage Examples

### Button Examples
```tsx
// Primary button
<Button variant="primary" size="lg">
  Get Started
</Button>

// Loading state
<Button variant="secondary" isLoading>
  Submitting...
</Button>

// With icons
<Button variant="primary" leftIcon={<ArrowRight />}>
  Continue
</Button>
```

### FadeIn Example
```tsx
<FadeIn delay={0.2} duration={0.8}>
  <h1>Welcome</h1>
</FadeIn>
```

[More usage examples]
```

---

## ⚠️ RULES

1. **'use client' directive** - All interactive components need this
2. **TypeScript** - Full type safety, no `any`
3. **Accessibility** - ARIA attributes, keyboard navigation
4. **Performance** - React.memo where appropriate, optimized animations
5. **Tailwind** - Use design system colors and spacing
6. **Framer Motion** - Smooth, professional animations
7. **Documentation** - JSDoc comments for props
8. **Consistency** - Same patterns across all components

---

## 🎨 ANIMATION GUIDELINES

- **Duration:** 150-500ms depending on size
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1) for smooth deceleration
- **Stagger:** 100ms between items
- **Trigger:** On scroll, once per session
- **Hover:** Subtle transforms (2-4px)
- **Focus:** Visible rings for accessibility

---

## ♿ ACCESSIBILITY REQUIREMENTS

- ✅ Keyboard navigation for all interactive elements
- ✅ Focus indicators on all buttons/links
- ✅ ARIA labels for icons
- ✅ Screen reader friendly structure
- ✅ Color contrast meets WCAG AA
- ✅ Reduced motion support (prefers-reduced-motion)

---

## 🔥 START NOW

Create all core components with complete, production-ready code.

Remember: These components will be used throughout the entire site. Quality and consistency matter.
```

---

## ✅ What to Do After Running This Prompt

1. **Save the output** to `prompts/outputs/phase4_components.md`
2. **Create all component files** in your project
3. **Test each component** in isolation
4. **Verify animations work** smoothly
5. **Check accessibility** with keyboard navigation
6. **Commit to git** once verified

---

**Next:** `05_home_page.md` - Build the complete home page
