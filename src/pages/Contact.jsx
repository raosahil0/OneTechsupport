import { useState } from "react";
import { Phone, Mail, MapPin, Camera, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { saveContact } from "../services/databaseService";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Save to Database
      await saveContact({
        ...formData,
        created_at: new Date().toISOString(),
      });

      // 2. Send Auto-Reply Email via EmailJS (if credentials are set in .env)
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

      setSubmitted(true);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to save contact. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6 font-sans">
      <SEO 
        title="Get in Touch" 
        description="Submit a request for corporate software development, network infrastructure configurations, or technical helper backups via our guided intake questionnaire."
      />
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3 py-1.5 rounded-full">
            Connect With Us
          </span>
          <h2 className="text-5xl font-black mt-4 mb-4 bg-gradient-to-r from-brand-blue to-indigo-600 bg-clip-text text-transparent">
            Guided Project Intake
          </h2>
          <p className="text-lg text-slate-655 max-w-xl mx-auto leading-relaxed">
            Over our multi-step wizard, specify your technology stack needs or staffing support requirements to receive a fast, customized quote.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-md mx-auto bg-white border border-gray-150 p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 glass-panel">
            <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Request Sent!
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-6">
              Thank you for contacting One Tech Support. Your information is logged, and an advisory team member will respond to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-brand-blue hover:bg-blue-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 transition-all duration-200 cursor-pointer"
            >
              Send Another Request
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Info Cards - 2 Columns */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Contact Info
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Need immediate help? Reach out directly via our phone support line or corporate email.
              </p>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start group">
                <div className="p-3 rounded-xl bg-blue-50 text-brand-blue mr-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Direct Phone Line</p>
                  <p className="text-slate-600 font-bold mt-1 text-xs">+91 7678627526</p>
                </div>
              </div>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start group">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Corporate Support Email</p>
                  <p className="text-slate-655 font-bold mt-1 text-xs break-all">skonetechsupport@gmail.com</p>
                </div>
              </div>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start group">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-650 mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Offices & Service Hubs</p>
                  <p className="text-slate-600 font-bold mt-1 text-xs leading-relaxed">
                    Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-bold text-slate-900 mb-4 text-sm">Follow Social Channels</h4>
                <div className="flex space-x-3.5">
                  <a
                    href="https://instagram.com/thekeda.r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-xl hover:bg-brand-blue hover:text-white text-slate-500 hover:border-brand-blue transition-all hover:scale-105 shadow-sm flex items-center justify-center cursor-pointer"
                    aria-label="Instagram"
                  >
                    <Camera className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/917678627526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-xl hover:bg-emerald-600 hover:text-white text-slate-500 hover:border-emerald-600 transition-all hover:scale-105 shadow-sm flex items-center justify-center cursor-pointer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Card - 3 Columns */}
            <div className="md:col-span-3 bg-white border border-gray-150 p-8 rounded-3xl shadow-xl glass-panel">
              {/* Progress Indicator */}
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
                {/* Step 1: Category Selection */}
                {step === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Guided Intake Wizard</h3>
                      <p className="text-xs text-slate-500">Choose the category of service you are looking for.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: "it-support", title: "IT Support & Cloud Services", desc: "Cybersecurity, hardware, networks, cloud setups" },
                        { id: "software", title: "Custom App Development", desc: "Bespoke web apps, mobile apps, databases, CRM/ERP" },
                        { id: "manpower", title: "Manpower Staffing", desc: "Backup resources, temporary tech placements" },
                        { id: "hiring", title: "IT & Non-IT Recruitment", desc: "Vetted corporate hiring pipeline placements" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: opt.id })}
                          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                            formData.inquiryType === opt.id
                              ? "border-brand-blue bg-blue-50/40 shadow-sm ring-2 ring-brand-blue/10"
                              : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="font-bold text-slate-800 text-xs leading-tight">{opt.title}</span>
                            {formData.inquiryType === opt.id && (
                              <span className="w-4 h-4 rounded-full bg-brand-blue text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-500 leading-normal mt-2">{opt.desc}</p>
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      disabled={!formData.inquiryType}
                      onClick={() => setStep(2)}
                      className="w-full bg-brand-blue py-3.5 rounded-xl hover:bg-blue-700 font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm text-sm"
                    >
                      Continue to Details
                    </button>
                  </div>
                )}

                {/* Step 2: Message Requirements */}
                {step === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Guided Intake Wizard</h3>
                      <p className="text-xs text-slate-500">Provide high-level project details or helpdesk requirements.</p>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-gray-750 uppercase tracking-wider mb-2">
                        Requirements details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Detail your technology requirements, scale of operations, scheduling needs, or support concerns..."
                        required
                        rows="5"
                        className="w-full p-4 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all resize-vertical text-sm leading-relaxed"
                      ></textarea>
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-slate-200 hover:bg-slate-50 py-3.5 rounded-xl font-bold text-slate-600 transition-all cursor-pointer text-sm"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        disabled={!formData.message.trim()}
                        onClick={() => setStep(3)}
                        className="flex-1 bg-brand-blue py-3.5 rounded-xl hover:bg-blue-700 font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm shadow-sm"
                      >
                        Continue to Contact
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info & Submit */}
                {step === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Guided Intake Wizard</h3>
                      <p className="text-xs text-slate-500">Provide your contact details so our team can follow up.</p>
                    </div>
                    <div className="space-y-4.5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          required
                          className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all text-sm"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                            Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 9999999999"
                            className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-2 text-xs">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="flex gap-4 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 border border-slate-200 hover:bg-slate-50 py-3.5 rounded-xl font-bold text-slate-600 transition-all cursor-pointer text-sm"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading || !formData.name || !formData.email}
                        className="flex-1 bg-brand-blue py-3.5 rounded-xl hover:bg-blue-700 font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer text-sm shadow-md"
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Submit Request
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>

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

export default Contact;
