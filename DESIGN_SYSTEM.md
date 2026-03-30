# S'K One Tech Support - Design System v1.0

> **Version:** 1.0.0  
> **Last Updated:** March 30, 2026  
> **Framework:** Next.js 16 + Tailwind CSS v4  
> **Language:** TypeScript  
> **Design Principles:** Clarity over cleverness · Trust through design · Motion with purpose · Mobile-first · Performance matters

---

## 📦 Installation

The design system is implemented in the `sk-one-next` directory:

```bash
cd sk-one-next
npm run dev
```

---

## 🎨 Color System

### Primary Brand Palette (Blue)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Brand 50 | `#EFF6FF` | `bg-brand-50` | Subtle backgrounds |
| Brand 100 | `#DBEAFE` | `bg-brand-100` | Hover states |
| Brand 200 | `#BFDBFE` | `border-brand-200` | Light borders |
| Brand 300 | `#93C5FD` | `text-brand-300` | Accent text |
| Brand 400 | `#60A5FA` | `text-brand-400` | Links, icons |
| **Brand 500** | `#3B82F6` | `bg-brand-500` | **PRIMARY BRAND** |
| Brand 600 | `#2563EB` | `bg-brand-600` | Hover states |
| Brand 700 | `#1D4ED8` | `bg-brand-700` | Active states |
| Brand 800 | `#1E40AF` | `bg-brand-800` | Dark accents |
| Brand 900 | `#1E3A8A` | `bg-brand-900` | Deep backgrounds |

### Accent Palette (Cyan/Teal)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Accent Cyan | `#06B6D4` | `bg-accent-cyan` | Primary CTAs |
| Cyan Hover | `#0891B2` | `bg-accent-cyan-hover` | CTA hover |
| Accent Teal | `#14B8A6` | `bg-accent-teal` | Secondary CTAs |
| Accent Glow | `#22D3EE` | `text-accent-glow` | Gradient endpoints |

### Neutral Palette (Slate)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Slate 50 | `#F8FAFC` | `bg-slate-50` | Light backgrounds |
| Slate 100 | `#F1F5F9` | `bg-slate-100` | Section backgrounds |
| Slate 200 | `#E2E8F0` | `border-slate-200` | Borders |
| Slate 300 | `#CBD5E1` | `text-slate-300` | Muted text |
| Slate 400 | `#94A3B8` | `text-slate-400` | Placeholder |
| Slate 500 | `#64748B` | `text-slate-500` | Secondary text |
| Slate 600 | `#475569` | `text-slate-600` | Body text |
| Slate 700 | `#334155` | `text-slate-700` | Headings |
| Slate 800 | `#1E293B` | `bg-slate-800` | Dark backgrounds |
| Slate 900 | `#0F172A` | `bg-slate-900` | Footer, dark sections |

### Semantic Colors

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Success | `#10B981` | `text-success` | Success states |
| Warning | `#F59E0B` | `text-warning` | Warnings |
| Error | `#EF4444` | `text-error` | Errors |
| Info | `#3B82F6` | `text-info` | Info messages |

### Gradients

