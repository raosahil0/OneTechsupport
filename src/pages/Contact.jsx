import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Share2, Send, CheckCircle2, AlertCircle, Clock, AlertTriangle, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { saveContact } from "../services/databaseService";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";
import { pageSeo } from "../seo/pageSeo";
import ReCaptcha from "../components/ReCaptcha";
import { checkRateLimit, recordAttempt, isBotSubmission } from "../utils/rateLimiter";

const BUSINESS_HOURS = [
  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { days: "Sunday", hours: "Emergency IT Support Only" }
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Honeypot check for bots
    if (isBotSubmission(honeypot)) {
      setSubmitted(true);
      return;
    }

    // 2. Client-side rate limiting check
    const rateCheck = checkRateLimit("contact_form", {
      minIntervalMs: 15000,
      maxPerWindow: 4,
      windowMs: 5 * 60 * 1000,
    });
    if (!rateCheck.allowed) {
      setError(rateCheck.message);
      return;
    }

    // 3. Bot verification check (reCAPTCHA)
    if (!captchaToken) {
      setError("Please complete the spam protection verification.");
      return;
    }

    setLoading(true);

    try {
      // 4. Save to Database
      await saveContact({
        ...formData,
        created_at: new Date().toISOString(),
      });

      // 5. Send Auto-Reply Email via EmailJS (if credentials are set in .env)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_name: formData.name,
            to_email: formData.email,
            inquiry_type: formData.inquiryType,
            message: formData.message,
            reply_to: "skonetechsupport@gmail.com",
          },
          publicKey
        );
      }

      // Record successful attempt for rate limiting
      recordAttempt("contact_form");

      setSubmitted(true);
      setStep(1);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to submit intake. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-28 font-sans">
      <SEO 
        {...pageSeo.contact}
      />
      
      {/* Executive Dark Hero Header */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.20),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/15 border border-blue-400/30 text-blue-300 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Intake Center &amp; Direct Dispatch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Guided <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">Project Intake</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Specify your engineering requirements, team scale, or support SLAs. Our lead solution architects will respond within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-6 relative z-20">

        {/* Emergency Outage Support Alert Banner */}
        <div className="mb-12 bg-amber-50 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-800 animate-pulse flex-shrink-0">
            <AlertTriangle className="w-5.5 h-5.5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-amber-900">Critical Network/Server Outage?</h4>
            <p className="text-xs text-amber-850 leading-relaxed">
              If your database servers are unreachable, or network routing is down, submit an emergency ticket or email directly with the subject prefix <strong>[CRITICAL]</strong> for rapid priority escalation.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="max-w-md mx-auto bg-white border border-gray-150 p-8 rounded-3xl shadow-xl text-center glass-panel">
            <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Intake Saved!</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Your technology requirements have been logged in our databases. An advisory engineer will analyze your parameters and follow up shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-brand-blue hover:bg-blue-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer text-xs"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Info panel & operating hours - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Directories</h3>

              {/* Direct Phone */}
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl hover:shadow-md transition-shadow flex items-start">
                <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue mr-4 flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Direct Line</p>
                  <a href="tel:+917678627526" className="text-sm font-black text-slate-800 mt-1 block hover:text-brand-blue">+91 7678627526</a>
                </div>
              </div>

              {/* Support Email */}
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl hover:shadow-md transition-shadow flex items-start">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-650 mr-4 flex-shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Support Desk</p>
                  <a href="mailto:skonetechsupport@gmail.com" className="text-sm font-black text-slate-800 mt-1 block hover:text-brand-blue break-all">skonetechsupport@gmail.com</a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-4">
                <h4 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                  <Clock className="w-4.5 h-4.5 text-brand-blue" />
                  Business Hours
                </h4>
                <div className="divide-y divide-slate-100 text-xs">
                  {BUSINESS_HOURS.map((bh, idx) => (
                    <div key={idx} className="flex justify-between py-2.5">
                      <span className="font-bold text-slate-500">{bh.days}</span>
                      <span className="font-semibold text-slate-900">{bh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas Coverage Iframe Mock */}
              <div className="bg-white border border-slate-200/80 p-4 rounded-2xl space-y-3">
                <h4 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                  <MapPin className="w-4.5 h-4.5 text-brand-blue" />
                  Support Coverage Hubs
                </h4>
                <div className="h-40 bg-slate-100 rounded-xl overflow-hidden relative flex items-center justify-center border border-slate-200/60">
                  {/* Visual Map Grid Design */}
                  <div className="absolute inset-0 bg-grid-slate-200 opacity-80" />
                  <div className="relative text-center space-y-1 z-10 px-4">
                    <span className="text-xs font-black text-slate-800 block">Delhi NCR & Rajasthan Hubs</span>
                    <span className="text-[10px] text-slate-500 block leading-relaxed">Remote networks diagnostics & rapid on-site technician dispatch coordinates active.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Intake Wizard - 3 cols */}
            <div className="lg:col-span-3 bg-white border border-gray-150 p-8 rounded-3xl shadow-md glass-panel relative">
              {/* Process step ribbon */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 1 ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-400"}`}>1</span>
                  <span className="text-xs font-bold text-slate-800 hidden sm:inline">Category</span>
                </div>
                <div className="flex-1 h-0.5 mx-3 bg-slate-100 relative">
                  <div className={`absolute top-0 left-0 h-full bg-brand-blue transition-all duration-300 ${step >= 2 ? "w-full" : "w-0"}`} />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 2 ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-400"}`}>2</span>
                  <span className="text-xs font-bold text-slate-800 hidden sm:inline">Details</span>
                </div>
                <div className="flex-1 h-0.5 mx-3 bg-slate-100 relative">
                  <div className={`absolute top-0 left-0 h-full bg-brand-blue transition-all duration-300 ${step >= 3 ? "w-full" : "w-0"}`} />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 3 ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-400"}`}>3</span>
                  <span className="text-xs font-bold text-slate-800 hidden sm:inline">Contact</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Category Selection */}
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Select Inquiry Category</h3>
                        <p className="text-xs text-slate-500">Pick the classification that best fits your technological request.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { id: "it-support", title: "IT Support & Cloud", desc: "Cybersecurity, hardware networks setups, server scaling" },
                          { id: "software", title: "App Engineering", desc: "Custom web development, CRM/ERP platforms, mobile apps" },
                          { id: "manpower", title: "Backup Staffing", desc: "Contract developers, emergency helpdesk backups" },
                          { id: "hiring", title: "Recruitment Services", desc: "Pre-screened coding panel placements" },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: opt.id })}
                            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                              formData.inquiryType === opt.id
                                ? "border-brand-blue bg-blue-50/40 shadow-sm ring-2 ring-brand-blue/10"
                                : "border-slate-200 hover:border-slate-350"
                            }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className="font-bold text-slate-800 text-xs">{opt.title}</span>
                              {formData.inquiryType === opt.id && (
                                <span className="w-4 h-4 rounded-full bg-brand-blue text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-500 leading-relaxed mt-2">{opt.desc}</p>
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        disabled={!formData.inquiryType}
                        onClick={() => setStep(2)}
                        className="w-full bg-brand-blue py-3.5 rounded-xl hover:bg-blue-700 font-extrabold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-xs shadow-sm"
                      >
                        Continue to Details
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Message/Requirements Details */}
                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Tell Us About Your Project</h3>
                        <p className="text-xs text-slate-500">Provide high-level parameters or scope overview.</p>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Project details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          placeholder="Please outline developer squad size, cloud database systems preferences, or support schedules..."
                          className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:bg-white focus:outline-none text-xs text-slate-900 leading-relaxed"
                        />
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 border border-slate-200 hover:bg-slate-50 py-3.5 rounded-xl font-bold text-slate-550 transition-colors cursor-pointer text-xs"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          disabled={!formData.message.trim()}
                          onClick={() => setStep(3)}
                          className="flex-1 bg-brand-blue py-3.5 rounded-xl hover:bg-blue-700 font-extrabold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-xs shadow-sm"
                        >
                          Continue to Contact
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Info Details */}
                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Final Details</h3>
                        <p className="text-xs text-slate-500">Submit your coordinates so we can prepare your quote report.</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                            Full Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:bg-white focus:outline-none text-xs text-slate-900 rounded-xl"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                              Corporate Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="name@company.com"
                              className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:bg-white focus:outline-none text-xs text-slate-900 rounded-xl"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                              Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 9999999999"
                              className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:bg-white focus:outline-none text-xs text-slate-900 rounded-xl"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Honeypot field for bot trapping (invisible to humans) */}
                      <input
                        type="text"
                        name="company_website_hp"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex="-1"
                        autoComplete="off"
                        style={{ display: "none", opacity: 0, position: "absolute", left: "-9999px" }}
                        aria-hidden="true"
                      />

                      {/* Bot Protection / reCAPTCHA */}
                      <div>
                        <ReCaptcha
                          ref={recaptchaRef}
                          onVerify={(token) => setCaptchaToken(token)}
                          onExpire={() => setCaptchaToken(null)}
                        />
                      </div>

                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-2 text-xs">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="flex-1 border border-slate-200 hover:bg-slate-50 py-3.5 rounded-xl font-bold text-slate-550 transition-colors cursor-pointer text-xs"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={loading || !formData.name || !formData.email}
                          className="flex-1 bg-brand-blue py-3.5 rounded-xl hover:bg-blue-700 font-extrabold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer text-xs shadow-md"
                        >
                          {loading ? (
                            "Submitting..."
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" /> Submit Intake
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        )}
      </div>

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

export default Contact;
