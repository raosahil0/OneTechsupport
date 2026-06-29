import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-all relative py-1.5 ${
      isActive
        ? "text-brand-blue"
        : "text-gray-600 hover:text-brand-blue"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3.5"
          : "bg-white border-b border-gray-150 py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              src={logo}
              className="w-11 h-11 rounded-full border-2 border-transparent group-hover:border-brand-blue/30 transition-all duration-300"
              alt="One Tech Support Logo"
            />
          </div>
          <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-700 tracking-tight group-hover:opacity-90 transition-opacity">
            One Tech Support
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-brand-blue hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow shadow-sm flex items-center gap-1.5"
          >
            Get Support <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="md:hidden p-1.5 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop Blur overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Drawer container */}
          <nav className="fixed top-20 right-6 left-6 bg-white border border-gray-150 shadow-2xl rounded-2xl p-6 z-50 md:hidden flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive ? "bg-blue-50 text-brand-blue" : "text-gray-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-gray-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-gray-700 hover:bg-slate-50 hover:text-brand-blue"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive ? "bg-blue-50 text-brand-blue" : "text-gray-700 hover:bg-slate-50 hover:text-brand-blue"
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
                  isActive ? "bg-blue-50 text-brand-blue" : "text-gray-700 hover:bg-slate-50 hover:text-brand-blue"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>

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
