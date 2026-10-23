import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, CheckCircle2, Clock, ArrowRight, MessageSquare, Tag, Eye, Sparkles
} from "lucide-react";
import SEO from "../components/SEO";
import { pageSeo } from "../seo/pageSeo";
import SafeImage from "../components/SafeImage";

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
    <div className="bg-slate-50 min-h-screen pb-28 font-sans">
      <SEO 
        {...pageSeo.projects}
      />

      {/* Executive Dark Hero Header */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.20),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/15 border border-blue-400/30 text-blue-300 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Proven Track Record
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Case Studies &amp; <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">Delivered Systems</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            A comprehensive look at enterprise migrations, high-security network architectures, and dedicated IT staffing solutions deployed by SKONE Tech Support.
          </p>
        </div>
      </section>

      {/* Floating Filter Navigation */}
      <div className="max-w-6xl mx-auto px-6 -mt-7 relative z-20 mb-12 flex justify-center">
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-1.5 shadow-xl flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-blue text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">

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
                {/* Banner media image with guaranteed fallback */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    category={project.category}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category tag indicator with glassmorphism */}
                  <span className="absolute top-4 left-4 bg-slate-950/75 backdrop-blur-md text-white border border-white/10 text-[10px] font-extrabold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-wider">
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
              Partner with SKONE Tech Support to build a reliable infrastructure, scale your engineering team, or transition securely to the cloud.
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
