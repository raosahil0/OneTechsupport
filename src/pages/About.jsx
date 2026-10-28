import { motion } from "framer-motion";
import {
  Award, Users, MapPin, Target, Eye, Shield, Sparkles,
  MessageSquare, Calendar, Globe, Briefcase, Network
} from "lucide-react";
import SEO from "../components/SEO";
import { pageSeo } from "../seo/pageSeo";

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
        {...pageSeo.about}
      />

      {/* Hero Header Section */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.18),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-white text-brand-blue border border-white shadow-lg shadow-white/10 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" /> Corporate Identity & Leadership
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Engineering Velocity. <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent">Uncompromising Security.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            S'K ONE Tech Support is a high-velocity IT services consultancy. We bridge enterprise infrastructure gaps with secure cloud migrations, dedicated helpdesk SLAs, and vetted engineering squads.
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

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Center line on desktop, left line on mobile */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-blue via-indigo-500 to-blue-200" />

            <div className="space-y-8 md:space-y-12">
              {TIMELINE_MILESTONES.map((ms, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-1/2 pl-14 md:pl-0">
                      <div className={`bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-brand-blue/40 group ${
                        isEven ? "md:mr-10 md:text-right" : "md:ml-10 md:text-left"
                      }`}>
                        <div className={`flex items-center gap-2 mb-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-brand-blue border border-blue-100 shadow-xs">
                            <Calendar className="w-3.5 h-3.5" />
                            {ms.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                          {ms.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                          {ms.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Center Node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-9 h-9 rounded-full bg-white border-4 border-brand-blue shadow-md flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                    </div>

                    {/* Opposite side spacer */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs Grid */}
      <section className="py-24 px-6 bg-slate-100 border-t border-slate-200 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-black text-slate-900 mb-4">Strategic Service Hubs</h3>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto text-xs md:text-sm">
            We operate helpdesk clusters and support squads across multiple corporate regions to provide immediate on-site coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Gurugram", "Delhi", "Noida", "Jaipur", "Bhiwadi", "Dharuhera", "Rewari", "Chandigarh", "Neemrana", "Behror"].map((city) => (
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
            { name: "Technical Lead", role: "Engineering & Cloud Architecture", init: "TL", desc: "Oversees cloud architectures deployments, container configurations, and cybersecurity." },
            { name: "Talent Specialist", role: "Technical Staffing & Recruitment", init: "TS", desc: "Manages developer sourcing arrays, code assessments, and client placement matrices." }
          ].map((t, idx) => (
            <div key={idx} className="bg-white border border-gray-150 hover:border-brand-blue/30 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-16 h-16 bg-gradient-to-tr from-brand-blue to-indigo-600 text-white rounded-2xl mx-auto mb-5 flex items-center justify-center text-lg font-black shadow-lg shadow-brand-blue/20 group-hover:scale-105 transition-transform duration-300">
                  {t.init}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-brand-blue transition-colors mb-0.5">{t.name}</h3>
                <span className="text-brand-blue text-xs font-extrabold block mb-3 uppercase tracking-wider">{t.role}</span>
                <p className="text-slate-600 text-xs leading-relaxed">{t.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Verified Executive
                </span>
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
