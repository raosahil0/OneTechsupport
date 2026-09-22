import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Lazy-loaded secondary pages for optimal code splitting
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const ITSupport = lazy(() => import("../pages/ITSupport"));
const ManagedITServices = lazy(() => import("../pages/ManagedITServices"));
const NetworkSupport = lazy(() => import("../pages/NetworkSupport"));
const ServerSupport = lazy(() => import("../pages/ServerSupport"));
const PrinterSupport = lazy(() => import("../pages/PrinterSupport"));
const ComputerRepair = lazy(() => import("../pages/ComputerRepair"));
const CyberSecurity = lazy(() => import("../pages/CyberSecurity"));
const AMC = lazy(() => import("../pages/AMC"));
const WebAppDevelopment = lazy(() => import("../pages/WebAppDevelopment"));
const SoftwareDevelopment = lazy(() => import("../pages/SoftwareDevelopment"));
const TechSupport = lazy(() => import("../pages/TechSupport"));
const Projects = lazy(() => import("../pages/Projects"));
const Clients = lazy(() => import("../pages/Clients"));
const Contact = lazy(() => import("../pages/Contact"));
const Admin = lazy(() => import("../pages/Admin"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Minimal, non-intrusive fallback spinner for secondary routes
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-slate-50">
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 border-2 border-brand-blue/15 rounded-full" />
      <div className="absolute inset-0 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
    </div>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Dedicated Specialized SEO Service Landings */}
        <Route path="/app-and-web-development" element={<WebAppDevelopment />} />
        <Route path="/web-development" element={<WebAppDevelopment />} />
        <Route path="/app-development" element={<WebAppDevelopment />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/tech-support" element={<TechSupport />} />
        <Route path="/it-support" element={<ITSupport />} />
        <Route path="/managed-it-services" element={<ManagedITServices />} />
        <Route path="/network-support" element={<NetworkSupport />} />
        <Route path="/server-support" element={<ServerSupport />} />
        <Route path="/printer-support" element={<PrinterSupport />} />
        <Route path="/computer-repair" element={<ComputerRepair />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/annual-maintenance-contract" element={<AMC />} />

        {/* Portal, Case Studies & Content */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 404 Not Found Handling */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
