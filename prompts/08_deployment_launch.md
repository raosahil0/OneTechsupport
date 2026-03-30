# 🎯 Prompt 08: Deployment & Launch

**Phase:** 8 of 8  
**Role:** DevOps Engineer + Launch Strategist  
**Time:** 10-15 minutes  
**Output:** Complete deployment guide, launch checklist, monitoring setup, and maintenance plan

---

## 📋 COPY THE PROMPT BELOW INTO YOUR LLM:

```markdown
# ROLE: DevOps Engineer + Launch Strategist

You are a seasoned DevOps engineer and launch strategist who has deployed hundreds of production websites with:
- Zero-downtime deployments
- Automated CI/CD pipelines
- Comprehensive monitoring
- Rollback strategies
- Post-launch optimization

---

## 🎯 YOUR TASK

Create a complete deployment and launch plan for S'K One Tech Support's Next.js website.

This is the final phase that takes the website from development to production with:
1. Vercel deployment
2. CI/CD setup
3. Environment configuration
4. Pre-launch testing
5. Launch checklist
6. Post-launch monitoring
7. Maintenance plan

---

## 📊 PROJECT CONTEXT

**Framework:** Next.js 15+ (App Router)  
**Deployment:** Vercel  
**Domain:** [To be configured]  
**Previous Phases:** [Reference all previous outputs]

---

## 🚀 DEPLOYMENT DELIVERABLES

### 1. Vercel Setup Guide

#### Step 1: Create Vercel Account
```
1. Go to https://vercel.com
2. Sign up with GitHub
3. Install Vercel CLI (optional but recommended)
```

#### Step 2: Connect Repository
```
1. Click "Add New Project"
2. Import your GitHub repository
3. Select the correct repository
4. Configure project settings
```

#### Step 3: Project Configuration
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

#### Step 4: Environment Variables
```
# Production
NEXT_PUBLIC_SITE_URL=https://skonetech.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxx
API_SECRET_KEY=your-secret-key

# Preview (same as production for now)
NEXT_PUBLIC_SITE_URL=https://sk-one-tech-username.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Step 5: Deploy
```
1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Visit the preview URL
4. If all looks good, deploy to production
```

---

### 2. Domain Configuration

#### DNS Setup
```
# In your domain registrar (GoDaddy, Namecheap, etc.)

Type    Name    Value                   TTL
A       @       76.76.21.21            Auto
A       @       76.76.21.21            Auto
CNAME   www     cname.vercel-dns.com   Auto
```

#### Vercel Domain Settings
```
1. Go to Project Settings > Domains
2. Add your domain: skonetech.com
3. Add www subdomain: www.skonetech.com
4. Verify DNS configuration
5. Wait for SSL certificate (automatic)
```

#### Redirect www to Root
```typescript
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.skonetech.com' }],
        destination: 'https://skonetech.com/:path*',
        permanent: true,
      },
    ];
  },
};
```

---

### 3. CI/CD Pipeline

#### GitHub Actions Workflow
```yaml
# .github/workflows/ci.yml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run TypeScript check
        run: npx tsc --noEmit

      - name: Build
        run: npm run build

      - name: Run tests
        run: npm test

  deploy-preview:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy to Vercel Preview
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--preview'

  deploy-production:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy to Vercel Production
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

#### Vercel Secrets Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Add secrets
vercel secrets add VERCEL_TOKEN your-token
vercel secrets add VERCEL_ORG_ID your-org-id
vercel secrets add VERCEL_PROJECT_ID your-project-id
```

---

### 4. Pre-Launch Testing Checklist

#### Functional Testing
```markdown
## Pages
- [ ] Home page loads correctly
- [ ] Services page loads correctly
- [ ] Each service detail page loads
- [ ] Projects page loads correctly
- [ ] Each project detail page loads
- [ ] About page loads correctly
- [ ] Clients page loads correctly
- [ ] Contact page loads correctly

## Navigation
- [ ] All header links work
- [ ] All footer links work
- [ ] Mobile menu works
- [ ] Breadcrumbs work (if any)
- [ ] 404 page shows for invalid routes

## Forms
- [ ] Contact form submits
- [ ] Contact form validation works
- [ ] Contact form success message shows
- [ ] Contact form error handling works
- [ ] Feedback form submits
- [ ] Newsletter form submits

## Interactive Elements
- [ ] All buttons work
- [ ] All links work
- [ ] WhatsApp button works
- [ ] Phone links work (tel:)
- [ ] Email links work (mailto:)
- [ ] Social links work
- [ ] Carousel/slider works
- [ ] Filters work (projects)
- [ ] Modals/popups work (if any)

## Animations
- [ ] Scroll animations trigger
- [ ] Counter animations work
- [ ] Hover effects work
- [ ] Page transitions work
- [ ] Loading states show
```

