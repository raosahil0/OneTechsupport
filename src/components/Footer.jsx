import { Mail, Phone, MapPin, Share2, Send } from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Mock newsletter signup
    alert("Thank you for subscribing! (Mock)");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-blue">
              One Tech Support
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing top-tier technical support and innovative IT solutions
              for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/clients"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  IT Support
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Manpower Support
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Hiring Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <Mail className="inline w-4 h-4 mr-2 text-gray-400" />
                allsolution.1402@gmail.com
              </p>
              <p>
                <Phone className="inline w-4 h-4 mr-2 text-gray-400" />
                +91 7678627526
              </p>
              <p>
                <MapPin className="inline w-4 h-4 mr-2 text-gray-400" />
                Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com/thekeda.r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-brand-blue transition-colors duration-200"
              >
                <Share2 className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://wa.me/917678627526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-brand-blue transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for tech tips and updates.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-brand-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
          <p>&copy; 2026 S'K One Tech Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
