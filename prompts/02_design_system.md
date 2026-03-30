# 🎯 Prompt 02: Design System

**Phase:** 2 of 8  
**Role:** Senior UI/UX Designer + Design Systems Expert  
**Time:** 10-15 minutes  
**Output:** Complete design system with colors, typography, components, and animations

---

## 📋 COPY THE PROMPT BELOW INTO YOUR LLM:

```markdown
# ROLE: Senior UI/UX Designer + Design Systems Expert

You are a world-class UI/UX designer who has created design systems for award-winning websites at companies like Stripe, Vercel, and Linear. You understand how to balance beauty with functionality, and you create systems that scale.

---

## 🎯 YOUR TASK

Create a comprehensive, production-ready design system for S'K One Tech Support's Awwards-winning Next.js website.

This design system will be the single source of truth for all visual decisions and will be directly implemented in code.

---

## 📊 CONTEXT FROM PHASE 1

**Business:** S'K One Tech Support - IT Services & Staffing Agency  
**Target Audience:** SME owners, HR managers, IT managers in North India  
**Brand Personality:** Trustworthy, professional, modern, results-oriented

**Recommended Theme:** [INSERT THEME FROM PHASE 1 OUTPUT]

**Key Requirements:**
- B2B professional aesthetic (not too playful)
- Mobile-first (60%+ traffic will be mobile)
- Fast loading (Indian internet speeds vary)
- Accessible (WCAG 2.1 AA compliant)
- Awwards-worthy (standout visual design)

---

## 🎨 DESIGN SYSTEM DELIVERABLES

### 1. Color System

Create a complete color palette with:

**Primary Colors:**
- Main brand color (with 50-900 scale)
- Usage guidelines for each shade

**Accent Colors:**
- Primary accent (for CTAs, highlights)
- Secondary accent (for variety)
- Usage guidelines

**Neutral Colors:**
- Warm grays (for backgrounds, text)
- Cool grays (for borders, dividers)
- Pure black and white

**Semantic Colors:**
- Success (green)
- Warning (amber/orange)
- Error (red)
- Info (blue)

**Gradients:**
- Hero gradient
- Card gradients
- Button gradients
- Text gradients

**For each color, provide:**
- Hex code
- RGB values
- Tailwind class name
- Usage examples
- Do's and Don'ts

### 2. Typography System

Define complete typography:

**Font Families:**
- Primary font (headings) - suggest Google Font
- Secondary font (body) - suggest Google Font
- Fallback fonts

**Type Scale:**
- Display (hero headings): size, weight, line-height, letter-spacing
- H1, H2, H3, H4, H5, H6: all properties
- Body text (default, large, small)
- Caption and label styles

**For each text style:**
- Font size (desktop and mobile)
- Font weight
- Line height
- Letter spacing
- CSS class name
- Usage guidelines

**Typography Rules:**
- Hierarchy guidelines
- Color contrast requirements
- Responsive behavior

### 3. Spacing & Layout System

**Spacing Scale:**
- Base unit (4px or 8px grid)
- Complete spacing scale (0-32 or higher)
- Tailwind class mappings

**Layout Guidelines:**
- Container widths (sm, md, lg, xl, 2xl)
- Section padding standards
- Grid system (12-column?)
- Gap standards for grids

**Breakpoints:**
- Mobile, tablet, desktop, large desktop
- Pixel values
- Tailwind class names

### 4. Component Design System

Design these core components with full specs:

#### Button Component
**Variants:**
- Primary (filled)
- Secondary (outline)
- Tertiary (text-only)
- Ghost (subtle hover)
- Destructive (danger)

**Sizes:**
- Small (sm)
- Medium (md)
- Large (lg)
- XL (for hero CTAs)

**States:**
- Default
- Hover
- Active
- Focus
- Disabled

**For each variant, specify:**
- Background color
- Text color
- Border color
- Padding
- Font size
- Border radius
- Shadow
- Transition effects
- Hover state changes

#### Card Component
**Variants:**
- Default (simple border)
- Elevated (shadow)
- Interactive (hover effects)
- Featured (special styling)

**Specifications:**
- Padding
- Border radius
- Border width and color
- Shadow values
- Hover transformations
- Background treatments

#### Input Fields
**Types:**
- Text input
- Email input
- Password input
- Textarea
- Select dropdown
- Checkbox
- Radio button

**States:**
- Default
- Focus
- Error
- Success
- Disabled

**For each, specify:**
- Height/width
- Padding
- Border styles
- Focus ring
- Error styling
- Label positioning
- Helper text styling

#### Navigation Components
**Header/Navbar:**
- Height
- Logo placement
- Navigation item spacing
- Hover states
- Mobile menu behavior
- Sticky behavior

**Footer:**
- Column layout
- Link spacing
- Social icon sizes
- Newsletter form integration

### 5. Iconography System

**Icon Library:**
- Recommended library (Lucide, Heroicons, etc.)
- Size standards (sm, md, lg, xl)
- Color usage guidelines
- Stroke width standards

**Custom Icons:**
- Logo usage guidelines
- Favicon specifications
- Social media icons

### 6. Animation System

**Animation Principles:**
- Duration standards (fast, normal, slow)
- Easing curves (with cubic-bezier values)
- When to animate vs. when not to

**Micro-interactions:**
- Button hover/active
- Link hover
- Card hover
- Input focus
- Form submission feedback

**Scroll Animations:**
- Fade in (opacity + Y movement)
- Slide up
- Scale in
- Stagger delays for lists/grids

**Page Transitions:**
- Route change animation
- Loading state animation
- Modal/popup animations

**For each animation, specify:**
- Duration (ms)
- Easing function
- Properties animated
- Trigger condition
- CSS/Tailwind classes

### 7. Shadow & Depth System

**Shadow Scale:**
- Shadow sm, md, lg, xl, 2xl
- Values for each (x, y, blur, spread, color)
- Usage guidelines

**Depth Layers:**
- Base layer (background)
- Raised layer (cards)
- Elevated layer (dropdowns)
- Floating layer (modals)
- Top layer (tooltips, popovers)

### 8. Border Radius System

**Radius Scale:**
- None (0px)
- Small (4px)
- Medium (8px)
- Large (12px)
- XL (16px)
- 2XL (24px)
- Full (9999px for pills/circles)

**Usage Guidelines:**
- When to use each radius
- Consistency rules

### 9. Imagery Guidelines

**Photography Style:**
- Mood and tone
- Color treatment (filters, overlays)
- Subject matter guidelines

**Image Treatments:**
- Border radius standards
- Shadow usage
- Overlay gradients for text readability

**Illustrations (if any):**
- Style guidelines
- Color palette
- When to use vs. photography

### 10. Dark Mode (Optional but Recommended)

**Dark Mode Colors:**
- Inverted color palette
- Adjusted contrast ratios
- Specific dark mode considerations

**Toggle Behavior:**
- How to switch
- Persistence method
- Transition animation

---

## 📝 OUTPUT FORMAT

Provide your design system in this exact structure:

```markdown
# S'K One Tech Support - Design System v1.0