#### Responsive Testing
```markdown
## Mobile (< 768px)
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13/14 (390px)
- [ ] iPhone Pro Max (428px)
- [ ] Android phones (360px, 412px)

## Tablet (768px - 1024px)
- [ ] iPad Portrait (768px)
- [ ] iPad Landscape (1024px)
- [ ] Surface Pro (912px)

## Desktop (> 1024px)
- [ ] Laptop (1366px)
- [ ] Desktop (1440px)
- [ ] Large Desktop (1920px)
- [ ] 4K (3840px)
```

#### Browser Testing
```markdown
## Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## Mobile Browsers
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Samsung Internet
- [ ] Firefox Mobile
```

#### Performance Testing
```markdown
## Lighthouse (Chrome DevTools)
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

## Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] TBT < 200ms

## PageSpeed Insights
- [ ] Mobile: 90+
- [ ] Desktop: 95+

## WebPageTest
- [ ] First View: B+ or better
- [ ] Repeat View: A
```

#### SEO Testing
```markdown
## Technical SEO
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] All images have alt text
- [ ] Sitemap.xml generates
- [ ] Robots.txt exists
- [ ] Canonical URLs set
- [ ] Schema.org markup validates

## Rich Results Test
- [ ] Organization schema validates
- [ ] LocalBusiness schema validates
- [ ] Service schema validates
- [ ] Review schema validates

## Tools
- [ ] Google Search Console: No errors
- [ ] Bing Webmaster Tools: Verified
- [ ] Google Rich Results Test: Pass
```

#### Accessibility Testing
```markdown
## Automated Testing
- [ ] Lighthouse Accessibility: 90+
- [ ] axe DevTools: No critical issues
- [ ] WAVE: No errors

## Manual Testing
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Skip to content link works
- [ ] Screen reader test (NVDA/VoiceOver)
- [ ] Color contrast passes
- [ ] Text resizing works
```

---

### 5. Launch Day Checklist

#### Pre-Launch (1 hour before)
```markdown
- [ ] All tests passing
- [ ] No console errors
- [ ] Analytics tracking verified
- [ ] Forms tested end-to-end
- [ ] Domain DNS propagated
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] Backup of current site (if migrating)
- [ ] Team notified of launch
```

#### Launch (Go Time)
```markdown
1. Deploy to production
   npm run deploy
   # or via Vercel dashboard

2. Verify deployment
   - Check build logs
   - Visit production URL
   - Test critical paths

3. DNS Switch (if changing domain)
   - Update nameservers
   - Update DNS records
   - Wait for propagation

4. SSL Verification
   - Check certificate valid
   - HTTPS redirects work
   - www redirects to root

5. Final Smoke Test
   - Home page loads
   - Contact form works
   - Phone/WhatsApp links work
```

#### Post-Launch (First 24 hours)
```markdown
- [ ] Monitor Vercel deployment logs
- [ ] Check Google Analytics real-time
- [ ] Test all forms receive data
- [ ] Monitor uptime (UptimeRobot)
- [ ] Check social sharing (OG images)
- [ ] Verify search console indexing
- [ ] Monitor Core Web Vitals
- [ ] Check error logs (Vercel)
```

---

### 6. Post-Launch Monitoring

#### Analytics Dashboard Setup
```typescript
// Create custom dashboard in GA4:
const DASHBOARD_METRICS = {
  traffic: {
    totalUsers: true,
    newUsers: true,
    sessions: true,
    pageViews: true,
  },
  engagement: {
    averageSessionDuration: true,
    bounceRate: true,
    pagesPerSession: true,
  },
  conversions: {
    contactFormSubmissions: true,
    whatsappClicks: true,
    phoneClicks: true,
    servicePageViews: true,
  },
  acquisition: {
    organicSearch: true,
    direct: true,
    social: true,
    referral: true,
  },
};
```

#### Uptime Monitoring
```
# Set up UptimeRobot (free):
1. Go to https://uptimerobot.com
2. Create account
3. Add new monitor:
   - Type: HTTPS
   - URL: https://skonetech.com
   - Interval: 5 minutes
   - Alert contacts: Your email

# Set up status page:
- Public status page URL
- Email/SMS alerts for downtime
```

#### Error Monitoring
```typescript
// app/layout.tsx
'use client';

import { useEffect } from 'react';

export function ErrorBoundary({ children }) {
  useEffect(() => {
    const errorHandler = (errorEvent: ErrorEvent) => {
      // Send to error tracking service
      console.error('Caught error:', errorEvent);
      
      // Example: Send to Sentry, LogRocket, etc.
      // Sentry.captureException(errorEvent.error);
    };

    window.addEventListener('error', errorHandler);
    
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  return <>{children}</>;
}
```

#### Performance Monitoring
```
# Vercel Analytics:
- Enable in Vercel dashboard
- Monitor Web Vitals
- Set up alerts for degradation

# Google Search Console:
- Submit sitemap
- Monitor Core Web Vitals report
- Check indexing status
```

