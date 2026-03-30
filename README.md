# S'K One Tech Support Website

## Phase 1 - Core Website

A responsive business website for IT support and staffing services.

### Features
- **Home Page**: Hero section, services overview, testimonials, about, contact
- **Services Page**: Detailed service offerings
- **Projects Page**: Portfolio of completed projects
- **About Page**: Company information and team
- **Contact Page**: Contact form with local storage
- **Feedback System**: External feedback collection

### Technologies Used
- **HTML5** (semantic structure)
- **TailwindCSS** (via CDN + custom config for future builds)
- **Vanilla JavaScript** (ES6+ with class-based architecture)
- **Local Storage** (for contact forms - Phase 1)

### TailwindCSS Setup
- **CDN Version**: Currently using `https://cdn.tailwindcss.com` for immediate development
- **Config File**: `tailwind.config.js` with custom animations and colors
- **Source CSS**: `main.css` with Tailwind directives and custom styles
- **Build Ready**: Scripts configured for production CSS compilation

### Build Commands
```bash
npm run dev          # Watch mode for development
npm run build-css-prod  # Production build with minification
```

### Architecture
- **Separation of Concerns**: CSS in `app.css`, JS in `index.js`
- **Modular JavaScript**: Class-based App structure with separate modules
- **Responsive Design**: Mobile-first with TailwindCSS
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

### JavaScript Features
- **Form Validation**: Client-side validation with user feedback
- **Async Operations**: Simulated async for future API integration
- **Intersection Observer**: Smooth scroll animations
- **Error Handling**: Graceful error messages
- **Loading States**: User feedback during form submission
```
/
├── index.html          # Home page
├── services.html       # Services page
├── projects.html       # Projects portfolio
├── about.html          # About us page
├── contact.html        # Contact page
├── main.css            # Tailwind CSS source with directives
├── app.css             # Custom styles (animations, utilities)
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Node.js dependencies and scripts
├── index.js            # Main app logic (class-based, modular)
├── README.md           # Documentation
├── dist/               # Build output directory
├── assets/
│   └── logo.png        # Company logo
└── components/
    └── Pages/
        ├── feedback.html   # Feedback form
        └── thankyou.html   # Thank you page
```

### How to Run
1. Open any `.html` file in your web browser
2. Navigate through the pages using the top menu
3. Fill out the contact form (data stored locally)
4. Use the feedback form for reviews

### JavaScript Integration
- All pages load `index.js` for consistent functionality
- Smooth scrolling, animations, and form handling work across all pages
- Contact form validation and local storage work on contact.html

### Development Notes
- **Phase 1**: Frontend complete with local storage
- **Phase 2**: Will integrate SQLite database
- Mobile-first responsive design
- Modern UI with dark theme

### Contact Form
- Stores submissions in browser localStorage
- Form validation included
- Success message displayed

### Next Steps (Phase 2)
- Set up Node.js server
- Integrate SQLite database
- Replace localStorage with database storage
- Add admin panel for managing contacts/feedback