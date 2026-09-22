import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, ArrowRight, Phone, CheckCircle2, ChevronDown, ChevronUp,
  Clock, Award, HelpCircle, ArrowUpRight
} from "lucide-react";
import SEO from "./SEO/SEO";
import Breadcrumbs from "./SEO/Breadcrumbs";
import JsonLd from "./SEO/JsonLd";
import { getServiceSchema, getFaqSchema } from "../seo/schemas";
import { siteConfig } from "../seo/siteConfig";

export default function ServicePageTemplate({
  seo,
  serviceName,
  h1Title,
  h1Subtitle,
  overviewText,
  icon: Icon = ShieldCheck,
  featuresTitle = "What We Support & Core Deliverables",
  features = [],
  specifications = [],
  processSteps = [],
  faqs = [],
  relatedServices = []
}) {
  const [openFaq, setOpenFaq] = useState(null);

  const serviceSchema = getServiceSchema({
    name: serviceName,
    description: seo.description,
    serviceType: serviceName,
    url: seo.canonical
  });

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: serviceName, url: seo.canonical.replace(siteConfig.url, "") }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
      />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-24 px-6 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 border border-brand-blue/30 text-blue-400 uppercase tracking-widest">
              <Icon className="w-4 h-4 text-brand-blue" />
              <span>Enterprise IT Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {h1Title}
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
              {h1Subtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-blue" />
                <span className="text-xs text-slate-300 font-semibold">30-Min Critical SLA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-teal-400" />
                <span className="text-xs text-slate-300 font-semibold">Certified Engineers</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span className="text-xs text-slate-300 font-semibold">Zero-Downtime Focus</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-brand-blue hover:bg-blue-700 text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                Request Free Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+917678627526"
                className="border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-bold px-6 py-3.5 rounded-xl transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call +91-7678627526</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-20">
        
        {/* Service Overview & Problem Context */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Complete {serviceName} Built for Operational Stability
            </h2>
            <div className="w-14 h-1 bg-brand-blue rounded-full"></div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {overviewText}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Service Guarantees
            </h3>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>On-site & remote ticketing support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Root-cause incident documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Monthly preventative health audits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Transparent SLA agreements</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                to="/contact"
                className="text-brand-blue hover:text-blue-700 font-bold text-xs inline-flex items-center gap-1.5"
              >
                Inquire about custom SLAs <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Deliverables & Technical Scope */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
              Technical Scope
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              {featuresTitle}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Standardized engineering workflows implemented by experienced system administrators.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications Grid if provided */}
        {specifications.length > 0 && (
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-900 space-y-8">
            <div>
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                Supported Technologies
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2">
                Supported Hardware, Software & Protocols
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {specifications.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-1"
                >
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">
                    {spec.label}
                  </span>
                  <span className="text-white font-bold text-sm block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Roadmap */}
        {processSteps.length > 0 && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
                Methodology
              </span>
              <h2 className="text-3xl font-black text-slate-900">
                Our IT Support Process
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                How we diagnose, stabilize, and maintain your systems with zero operational disruption.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative space-y-2"
                >
                  <span className="text-3xl font-black text-brand-blue/20">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frequently Asked Questions */}
        {faqs.length > 0 && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
                Help & Clarifications
              </span>
              <h2 className="text-3xl font-black text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Common questions answered by our engineering and dispatch teams.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-brand-blue transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Internal Linking: Related Services Matrix */}
        {relatedServices.length > 0 && (
          <div className="border-t border-gray-200 pt-16 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Explore Related IT Services
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Connect other infrastructure services to build a resilient IT ecosystem.
                </p>
              </div>
              <Link
                to="/services"
                className="text-xs font-bold text-brand-blue hover:text-blue-700 flex items-center gap-1"
              >
                View Full Services Catalog <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  to={rel.path}
                  className="group bg-white p-5 rounded-2xl border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors flex items-center justify-between">
                      <span>{rel.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                      {rel.desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-brand-blue mt-4 inline-block">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Conversion CTA Box */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black">
              Ready to Upgrade Your Business IT Systems?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Schedule a technical discovery session with S'K ONE engineers to audit existing infrastructure, resolve chronic outages, and guarantee business uptime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="bg-white text-slate-900 hover:bg-slate-100 font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917678627526"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:bg-white/10 text-white font-bold px-5 py-3.5 rounded-xl text-xs sm:text-sm transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