```css
/* Hero Section */
.gradient-hero {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%);
}

/* Accent CTA */
.gradient-accent {
  background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);
}

/* Text Gradient */
.gradient-text {
  background: linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 📝 Typography System

### Font Families

```css
Headings: 'Space Grotesk', system-ui, sans-serif
Body: 'Inter', system-ui, sans-serif
Mono: 'JetBrains Mono', monospace
```

### Type Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 72px | 700 | 80px | Hero headings |
| H1 | 56px | 700 | 64px | Page titles |
| H2 | 48px | 700 | 56px | Section headings |
| H3 | 36px | 600 | 44px | Subsections |
| H4 | 30px | 600 | 38px | Card titles |
| H5 | 24px | 600 | 32px | Small titles |
| H6 | 20px | 600 | 28px | Labels |
| Body | 16px | 400 | 26px | Default text |
| Body Sm | 14px | 400 | 22px | Small text |
| Caption | 12px | 500 | 18px | Captions |

### Usage

```tsx
<h1 className="text-h1">Heading 1</h1>
<h2 className="text-h2">Heading 2</h2>
<p className="text-body">Body text</p>
<p className="text-body-sm">Small body text</p>
<span className="text-caption">Caption text</span>
```

---

## 📐 Spacing & Layout

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| space-1 | 4px | Micro spacing |
| space-2 | 8px | Tight spacing |
| space-3 | 12px | Component spacing |
| space-4 | 16px | Standard padding |
| space-6 | 24px | Section padding (mobile) |
| space-8 | 32px | Card padding |
| space-12 | 48px | Large spacing |
| space-16 | 64px | Hero padding |
| space-24 | 96px | Major sections |

### Container

```tsx
<div className="container">
  {/* Content - max-width: 1280px, centered */}
</div>
```

### Breakpoints

| Name | Min Width | Tailwind |
|------|-----------|----------|
| Mobile | 0px | (base) |
| Tablet | 768px | `md:` |
| Desktop | 1024px | `lg:` |
| Large Desktop | 1280px | `xl:` |

---

## 🧩 Component Library

### Location
All components are in `src/components/`

### UI Components (`src/components/ui/`)

#### Button

```tsx
import { Button } from '@/components';

// Variants: primary | secondary | tertiary | ghost | accent | destructive
// Sizes: sm | md | lg | xl

<Button variant="primary" size="lg">
  Click Me
</Button>

<Button variant="secondary" isLoading>
  Loading...
</Button>

<Button variant="accent" leftIcon={<Icon />}>
  With Icon
</Button>
```

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components';

// Variants: default | elevated | interactive | featured | dark
// Padding: none | sm | md | lg

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

#### Input

```tsx
import { Input } from '@/components';

// Sizes: sm | md | lg

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={errors.email}
  helperText="We'll never share your email"
  required
/>
```

#### Textarea

```tsx
import { Textarea } from '@/components';

<Textarea
  label="Message"
  placeholder="Type your message..."
  rows={5}
  error={errors.message}
/>
```

### Layout Components (`src/components/layout/`)

#### Header

```tsx
import { Header } from '@/components';