---

### 7. Maintenance Plan

#### Daily Tasks
```markdown
- [ ] Check uptime monitoring
- [ ] Review analytics (quick glance)
- [ ] Check for form submissions
- [ ] Monitor error logs
```

#### Weekly Tasks
```markdown
- [ ] Review performance metrics
- [ ] Check Core Web Vitals
- [ ] Review top pages/traffic
- [ ] Check for broken links
- [ ] Review form submissions
- [ ] Backup database (if applicable)
```

#### Monthly Tasks
```markdown
- [ ] Full analytics review
- [ ] SEO audit (rankings, indexing)
- [ ] Content updates (if needed)
- [ ] Dependency updates (npm)
- [ ] Security audit
- [ ] Accessibility audit
- [ ] Performance audit
- [ ] Update testimonials/projects
```

#### Quarterly Tasks
```markdown
- [ ] Major design review
- [ ] User feedback collection
- [ ] A/B test planning
- [ ] Content strategy review
- [ ] Technical debt review
- [ ] Plan new features
```

---

### 8. Rollback Strategy

#### If Something Goes Wrong
```bash
# Vercel Instant Rollback:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Deployments
4. Find last stable deployment
5. Click "Promote to Production"

# Or via CLI:
vercel rollback
```

#### Emergency Contacts
```
Developer: [Your contact]
Backup Developer: [Contact]
Hosting Support: Vercel Support
Domain Registrar: [Support contact]
```

---

## 📝 OUTPUT FORMAT

Provide complete guide in this structure:

```markdown
# S'K One Tech Support - Deployment & Launch Guide

## 1. Vercel Deployment

### Step-by-Step Instructions
[Detailed steps]

### Environment Variables
```
# List all required env vars
```

### Deployment Commands
```bash
# CLI commands
```

---

## 2. Domain Setup

### DNS Configuration
[Records to add]

### SSL Setup
[Instructions]

---

## 3. CI/CD Pipeline

### GitHub Actions Workflow
```yaml
# Complete workflow
```

### Vercel Integration
[Setup steps]

---

## 4. Pre-Launch Testing

### Testing Checklist
[Complete checklist]

### Browser/Device Matrix
[Test combinations]

---

## 5. Launch Day

### Pre-Launch Tasks
[Checklist]

### Launch Sequence
[Step-by-step]

### Post-Launch Verification
[Checklist]

---

## 6. Monitoring Setup

### Analytics Configuration
[GA4 setup]

### Uptime Monitoring
[UptimeRobot setup]

### Error Tracking
[Implementation]

---

## 7. Maintenance Plan

### Daily Tasks
[List]

### Weekly Tasks
[List]

### Monthly Tasks
[List]

---

## 8. Troubleshooting

### Common Issues
[Problems and solutions]

### Emergency Procedures
[Steps]

---

## 9. Success Metrics

### Launch KPIs
[What to measure]

### First Week Goals
[Targets]
```

---

## ⚠️ RULES

1. **Complete instructions** - Assume beginner-level DevOps knowledge
2. **Production-ready** - All configurations for production
3. **Safety first** - Include rollback strategies
4. **Monitoring** - Comprehensive observability
5. **Documentation** - Clear, actionable steps

---

## 🎯 SUCCESS CRITERIA

After launch:

- ✅ Site live at production domain
- ✅ SSL certificate active
- ✅ All pages load correctly
- ✅ Forms submitting successfully
- ✅ Analytics tracking data
- ✅ Uptime monitoring active
- ✅ Core Web Vitals passing
- ✅ No critical errors

---

## 🔥 START NOW

Create the complete deployment and launch guide.

Remember: A smooth launch is the beginning of success, not the end. Plan for excellence.
```

---

## ✅ What to Do After Running This Prompt

1. **Save the output** to `prompts/outputs/phase8_deployment_launch.md`
2. **Follow the deployment steps** to deploy to Vercel
3. **Configure your domain** and DNS
4. **Run through testing checklist** thoroughly
5. **Set up monitoring** (analytics, uptime, errors)
6. **Execute launch checklist** on launch day
7. **Monitor post-launch** for 24-48 hours
8. **Celebrate!** 🎉

---

## 🎊 CONGRATULATIONS!

You've completed all 8 phases of the Awwards-winning Next.js migration!

**What you've built:**
- ✅ Research-backed design strategy
- ✅ Comprehensive design system
- ✅ Production-ready Next.js architecture
- ✅ Reusable component library
- ✅ Complete home page
- ✅ All inner pages
- ✅ SEO optimization
- ✅ Performance tuning
- ✅ Deployment and monitoring

**Next Steps:**
1. Submit to Awwwards
2. Set up Google Search Console
3. Start content marketing
4. Gather user feedback
5. Plan Phase 2 features

**Good luck with your launch!** 🚀
