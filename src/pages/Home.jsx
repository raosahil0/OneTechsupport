import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Star, Phone, Mail, MessageSquare, Monitor, Users, Search, ArrowRight, 
  ShieldCheck, Zap, HeartHandshake, ChevronDown, ChevronUp, Database, 
  Globe, Trophy, Award, Lock, Server, Cloud, Cpu, ArrowDownCircle
} from "lucide-react";
import SEO from "../components/SEO";

// Partners logo array for infinite slider
const PARTNER_LOGOS = [
  { name: "Amazon Web Services", type: "AWS Certified" },
  { name: "Microsoft Partner", type: "Gold Tier" },
  { name: "Cisco Systems", type: "Network Specialist" },
  { name: "Google Cloud", type: "Integration Lead" },
  { name: "ISO 27001", type: "Security Compliant" },
  { name: "RedHat Linux", type: "Enterprise Cloud" },
  { name: "Kubernetes Certified", type: "Orchestration" }
];

// Interactive FAQ list
const FAQ_ITEMS = [
  {
    q: "What is the typical onboarding timeline for managed IT support?",
    a: "We can establish full service-level helpdesk diagnostics and remote database triggers within 48 to 72 hours of signing a service-level agreement (SLA)."
  },
  {
    q: "How does the dedicated staffing backup manpower model work?",
    a: "We provide vetted, pre-screened software developers and system administrators. You can scale your engineering squad up or down with a simple 15-day notice, eliminating recruitment overhead."
  },
  {
    q: "What security measures are implemented for cloud database schemas?",
    a: "Every server architecture is deployed with active Row-Level Security (RLS), multi-factor authenticated database logs, Cisco firewall policies, and end-to-end VPN segmentations."
  },
  {
    q: "Do you offer emergency 24/7 technical troubleshooting support?",
    a: "Yes, our managed SLA agreements feature dedicated escalation support engineers who maintain response metrics under 30 minutes for critical server incidents."
  }
];

