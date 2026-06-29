import { useState } from "react";
import { Phone, Mail, MapPin, Camera, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { saveContact } from "../services/databaseService";

const Contact = () => {
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
      await saveContact({
        ...formData,
        created_at: new Date().toISOString(),
      });
      setSubmitted(true);
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
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-brand-blue to-blue-700 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have questions about our IT services or staffing solutions? Send us a message and our team will respond shortly.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-md mx-auto bg-white border border-gray-150 p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex p-4 bg-green-50 text-green-600 rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Message Sent!
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you for contacting us. Your message has been received successfully, and we'll reach out to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-brand-blue hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all duration-200"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Info Cards - 2 Columns */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6">
                Feel free to connect with us directly via phone, email, or social channels.
              </p>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start group">
                <div className="p-3 rounded-xl bg-blue-50 text-brand-blue mr-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Call Us</p>
                  <p className="text-gray-600 font-medium mt-1">+91 7678627526</p>
                </div>
              </div>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start group">
                <div className="p-3 rounded-xl bg-green-50 text-green-600 mr-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Email Us</p>
                  <p className="text-gray-600 font-medium mt-1 break-all">allsolution.1402@gmail.com</p>
                </div>
              </div>

              <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start group">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-600 mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Service Areas</p>
                  <p className="text-gray-600 font-medium mt-1 leading-relaxed">
                    Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/thekeda.r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-xl hover:bg-brand-blue hover:text-white text-gray-600 transition-all hover:scale-105 shadow-sm flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <Camera className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/917678627526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-xl hover:bg-green-600 hover:text-white text-gray-600 transition-all hover:scale-105 shadow-sm flex items-center justify-center"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Card - 3 Columns */}
            <div className="md:col-span-3 bg-white border border-gray-150 p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
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
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9999999999"
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="it-support">IT Support & Maintenance</option>
                    <option value="manpower">Manpower Support</option>
                    <option value="hiring">IT & Non-IT Recruitment</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements or questions here..."
                    required
                    rows="4"
                    className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all resize-vertical"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-sm font-semibold text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-blue py-4 rounded-xl hover:bg-blue-700 hover:shadow-md transition-all font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
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
        className="fixed bottom-5 right-5 bg-brand-blue p-3 rounded-lg shadow-md hover:bg-blue-700 transition-all z-50"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default Contact;
