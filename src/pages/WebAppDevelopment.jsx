import { Smartphone, Globe, Code2, Layout, Zap, Rocket } from "lucide-react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { pageSeo } from "../seo/pageSeo";

export default function WebAppDevelopment() {
  return (
    <ServicePageTemplate
      seo={pageSeo.appWebDevelopment}
      serviceName="App & Web Development"
      icon={Smartphone}
      h1Title="Web & Mobile App Development Services | React, Flutter & Next.js"
      h1Subtitle="Engineering high-speed responsive web applications, progressive web apps (PWA), and cross-platform iOS & Android mobile applications designed to scale."
      overviewText="In a digital-first market, slow loading web interfaces and buggy mobile apps cost real revenue. S'K ONE Tech Support engineers build modern, ultra-responsive web applications and cross-platform mobile apps using React, Next.js, Flutter, and React Native. From corporate portals and client dashboards to high-velocity e-commerce and mobile utilities, we ensure pixel-perfect design, lighthouse performance scores above 95+, and secure backend API connections."
      featuresTitle="Web & Mobile Engineering Capabilities"
      features={[
        {
          title: "Custom React & Next.js Web Applications",
          desc: "Server-side rendered (SSR) and statically generated (SSG) web applications with instant page transitions, dynamic caching, and mobile responsiveness."
        },
        {
          title: "Cross-Platform Mobile Apps (Flutter & React Native)",
          desc: "Native-performance iOS and Android apps built from a single clean codebase, slashing development timelines and maintenance overhead by 50%."
        },
        {
          title: "Progressive Web Apps (PWA) & Offline Capability",
          desc: "Offline data caching, service workers, push notifications, and home screen installability that deliver native app feel directly in mobile browsers."
        },
        {
          title: "RESTful & GraphQL API Architecture",
          desc: "High-throughput JSON microservices, secure token authentication (JWT/OAuth2), webhook handling, and real-time WebSocket communication."
        },
        {
          title: "UI/UX Design Systems & Tailwind CSS",
          desc: "Accessible, dark-mode ready interfaces, modern design tokens, intuitive user onboarding journeys, and brand-aligned component libraries."
        },
        {
          title: "Cloud Deployment & CI/CD Pipelines",
          desc: "Automated test suites, GitHub Actions deployments, Docker containerization, and global edge delivery via Vercel, AWS, and Cloudflare."
        }
      ]}
      specifications={[
        { label: "Frontend Tech", value: "React 19, Next.js, Vite, TypeScript" },
        { label: "Mobile Tech", value: "Flutter, Dart, React Native, Swift, Kotlin" },
        { label: "Styling & UI", value: "Tailwind CSS, Framer Motion, Radix UI" },
        { label: "Cloud & APIs", value: "Node.js, Supabase, AWS, Cloudflare Edge" }
      ]}
      processSteps={[
        {
          title: "Architecture & Wireframing",
          desc: "Mapping user flows, technical data schemas, component hierarchies, and API endpoints."
        },
        {
          title: "Sprint-Based Agile Development",
          desc: "Two-week agile iterations with live staging previews and automated test coverage."
        },
        {
          title: "Cross-Device & QA Testing",
          desc: "Validating performance across iPhone, Android, tablets, and modern desktop browsers."
        },
        {
          title: "Production Release & App Store Submission",
          desc: "Publishing to Apple App Store, Google Play Store, and global edge CDNs with telemetry."
        }
      ]}
      faqs={[
        {
          q: "Should our business build a native app or cross-platform Flutter app?",
          a: "For 90% of business use cases, cross-platform frameworks like Flutter or React Native provide native 60fps performance while compiling to both iOS and Android from one codebase. This cuts development costs and release timelines in half."
        },
        {
          q: "How fast do your React web applications load?",
          a: "We architect web apps with aggressive code splitting, modern WebP/AVIF asset optimization, and edge caching to achieve First Contentful Paint (FCP) under 0.8 seconds and 95+ Lighthouse scores."
        },
        {
          q: "Do you handle App Store and Google Play submissions?",
          a: "Yes. We manage the end-to-end publishing process, including developer account setup, privacy policy compliance, app store screenshots, and review approvals."
        },
        {
          q: "Can you modernize an existing legacy website or outdated web portal?",
          a: "Yes. We can incrementally refactor legacy applications into modern React/Vite interfaces or migrate monolithic backends into scalable microservices."
        }
      ]}
      relatedServices={[
        {
          title: "Software Development",
          path: "/software-development",
          desc: "Enterprise ERP/CRM systems, backend databases, and custom business logic."
        },
        {
          title: "Managed IT Services",
          path: "/managed-it-services",
          desc: "24/7 cloud server monitoring, database maintenance, and backups."
        },
        {
          title: "Cybersecurity Services",
          path: "/cyber-security",
          desc: "Web application penetration testing, OWASP audits, and API security."
        },
        {
          title: "Tech Support Services",
          path: "/tech-support",
          desc: "Continuous technical helpdesk and application uptime monitoring."
        }
      ]}
    />
  );
}
