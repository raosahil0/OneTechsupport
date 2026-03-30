import { useState } from "react";
import { Phone, Mail, MapPin, Camera, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    contacts.push({ ...formData, id: Date.now() });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-bold text-green-600 mb-4">
          Thank you for contacting us!
        </h3>
        <p className="text-gray-600">
          Your message has been sent successfully. We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-brand-blue text-center mb-12 font-bold">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mt-1 mr-4 text-brand-blue flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 7678627526</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mt-1 mr-4 text-brand-blue flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">allsolution.1402@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mt-1 mr-4 text-brand-blue flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Service Areas</p>
                    <p className="text-gray-600">
                      Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold mb-6 text-gray-800">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/thekeda.r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-blue p-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
                  >
                    <Camera className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/917678627526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-blue p-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (Optional)"
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none text-gray-900"
                  />
                </div>
                <div>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none text-gray-900"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="it-support">IT Support</option>
                    <option value="manpower">Manpower Support</option>
                    <option value="hiring">Hiring Services</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="4"
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none text-gray-900 resize-vertical"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-blue py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917678627526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-brand-blue p-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Contact;