<Header
  logo={<span>S'K One</span>}
  navItems={[
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
  ]}
  ctaButton={{ label: 'Get Started', href: '/contact' }}
  variant="light" // light | dark | transparent
  sticky
/>
```

#### Footer

```tsx
import { Footer } from '@/components';

<Footer
  columns={[
    {
      title: 'Services',
      links: [
        { label: 'IT Consulting', href: '/services#consulting' },
        { label: 'Staffing', href: '/services#staffing' },
      ],
    },
  ]}
  socialLinks={[
    { platform: 'LinkedIn', url: '#', icon: <User /> },
  ]}
  newsletter
/>
```

---

## 🎭 Animation System

### Duration

| Name | Value | Usage |
|------|-------|-------|
| Fast | 150ms | Micro-interactions |
| Normal | 300ms | Most animations |
| Slow | 500ms | Large transitions |

### Easing

```css
--ease-default: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in: cubic-bezier(0.7, 0, 0.84, 0);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Scroll Animations

```tsx
<div className="animate-fade-in stagger-1">
  Fade in animation
</div>

<div className="animate-slide-up stagger-2">
  Slide up animation
</div>

<div className="animate-scale-in">
  Scale in animation
</div>
```

### Stagger Delays

```tsx
<div className="animate-fade-in stagger-1">Item 1</div>
<div className="animate-fade-in stagger-2">Item 2</div>
<div className="animate-fade-in stagger-3">Item 3</div>
<div className="animate-fade-in stagger-4">Item 4</div>
```

---

## 🌑 Dark Mode

Dark mode is automatically applied based on system preference. Manual toggle:

```tsx
// Add 'dark' class to html element
document.documentElement.classList.add('dark');
```

### Dark Mode Colors

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | `#FFFFFF` | `#0F172A` |
| Secondary BG | `#F8FAFC` | `#1E293B` |
| Text | `#0F172A` | `#F8FAFC` |
| Secondary Text | `#475569` | `#CBD5E1` |

---

## 🎯 Shadows & Depth

| Name | Value | Usage |
|------|-------|-------|
| shadow-sm | `0 1px 3px rgba(0,0,0,0.1)` | Slight elevation |
| shadow-md | `0 4px 6px rgba(0,0,0,0.1)` | Cards |
| shadow-lg | `0 10px 15px rgba(0,0,0,0.1)` | Elevated cards |
| shadow-xl | `0 20px 25px rgba(0,0,0,0.15)` | Dropdowns |
| shadow-brand | `0 4px 14px rgba(59,130,246,0.3)` | Brand buttons |

---

## 🔲 Border Radius

| Name | Value | Usage |
|------|-------|-------|
| rounded-xs | 4px | Minimal rounding |
| rounded-sm | 8px | Buttons, inputs |
| rounded-md | 12px | Cards (default) |
| rounded-lg | 16px | Large cards |
| rounded-xl | 24px | Hero elements |
| rounded-full | 9999px | Pills, circles |

---

## 📁 File Structure

```
sk-one-next/
├── src/
│   ├── app/
│   │   ├── globals.css      # Design system CSS variables
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Textarea.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── index.ts         # Component exports
│   └── lib/
│       └── utils.ts         # Utility functions
├── package.json
└── tsconfig.json
```

---

## 🛠️ Utilities

### cn (Class Name Merger)

```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-class', isActive && 'active-class', className)} />
```

### Other Utilities

```tsx
import { formatDate, formatNumber, truncateText, debounce, throttle } from '@/lib/utils';

formatDate(new Date()); // "January 1, 2024"
formatNumber(1000); // "1,000"
truncateText('Long text...', 50); // "Long tex..."
```

---

## ♿ Accessibility

All components follow WCAG 2.1 AA guidelines:

- **Color Contrast**: Minimum 4.5:1 for text
- **Focus States**: Visible focus rings on all interactive elements
- **Keyboard Navigation**: All components are keyboard accessible
- **ARIA Labels**: Proper ARIA attributes where needed
- **Semantic HTML**: Proper heading hierarchy and landmark regions

---

## 🚀 Quick Start

1. Navigate to the Next.js project:
```bash
cd sk-one-next
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open http://localhost:3000

---

## 📋 Component Checklist

### Completed
- [x] Button (all variants)
- [x] Card (all variants)
- [x] Input (all states)
- [x] Textarea
- [x] Header (responsive)
- [x] Footer
- [x] CSS Variables
- [x] Typography system
- [x] Color system
- [x] Animation utilities
- [x] Utility functions

### Coming Soon
- [ ] Select/Dropdown
- [ ] Checkbox
- [ ] Radio
- [ ] Modal/Dialog
- [ ] Toast/Notification
- [ ] Tabs
- [ ] Accordion
- [ ] Navigation Menu
- [ ] Data Table
- [ ] Avatar
- [ ] Badge
- [ ] Progress Bar
- [ ] Skeleton Loader

---

## 🎨 Design Tokens (CSS Variables)

All design tokens are available as CSS variables in `globals.css`:

```css
/* Colors */
--color-brand-500: #3B82F6;
--color-accent-cyan: #06B6D4;
--color-slate-900: #0F172A;

/* Typography */
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;

/* Spacing */
--space-4: 16px;
--space-8: 32px;

/* Shadows */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Animation */
--duration-fast: 150ms;
--ease-default: cubic-bezier(0.16, 1, 0.3, 1);
```

---

**Design System End**

*Built for Awwwards-winning quality. Designed for performance, accessibility, and scalability.*
