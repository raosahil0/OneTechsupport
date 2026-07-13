import { Mail, Phone, MapPin, Share2, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { saveLead } from "../services/databaseService";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterMessage("");

    try {
      await saveLead({ email, source: "newsletter" });
      setNewsletterMessage("Subscribed successfully! Thank you.");
      setEmail("");
    } catch (error) {
      console.error("Failed to subscribe:", error);
      setNewsletterMessage("Error subscribing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 border-t border-slate-900 font-sans">
      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Column 1: Company Profile */}
        <div className="lg:col-span-2 space-y-5">
          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            One Tech Support
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Secure Cloud Solutions, Enterprise IT Support & Custom Software Engineering. We deliver SLA-backed managed systems designed to scale tech operations for modern enterprises.
          </p>
          <div className="space-y-2.5 text-xs text-slate-400 pt-2">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
              <a href="mailto:skonetechsupport@gmail.com" className="hover:text-white transition-colors">skonetechsupport@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
              <a href="tel:+917678627526" className="hover:text-white transition-colors">+91 7678627526</a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
              <span>Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana</span>
            </p>
          </div>
        </div>

        {/* Column 2: Core Services */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Services</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link to="/services" className="hover:text-white transition-colors">Custom Development</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Managed IT Support</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Manpower Staffing</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">IT Recruitment</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Non-IT Hiring</Link></li>
          </ul>
        </div>

        {/* Column 3: Industries We Serve */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Industries</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link to="/about" className="hover:text-white transition-colors">Healthcare</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Finance & Banking</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Government Sector</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Retail & Logistics</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Tech Startups</Link></li>
          </ul>
        </div>

        {/* Column 4: Quick Connections & Socials */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Quick Links</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Projects Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Latest Insights</Link></li>
            <li><Link to="/clients" className="hover:text-white transition-colors">Clients Portal</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Get Support</Link></li>
          </ul>
          
          <div className="pt-4 flex items-center gap-3 text-slate-400">
            <a 
              href="https://instagram.com/thekeda.r" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors p-2 bg-slate-900 border border-slate-800 rounded-xl"
              aria-label="Instagram"
            >
              <Share2 className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://wa.me/917678627526" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors p-2 bg-slate-900 border border-slate-800 rounded-xl"
              aria-label="WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Block */}
      <div className="border-t border-slate-900 py-10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-slate-200">Stay Tuned for Insights</h4>
            <p className="text-xs text-slate-400 mt-1">Get strategic IT consulting tips, updates, and news direct to your inbox.</p>
          </div>
          
          <form 
            onSubmit={handleNewsletterSubmit}
            className="w-full md:max-w-sm flex items-center gap-2"
          >
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 bg-brand-blue hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs transition-colors cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Syncing..." : "Subscribe"}
            </button>
          </form>
        </div>
        
        {newsletterMessage && (
          <p className="text-center text-[10px] font-bold text-blue-300 mt-3">{newsletterMessage}</p>
        )}
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-slate-950/20 py-6 bg-slate-950 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-semibold text-slate-500">
          <p>&copy; 2026 S'K One Tech Support. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
