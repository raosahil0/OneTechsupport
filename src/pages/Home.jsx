import { Link } from "react-router-dom";
import { Star, Phone, Mail, MessageCircle, Monitor, Users, Search, ArrowRight, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const Home = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      {/* Hero Section - Premium Dark Gradient & Interactive Highlight */}
      <section className="relative text-center py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight">
            Your Trusted IT &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Staffing Partner
            </span>
          </h2>
          <p className="text-xl mb-4 text-slate-300 font-medium">
            Backup Manpower | Developers | IT Engineers | Non-IT Hiring
          </p>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed text-base">
            Bridging the gap between companies and elite talent. Our aim is to
            provide fast, reliable, and quality IT solutions tailored to your
            business requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-blue-600 px-8 py-4 rounded-xl text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-600 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Support
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto border border-slate-700 bg-slate-900/50 px-8 py-4 rounded-xl text-slate-200 font-bold hover:bg-slate-800 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats - Floating Overlap Card Panel */}
      <section className="relative px-6 max-w-6xl mx-auto -mt-16 z-20">
        <div className="bg-white border border-gray-150 rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="py-4 md:py-0">
            <h3 className="text-5xl font-extrabold text-blue-600 mb-2">50+</h3>
            <p className="text-slate-500 font-semibold uppercase tracking-wider text-xs">
              Active Clients
            </p>
          </div>
          <div className="py-4 md:py-0">
            <h3 className="text-5xl font-extrabold text-blue-600 mb-2">120+</h3>
            <p className="text-slate-500 font-semibold uppercase tracking-wider text-xs">
              Projects Delivered
            </p>
          </div>
          <div className="py-4 md:py-0">
            <h3 className="text-5xl font-extrabold text-blue-600 mb-2">3+</h3>
            <p className="text-slate-500 font-semibold uppercase tracking-wider text-xs">
              Years of Experience
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              We deliver custom technological frameworks and resource staffing solutions.
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-150 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                IT Support
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Complete IT infrastructure support, network setups, troubleshooting, cybersecurity, and cloud migration services.
              </p>
              <Link to="/services" className="text-blue-600 font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-150 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Manpower Support
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Reliable backup staff and flexible scheduling to ensure your commercial or technical operations continue without downtime.
              </p>
              <Link to="/services" className="text-blue-600 font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-150 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Hiring & Staffing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Fast sourcing of qualified software developers, network administrators, and experienced executive non-IT resources.
              </p>
              <Link to="/services" className="text-blue-600 font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Section */}
      <section className="py-24 px-6 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto z-10">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            We provide fast, reliable, and trusted support for your enterprise.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4 mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl inline-block mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Fast Support
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Response times focused on client priority. We deploy rapid troubleshooting systems to minimize any downtime.
              </p>
            </div>

            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl inline-block mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Expert Team</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A large roster of vetted systems developers, cloud engineers, and administrative managers ready for deployment.
              </p>
            </div>

            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl inline-block mb-6">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Trusted Service
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Consistent support SLAs and staffing coverage across multiple corporate client hubs in major cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Styled Carousel cards */}
      <section className="py-24 px-6 bg-slate-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Reviews and testimonials shared by our trusted corporate partners.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4 mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150 hover:shadow-md transition-shadow duration-300 text-left">
              <div className="flex mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                "Excellent IT support and incredibly quick service! They
                resolved our networking issues in record time."
              </p>
              <h4 className="font-bold text-slate-800 text-base">— Rahul Sharma</h4>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150 hover:shadow-md transition-shadow duration-300 text-left">
              <div className="flex mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                "Very reliable manpower support. We never have to worry about
                staffing shortages anymore."
              </p>
              <h4 className="font-bold text-slate-800 text-base">— Priya Verma</h4>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150 hover:shadow-md transition-shadow duration-300 text-left">
              <div className="flex mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                "Hands down the best hiring service for IT engineers. Highly
                professional and perfectly matched candidates."
              </p>
              <h4 className="font-bold text-slate-800 text-base">— Amit Singh</h4>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/clients"
              className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow hover:bg-blue-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* About - Clean Card Badges */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            About Us
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Providing end-to-end technical infrastructure support.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4 mb-10"></div>

          <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-3xl mx-auto">
            <strong className="text-blue-600 font-bold">S'K One Tech Support</strong> is
            dedicated to delivering reliable IT services and premium recruitment
            solutions. We bridge the gap between companies and top-tier talent
            with efficiency, transparency, and trust.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Whether you need emergency backup manpower or are looking to hire
            long-term developers, IT engineers, and non-IT staff, we have you
            covered.
          </p>

          <div className="bg-slate-50 p-8 rounded-2xl border border-gray-150 max-w-2xl mx-auto">
            <h4 className="font-bold text-slate-800 mb-4">
              Our Service Locations
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {["Jaipur", "Gurugram", "Delhi", "Noida", "Chandigarh", "Neemrana"].map((city) => (
                <span
                  key={city}
                  className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold shadow-sm text-sm"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Panel */}
      <section className="py-24 px-6 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-3xl mx-auto z-10">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4 mb-10"></div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center text-slate-300 text-lg font-medium">
              <Phone className="w-6 h-6 mr-3 text-blue-400" />
              +91 7678627526
            </div>
            <div className="flex items-center text-slate-300 text-lg font-medium">
              <Mail className="w-6 h-6 mr-3 text-blue-400" />
              skonetechsupport@gmail.com
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/thekeda.r"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-slate-700 text-slate-300 px-8 py-3.5 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/917678627526"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/20 flex items-center gap-2 hover:bg-blue-600 transition-all duration-200"
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
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all z-50 flex items-center justify-center hover:scale-110 duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default Home;
