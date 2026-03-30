# 🏆 S'K One Tech Support - Website Project

> **Current:** React + Vite Website  
> **Next:** Awwards-Winning Next.js 15+ Migration

---

## 📊 Project Overview

**S'K One Tech Support** is a comprehensive IT services and staffing agency website serving clients across North India (Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana).

### Business Services
- 🖥️ **IT Support** - Infrastructure, networking, troubleshooting
- 👥 **Manpower Support** - Temporary staffing, backup staff
- 🔍 **IT Recruitment** - Developers, engineers, system admins
- 📋 **Non-IT Hiring** - Administrative, sales, operations
- 💼 **Consulting Services** - Digital strategy, automation
- 🎓 **Training & Development** - Technical training, certifications

### Key Stats
- **50+** Clients Served
- **120+** Projects Completed
- **3+** Years Experience

---

## 📁 Current Project Structure (Phase 1)

```
OneTechsupport/
├── src/
│   ├── App.jsx              # Main app with React Router
│   ├── main.jsx             # Entry point
│   ├── main.css             # Tailwind CSS
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   └── FeedbackForm.jsx # Feedback collection
│   └── pages/
│       ├── Home.jsx         # Landing page
│       ├── Services.jsx     # Services overview
│       ├── Projects.jsx     # Portfolio showcase
│       ├── About.jsx        # Company info
│       ├── Clients.jsx      # Testimonials
│       └── Contact.jsx      # Contact form
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🚀 Current Tech Stack (Phase 1)

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.4 | UI Framework |
| React Router DOM | 7.13.2 | Routing |
| Tailwind CSS | 4.2.2 | Styling |
| Vite | 8.0.3 | Build Tool |
| Lucide React | 1.7.0 | Icons |

### Current Features
✅ Responsive Design (Mobile-First)  
✅ React Router Navigation  
✅ Contact Form with localStorage  
✅ Feedback Collection System  
✅ Smooth Scroll Animations  
✅ WhatsApp Integration  
✅ Social Media Links  

---

## 🎯 Next.js Migration (Phase 2)

We're migrating to **Next.js 15+** to create an **Awwards-winning** digital experience with:

### Goals
- 🏆 Award-worthy design
- ⚡ 95+ Lighthouse scores
- 📱 Perfect mobile experience
- 🔍 SEO optimization
- ♿ WCAG 2.1 AA accessibility
- 🚀 Vercel deployment

### New Tech Stack
| Technology | Purpose |
|------------|---------|
| Next.js 15+ | Framework (App Router) |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| React Hook Form | Forms |
| Zod | Validation |
| Vercel Analytics | Performance monitoring |

---

## 📋 Migration Prompt Series

A complete **8-phase role-based prompt series** is available in the `/prompts/` folder for AI-assisted migration.

### Prompt Files

| # | Prompt | Purpose | Time |
|---|--------|---------|------|
| 01 | `01_research_analysis.md` | Business research & theme strategy | 5-10 min |
| 02 | `02_design_system.md` | Colors, typography, components | 10-15 min |
| 03 | `03_architecture_setup.md` | Next.js project setup | 10-15 min |
| 04 | `04_core_components.md` | Reusable UI components | 15-20 min |
| 05 | `05_home_page.md` | Complete home page | 20-30 min |
| 06 | `06_inner_pages.md` | Services, Projects, About, Contact | 20-30 min |
| 07 | `07_seo_performance.md` | SEO, performance, analytics | 10-15 min |
| 08 | `08_deployment_launch.md` | Deployment & launch | 10-15 min |

### How to Use the Prompts

1. **Start Here:** Open `prompts/QUICK_START.md`
2. **Follow Order:** Run prompts 01 → 08 sequentially
3. **Save Outputs:** Save LLM responses to `prompts/outputs/`
4. **Build:** Implement the generated code

**Total Time:** 90-150 minutes

---

## 🛠️ Development (Current Phase 1)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Commands

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# CSS production build
npm run build-css-prod

# Preview build
npm run preview
```

### Project Structure

