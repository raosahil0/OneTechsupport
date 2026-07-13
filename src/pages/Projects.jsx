import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, CheckCircle2, Clock, ArrowRight, MessageSquare, Tag, Eye
} from "lucide-react";
import SEO from "../components/SEO";

const projectList = [
  {
    title: "Network Infrastructure Setup",
    description: "Complete corporate network installation for a 50-employee office including secure firewalls, managed switches, and high-performance wireless access points.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure",
    status: "Completed",
    techs: ["Cisco", "Fortinet", "VPN Tunneling"]
  },
  {
    title: "Manpower Backup Solution",
    description: "Deployed standby technical support personnel and backup operators for a manufacturing facility during their peak high-volume season.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Staffing",
    status: "Completed",
    techs: ["Linux Helpdesk", "System Monitoring", "Incident SLAs"]
  },
  {
    title: "IT Talent Recruitment",
    description: "Successfully sourced and placed 15 senior software engineers and cloud architects for a rapidly growing fintech client.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
    category: "Recruitment",
    status: "Completed",
    techs: ["Vetted CVs", "Technical Testing", "Role Alignment"]
  },
  {
    title: "Cybersecurity Implementation",
    description: "Designed and implemented end-to-end security audits, intrusion detection systems, and active security monitoring tools.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    category: "Security",
    status: "Completed",
    techs: ["Zero Trust", "Intrusion Detection", "ISO Checklists"]
  },
  {
    title: "Cloud Migration & Orchestration",
    description: "Migrated legacy on-premise application servers to a secure, scalable AWS environment utilizing infrastructure-as-code.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    category: "Cloud",
    status: "Completed",
    techs: ["AWS EC2", "PostgreSQL RDS", "Terraform Code"]
  },
  {
    title: "Enterprise Data Analytics Setup",
    description: "Building a central business intelligence dashboard integrating sales, operations, and technical support metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Software",
    status: "In Progress",
    techs: ["React Client", "Python Analytics", "Postgres Queries"]
  }
];

const CATEGORIES = ["All", "Cloud", "Software", "Infrastructure", "Recruitment", "Security"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectList.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-28 font-sans">
      <SEO 
        title="Case Studies Portfolio" 
        description="Review our completed cloud migration case studies, Cisco infrastructure installations, and agile software development projects."
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Our Work
          </span>
          <h2 className="text-5xl font-black bg-gradient-to-r from-brand-blue to-indigo-600 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            A comprehensive look at migration tasks, network optimizations, and software engineering builds completed by One Tech Support.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="bg-white border border-gray-150 rounded-2xl p-2 shadow-sm flex flex-wrap gap-1.5 glass-panel">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Banner media image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category tag indicator */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tool badging */}
                    <div className="flex flex-wrap gap-1 mt-2 mb-4">
                      {project.techs.map((tech) => (
                        <span 
                          key={tech}
                          className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-lg"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Status ribbon bar */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status</span>
                      {project.status === "Completed" ? (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3 animate-spin" style={{ animationDuration: "3s" }} />
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Conversion CTA banner card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none animate-float"></div>
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl md:text-4xl font-black">
              Ready to start your technical setup?
            </h3>
            <p className="text-slate-400 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
              Partner with One Tech Support to build a reliable infrastructure, scale your engineering team, or transition securely to the cloud.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl text-xs font-bold transition-all hover:scale-[1.02] shadow-md shadow-brand-blue/20"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/917678627526"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 text-slate-200 px-8 py-3.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Advisor
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Action */}
      <a
        href="https://wa.me/917678627526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-brand-blue p-3.5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all z-50 animate-bounce hover:scale-105 active:scale-95 border border-white/10"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default Projects;
