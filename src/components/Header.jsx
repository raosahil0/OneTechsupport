import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User } from "lucide-react";
import logoWebp from "../assets/logo.webp";
import logoPng from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  const location = useLocation();

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
    window.addEventListener("scroll", handleScroll);
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
        ? "text-brand-blue"
        : "text-slate-600 hover:text-brand-blue"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3"
          : "bg-white/40 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-1 bg-brand-blue transition-all duration-100 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group py-0.5" aria-label="SKONE Tech Support Home">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img
              src={logoPng}
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
            className="border border-brand-blue/30 hover:border-brand-blue text-brand-blue hover:bg-blue-50 text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5" /> {currentUser ? "Dashboard" : "Client Portal"}
          </Link>
          <Link
            to="/contact"
            className="bg-brand-blue hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow shadow-sm flex items-center gap-1.5"
          >
            Get Support <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="md:hidden p-1.5 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-slate-700" />
          ) : (
            <Menu className="w-6 h-6 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <nav 
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className="fixed top-20 right-6 left-6 bg-white border border-gray-150 shadow-2xl rounded-2xl p-6 z-50 md:hidden flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive ? "bg-blue-50 text-brand-blue" : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>

            <Link
              to={currentUser ? "/dashboard" : "/login"}
              className="border border-brand-blue/30 hover:border-brand-blue text-brand-blue hover:bg-blue-50 font-bold py-3.5 rounded-xl text-center shadow-sm transition-all flex items-center justify-center gap-2"
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
