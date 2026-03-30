# 🎯 Prompt 07: SEO & Performance

**Phase:** 7 of 8  
**Role:** SEO Specialist + Performance Engineer  
**Time:** 10-15 minutes  
**Output:** Complete SEO setup, metadata, performance optimizations, and analytics

---

## 📋 COPY THE PROMPT BELOW INTO YOUR LLM:

```markdown
# ROLE: SEO Specialist + Performance Engineer

You are an expert SEO strategist and performance engineer who has optimized websites to achieve:
- First page Google rankings for competitive keywords
- 95+ Lighthouse scores across all metrics
- Sub-2-second load times on 3G connections
- Top rankings on Core Web Vitals

---

## 🎯 YOUR TASK

Optimize S'K One Tech Support's Next.js website for:

1. **Search Engine Optimization (SEO)**
2. **Performance & Core Web Vitals**
3. **Analytics & Monitoring**
4. **Accessibility**

This will ensure the site ranks well, loads fast, and provides data for continuous improvement.

---

## 📊 PROJECT CONTEXT

**Framework:** Next.js 15+ (App Router)  
**Deployment:** Vercel  
**Target Market:** North India (Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana)  
**Keywords:** IT support, staffing agency, IT recruitment, manpower services

---

## 🔍 SEO DELIVERABLES

### 1. Metadata Strategy

Create comprehensive metadata for every page:

#### Home Page Metadata
```typescript
export const metadata = {
  // Basic
  title: "S'K One Tech Support | IT Services & Staffing Solutions",
  description: 'Leading IT support and staffing agency in Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana. Expert IT infrastructure, recruitment, and consulting services.',
  
  // Keywords
  keywords: [
    'IT support Jaipur',
    'staffing agency Gurugram',
    'IT recruitment Delhi',
    'manpower services Noida',
    'IT consulting Chandigarh',
    'technical support Neemrana',
    'hire developers India',
    'IT staffing company',
  ].join(', '),
  
  // Authors
  authors: [{ name: "S'K One Tech Support" }],
  
  // Canonical
  alternates: {
    canonical: 'https://skonetech.com/',
  },
  
  // Open Graph
  openGraph: {
    title: "S'K One Tech Support | Your Trusted IT Partner",
    description: 'Leading IT support and staffing agency in North India',
    url: 'https://skonetech.com/',
    siteName: "S'K One Tech Support",
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: "S'K One Tech Support - IT Services & Staffing",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "S'K One Tech Support",
    description: 'Your Trusted IT & Staffing Partner',
    images: ['/og-home.jpg'],
    creator: '@thekeda.r',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};
```

#### Services Page Metadata
```typescript
export const metadata = {
  title: 'IT Services & Staffing Solutions | S'K One Tech Support',
  description: 'Comprehensive IT support, manpower staffing, recruitment, and consulting services. Serving Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana.',
  // ... complete metadata
};
```

#### Each Service Detail Page
```typescript
// Dynamic metadata based on service
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  
  return {
    title: `${service.title} | S'K One Tech Support`,
    description: service.description,
    // ... complete metadata
  };
}
```

#### About, Projects, Clients, Contact Pages
- Unique metadata for each
- Location-specific keywords
- Service-specific descriptions

---

### 2. Structured Data (JSON-LD)

Implement schema.org structured data:

#### Organization Schema (Home Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "S'K One Tech Support",
  "url": "https://skonetech.com",
  "logo": "https://skonetech.com/logo.png",
  "description": "Leading IT support and staffing agency in North India",
  "foundingDate": "2023",
  "founders": [
    {
      "@type": "Person",
      "name": "Founder Name"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7678627526",
    "contactType": "Customer Service",
    "areaServed": ["IN"],
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Jaipur"
    },
    {
      "@type": "City",
      "name": "Gurugram"
    },
    {
      "@type": "City",
      "name": "Delhi"
    },
    {
      "@type": "City",
      "name": "Noida"
    },
    {
      "@type": "City",
      "name": "Chandigarh"
    },
    {
      "@type": "City",
      "name": "Neemrana"
    }
  ],
  "sameAs": [
    "https://instagram.com/thekeda.r",
    "https://wa.me/917678627526"
  ]
}
```

#### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "S'K One Tech Support",
  "image": "https://skonetech.com/og-image.jpg",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