```
/
├── src/
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   ├── main.css             # Tailwind styles
│   ├── components/
│   │   ├── Header.jsx       # Site header with nav
│   │   ├── Footer.jsx       # Site footer
│   │   └── FeedbackForm.jsx # Feedback collection
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Services.jsx     # Services showcase
│   │   ├── Projects.jsx     # Portfolio grid
│   │   ├── About.jsx        # Company info
│   │   ├── Clients.jsx      # Testimonials
│   │   └── Contact.jsx      # Contact form
│   └── assets/
│       └── logo.png         # Company logo
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 📄 Documentation

| Document | Purpose |
|----------|---------|
| `README.md` | This file - project overview |
| `Plan.md` | Frontend-first development strategy |
| `Prompt.md` | Original AI prompt for Phase 1 |
| `TODO.md` | Task list and roadmap |
| `AWWARDS_MIGRATION_PROMPT.md` | Comprehensive migration guide |
| `prompts/QUICK_START.md` | Quick start for prompt series |

---

## 🎨 Design System (Current)

### Colors
```css
--brand-blue: #1e40af
--brand-dark: #0f172a
```

### Typography
- **Font:** System fonts (sans-serif)
- **Headings:** Bold, extra-bold weights
- **Body:** Regular weight

### Components
- Buttons (Primary, Secondary)
- Cards (Default, Elevated)
- Forms (Input, Select, Textarea)
- Navigation (Header, Footer)

---

## 📱 Pages & Routes

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | ✅ Complete |
| `/services` | Services | ✅ Complete |
| `/projects` | Projects | ✅ Complete |
| `/about` | About | ✅ Complete |
| `/clients` | Clients/Testimonials | ✅ Complete |
| `/contact` | Contact | ✅ Complete |

---

## 🔧 Configuration Files

### package.json
```json
{
  "name": "one",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-router-dom": "^7.13.2",
    "lucide-react": "^1.7.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.0.1",
    "tailwindcss": "^4.2.2",
    "vite": "^8.0.3"
  }
}
```

---

## 📞 Contact Information

**S'K One Tech Support**

- 📱 **Phone:** +91 7678627526
- 📧 **Email:** allsolution.1402@gmail.com
- 📷 **Instagram:** [@thekeda.r](https://instagram.com/thekeda.r)
- 💬 **WhatsApp:** [Chat Now](https://wa.me/917678627526)

### Service Areas
📍 Jaipur | Gurugram | Delhi | Noida | Chandigarh | Neemrana

---

## 🚀 Deployment

### Current (Phase 1)
```bash
# Build for production
npm run build

# Deploy dist/ folder to:
# - Vercel
# - Netlify
# - GitHub Pages
```

### Next (Phase 2 - Next.js)
```bash
# Deploy to Vercel
vercel --prod

# Or via Vercel Dashboard
# Import GitHub repository
# Auto-deploy on push
```

---

## 📈 Roadmap

### Phase 1 - Core Website ✅
- [x] Home page
- [x] Services page
- [x] Projects page
- [x] About page
- [x] Contact page
- [x] Clients/Testimonials page
- [x] Feedback system
- [x] Mobile responsive

### Phase 2 - Next.js Migration 🚧
- [ ] Research & analysis
- [ ] Design system
- [ ] Next.js setup
- [ ] Component library
- [ ] Home page
- [ ] Inner pages
- [ ] SEO optimization
- [ ] Deployment

### Phase 3 - Backend Integration (Future)
- [ ] Database (PostgreSQL/MongoDB)
- [ ] API routes
- [ ] Admin panel
- [ ] CMS integration
- [ ] User authentication

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

## 📄 License

ISC © 2026 S'K One Tech Support

---

## 🙏 Acknowledgments

- **Design Inspiration:** Awwwards, Stripe, Linear, Vercel
- **Icons:** Lucide React
- **Framework:** React, Next.js
- **Styling:** Tailwind CSS

---

## 📞 Support

For questions or issues:
- 📧 Email: allsolution.1402@gmail.com
- 📱 Phone: +91 7678627526
- 💬 WhatsApp: [Chat Now](https://wa.me/917678627526)

---

**Last Updated:** March 30, 2026  
**Current Version:** 1.0.0 (Phase 1)  
**Next Version:** 2.0.0 (Next.js Migration)
