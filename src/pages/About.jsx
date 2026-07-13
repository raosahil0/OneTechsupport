import { motion } from "framer-motion";
import { 
  Award, Users, MapPin, Target, Eye, Shield, Sparkles, 
  MessageSquare, Calendar, Globe, Briefcase, Network
} from "lucide-react";
import SEO from "../components/SEO";

const TIMELINE_MILESTONES = [
  {
    year: "2025",
    title: "Company Foundation",
    desc: "Established in Jaipur as a specialized network routing and desktop infrastructure helpdesk."
  },
  {
    year: "2026",
    title: "Unified Support Platform",
    desc: "Launched integrated client ticketing portals, custom backup staffing, and cloud database pipelines across strategic NCR regions."
  }
];

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-28 font-sans">
      <SEO 
        title="Corporate Profile & Core Values" 
        description="Learn about the history of S'K One Tech Support, our mission to deliver secure cloud infrastructures, core enterprise principles, and leadership team."
      />

      {/* Hero Header Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-brand-blue/5 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Our Identity
          </span>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-brand-blue to-indigo-600 bg-clip-text text-transparent">
            Corporate Profile
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            S'K One Tech Support is a high-velocity IT services consultancy. We bridge technical infrastructure gaps with secure cloud migrations, dedicated helpdesk SLAs, and vetted engineering teams.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="px-6 max-w-6xl mx-auto -mt-10 relative z-20">
        <div className="bg-white border border-gray-150 rounded-3xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Users, val: "50+", label: "Active Partners", bg: "bg-blue-50 text-brand-blue" },
            { icon: Award, val: "120+", label: "Projects Delivered", bg: "bg-teal-50 text-teal-600" },
            { icon: Shield, val: "99.9%", label: "SLA Compliance", bg: "bg-indigo-50 text-indigo-650" },
            { icon: MapPin, val: "6+", label: "Strategic Hubs", bg: "bg-orange-50 text-orange-600" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-4">
              <div className={`p-2.5 rounded-xl ${item.bg} mb-3`}>
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">{item.val}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-150 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="inline-flex p-3 rounded-xl bg-brand-blue/10 text-brand-blue mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">Our Mission</h3>
          <p className="text-slate-650 text-xs md:text-sm leading-relaxed">
            To architect secure, resilient, and highly scalable IT infrastructures that enable modern enterprises to focus entirely on growth. We believe technology should drive business velocity, never impede it.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-150 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="inline-flex p-3 rounded-xl bg-brand-blue/10 text-brand-blue mb-4">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">Our Vision</h3>
          <p className="text-slate-655 text-xs md:text-sm leading-relaxed">
            To establish a unified operations ecosystem matching enterprise systems demands with thoroughly vetted tech personnel and zero-trust engineering standards across global client portals.
          </p>
        </motion.div>
      </section>

      {/* Core Values Section - Dark Gradient */}
      <section className="py-28 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full">
              Foundational Pillars
            </span>
            <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our Core Values
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              These governing principles formulate the standards under which our helpdesks and cloud operations run daily.
            </p>
            <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              { icon: Users, title: "Client-Centric SLAs", desc: "Aligning resolution targets to your specific business priorities.", color: "text-blue-400" },
              { icon: Shield, title: "Absolute Integrity", desc: "Maintaining transparent audit controls, active database RLS, and security.", color: "text-teal-400" },
              { icon: Award, title: "Velocity & Uptime", desc: "Accelerating project starts and system provisioning with low overhead.", color: "text-orange-400" },
              { icon: Sparkles, title: "Digital Evolution", desc: "Utilizing modern containerized, serverless, and cloud native architectures.", color: "text-purple-400" }
            ].map((val, idx) => (
              <div key={idx} className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl hover:border-slate-800 transition-colors group">
                <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 group-hover:scale-105 transition-transform ${val.color}`}>
                  <val.icon className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-bold text-sm text-slate-200 mb-1.5">{val.title}</h4>
                <p className="text-slate-450 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Timeline Milestones */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Our Journey
          </span>
          <h3 className="text-3xl font-black text-slate-900">Milestones Timeline</h3>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 space-y-12">
          {TIMELINE_MILESTONES.map((ms, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Bullet circle */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-slate-50 bg-brand-blue z-10 shadow-sm" />
              
              <span className="text-brand-blue font-black text-xl tracking-tight block">{ms.year}</span>
              <h4 className="text-base font-bold text-slate-900 mt-1">{ms.title}</h4>
              <p className="text-slate-555 text-xs md:text-sm mt-1 leading-relaxed max-w-xl">{ms.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Hubs Grid */}
      <section className="py-24 px-6 bg-slate-100 border-t border-slate-200 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-black text-slate-900 mb-4">Strategic Service Hubs</h3>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto text-xs md:text-sm">
            We operate helpdesk clusters and support squads across multiple corporate regions to provide immediate on-site coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Jaipur", "Gurugram", "Delhi", "Noida", "Chandigarh", "Neemrana"].map((city) => (
              <span
                key={city}
                className="bg-white border border-slate-200 text-slate-700 hover:border-brand-blue px-6 py-3 rounded-full font-bold shadow-sm hover:shadow transition-all duration-200 cursor-default flex items-center gap-2 text-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leadership Directory */}
      <section className="py-28 px-6 text-center max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            People First
          </span>
          <h2 className="text-3xl font-black text-slate-900">Leadership Team</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Sahil Yadav", role: "Founder & CEO", init: "SY", desc: "Drives corporate strategy, SLA-compliance guidelines, and client onboarding pipelines." },
            { name: "Kapil Sharma", role: "Technical Lead", init: "KS", desc: "Oversees cloud architectures deployments, container configurations, and cybersecurity." },
            { name: "HR Coordinator", role: "Talent Specialist", init: "HR", desc: "Manages developer sourcing arrays, code assessments, and client placement matrices." }
          ].map((t, idx) => (
            <div key={idx} className="bg-white border border-gray-150 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between h-[300px]">
              <div>
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl mx-auto mb-5 flex items-center justify-center text-lg font-black group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {t.init}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-0.5">{t.name}</h3>
                <span className="text-brand-blue text-xs font-bold block mb-4">{t.role}</span>
                <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
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

export default About;