```

#### Service Schema (Each Service Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "IT Support",
  "provider": {
    "@type": "Organization",
    "name": "S'K One Tech Support"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873"
    },
    "geoRadius": "500"
  },
  "description": "Complete IT infrastructure management and support",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Support Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hardware & Software Support"
        }
      }
    ]
  }
}
```

#### Review/Rating Schema (Clients Page)
```json
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "Organization",
    "name": "S'K One Tech Support"
  },
  "ratingValue": "4.8",
  "reviewCount": "50",
  "bestRating": "5",
  "worstRating": "1"
}
```

---

### 3. Sitemap

Create dynamic sitemap:

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skonetech.com';
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];
  
  // Dynamic service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
```

---

### 4. Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://skonetech.com/sitemap.xml',
  };
}
```

---

### 5. Open Graph Images

Create dynamic OG image generation:

```typescript
// app/api/og/route.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || "S'K One Tech Support";
  
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A1628',
          backgroundImage: 'linear-gradient(135deg, #0A1628 0%, #1E293B 100%)',
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 'bold', color: '#3B82F6', marginBottom: 20 }}>
          {title}
        </div>
        <div style={{ fontSize: 30, color: '#94A3B8' }}>
          Your Trusted IT & Staffing Partner
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

---

## ⚡ PERFORMANCE DELIVERABLES

### 1. Image Optimization

```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```

**Usage:**
```tsx
import Image from 'next/image';

<Image
  src="/team-member.jpg"
  alt="Team member"
  width={400}
  height={400}
  className="rounded-full"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

### 2. Font Optimization

```typescript
// app/layout.tsx
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-space-grotesk',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

### 3. Code Splitting & Lazy Loading

```typescript
// Dynamic imports for below-fold components
import dynamic from 'next/dynamic';

const Testimonials = dynamic(
  () => import('@/components/sections/Testimonials').then(mod => mod.Testimonials),
  { 
    ssr: false,
    loading: () => <Skeleton className="h-96" />
  }
);

const ContactForm = dynamic(
  () => import('@/components/forms/ContactForm'),
  { 
    ssr: false,
    loading: () => <Skeleton className="h-64" />
  }
);
```

---

### 4. Streaming & Suspense

```tsx
// app/page.tsx
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<Skeleton className="h-64" />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-96" />}>
        <ServicesPreview />
      </Suspense>
      {/* More sections */}
    </main>
  );
}
```

---

### 5. Caching Strategy

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=300',
          },
        ],
      },
    ];
  },
};
```

---

### 6. Performance Monitoring

```typescript
// app/layout.tsx
import { VercelAnalytics } from './VercelAnalytics';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

```typescript
// app/VercelAnalytics.tsx
'use client';

import { Analytics } from '@vercel/analytics/react';

export function VercelAnalytics() {
  return <Analytics />;
}
```

---

### 7. Core Web Vitals Targets

```typescript
// Performance targets to achieve:
{
  LCP: '< 2.5s',  // Largest Contentful Paint
  FID: '< 100ms', // First Input Delay
  CLS: '< 0.1',   // Cumulative Layout Shift
  TBT: '< 200ms', // Total Blocking Time
  FCP: '< 1.8s',  // First Contentful Paint
  TTI: '< 3.8s',  // Time to Interactive
  SpeedIndex: '< 3.4s',
  Lighthouse: '95+',
}
```

---

## 📊 ANALYTICS DELIVERABLES

### 1. Google Analytics 4 Setup

```typescript
// components/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const url = pathname + searchParams.toString();
    (window as any).gtag('config', gaId, {
      page_path: url,
    });
  }, [pathname, searchParams, gaId]);
  
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
```

---

### 2. Custom Event Tracking

```typescript
// lib/analytics.ts
export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData);
  }
}

// Usage examples:
export function trackContactFormSubmit(inquiryType: string) {
  trackEvent('contact_form_submit', { inquiry_type: inquiryType });
}

export function trackWhatsAppClick() {
  trackEvent('whatsapp_click', { source: 'floating_button' });
}

export function trackServiceClick(serviceName: string) {
  trackEvent('service_click', { service_name: serviceName });
}

