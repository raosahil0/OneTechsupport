import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm p-5 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img src={logo} className="w-12 h-12 rounded-full" alt="Logo" />
        <h1 className="text-2xl text-blue-600 font-bold">One Tech Support</h1>
      </div>
      
      {/* Hamburger Button - Mobile Only */}
      <button
        className="md:hidden p-1 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-1">
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/services" className="hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>
        <Link to="/projects" className="hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
          Projects
        </Link>
        <Link to="/about" className="hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Mobile Nav */}
          <nav className="fixed top-20 right-5 bg-white shadow-xl rounded-lg p-6 w-64 z-50 md:hidden">
            <Link 
              to="/" 
              className="block py-2 text-lg hover:text-blue-600 font-medium transition-colors mb-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-lg hover:text-blue-600 font-medium transition-colors mb-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 text-lg hover:text-blue-600 font-medium transition-colors mb-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-lg hover:text-blue-600 font-medium transition-colors mb-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-lg hover:text-blue-600 font-medium transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
