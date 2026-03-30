import { Link } from "react-router-dom";
import { Star, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Hero Section - Dark Gradient */}
      <section className="text-center py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Your Trusted IT &{" "}
            <span className="text-blue-400">Staffing Partner</span>
          </h2>
          <p className="text-xl mb-4 text-slate-200 font-medium">
            Backup Manpower | Developers | IT Engineers | Non-IT Hiring
          </p>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Bridging the gap between companies and elite talent. Our aim is to
            provide fast, reliable, and quality IT solutions tailored to your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            {/* Primary Button - Fixed Hover */}
            <a
              href="#contact"
              className="bg-blue-600 px-8 py-3.5 rounded-lg text-white font-semibold shadow-lg shadow-blue-900/50 hover:bg-blue-500 hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Get Support
            </a>
            {/* Secondary Button - Fixed Contrast (Lighter Blue for Dark BG) */}
            <a
              href="#services"
              className="border-2 border-blue-400 px-8 py-3.5 rounded-lg text-blue-400 font-semibold hover:bg-blue-400 hover:text-slate-900 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats - Clean White Background */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-5xl font-extrabold text-blue-600 mb-2">50+</h3>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">
              Active Clients
            </p>
          </div>
          <div className="p-4 md:border-l md:border-r border-slate-100">
            <h3 className="text-5xl font-extrabold text-blue-600 mb-2">120+</h3>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">
              Projects Delivered
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-5xl font-extrabold text-blue-600 mb-2">3+</h3>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">
              Years Experience
            </p>
          </div>
        </div>
      </section>

      {/* Services - Soft Gray Background */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="text-2xl font-bold">IT</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                IT Support
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Complete IT infrastructure, robust troubleshooting, secure
                networking, and continuous 24/7 support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="text-2xl font-bold">MS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                Manpower Support
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Reliable backup manpower solutions designed to keep your
                business operations running flawlessly without downtime.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="text-2xl font-bold">HR</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                Hiring & Staffing
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Quick, vetted hiring of expert developers, specialized IT
                engineers, and essential non-IT staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Section */}
      <section className="py-24 px-6 bg-slate-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 border-blue-500">
              {/* Fixed Icon Contrast */}
              <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">
                Fast Support
              </h3>
              <p className="text-slate-300">
                Quick response times and reliable IT solutions tailored to your
                immediate needs.
              </p>
            </div>
            <div className="p-8 bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 border-blue-500">
              <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Expert Team</h3>
              <p className="text-slate-300">
                A roster of highly skilled, vetted professionals ready to tackle
                all IT & hiring challenges.
              </p>
            </div>
            <div className="p-8 bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 border-blue-500">
              <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">
                Trusted Service
              </h3>
              <p className="text-slate-300">
                A proven track record of success, trusted by multiple corporate
                clients across major cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Soft Gray Background */}
      <section className="py-24 px-6 bg-slate-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">
                "Excellent IT support and incredibly quick service! They
                resolved our networking issues in record time."
              </p>
              <h4 className="font-bold text-slate-900">— Rahul Sharma</h4>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">
                "Very reliable manpower support. We never have to worry about
                staffing shortages anymore."
              </p>
              <h4 className="font-bold text-slate-900">— Priya Verma</h4>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">
                "Hands down the best hiring service for IT engineers. Highly
                professional and perfectly matched candidates."
              </p>
              <h4 className="font-bold text-slate-900">— Amit Singh</h4>
            </div>
          </div>
          <div className="mt-12">
            <Link
              to="/clients"
              className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* About - Clean White Background */}
      <section id="about" className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-10"></div>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            <strong className="text-blue-600">S'K One Tech Support</strong> is
            dedicated to delivering reliable IT services and premium recruitment
            solutions. We bridge the gap between companies and top-tier talent
            with efficiency, transparency, and trust.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Whether you need emergency backup manpower or are looking to hire
            long-term developers, IT engineers, and non-IT staff, we have you
            covered.
          </p>
          <div className="inline-block bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">
              Our Service Locations
            </h4>
            <p className="text-blue-600 font-medium">
              Jaipur • Gurugram • Delhi • Noida • Chandigarh • Neemrana
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Footer Anchor - Dark Slate Background */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-10"></div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex items-center text-slate-300 text-lg">
              {/* Fixed Icon Contrast */}
              <Phone className="w-6 h-6 mr-3 text-blue-400" />
              +91 7678627526
            </div>
            <div className="flex items-center text-slate-300 text-lg">
              {/* Fixed Icon Contrast */}
              <Mail className="w-6 h-6 mr-3 text-blue-400" />
              allsolution.1402@gmail.com
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Outline Button - Fixed Hover */}
            <a
              href="https://instagram.com/thekeda.r"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-slate-600 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Instagram
            </a>
            {/* Primary Button - Fixed Hover */}
            <a
              href="https://wa.me/917678627526"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-blue-900/50 flex items-center gap-2 hover:bg-blue-500 hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917678627526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 ease-in-out z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default Home;