export function trackPhoneClick() {
  trackEvent('phone_click', { number: '+917678627526' });
}
```

---

### 3. Conversion Tracking

```typescript
// Define conversion events:
const CONVERSIONS = {
  CONTACT_FORM: 'contact_form_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  SERVICE_INQUIRY: 'service_inquiry',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
};
```

---

## ♿ ACCESSIBILITY DELIVERABLES

### 1. Accessibility Checklist

```markdown
## WCAG 2.1 AA Compliance

### Perceivable
- [ ] All images have alt text
- [ ] All videos have captions
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] Color contrast ratio ≥ 3:1 for UI components
- [ ] Text can be resized to 200% without loss

### Operable
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Focus indicators visible
- [ ] Skip to main content link
- [ ] No content flashes more than 3 times

### Understandable
- [ ] Language attribute set (lang="en")
- [ ] Consistent navigation
- [ ] Clear error messages
- [ ] Form labels associated with inputs
- [ ] Instructions provided for complex forms

### Robust
- [ ] Valid HTML
- [ ] ARIA attributes used correctly
- [ ] Name, role, value for custom components
- [ ] Compatible with assistive technologies
```

---

### 2. Accessibility Testing

```bash
# Install axe-core for testing
npm install -D @axe-core/react

# Run accessibility tests
npm run test:a11y
```

---

## 📝 OUTPUT FORMAT

Provide complete code in this structure:

```markdown
# S'K One Tech Support - SEO & Performance Guide

## 1. Metadata Implementation

### app/page.tsx (Home Page Metadata)
```typescript
export const metadata = {
  // Complete metadata object
};
```

### app/services/page.tsx
```typescript
export const metadata = {
  // Services page metadata
};
```

[Continue for all pages]

---

## 2. Structured Data

### components/seo/JsonLd.tsx
```tsx
// JSON-LD schema components
```

### app/layout.tsx (Organization Schema)
```tsx
// Script tag with JSON-LD
```

---

## 3. Sitemap & Robots

### app/sitemap.ts
```typescript
// Complete sitemap generation
```

### app/robots.ts
```typescript
// Robots configuration
```

---

## 4. Open Graph Images

### app/api/og/route.tsx
```tsx
// Dynamic OG image generation
```

---

## 5. Performance Optimizations

### next.config.js
```js
// Image optimization, caching, headers
```

### app/layout.tsx (Fonts)
```tsx
// Font optimization
```

### Components with lazy loading
```tsx
// Dynamic imports
```

---

## 6. Analytics Setup

### components/GoogleAnalytics.tsx
```tsx
// GA4 implementation
```

### lib/analytics.ts
```typescript
// Event tracking functions
```

---

## 7. Accessibility

### Accessibility audit results
[Checklist with status]

### ARIA implementations
[Examples]

---

## 8. Performance Targets

### Lighthouse scores to achieve
[Targets]

### Core Web Vitals
[Metrics]

---

## 9. Testing Commands

### How to test performance
```bash
npm run build
npm run start
# Open http://localhost:3000
# Run Lighthouse in Chrome DevTools
```

### How to test SEO
```bash
# Use Google Rich Results Test
# Use Google Search Console
```

### How to test accessibility
```bash
# Use axe DevTools
# Use Lighthouse accessibility audit
```
```

---

## ⚠️ RULES

1. **Complete implementation** - No placeholders
2. **Next.js 15 conventions** - App Router patterns
3. **Production-ready** - All code deployable
4. **Tested patterns** - Use proven approaches
5. **Documentation** - Explain how to use each feature

---

## 🎯 SUCCESS METRICS

After implementation:

- ✅ Lighthouse score: 95+
- ✅ LCP: < 2.5s
- ✅ CLS: < 0.1
- ✅ All pages have unique metadata
- ✅ Structured data validates
- ✅ Sitemap generated
- ✅ Analytics tracking works
- ✅ Accessibility score: 100

---

## 🔥 START NOW

Create complete SEO and performance optimization implementation.

Remember: Fast, discoverable websites win. This is what separates good from great.
```

---

## ✅ What to Do After Running This Prompt

1. **Save the output** to `prompts/outputs/phase7_seo_performance.md`
2. **Implement all metadata** on each page
3. **Add structured data** (JSON-LD)
4. **Set up analytics** (GA4, Vercel)
5. **Run Lighthouse** and optimize
6. **Test accessibility** with axe DevTools
7. **Verify sitemap** generates correctly
8. **Commit to git** once satisfied

---

**Next:** `08_deployment_launch.md` - Final deployment, testing, and launch checklist
