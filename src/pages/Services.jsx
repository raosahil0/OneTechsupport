import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, Code, Shield, Network, UserCheck, Briefcase, HelpCircle, 
  GraduationCap, ChevronDown, ChevronUp, ArrowRight, MessageSquare, Cloud, Server
} from "lucide-react";
import SEO from "../components/SEO";

const serviceList = [
  {
    id: "software",
    category: "Software",
    title: "Custom Software & App Development",
    icon: Code,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    desc: "Bespoke web applications, high-performance mobile apps, and custom enterprise software designed to streamline operations and scale with your growth.",
    features: [
      "Full-Stack Web Apps (React, Node.js)",
      "Native iOS & Android Mobile Apps",
      "Tailored CRM & ERP Solutions",
      "API Integrations & Cloud Infrastructure"
    ],
    techs: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"]
  },
  {
    id: "support",
    category: "Infrastructure",
    title: "Managed IT Support",
    icon: Shield,
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    desc: "Complete infrastructure management, remote tech helpdesk, network routing, cybersecurity setup, and 24/7 server monitoring to keep operations uptime high.",
    features: [
      "Hardware & Software Maintenance",
      "Enterprise Cloud & Hybrid Setups",
      "Intrusion Prevention & Cybersecurity",
      "SLA-Backed Troubleshooting & Helpdesk"
    ],
    techs: ["Linux", "Windows Server", "Active Directory", "Cisco", "Fortinet", "Azure"]
  },
  {
    id: "manpower",
    category: "Staffing",
    title: "Manpower Support",
    icon: Network,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    desc: "Reliable backup staffing to ensure technical operations continue seamlessly during team expansions, transitions, or developer shortages.",
    features: [
      "Temporary Technical Staffing",
      "Emergency Helpdesk Backups",
      "Contract Full-Stack Developers",
      "Flexible Project-Based Allocations"
    ],
    techs: ["Full-Stack Devs", "System Admins", "Database Engineers", "Helpdesk Leads"]
  },
  {
    id: "recruitment",
    category: "Staffing",
    title: "IT Recruitment",
    icon: UserCheck,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    desc: "Expert recruitment pipelines matching technical requirements with thoroughly vetted, high-aptitude software engineering candidates.",
    features: [
      "Developers & Technical Leads",
      "Cloud & DevOps Engineers",
      "Database & System Administrators",
      "On-Demand Executive Sourcing"
    ],
    techs: ["Vetted CVs", "Coding Assessments", "Pre-screened Panels", "Reference Audits"]
  },
  {
    id: "nonit",
    category: "Staffing",
    title: "Non-IT Hiring",
    icon: Briefcase,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    desc: "Comprehensive recruitment for administrative, sales, customer success, and operations roles to strengthen support departments.",
    features: [
      "Sales & Lead Generation Reps",
      "Customer Relations Specialists",
      "Back-Office Administrators",
      "Operations Managers"
    ],
    techs: ["Support Staff", "Outbound Agents", "Virtual Assistants", "Office Admins"]
  },
  {
    id: "consulting",
    category: "Infrastructure",
    title: "Strategic IT Consulting",
    icon: HelpCircle,
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    desc: "Technology consulting aligned to your corporate vision to automate processes and implement digital transformations.",
    features: [
      "Digital Roadmap Optimization",
      "Infrastructure Cybersecurity Audits",
      "Process Automation Planning",
      "Technology Stack Assessments"
    ],
    techs: ["IT Architectures", "Disaster Recovery", "Disaster Prevention", "Risk Auditing"]
  },
  {
    id: "training",
    category: "Software",
    title: "Training & Development",
    icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    desc: "Hands-on upskilling workshops to train engineering teams in modern framework paradigms, cloud strategies, and infrastructure coding.",
    features: [
      "Full-Stack Web Coding Bootcamps",
      "Docker, Kubernetes & CI/CD Systems",
      "Cybersecurity Defense Labs",
      "Custom Corporate Agile Workshops"
    ],
    techs: ["CI/CD Pipelines", "Containerization", "Cloud Defense", "Agile Sprints"]
  }
];

