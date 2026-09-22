import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User } from "lucide-react";
import logoWebp from "../assets/logo.webp";
import logoPng from "../assets/logo.png";
import logoDarkBgWebp from "../assets/logo-dark-bg.webp";
import logoDarkBgPng from "../assets/logo-dark-bg.png";

// Routes that feature a dark slate-950 hero section
const DARK_HERO_ROUTES = [
  "/",
  "/it-support",
  "/managed-it-services",
  "/network-support",
  "/server-support",
  "/printer-support",
  "/computer-repair",
  "/cyber-security",
  "/annual-maintenance-contract",
  "/app-and-web-development",
  "/web-development",
  "/app-development",
  "/software-development",
  "/tech-support"
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  const location = useLocation();

  // Any individual article post under /blog/:slug is also a dark hero page
  const isArticlePost = location.pathname.startsWith("/blog/") && location.pathname !== "/blog";
  const isDarkHero = DARK_HERO_ROUTES.includes(location.pathname) || isArticlePost;

  // Close mobile drawer whenever route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        // Only load Supabase SDK if an active session key exists in localStorage
        const hasSession = Object.keys(localStorage).some(
          (k) => k.includes("auth-token") || k.includes("supabase")
        );
        if (hasSession) {
          const { getCurrentClient } = await import("../services/databaseService");
          const user = await getCurrentClient();
          setCurrentUser(user);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      }
    };
    checkUser();
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-all relative py-1.5 ${
      isActive
        ? isDarkHero
          ? "text-blue-400 font-bold"
          : "text-brand-blue font-bold"
        : isDarkHero
          ? "text-slate-300 hover:text-white"
          : "text-slate-600 hover:text-brand-blue"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkHero
          ? isScrolled
            ? "bg-slate-950/90 backdrop-blur-md shadow-2xl border-b border-slate-800/80 py-3"
            : "bg-slate-950/70 backdrop-blur-md border-b border-slate-800/40 py-4.5"
          : isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/40 py-4.5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className={`absolute top-0 left-0 h-1 transition-all duration-100 ease-out z-50 ${
          isDarkHero
            ? "bg-gradient-to-r from-blue-500 via-indigo-400 to-teal-400"
            : "bg-brand-blue"
        }`}
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo - Automatically uses dark-bg variant for dark hero pages */}
        <Link to="/" className="flex items-center group py-0.5" aria-label="SKONE Tech Support Home">
          <picture>
            <source srcSet={isDarkHero ? logoDarkBgWebp : logoWebp} type="image/webp" />
            <img
              src={isDarkHero ? logoDarkBgPng : logoPng}
              width="168"
              height="48"
              fetchPriority="high"
              decoding="async"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              alt="SKONE Tech Support Logo"
            />
          </picture>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Insights
          </NavLink>
          <NavLink to="/clients" className={navLinkClass}>
            Reviews
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to={currentUser ? "/dashboard" : "/login"}
            className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer ${
              isDarkHero
                ? "border border-slate-750 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white"
                : "border border-brand-blue/30 hover:border-brand-blue text-brand-blue hover:bg-blue-50"
            }`}
          >
            <User className="w-3.5 h-3.5" /> {currentUser ? "Dashboard" : "Client Portal"}
          </Link>
          <Link
            to="/contact"
            className="bg-brand-blue hover:bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            Get Support <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className={`md:hidden p-1.5 focus:outline-none rounded-lg transition-colors cursor-pointer ${
            isDarkHero
              ? "text-slate-200 hover:bg-slate-800/80"
              : "text-slate-700 hover:bg-gray-100"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <nav 
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className={`fixed top-20 right-6 left-6 shadow-2xl rounded-2xl p-6 z-50 md:hidden flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 ${
              isDarkHero
                ? "bg-slate-900/95 border border-slate-800 text-white backdrop-blur-md"
                : "bg-white/95 border border-gray-150 text-slate-900 backdrop-blur-md"
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive
                    ? isDarkHero ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-brand-blue"
                    : isDarkHero ? "text-slate-200 hover:bg-slate-800/60" : "text-slate-700 hover:bg-slate-50"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive
                    ? isDarkHero ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-brand-blue"
                    : isDarkHero ? "text-slate-200 hover:bg-slate-800/60" : "text-slate-700 hover:bg-slate-50"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive
                    ? isDarkHero ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-brand-blue"
                    : isDarkHero ? "text-slate-200 hover:bg-slate-800/60" : "text-slate-700 hover:bg-slate-50"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive
                    ? isDarkHero ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-brand-blue"
                    : isDarkHero ? "text-slate-200 hover:bg-slate-800/60" : "text-slate-700 hover:bg-slate-50"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </NavLink>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive
                    ? isDarkHero ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-brand-blue"
                    : isDarkHero ? "text-slate-200 hover:bg-slate-800/60" : "text-slate-700 hover:bg-slate-50"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive
                    ? isDarkHero ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-brand-blue"
                    : isDarkHero ? "text-slate-200 hover:bg-slate-800/60" : "text-slate-700 hover:bg-slate-50"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive
                    ? isDarkHero ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-brand-blue"
                    : isDarkHero ? "text-slate-200 hover:bg-slate-800/60" : "text-slate-700 hover:bg-slate-50"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>

            <Link
              to={currentUser ? "/dashboard" : "/login"}
              className={`font-bold py-3.5 rounded-xl text-center shadow-sm transition-all flex items-center justify-center gap-2 ${
                isDarkHero
                  ? "border border-slate-700 bg-slate-800/80 text-white"
                  : "border border-brand-blue/30 text-brand-blue hover:bg-blue-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-4 h-4" /> {currentUser ? "Client Dashboard" : "Client Portal Login"}
            </Link>

            <Link
              to="/contact"
              className="bg-brand-blue text-white font-bold py-3.5 rounded-xl text-center shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Support <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
