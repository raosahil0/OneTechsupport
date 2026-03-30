# S'K One Tech Support - Design System v1.0

> **Version:** 1.0.0  
> **Last Updated:** March 30, 2026  
> **Framework:** React + Vite + Tailwind CSS v4  
> **Design Principles:** Clarity over cleverness · Trust through design · Motion with purpose · Mobile-first · Performance matters

---

## Table of Contents

1. [Color System](#1-color-system)
2. [Typography System](#2-typography-system)
3. [Spacing & Layout](#3-spacing--layout)
4. [Component Specifications](#4-component-specifications)
5. [Iconography](#5-iconography)
6. [Animation System](#6-animation-system)
7. [Shadows & Depth](#7-shadows--depth)
8. [Border Radius](#8-border-radius)
9. [Imagery](#9-imagery)
10. [Dark Mode](#10-dark-mode)
11. [Tailwind Config](#11-tailwind-config)
12. [CSS Variables](#12-css-variables)

---

## 1. Color System

### Design Rationale

The color system balances **professional trust** (deep blues) with **modern energy** (electric accents). Built for B2B credibility while standing out in the crowded IT services space.

### Primary Palette

| Name | Hex | RGB | Tailwind | Usage |
|------|-----|-----|----------|-------|
| Slate 50 | `#F8FAFC` | `rgb(248,250,252)` | `bg-slate-50` | Light backgrounds, cards |
| Slate 100 | `#F1F5F9` | `rgb(241,245,249)` | `bg-slate-100` | Section backgrounds |
| Slate 200 | `#E2E8F0` | `rgb(226,232,240)` | `bg-slate-200` | Borders, dividers |
| Slate 300 | `#CBD5E1` | `rgb(203,213,225)` | `text-slate-300` | Muted text |
| Slate 400 | `#94A3B8` | `rgb(148,163,184)` | `text-slate-400` | Placeholder text |
| Slate 500 | `#64748B` | `rgb(100,116,139)` | `text-slate-500` | Secondary text |
| Slate 600 | `#475569` | `rgb(71,85,105)` | `text-slate-600` | Body text (light mode) |
| Slate 700 | `#334155` | `rgb(51,65,85)` | `text-slate-700` | Headings (light mode) |
| Slate 800 | `#1E293B` | `rgb(30,41,59)` | `bg-slate-800` | Dark backgrounds |
| Slate 900 | `#0F172A` | `rgb(15,23,42)` | `bg-slate-900` | Primary dark bg, footer |
| Slate 950 | `#020617` | `rgb(2,6,23)` | `bg-slate-950` | deepest backgrounds |

### Brand Primary Palette

| Name | Hex | RGB | Tailwind | Usage |
|------|-----|-----|----------|-------|
| Brand 50 | `#EFF6FF` | `rgb(239,246,255)` | `bg-brand-50` | Subtle brand tints |
| Brand 100 | `#DBEAFE` | `rgb(219,234,254)` | `bg-brand-100` | Hover states (light) |
| Brand 200 | `#BFDBFE` | `rgb(191,219,254)` | `border-brand-200` | Light borders |
| Brand 300 | `#93C5FD` | `rgb(147,197,253)` | `text-brand-300` | Accent text |
| Brand 400 | `#60A5FA` | `rgb(96,165,250)` | `text-brand-400` | Links, icons |
| Brand 500 | `#3B82F6` | `rgb(59,130,246)` | `bg-brand-500` | **PRIMARY BRAND COLOR** |
| Brand 600 | `#2563EB` | `rgb(37,99,235)` | `bg-brand-600` | Hover states |
| Brand 700 | `#1D4ED8` | `rgb(29,78,216)` | `bg-brand-700` | Active states |
| Brand 800 | `#1E40AF` | `rgb(30,64,175)` | `bg-brand-800` | Dark accents |
| Brand 900 | `#1E3A8A` | `rgb(30,58,138)` | `bg-brand-900` | Deep brand color |

### Accent Palette

| Name | Hex | RGB | Tailwind | Usage |
|------|-----|-----|----------|-------|
| Accent Primary (Cyan) | `#06B6D4` | `rgb(6,182,212)` | `bg-accent-cyan` | **Primary CTA**, highlights |
| Accent Primary Hover | `#0891B2` | `rgb(8,145,178)` | `hover:bg-accent-cyan-hover` | CTA hover |
| Accent Secondary (Teal) | `#14B8A6` | `rgb(20,184,166)` | `bg-accent-teal` | Secondary CTAs, badges |
| Accent Glow | `#22D3EE` | `rgb(34,211,238)` | `text-accent-glow` | Gradient endpoints |

### Neutral Palette

| Name | Hex | RGB | Tailwind | Usage |
|------|-----|-----|----------|-------|
| White | `#FFFFFF` | `rgb(255,255,255)` | `bg-white` | Cards, text (dark bg) |
| Warm Gray 50 | `#FAFAF9` | `rgb(250,250,249)` | `bg-stone-50` | Warm backgrounds |
| Warm Gray 100 | `#F5F5F4` | `rgb(245,245,244)` | `bg-stone-100` | Section dividers |
| Cool Gray 200 | `#E5E7EB` | `rgb(229,231,235)` | `border-gray-200` | Input borders |
| Cool Gray 300 | `#D1D5DB` | `rgb(209,213,219)` | `border-gray-300` | Dividers |
| Pure Black | `#000000` | `rgb(0,0,0)` | `bg-black` | Text (rarely) |

### Semantic Colors

| Name | Hex | RGB | Tailwind | Usage |
|------|-----|-----|----------|-------|
| Success 500 | `#10B981` | `rgb(16,185,129)` | `text-success` | Success states, checkmarks |
| Success 600 | `#059669` | `rgb(5,150,105)` | `bg-success-hover` | Success button hover |
| Warning 500 | `#F59E0B` | `rgb(245,158,11)` | `text-warning` | Warnings, cautions |
| Warning 600 | `#D97706` | `rgb(217,119,6)` | `bg-warning-hover` | Warning button hover |
| Error 500 | `#EF4444` | `rgb(239,68,68)` | `text-error` | Errors, destructive actions |
| Error 600 | `#DC2626` | `rgb(220,38,38)` | `bg-error-hover` | Error button hover |
| Info 500 | `#3B82F6` | `rgb(59,130,246)` | `text-info` | Info messages, links |
| Info 600 | `#2563EB` | `rgb(37,99,235)` | `bg-info-hover` | Info button hover |

### Gradients

```css
/* Hero Gradient - Deep professional gradient for hero sections */
--gradient-hero: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%);

/* Hero Overlay - For text readability over images */
--gradient-hero-overlay: linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%);

/* Accent Gradient - Primary CTA and highlights */
--gradient-accent: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);

/* Accent Glow - For special elements */
--gradient-accent-glow: linear-gradient(90deg, #3B82F6 0%, #22D3EE 50%, #14B8A6 100%);

/* Card Gradient - Subtle depth for cards */
--gradient-card: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);

/* Text Gradient - For standout headings */
--gradient-text: linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%);

/* Dark Card - For dark mode cards */
--gradient-card-dark: linear-gradient(180deg, #1E293B 0%, #0F172A 100%);
```

### Color Usage Guidelines

#### ✅ DO

- Use **Brand 500** (`#3B82F6`) as the primary brand color for main CTAs
- Use **Accent Cyan** (`#06B6D4`) for secondary CTAs and highlights
- Maintain **4.5:1 contrast ratio** minimum for text (WCAG AA)
- Use **Slate 900** for primary dark backgrounds (footer, dark sections)
- Use **Slate 50/100** for section differentiation on light backgrounds
- Apply gradients sparingly - hero sections and primary CTAs only

#### ❌ DON'T

- Don't use pure black (`#000000`) for text - use Slate 900 instead
- Don't mix too many accent colors in one section
- Don't use Brand 500 for body text - it's too vibrant
- Don't apply gradients to body text (reduces readability)
- Don't use light gray text on white backgrounds (contrast issues)

### Accessibility - Contrast Ratios

| Combination | Ratio | Status |
|-------------|-------|--------|
| Slate 900 on White | 16.1:1 | ✅ AAA |
| Slate 700 on White | 10.2:1 | ✅ AAA |
| Slate 600 on White | 7.1:1 | ✅ AA |
| Brand 600 on White | 5.2:1 | ✅ AA |
| Brand 700 on White | 7.8:1 | ✅ AAA |
| White on Brand 600 | 5.2:1 | ✅ AA |
| White on Slate 900 | 16.1:1 | ✅ AAA |

---

## 2. Typography System

### Font Families

```
Headings: 'Space Grotesk', sans-serif
Body: 'Inter', sans-serif
Mono: 'JetBrains Mono', monospace (code only)
Fallbacks: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

### Font Loading

```html
<!-- Add to <head> in index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Style | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Class |
|-------|----------------|---------------|--------|-------------|----------------|-------|
| Display | 72px (4.5rem) | 48px (3rem) | 700 | 80px | -0.03em | `.text-display` |
| H1 | 56px (3.5rem) | 40px (2.5rem) | 700 | 64px | -0.02em | `.text-h1` |
| H2 | 48px (3rem) | 32px (2rem) | 700 | 56px | -0.02em | `.text-h2` |
| H3 | 36px (2.25rem) | 28px (1.75rem) | 600 | 44px | -0.01em | `.text-h3` |
| H4 | 30px (1.875rem) | 24px (1.5rem) | 600 | 38px | -0.01em | `.text-h4` |
| H5 | 24px (1.5rem) | 20px (1.25rem) | 600 | 32px | 0 | `.text-h5` |
| H6 | 20px (1.25rem) | 18px (1.125rem) | 600 | 28px | 0 | `.text-h6` |
| Body XL | 20px (1.25rem) | 18px (1.125rem) | 400 | 32px | 0 | `.text-body-xl` |
| Body | 16px (1rem) | 16px (1rem) | 400 | 26px | 0 | `.text-body` |
| Body Small | 14px (0.875rem) | 14px (0.875rem) | 400 | 22px | 0 | `.text-body-sm` |
| Caption | 12px (0.75rem) | 12px (0.75rem) | 500 | 18px | 0.02em | `.text-caption` |
| Label | 14px (0.875rem) | 14px (0.875rem) | 600 | 20px | 0.02em | `.text-label` |
| Button | 16px (1rem) | 16px (1rem) | 600 | 20px | 0 | `.text-button` |

### Typography CSS Implementation

```css
/* Typography System */
.text-display {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: -0.03em;
}

.text-h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.02em;
}

.text-h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
}

.text-h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.01em;
}

.text-h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -0.01em;
}

.text-h5 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0;
}

.text-h6 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0;
}

.text-body-xl {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 32px;
}

.text-body {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 26px;
}

.text-body-sm {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 22px;
}

.text-caption {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.02em;
}

.text-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.02em;
}

.text-button {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 20px;
}
```

### Typography Guidelines

#### Hierarchy Rules

1. **One H1 per page** - Always the main page title
2. **Logical progression** - Don't skip heading levels (H1 → H2 → H3)
3. **Content sections start with H2** - H1 is reserved for page title
4. **Max 3-4 heading levels per page** - Avoid over-complication

#### Color Requirements

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Headings | Slate 900 | White |
| Body Text | Slate 700 | Slate 200 |
| Muted Text | Slate 500 | Slate 400 |
| Links | Brand 600 | Brand 400 |
| Link Hover | Brand 700 | Brand 300 |

#### Responsive Behavior

- All font sizes use **clamp()** for smooth scaling
- Mobile-first: base sizes work on mobile, scale up for desktop
- Line heights decrease proportionally on smaller screens

```css
/* Example responsive typography */
.text-h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: clamp(3rem, 6vw, 4rem);
}
```

---

## 3. Spacing & Layout

### Spacing Scale

Base unit: **4px** (0.25rem)

| Name | Value | Tailwind | Usage |
|------|-------|----------|-------|
| space-0 | 0px | `p-0` | No spacing |
| space-1 | 4px | `p-1` | Micro spacing, icon gaps |
| space-2 | 8px | `p-2` | Tight spacing |
| space-3 | 12px | `p-3` | Component internal spacing |
| space-4 | 16px | `p-4` | Standard padding |
| space-5 | 20px | `p-5` | - |
| space-6 | 24px | `p-6` | Section padding (mobile) |
| space-8 | 32px | `p-8` | Card padding, section gaps |
| space-10 | 40px | `p-10` | - |
| space-12 | 48px | `p-12` | Large section padding |
| space-16 | 64px | `p-16` | Hero padding (mobile) |
| space-20 | 80px | `p-20` | - |
| space-24 | 96px | `p-24` | Hero padding (desktop) |
| space-32 | 128px | `p-32` | Major section breaks |

### Container Widths

| Name | Max Width | Tailwind | Usage |
|------|-----------|----------|-------|
| sm | 640px | `max-w-sm` | Small content |
| md | 768px | `max-w-md` | Narrow content |
| lg | 1024px | `max-w-lg` | Standard content |
| xl | 1280px | `max-w-xl` | Wide content |
| 2xl | 1536px | `max-w-2xl` | Full layouts |
| container | 100% (with padding) | `container` | Main content wrapper |

### Container Implementation

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

@media (min-width: 768px) {
  .container {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 64px;
    padding-right: 64px;
  }
}
```

### Section Padding Standards

| Section Type | Mobile | Tablet | Desktop |
|--------------|--------|--------|---------|
| Standard | 64px | 80px | 120px |
| Hero | 80px | 100px | 160px |
| Compact | 48px | 64px | 96px |
| Feature | 64px | 80px | 120px |

### Grid System

**12-column grid** with responsive gutters

```css
/* Grid System */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

@media (min-width: 768px) {
  .grid {
    gap: 32px;
  }
}

/* Column spans */
.col-span-12 { grid-column: span 12; }  /* Full width */
.col-span-8  { grid-column: span 8; }   /* 2/3 width */
.col-span-6  { grid-column: span 6; }   /* Half width */
.col-span-4  { grid-column: span 4; }   /* 1/3 width */
.col-span-3  { grid-column: span 3; }   /* Quarter width */
```

### Breakpoints

| Name | Min Width | Tailwind | Target Devices |
|------|-----------|----------|----------------|
| xs | 0px | (base) | Small phones |
| sm | 640px | `sm:` | Mobile landscape |
| md | 768px | `md:` | Tablets (portrait) |
| lg | 1024px | `lg:` | Tablets (landscape), laptops |
| xl | 1280px | `xl:` | Desktops |
| 2xl | 1536px | `2xl:` | Large desktops |

### Gap Standards

| Context | Mobile | Desktop |
|---------|--------|---------|
| Card Grids | 16px | 24px |
| Feature Grids | 24px | 32px |
| Form Fields | 16px | 24px |
| Navigation Items | 16px | 24px |
| Section Elements | 32px | 48px |

---

## 4. Component Specifications

### Button Component

#### Base Button Styles

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  white-space: nowrap;
}

.btn:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

#### Button Sizes

| Size | Height | Padding-X | Font Size | Class |
|------|--------|-----------|-----------|-------|
| SM | 36px | 12px | 14px | `.btn-sm` |
| MD | 44px | 20px | 16px | `.btn-md` |
| LG | 52px | 28px | 16px | `.btn-lg` |
| XL | 60px | 36px | 18px | `.btn-xl` |

```css
.btn-sm {
  height: 36px;
  padding: 0 12px;
  font-size: 14px;
  line-height: 20px;
}

.btn-md {
  height: 44px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 24px;
}

.btn-lg {
  height: 52px;
  padding: 0 28px;
  font-size: 16px;
  line-height: 24px;
}

.btn-xl {
  height: 60px;
  padding: 0 36px;
  font-size: 18px;
  line-height: 28px;
}
```

#### Button Variants

##### Primary Button (Filled)

```css
.btn-primary {
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  color: #FFFFFF;
  border-color: transparent;
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(59, 130, 246, 0.3);
}
```

##### Secondary Button (Outline)

```css
.btn-secondary {
  background: transparent;
  color: #3B82F6;
  border-color: #3B82F6;
}

.btn-secondary:hover:not(:disabled) {
  background: rgba(59, 130, 246, 0.08);
  border-color: #2563EB;
  color: #2563EB;
}

.btn-secondary:active:not(:disabled) {
  background: rgba(59, 130, 246, 0.12);
}
```

##### Tertiary Button (Text)

```css
.btn-tertiary {
  background: transparent;
  color: #3B82F6;
  border-color: transparent;
  padding-left: 12px;
  padding-right: 12px;
}

.btn-tertiary:hover:not(:disabled) {
  background: rgba(59, 130, 246, 0.08);
}

.btn-tertiary:active:not(:disabled) {
  background: rgba(59, 130, 246, 0.12);
}
```

##### Ghost Button (Subtle)

```css
.btn-ghost {
  background: transparent;
  color: #475569;
  border-color: transparent;
}

.btn-ghost:hover:not(:disabled) {
  background: #F1F5F9;
  color: #1E293B;
}

.btn-ghost:active:not(:disabled) {
  background: #E2E8F0;
}
```

##### Destructive Button (Danger)

```css
.btn-destructive {
  background: #EF4444;
  color: #FFFFFF;
  border-color: transparent;
}

.btn-destructive:hover:not(:disabled) {
  background: #DC2626;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}
```

##### Accent Button (Cyan Gradient)

```css
.btn-accent {
  background: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
  color: #FFFFFF;
  border-color: transparent;
  box-shadow: 0 1px 3px rgba(6, 182, 212, 0.3);
}

.btn-accent:hover:not(:disabled) {
  background: linear-gradient(135deg, #0891B2 0%, #0E7490 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
}
```

#### Button Usage Guidelines

| Use Case | Recommended Variant | Size |
|----------|---------------------|------|
| Hero CTA | Primary or Accent | XL |
| Form Submit | Primary | LG |
| Secondary Action | Secondary | MD |
| Cancel/Back | Ghost | MD |
| Delete/Danger | Destructive | MD |
| Navigation | Tertiary | SM |
| Card Actions | Ghost | SM |

---

### Card Component

#### Base Card Styles

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
```

#### Card Variants

##### Default Card (Simple Border)

```css
.card-default {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
}

@media (min-width: 768px) {
  .card-default {
    padding: 32px;
  }
}
```

##### Elevated Card (Shadow)

```css
.card-elevated {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media (min-width: 768px) {
  .card-elevated {
    padding: 32px;
  }
}
```

##### Interactive Card (Hover Effects)

```css
.card-interactive {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-interactive:hover {
  border-color: #3B82F6;
  box-shadow: 0 12px 24px -8px rgba(59, 130, 246, 0.2);
  transform: translateY(-4px);
}

.card-interactive:active {
  transform: translateY(-2px);
}
```

##### Featured Card (Special Styling)

```css
.card-featured {
  background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
  border: 2px solid #3B82F6;
  border-radius: 16px;
  padding: 32px;
  position: relative;
}

.card-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%);
}
```

##### Dark Card (For Dark Backgrounds)

```css
.card-dark {
  background: linear-gradient(180deg, #1E293B 0%, #0F172A 100%);
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 24px;
  color: #F8FAFC;
}

.card-dark .card-title {
  color: #FFFFFF;
}

.card-dark .card-description {
  color: #CBD5E1;
}
```

#### Card Anatomy

```css
.card-header {
  margin-bottom: 16px;
}

.card-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
}

.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748B;
  line-height: 22px;
}

.card-content {
  /* Main content area */
}

.card-footer {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  gap: 12px;
}
```

#### Card Usage Guidelines

| Card Type | Use Case |
|-----------|----------|
| Default | Content cards, info display |
| Elevated | Feature cards, testimonials |
| Interactive | Clickable cards, navigation |
| Featured | Pricing highlights, key features |
| Dark | Dark sections, contrast needs |

---

### Input Fields

#### Base Input Styles

```css
.input {
  width: 100%;
  height: 44px;
  padding: 10px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #1E293B;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.input::placeholder {
  color: #94A3B8;
}

.input:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.input:disabled {
  background: #F1F5F9;
  color: #64748B;
  cursor: not-allowed;
}
```

#### Input Sizes

| Size | Height | Padding | Font Size | Class |
|------|--------|---------|-----------|-------|
| SM | 36px | 8px 12px | 14px | `.input-sm` |
| MD | 44px | 10px 16px | 16px | `.input-md` |
| LG | 52px | 14px 20px | 16px | `.input-lg` |

#### Input States

##### Default State

```css
.input-default {
  border-color: #CBD5E1;
  background: #FFFFFF;
}
```

##### Focus State

```css
.input-focus {
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
```

##### Error State

```css
.input-error {
  border-color: #EF4444;
  background: #FEF2F2;
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}
```

##### Success State

```css
.input-success {
  border-color: #10B981;
  background: #ECFDF5;
}

.input-success:focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
}
```

##### Disabled State

```css
.input-disabled {
  background: #F1F5F9;
  color: #64748B;
  border-color: #E2E8F0;
  cursor: not-allowed;
}
```

#### Input Types

##### Text Input

```css
.input-text {
  /* Uses base .input styles */
}
```

##### Email Input

```css
.input-email {
  /* Uses base .input styles */
  /* Add email icon if needed */
}
```

##### Password Input

```css
.input-password {
  /* Uses base .input styles */
  letter-spacing: 0.1em;
}
```

##### Textarea

```css
.textarea {
  min-height: 120px;
  padding: 12px 16px;
  resize: vertical;
  line-height: 24px;
}

.textarea:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
```

##### Select Dropdown

```css
.select {
  height: 44px;
  padding: 10px 40px 10px 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  appearance: none;
  cursor: pointer;
}

.select:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
```

##### Checkbox

```css
.checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #CBD5E1;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
}

.checkbox:checked {
  background: #3B82F6;
  border-color: #3B82F6;
}

.checkbox:checked::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
```

##### Radio Button

```css
.radio {
  width: 20px;
  height: 20px;
  border: 2px solid #CBD5E1;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
}

.radio:checked {
  border-color: #3B82F6;
}

.radio:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3B82F6;
}

.radio:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
```

#### Label Styles

```css
.input-label {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 8px;
}

.input-label-required::after {
  content: ' *';
  color: #EF4444;
}
```

#### Helper Text

```css
.input-helper {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #64748B;
  margin-top: 6px;
}

.input-error-text {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #EF4444;
  margin-top: 6px;
}

.input-success-text {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #10B981;
  margin-top: 6px;
}
```

#### Input Group (Label + Input + Helper)

```css
.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
```

---

### Navigation Components

#### Header / Navbar

```css
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 72px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #E2E8F0;
  transition: all 0.3s ease;
}

.header.scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
```

##### Logo Placement

```css
.header-logo {
  height: 40px;
  width: auto;
}

.header-logo-container {
  display: flex;
  align-items: center;
}
```

##### Navigation Items

```css
.nav-list {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.15s ease;
}

.nav-link:hover {
  color: #1E293B;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #3B82F6;
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #1E293B;
}
```

##### Mobile Menu

```css
.mobile-menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile-menu {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFFFFF;
  padding: 24px;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #1E293B;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid #E2E8F0;
}
```

##### Header Variants

```css
/* Light Header */
.header-light {
  background: rgba(255, 255, 255, 0.9);
  border-bottom-color: #E2E8F0;
}

.header-light .nav-link {
  color: #475569;
}

/* Dark Header */
.header-dark {
  background: rgba(15, 23, 42, 0.9);
  border-bottom-color: #334155;
}

.header-dark .nav-link {
  color: #CBD5E1;
}

.header-dark .nav-link:hover {
  color: #FFFFFF;
}

/* Transparent Header (for hero overlay) */
.header-transparent {
  background: transparent;
  border-bottom: none;
}
```

#### Footer

```css
.footer {
  background: #0F172A;
  padding: 64px 0 32px;
}

@media (min-width: 768px) {
  .footer {
    padding: 96px 0 48px;
  }
}
```

##### Footer Columns

```css
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 64px;
  }
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

##### Footer Links

```css
.footer-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.footer-link-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #94A3B8;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-link:hover {
  color: #FFFFFF;
}
```

##### Social Icons

```css
.social-list {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: #3B82F6;
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
  color: #FFFFFF;
}
```

##### Newsletter Form

```css
.footer-newsletter {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-newsletter-input {
  height: 44px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #334155;
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 14px;
}

.footer-newsletter-input::placeholder {
  color: #64748B;
}

.footer-newsletter-input:focus {
  outline: none;
  border-color: #3B82F6;
  background: rgba(255, 255, 255, 0.15);
}

.footer-newsletter-button {
  height: 44px;
  background: #3B82F6;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.footer-newsletter-button:hover {
  background: #2563EB;
}
```

##### Footer Bottom

```css
.footer-bottom {
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid #334155;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-copyright {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748B;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal-link {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748B;
  text-decoration: none;
}

.footer-legal-link:hover {
  color: #94A3B8;
}
```

---

## 5. Iconography

### Icon Library

**Primary Library: Lucide React** (already installed)

```bash
npm install lucide-react
```

### Icon Sizes

| Size | Value | Usage | Class |
|------|-------|-------|-------|
| XS | 16px | Inline with small text | `.icon-xs` |
| SM | 20px | Inline with body text | `.icon-sm` |
| MD | 24px | Default, buttons | `.icon-md` |
| LG | 32px | Feature icons | `.icon-lg` |
| XL | 48px | Hero icons | `.icon-xl` |
| 2XL | 64px | Large displays | `.icon-2xl` |

```css
.icon-xs { width: 16px; height: 16px; }
.icon-sm { width: 20px; height: 20px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
.icon-2xl { width: 64px; height: 64px; }
```

### Stroke Width Standards

| Context | Stroke Width |
|---------|--------------|
| Default | 2px |
| Bold | 2.5px |
| Light | 1.5px |

### Icon Colors

| Context | Color |
|---------|-------|
| Default | Slate 600 (`#475569`) |
| Muted | Slate 400 (`#94A3B8`) |
| Brand | Brand 500 (`#3B82F6`) |
| On Dark | White (`#FFFFFF`) |
| Success | Success 500 (`#10B981`) |
| Warning | Warning 500 (`#F59E0B`) |
| Error | Error 500 (`#EF4444`) |

### Icon Usage Guidelines

#### ✅ DO

- Use consistent stroke widths within a section
- Maintain clear space around icons (at least icon size / 2)
- Use icons purposefully - not decoratively
- Match icon style (outlined vs. filled) throughout

#### ❌ DON'T

- Don't use multiple icon libraries
- Don't scale icons disproportionately
- Don't use icons without clear meaning
- Don't mix stroke weights randomly

### Logo Usage

```css
/* Primary Logo */
.logo-primary {
  height: 40px;
  width: auto;
}

/* Footer Logo */
.logo-footer {
  height: 32px;
  width: auto;
  filter: brightness(0) invert(1); /* White version */
}

/* Favicon */
/* 32x32, 48x48, 180x180 PNG files */
/* SVG for modern browsers */
```

---

## 6. Animation System

### Animation Principles

1. **Purpose over decoration** - Every animation serves a function
2. **Subtle over obvious** - Micro-interactions should feel natural
3. **Fast over slow** - Respect user time (150-300ms typical)
4. **Eased over linear** - Natural motion with cubic-bezier

### Duration Standards

| Name | Value | Usage | Class |
|------|-------|-------|-------|
| Instant | 50ms | State changes | `.duration-instant` |
| Fast | 150ms | Micro-interactions, hover | `.duration-fast` |
| Normal | 300ms | Most animations | `.duration-normal` |
| Slow | 500ms | Large transitions | `.duration-slow` |
| Very Slow | 700ms | Complex sequences | `.duration-very-slow` |

```css
.duration-instant { transition-duration: 50ms; }
.duration-fast { transition-duration: 150ms; }
.duration-normal { transition-duration: 300ms; }
.duration-slow { transition-duration: 500ms; }
.duration-very-slow { transition-duration: 700ms; }
```

### Easing Curves

```css
/* Default - Smooth, natural motion */
--ease-default: cubic-bezier(0.16, 1, 0.3, 1);

/* Ease Out - Fast start, slow end (entering) */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);

/* Ease In - Slow start, fast end (exiting) */
--ease-in: cubic-bezier(0.7, 0, 0.84, 0);

/* Ease In-Out - Balanced (standard) */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Bounce - Playful bounce effect */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Elastic - Spring-like */
--ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Micro-interactions

#### Button Hover

```css
.btn {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(0);
}
```

#### Link Hover

```css
.link {
  position: relative;
  transition: color 0.15s ease;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.link:hover::after {
  width: 100%;
}
```

#### Card Hover

```css
.card-interactive {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(59, 130, 246, 0.2);
}
```

#### Input Focus

```css
.input {
  transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.input:focus {
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}
```

#### Form Submission Feedback

```css
/* Success state */
.form-success {
  animation: successPulse 0.5s ease;
}

@keyframes successPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

/* Loading state */
.form-loading {
  opacity: 0.7;
  pointer-events: none;
}

.form-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid #FFFFFF;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Scroll Animations

#### Fade In

```css
.animate-fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

#### Slide Up

```css
.animate-slide-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

#### Scale In

```css
.animate-scale-in {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-scale-in.visible {
  opacity: 1;
  transform: scale(1);
}
```

#### Stagger Delays (for lists/grids)

```css
.stagger-1 { transition-delay: 0ms; }
.stagger-2 { transition-delay: 50ms; }
.stagger-3 { transition-delay: 100ms; }
.stagger-4 { transition-delay: 150ms; }
.stagger-5 { transition-delay: 200ms; }
.stagger-6 { transition-delay: 250ms; }
```

### Page Transitions

#### Route Change Animation

```css
.page-enter {
  opacity: 0;
  transform: translateY(8px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-exit {
  opacity: 1;
}

.page-exit-active {
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
```

#### Loading State Animation

```css
/* Skeleton loader shimmer */
.skeleton {
  background: linear-gradient(
    90deg,
    #F1F5F9 0%,
    #E2E8F0 50%,
    #F1F5F9 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

#### Modal/Popup Animations

```css
.modal-backdrop {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-backdrop.open {
  opacity: 1;
}

.modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(8px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-content.open {
  opacity: 1;
  transform: scale(1) translateY(0);
}
```

---

## 7. Shadows & Depth

### Shadow Scale

| Name | Value | Usage | Class |
|------|-------|-------|-------|
| None | `none` | Flat elements | `.shadow-none` |
| XS | `0 1px 2px rgba(0,0,0,0.05)` | Minimal depth | `.shadow-xs` |
| SM | `0 1px 3px rgba(0,0,0,0.1)` | Slight elevation | `.shadow-sm` |
| MD | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons | `.shadow-md` |
| LG | `0 10px 15px rgba(0,0,0,0.1)` | Elevated cards | `.shadow-lg` |
| XL | `0 20px 25px rgba(0,0,0,0.15)` | Dropdowns, modals | `.shadow-xl` |
| 2XL | `0 25px 50px rgba(0,0,0,0.25)` | Heavy elevation | `.shadow-2xl` |
| Inner | `inset 0 2px 4px rgba(0,0,0,0.06)` | Inset depth | `.shadow-inner` |

```css
.shadow-none {
  box-shadow: none;
}

.shadow-xs {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.shadow-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.shadow-xl {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}

.shadow-2xl {
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.shadow-inner {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### Colored Shadows

```css
/* Brand shadow for buttons/cards */
.shadow-brand {
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
}

.shadow-brand-hover:hover {
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
}

/* Accent shadow */
.shadow-accent {
  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.3);
}
```

### Depth Layers

| Layer | Elevation | Usage | Shadow |
|-------|-----------|-------|--------|
| Base | 0 | Backgrounds | None |
| Raised | 1 | Cards, surfaces | shadow-md |
| Elevated | 2 | Interactive cards | shadow-lg |
| Floating | 3 | Dropdowns, popovers | shadow-xl |
| Top | 4 | Modals, dialogs | shadow-2xl |
| Modal | 5 | Modal overlays | shadow-2xl + backdrop |

### Depth Implementation

```css
/* Base Layer */
.layer-base {
  background: #FFFFFF;
  box-shadow: none;
}

/* Raised Layer */
.layer-raised {
  background: #FFFFFF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Elevated Layer */
.layer-elevated {
  background: #FFFFFF;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Floating Layer */
.layer-floating {
  background: #FFFFFF;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}

/* Top Layer */
.layer-top {
  background: #FFFFFF;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}
```

---

## 8. Border Radius

### Radius Scale

| Name | Value | Usage | Class |
|------|-------|-------|-------|
| None | 0px | Sharp edges | `.rounded-none` |
| XS | 4px | Minimal rounding | `.rounded-xs` |
| SM | 8px | Buttons, inputs | `.rounded-sm` |
| MD | 12px | Cards, default | `.rounded-md` |
| LG | 16px | Large cards | `.rounded-lg` |
| XL | 24px | Hero elements | `.rounded-xl` |
| 2XL | 32px | Heavy rounding | `.rounded-2xl` |
| Full | 9999px | Pills, circles | `.rounded-full` |

```css
.rounded-none { border-radius: 0px; }
.rounded-xs { border-radius: 4px; }
.rounded-sm { border-radius: 8px; }
.rounded-md { border-radius: 12px; }
.rounded-lg { border-radius: 16px; }
.rounded-xl { border-radius: 24px; }
.rounded-2xl { border-radius: 32px; }
.rounded-full { border-radius: 9999px; }
```

### Usage Guidelines

| Element | Recommended Radius |
|---------|-------------------|
| Buttons | 8px (sm) |
| Inputs | 8px (sm) |
| Cards | 12px (md) |
| Featured Cards | 16px (lg) |
| Hero Elements | 24px (xl) |
| Badges/Pills | 9999px (full) |
| Avatars | 9999px (full) |
| Images | 12px (md) |

### Consistency Rules

1. **Match radius to element size** - Larger elements need larger radius
2. **Consistent within component** - All corners of a component should match
3. **Scale with elevation** - Higher elevation = slightly larger radius
4. **Don't mix too many values** - Use 2-3 radius values per section

---

## 9. Imagery

### Photography Style

#### Mood and Tone

- **Professional yet approachable** - Real people in work environments
- **Diverse representation** - Reflect North Indian SME demographic
- **Natural lighting** - Avoid overly staged stock photos
- **Action-oriented** - Show people working, collaborating, solving problems

#### Color Treatment

```css
/* Standard image treatment */
.image-standard {
  border-radius: 12px;
  filter: saturate(1.05) contrast(1.02);
}

/* Hero image overlay */
.image-hero {
  border-radius: 24px;
  filter: saturate(1.1) contrast(1.05);
}

/* Grayscale for team section (optional) */
.image-grayscale {
  filter: grayscale(1);
  transition: filter 0.3s ease;
}

.image-grayscale:hover {
  filter: grayscale(0);
}
```

#### Subject Matter Guidelines

| Section | Recommended Imagery |
|---------|---------------------|
| Hero | Office/workspace, team collaboration |
| Services | Abstract tech, people working |
| About | Team photos, office culture |
| Testimonials | Client photos (with permission) |
| Contact | Map, office exterior |

### Image Treatments

#### Border Radius Standards

```css
.image-radius-sm { border-radius: 8px; }
.image-radius-md { border-radius: 12px; }
.image-radius-lg { border-radius: 16px; }
.image-radius-xl { border-radius: 24px; }
.image-radius-full { border-radius: 9999px; }
```

#### Shadow Usage

```css
.image-shadow-sm { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
.image-shadow-md { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
.image-shadow-lg { box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); }
```

#### Overlay Gradients (for text readability)

```css
.image-overlay-dark {
  position: relative;
}

.image-overlay-dark::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0) 0%,
    rgba(15, 23, 42, 0.8) 100%
  );
  border-radius: inherit;
}
```

### Image Optimization

| Format | Use Case | Max Size |
|--------|----------|----------|
| WebP | Primary format | 200KB |
| AVIF | Modern browsers | 150KB |
| PNG | Logos, graphics with transparency | 100KB |
| SVG | Icons, illustrations | 20KB |

### Illustrations (Optional)

#### Style Guidelines

- **Clean, geometric style** - Simple shapes, minimal detail
- **Consistent line weight** - 2px strokes matching iconography
- **Brand colors only** - Use palette from Color System
- **Flat or subtle gradient** - Avoid heavy 3D effects

#### When to Use

| Use | Illustration | Photography |
|-----|--------------|-------------|
| Abstract concepts | ✅ | ❌ |
| Team/people | ❌ | ✅ |
| Process flows | ✅ | ❌ |
| Office/workspace | ❌ | ✅ |
| Icons/symbols | ✅ | ❌ |

---

## 10. Dark Mode

### Dark Mode Colors

#### Background Colors

| Name | Light Mode | Dark Mode | Tailwind |
|------|------------|-----------|----------|
| Background | `#FFFFFF` | `#0F172A` | `bg-slate-900` |
| Surface | `#F8FAFC` | `#1E293B` | `bg-slate-800` |
| Elevated | `#FFFFFF` | `#334155` | `bg-slate-700` |

#### Text Colors

| Name | Light Mode | Dark Mode | Tailwind |
|------|------------|-----------|----------|
| Primary | `#1E293B` | `#F8FAFC` | `text-slate-100` |
| Secondary | `#475569` | `#CBD5E1` | `text-slate-300` |
| Muted | `#64748B` | `#94A3B8` | `text-slate-400` |

#### Border Colors

| Name | Light Mode | Dark Mode | Tailwind |
|------|------------|-----------|----------|
| Default | `#E2E8F0` | `#334155` | `border-slate-700` |
| Subtle | `#F1F5F9` | `#1E293B` | `border-slate-800` |

### Dark Mode Implementation

```css
/* CSS Variables for theme switching */
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-tertiary: #F1F5F9;
  --text-primary: #1E293B;
  --text-secondary: #475569;
  --text-muted: #64748B;
  --border-default: #E2E8F0;
}

.dark {
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-tertiary: #334155;
  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;
  --border-default: #334155;
}

/* Apply variables */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

### Dark Mode Component Adjustments

#### Cards

```css
.card-dark {
  background: var(--bg-secondary);
  border-color: var(--border-default);
  color: var(--text-primary);
}
```

#### Inputs

```css
.input-dark {
  background: var(--bg-tertiary);
  border-color: var(--border-default);
  color: var(--text-primary);
}

.input-dark::placeholder {
  color: var(--text-muted);
}
```

#### Buttons

```css
.btn-dark-ghost {
  background: transparent;
  color: var(--text-secondary);
}

.btn-dark-ghost:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
```

### Toggle Behavior

```javascript
// Dark mode toggle implementation
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize from localStorage or system preference
function initDarkMode() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
}
```

### Dark Mode Considerations

1. **Reduce contrast slightly** - Pure white on pure black causes eye strain
2. **Desaturate colors** - Colors appear more vibrant on dark backgrounds
3. **Test shadows** - Shadows less visible on dark backgrounds
4. **Images need adjustment** - May need brightness/contrast tweaks

---

## 11. Tailwind Config

```js
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // Colors
      colors: {
        // Brand colors
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Accent colors
        accent: {
          cyan: '#06B6D4',
          'cyan-hover': '#0891B2',
          teal: '#14B8A6',
          glow: '#22D3EE',
        },
        // Semantic colors
        success: {
          DEFAULT: '#10B981',
          hover: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
        },
        info: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
      },
      
      // Typography
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'display': ['72px', { lineHeight: '80px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['30px', { lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h5': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h6': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-xl': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '18px', fontWeight: '500', letterSpacing: '0.02em' }],
        'label': ['14px', { lineHeight: '20px', fontWeight: '600', letterSpacing: '0.02em' }],
        'button': ['16px', { lineHeight: '20px', fontWeight: '600' }],
      },
      
      // Spacing
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '28': '112px',
        '30': '120px',
      },
      
      // Border Radius
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      },
      
      // Shadows
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'brand': '0 4px 14px rgba(59, 130, 246, 0.3)',
        'brand-hover': '0 8px 24px rgba(59, 130, 246, 0.4)',
        'accent': '0 4px 14px rgba(6, 182, 212, 0.3)',
      },
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 1.5s infinite',
        'spin': 'spin 0.8s linear infinite',
        'pulse-success': 'successPulse 0.5s ease',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
        successPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      
      // Transitions
      transitionDuration: {
        'instant': '50ms',
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
        'very-slow': '700ms',
      },
      
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
}
```

---

## 12. CSS Variables

```css
/* CSS Variables - Global Design Tokens */
:root {
  /* ===== COLORS ===== */
  
  /* Primary Brand */
  --color-brand-50: #EFF6FF;
  --color-brand-100: #DBEAFE;
  --color-brand-200: #BFDBFE;
  --color-brand-300: #93C5FD;
  --color-brand-400: #60A5FA;
  --color-brand-500: #3B82F6;
  --color-brand-600: #2563EB;
  --color-brand-700: #1D4ED8;
  --color-brand-800: #1E40AF;
  --color-brand-900: #1E3A8A;
  
  /* Accent */
  --color-accent-cyan: #06B6D4;
  --color-accent-cyan-hover: #0891B2;
  --color-accent-teal: #14B8A6;
  --color-accent-glow: #22D3EE;
  
  /* Slate (Neutrals) */
  --color-slate-50: #F8FAFC;
  --color-slate-100: #F1F5F9;
  --color-slate-200: #E2E8F0;
  --color-slate-300: #CBD5E1;
  --color-slate-400: #94A3B8;
  --color-slate-500: #64748B;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1E293B;
  --color-slate-900: #0F172A;
  --color-slate-950: #020617;
  
  /* Semantic */
  --color-success: #10B981;
  --color-success-hover: #059669;
  --color-warning: #F59E0B;
  --color-warning-hover: #D97706;
  --color-error: #EF4444;
  --color-error-hover: #DC2626;
  --color-info: #3B82F6;
  --color-info-hover: #2563EB;
  
  /* Basic */
  --color-white: #FFFFFF;
  --color-black: #000000;
  
  /* ===== GRADIENTS ===== */
  
  --gradient-hero: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%);
  --gradient-hero-overlay: linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%);
  --gradient-accent: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);
  --gradient-accent-glow: linear-gradient(90deg, #3B82F6 0%, #22D3EE 50%, #14B8A6 100%);
  --gradient-card: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
  --gradient-text: linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%);
  --gradient-card-dark: linear-gradient(180deg, #1E293B 0%, #0F172A 100%);
  
  /* ===== TYPOGRAPHY ===== */
  
  /* Fonts */
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes */
  --text-display: 72px;
  --text-h1: 56px;
  --text-h2: 48px;
  --text-h3: 36px;
  --text-h4: 30px;
  --text-h5: 24px;
  --text-h6: 20px;
  --text-body-xl: 20px;
  --text-body: 16px;
  --text-body-sm: 14px;
  --text-caption: 12px;
  --text-label: 14px;
  --text-button: 16px;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter Spacing */
  --tracking-tighter: -0.03em;
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;
  --tracking-wider: 0.04em;
  
  /* ===== SPACING ===== */
  
  --space-0: 0px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  
  /* ===== LAYOUT ===== */
  
  /* Container Max Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
  
  /* ===== BORDER RADIUS ===== */
  
  --radius-none: 0px;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;
  
  /* ===== SHADOWS ===== */
  
  --shadow-none: none;
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
  --shadow-brand: 0 4px 14px rgba(59, 130, 246, 0.3);
  --shadow-brand-hover: 0 8px 24px rgba(59, 130, 246, 0.4);
  --shadow-accent: 0 4px 14px rgba(6, 182, 212, 0.3);
  
  /* ===== ANIMATION ===== */
  
  /* Duration */
  --duration-instant: 50ms;
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-very-slow: 700ms;
  
  /* Easing */
  --ease-default: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* ===== Z-INDEX ===== */
  
  --z-base: 0;
  --z-raised: 10;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal-backdrop: 300;
  --z-modal: 310;
  --z-popover: 400;
  --z-tooltip: 500;
  --z-toast: 600;
}

/* Dark Mode Overrides */
.dark {
  --color-bg-primary: var(--color-slate-900);
  --color-bg-secondary: var(--color-slate-800);
  --color-bg-tertiary: var(--color-slate-700);
  --color-text-primary: var(--color-slate-100);
  --color-text-secondary: var(--color-slate-300);
  --color-text-muted: var(--color-slate-400);
  --color-border-default: var(--color-slate-700);
}

/* Light Mode (Default) */
:root,
:not(.dark) {
  --color-bg-primary: var(--color-white);
  --color-bg-secondary: var(--color-slate-50);
  --color-bg-tertiary: var(--color-slate-100);
  --color-text-primary: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-700);
  --color-text-muted: var(--color-slate-500);
  --color-border-default: var(--color-slate-200);
}
```

---

## Appendix: Quick Reference

### Most Used Classes

```css
/* Buttons */
.btn-primary, .btn-secondary, .btn-ghost, .btn-accent
.btn-sm, .btn-md, .btn-lg, .btn-xl

/* Cards */
.card-default, .card-elevated, .card-interactive, .card-featured

/* Typography */
.text-display, .text-h1, .text-h2, .text-h3, .text-body, .text-body-sm

/* Spacing */
.space-x-4, .space-y-4, .gap-6, .p-6, .p-8, .p-12

/* Layout */
.container, .grid, .col-span-6, .col-span-12

/* Animations */
.animate-fade-in, .animate-slide-up, .duration-fast, .duration-normal
```

### Color Quick Pick

```css
/* Primary Actions */
bg-brand-500, hover:bg-brand-600

/* Secondary Actions */
bg-white, border-brand-500, text-brand-500

/* Backgrounds */
bg-slate-50, bg-slate-100, bg-slate-900

/* Text */
text-slate-900, text-slate-700, text-slate-500

/* Borders */
border-slate-200, border-slate-300

/* Accents */
bg-accent-cyan, text-accent-glow
```

---

**Design System End**

*This design system is the single source of truth for all visual decisions. All components and patterns should be implemented consistently across the S'K One Tech Support website.*

---

**Credits:** Designed for Awwwards-winning quality. Built for performance, accessibility, and scalability.