const SERVICE_CATEGORIES = ["All", "Software", "Infrastructure", "Staffing"];

const SERVICES_FAQ = [
  {
    q: "Do you offer post-launch maintenance for software apps?",
    a: "Yes, we structure dedicated maintenance support contracts covering bug fixes, server database scaling, security patch releases, and system updates."
  },
  {
    q: "Can you consult on legacy server migration to AWS or Azure?",
    a: "Our certified cloud migration architects assess your current topology and formulate structured, risk-free roadmaps to transition data stores to AWS or Azure with zero downtime."
  }
];

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const filteredServices = serviceList.filter(
    (svc) => activeCategory === "All" || svc.category === activeCategory
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 pb-28">
      <SEO 
        title="Managed IT Services & App Engineering" 
        description="Explore our IT services catalogue, ranging from cloud infrastructures and network configurations to technical staffing pipelines."
      />

      {/* Hero Header Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-brand-blue/5 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Technical Capabilities
          </span>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-brand-blue to-indigo-600 bg-clip-text text-transparent">
            Managed IT & Solutions
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Providing enterprise-grade technical helpdesk infrastructure, software engineering, and strategic staffing pipelines designed for growth.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter Menu */}
      <div className="max-w-6xl mx-auto px-6 mb-12 flex justify-center">
        <div className="bg-white border border-gray-150 rounded-2xl p-2.5 shadow-sm flex flex-wrap gap-1.5 glass-panel">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveCard(null);
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-slate-655 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {cat === "All" ? "All Solutions" : `${cat} Solutions`}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="px-6 max-w-6xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc) => {
              const IconComponent = svc.icon;
              const isExpanded = activeCard === svc.id;

              return (
                <motion.div 
                  key={svc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-150 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Service Image banner */}
                  <div className="relative overflow-hidden h-44 w-full">
                    <img 
                      src={svc.img} 
                      alt={svc.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 p-2 bg-white/10 backdrop-blur-md rounded-xl text-white">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                        {svc.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-4">
                        {svc.desc}
                      </p>
                    </div>

                    <div>
                      {/* Collapsible stack details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-slate-100 space-y-4"
                          >
                            <div>
                              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Core Solutions</h4>
                              <ul className="space-y-2 text-xs text-slate-700">
                                {svc.features.map((feat, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Technologies / Tools</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {svc.techs.map((tech, idx) => (
                                  <span 
                                    key={idx}
                                    className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-650 font-bold rounded-lg text-[9px]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        onClick={() => toggleCard(svc.id)}
                        className="mt-6 w-full flex items-center justify-center gap-2 border border-slate-200 hover:border-brand-blue text-slate-600 hover:text-brand-blue py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer bg-slate-50 hover:bg-white"
                      >
                        {isExpanded ? (
                          <>
                            Hide Details <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            View Tech Stack & Features <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Services Specific FAQ Accordions */}
      <section className="py-28 px-6 max-w-4xl mx-auto border-t border-slate-200 mt-20">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Inquiries
          </span>
          <h2 className="text-3xl font-black text-slate-900">Services FAQ</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {SERVICES_FAQ.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-gray-150 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 text-sm md:text-base hover:text-brand-blue transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-brand-blue" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 p-10 md:p-14 rounded-3xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h3 className="text-2xl md:text-4xl font-black text-white">Need a Tailored Pricing Assessment?</h3>
          <p className="text-slate-400 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
            Get an in-depth audit from our solutions engineers. We will analyze your server logs, network routing, and software stack requirements.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-blue hover:bg-blue-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-md text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917678627526"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-extrabold px-8 py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> Live WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Action */}
      <a
        href="https://wa.me/917678627526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-brand-blue p-3.5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all z-50 animate-bounce hover:scale-105 active:scale-95 border border-white/10"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default Services;