// Count-up stats card sub-component
const CounterStat = ({ value, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;
    const duration = 1500;
    const increment = end / (duration / 16);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={elementRef} className="py-4 md:py-0">
      <h3 className="text-4xl md:text-5xl font-black text-brand-blue mb-1">
        {prefix}{count}{suffix}
      </h3>
      <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">
        {label}
      </p>
    </div>
  );
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Parallax background scroll effect
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <SEO 
        title="Enterprise Managed IT Services & Custom App Development" 
        description="One Tech Support provides enterprise IT support, custom CRM/ERP app development, zero-trust cybersecurity, and responsive backup staffing."
      />

      {/* Hero Section - Parallax Dark Gradient with Floating Blobs */}
      <section 
        ref={heroRef}
        className="relative text-center py-40 md:py-48 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden min-h-[90vh] flex items-center"
      >
        {/* Parallax Background Cover */}
        <motion.div 
          style={{ y: bgY, backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay pointer-events-none"
        />
        
        {/* Animated Glow Blobs */}
        <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none animate-float" style={{ animationDelay: "2s" }}></div>
        
        <div className="relative max-w-4xl mx-auto z-10 w-full">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 border border-brand-blue/20 text-brand-blue uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 animate-pulse" /> Vetted Enterprise IT Consulting
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Secure Cloud. Secure Tech. <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-350 bg-clip-text text-transparent">Continuous Scale.</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-bold uppercase tracking-wider">
              High-Velocity App Engineering | Cisco Infrastructure | Backup Developer Staffing
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-xs md:text-base">
              One Tech Support builds, secures, and maintains modern software apps and server infrastructure. From cloud migration pipelines to dedicated tech helpdesks, our engineering SLAs are structured to ensure business velocity.
            </p>
            
            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 max-w-md mx-auto sm:max-w-none">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand-blue hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Free Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto border border-slate-800 bg-slate-900/30 hover:bg-slate-800/80 text-slate-200 hover:text-white hover:-translate-y-1 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Explore IT Catalogue
              </Link>
            </div>

            {/* Scroll down indicator */}
            <div className="pt-16 hidden md:block">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block text-slate-500 hover:text-white transition-colors cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })}
              >
                <ArrowDownCircle className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section - Infinite Horizontal Logo Slider */}
      <section className="bg-slate-950 py-10 border-y border-slate-900 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 mb-4 text-center">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Authorized Vetted Engineers & Integrations</p>
        </div>

        <div className="animate-logo-loop gap-12 items-center">
          {/* Logo loop double render for infinite ribbon */}
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 px-6 py-2 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse"></div>
              <div>
                <span className="text-slate-200 font-black text-sm tracking-tight">{logo.name}</span>
                <span className="block text-[8px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">{logo.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Counter stats card overlay */}
      <section className="relative px-6 max-w-5xl mx-auto -mt-10 z-20">
        <div className="bg-white border border-gray-150 rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <CounterStat value="50" label="Active Clients" suffix="+" />
          <CounterStat value="120" label="Projects Done" suffix="+" />
          <CounterStat value="24" label="Support SLA" suffix="/7" />
          <CounterStat value="99" label="Satisfaction" suffix="%" />
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-28 px-6 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
              Enterprise Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Core Capabilities
            </h2>
            <p className="text-slate-500 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
              Vetted engineering expertise deployed across corporate database schemas and secure networks.
            </p>
            <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-gray-150 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between h-[360px]">
              <div>
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Monitor className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Managed IT Support</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Enterprise network setups, Cisco firewall systems configurations, hardware provisioning, OS diagnostics helpdesk, and server databases maintenance.
                </p>
              </div>
              <Link to="/services" className="text-brand-blue font-bold text-xs inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                View Tech Stack <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-gray-150 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between h-[360px]">
              <div>
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <Cpu className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Bespoke Software</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Tailored web dashboard systems, REST API integrations, custom CRM/ERP platforms, mobile apps, and robust secure cloud setups.
                </p>
              </div>
              <Link to="/services" className="text-brand-blue font-bold text-xs inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                View Tech Stack <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-gray-150 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between h-[360px]">
              <div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-650 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Users className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Backup Staffing</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Emergency staffing pipelines, pre-screened contract developers, virtual helpdesk specialists, and operations managers ready for immediate deployment.
                </p>
              </div>
              <Link to="/services" className="text-brand-blue font-bold text-xs inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                View Tech Stack <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - SLA and Security focused Dark Grid */}
      <section className="py-28 px-6 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-10 left-10 w-2.5 h-2.5 rounded-full bg-indigo-500/20"></div>

        <div className="relative max-w-6xl mx-auto z-10">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full">
            Operational Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4">
            Designed for Reliability
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
            We operate under strict SLA guidelines to ensure your company operations stay operational.
          </p>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4 mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-3xl hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 text-left">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl inline-block mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2.5 text-white">SLA-Driven Helpdesk</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Response times bound by client agreements. Critical issues are tracked and updated within 30 minutes.
              </p>
            </div>

            <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-3xl hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 text-left">
              <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl inline-block mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2.5 text-white">Zero Trust Security</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Security-first server setup with active firewall diagnostics, strict databases access keys, and secure cloud credentials.
              </p>
            </div>

            <div className="p-8 bg-slate-900/40 border border-slate-900 rounded-3xl hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 text-left">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl inline-block mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2.5 text-white">Dedicated Tech Squads</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Continuous account backing with dedicated engineers who understand your systems topology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
              Global Support Reach
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-slate-555 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
              Providing customized systems configuration for technical departments across key verticals.
            </p>
            <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Healthcare & MedTech", desc: "HIPAA Compliant systems" },
              { title: "Finance & Fintech", desc: "PCI-DSS database security" },
              { title: "EdTech & Education", desc: "Scalable learning platforms" },
              { title: "Logistics & Retail", desc: "Real-time dispatch APIs" },
              { title: "Government Agencies", desc: "Secure encrypted architectures" },
              { title: "Manufacturing", desc: "Automated backup networks" },
              { title: "Software Startups", desc: "Pre-screened developer squads" },
              { title: "Real Estate Platforms", desc: "CRM tracking architectures" }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white border border-gray-150 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-black text-slate-800 block">{ind.title}</span>
                <span className="text-[10px] text-slate-400 block mt-1">{ind.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Roadmap / Timeline */}
      <section className="py-28 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Execution Roadmap
            </h2>
            <p className="text-slate-500 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
              How we discover, architect, deploy, and support your technology requirements.
            </p>
            <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
            {/* Timeline cards */}
            {[
              { step: "01", name: "Discovery", desc: "Reviewing systems assets, topologies, security checkpoints, and database structure." },
              { step: "02", name: "Planning", desc: "Structuring deployment timelines, failover workflows, and custom resource staffing slots." },
              { step: "03", name: "Architecture", desc: "Designing secure network routes, cloud structures, and client API configurations." },
              { step: "04", name: "Development", desc: "Coding software systems, building schema queries, and setting up helpdesk parameters." },
              { step: "05", name: "Deployment", desc: "Launching components, activating database RLS locks, and checking load compliance." },
              { step: "06", name: "Support", desc: "Activating 24/7 incident SLA monitors and ticketing portal responses." }
            ].map((proc, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl relative hover:bg-white hover:border-brand-blue hover:shadow-md transition-all">
                <span className="text-3xl font-black text-brand-blue/20 block">{proc.step}</span>
                <h4 className="text-sm font-bold text-slate-900 mt-2">{proc.name}</h4>
                <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collapsible Accordion FAQs */}
      <section className="py-28 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
              Resolve Doubts
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-150 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
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
                        transition={{ duration: 0.25 }}
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
        </div>
      </section>

      {/* Large Contact Call-To-Action (CTA) */}
      <section className="py-28 px-6 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-float"></div>
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-indigo-500/10"></div>

        <div className="relative max-w-3xl mx-auto z-10 w-full space-y-6">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full">
            Scale Operations
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Secure Your Tech Infrastructure Today
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-xs md:text-base leading-relaxed">
            Get in touch with an systems advisor to configure your database integrations, server routing migrations, or developer backing requirements.
          </p>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-6 text-slate-300 text-xs md:text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+91 7678627526</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>skonetechsupport@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="https://wa.me/917678627526"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-8 py-3.5 rounded-xl font-extrabold shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 flex items-center gap-2 hover:bg-blue-700 transition-colors duration-200 cursor-pointer text-xs"
            >
              <MessageSquare className="w-4 h-4" /> Start WhatsApp Consultation
            </a>
            <Link
              to="/contact"
              className="bg-transparent border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-200 flex items-center justify-center text-xs cursor-pointer"
            >
              Access Guided Wizard
            </Link>
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

export default Home;
