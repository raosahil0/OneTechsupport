import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

// Lazy loaded secondary page components
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Clients = lazy(() => import("./pages/Clients"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Blog = lazy(() => import("./pages/Blog"));

// Sleek loading screen for suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-slate-50">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-3 border-brand-blue/10 rounded-full"></div>
      <div className="absolute inset-0 border-3 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-slate-50 text-gray-900 min-h-screen flex flex-col justify-between">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-xl focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="flex-1 flex flex-col">
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex="-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </Suspense>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
