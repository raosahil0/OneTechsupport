import { useState } from "react";
import { MessageCircle, Check, Code, Shield, Network, UserCheck, Briefcase, HelpCircle, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import SEO from "../components/SEO";

const serviceList = [
  {
    id: "software",
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

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="bg-slate-55 min-h-screen font-sans text-slate-800">
      <SEO 
        title="Bespoke Services" 
        description="Explore One Tech Support services, from custom app development and managed IT infrastructures to technical staff recruiting pipelines."
      />
      {/* Hero Header Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-brand-blue/5 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3 py-1.5 rounded-full">
            What We Deliver
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 bg-gradient-to-r from-brand-blue to-indigo-600 bg-clip-text text-transparent">
            Managed IT & Solutions
          </h2>
          <p className="text-lg md:text-xl text-slate-655 leading-relaxed max-w-2xl mx-auto">
            Providing enterprise-grade technical support, software engineering, and strategic staffing pipelines designed for growth.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pb-28 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((svc) => {
            const IconComponent = svc.icon;
            const isExpanded = activeCard === svc.id;

            return (
              <div 
                key={svc.id}
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
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2.5">
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                  </div>

                  <div>
                    {/* Collapsible stack details */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 animate-fadeIn">
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
                                className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 font-bold rounded-lg text-[10px]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

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
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue px-10 py-4.5 rounded-xl hover:bg-blue-700 text-base font-extrabold text-white shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            Get a Customized Quote
          </a>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917678627526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-brand-blue p-3.5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all z-50 animate-bounce hover:scale-105 active:scale-95 border border-white/10"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default Services;