## 1. Color System

### Primary Palette
| Name | Hex | RGB | Tailwind | Usage |
|------|-----|-----|----------|-------|
| Navy 900 | #0A1628 | rgb(10,22,40) | bg-navy-900 | Backgrounds |
...

### Accent Palette
[Table format]

### Neutral Palette
[Table format]

### Semantic Colors
[Table format]

### Gradients
```css
--gradient-hero: linear-gradient(135deg, #0A1628 0%, #1E293B 50%, #334155 100%);
--gradient-accent: linear-gradient(90deg, #3B82F6 0%, #22D3EE 100%);
...
```

### Color Usage Guidelines
[Do's and Don'ts]

---

## 2. Typography System

### Font Families
- **Headings:** Space Grotesk (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Fallbacks:** system-ui, -apple-system, sans-serif

### Type Scale
| Style | Size | Weight | Line Height | Letter Spacing | Class |
|-------|------|--------|-------------|----------------|-------|
| Display | 64px | 700 | 72px | -0.02em | .text-display |
| H1 | 48px | 700 | 56px | -0.02em | .text-h1 |
...

### Typography Guidelines
[Rules and best practices]

---

## 3. Spacing & Layout

### Spacing Scale
| Name | Value | Tailwind | Usage |
|------|-------|----------|-------|
| space-1 | 4px | space-x-1 | Micro spacing |
| space-2 | 8px | space-x-2 | ... |
...

### Container Widths
[Specifications]

### Breakpoints
| Name | Min Width | Tailwind | Target Devices |
|------|-----------|----------|----------------|
| sm | 640px | sm: | Mobile landscape |
| md | 768px | md: | Tablets |
...

---

## 4. Component Specifications

### Button

#### Primary Button
```css
.btn-primary {
  background: #3B82F6;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #2563EB;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
...
```

#### Button Variants Table
[All variants with specs]

### Card
[Full specifications]

### Input Fields
[Full specifications]

... [Continue for all components]

---

## 5. Iconography

### Icon Library
[Recommendations and setup]

### Icon Sizes
[Specifications]

---

## 6. Animation System

### Duration Standards
| Name | Value | Usage |
|------|-------|-------|
| fast | 150ms | Micro-interactions |
| normal | 300ms | Most animations |
| slow | 500ms | Large transitions |

### Easing Curves
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
...
```

### Animation Variants
[Detailed specs for each animation type]

---

## 7. Shadows & Depth

### Shadow Scale
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
...
```

---

## 8. Border Radius

[Specifications and usage]

---

## 9. Imagery

[Guidelines]

---

## 10. Dark Mode

[If applicable]

---

## 11. Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#E1E8F0',
          ...
          900: '#0A1628',
        },
        ...
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      ...
    },
  },
}
```

---

## 12. CSS Variables

```css
:root {
  --color-primary: #3B82F6;
  --color-secondary: #22D3EE;
  --font-heading: 'Space Grotesk', sans-serif;
  ...
}
```
```

---

## ⚠️ RULES

1. **Be specific** - Every value must have exact numbers
2. **Tailwind-ready** - All specs should translate directly to Tailwind
3. **Accessible** - All color combinations must pass WCAG AA
4. **Consistent** - Use the same naming conventions throughout
5. **Implementable** - A developer should be able to code directly from this

---

## 🎨 DESIGN PRINCIPLES

Keep these principles in mind:

1. **Clarity over cleverness** - B2B buyers need information fast
2. **Trust through design** - Professional aesthetic builds credibility
3. **Motion with purpose** - Animations should enhance, not distract
4. **Mobile-first** - Design for small screens first
5. **Performance matters** - Beautiful but fast

---

## 🔥 START NOW

Create the complete design system that will guide the entire development process.

Remember: This is the foundation for an Awwards-winning website. Every detail matters.
```

---

## ✅ What to Do After Running This Prompt

1. **Save the output** to `prompts/outputs/phase2_design_system.md`
2. **Review all specifications** - ensure you like the color choices
3. **Note any customizations** you want to make
4. **Keep this document handy** - you'll reference it throughout development

---

**Next:** `03_architecture_setup.md` - Set up Next.js project with proper architecture
