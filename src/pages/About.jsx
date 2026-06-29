import { MessageCircle, Award, Users2, Activity, MapPin, Target, Eye, Shield, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-brand-blue/5 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-brand-blue to-blue-700 bg-clip-text text-transparent">
            About S'K One Tech Support
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            S'K One Tech Support is your trusted partner for comprehensive IT
            solutions and recruitment services. Founded with a vision to bridge
            the gap between technology and business needs, we serve clients
            across multiple cities with dedication and excellence.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="inline-flex p-3 rounded-xl bg-blue-50 text-brand-blue mb-4">
              <Users2 className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-extrabold text-gray-800">50+</h4>
            <p className="text-sm text-gray-500 font-medium mt-1">Active Clients</p>
          </div>

          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="inline-flex p-3 rounded-xl bg-green-50 text-green-600 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-extrabold text-gray-800">100+</h4>
            <p className="text-sm text-gray-500 font-medium mt-1">Projects Delivered</p>
          </div>

          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="inline-flex p-3 rounded-xl bg-purple-50 text-purple-600 mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-extrabold text-gray-800">99%</h4>
            <p className="text-sm text-gray-500 font-medium mt-1">SLA Uptime</p>
          </div>

          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="inline-flex p-3 rounded-xl bg-orange-50 text-orange-600 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-extrabold text-gray-800">6+</h4>
            <p className="text-sm text-gray-500 font-medium mt-1">Service Locations</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="inline-flex p-3 rounded-xl bg-brand-blue/10 text-brand-blue mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable, efficient, and innovative IT solutions that
              empower businesses to thrive in the digital age. We strive to be
              the go-to partner for all technology and staffing needs.
            </p>
          </div>

          <div className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="inline-flex p-3 rounded-xl bg-brand-blue/10 text-brand-blue mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading provider of integrated IT and recruitment
              services, known for our commitment to quality, speed, and
              customer satisfaction across all our service areas.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Our Core Values
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide our decisions and define how we deliver value to our clients every single day.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800 transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 inline-block mb-4 group-hover:scale-110 transition-transform">
                <Users2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Client-First</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Prioritizing your unique business requirements and delivering custom-fit solutions.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800 transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 inline-block mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Integrity</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fostering open communication, absolute transparency, and trusted long-term partnerships.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800 transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 inline-block mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Quality & Speed</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing high-quality IT professionals and resources rapidly to keep projects on track.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800 transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 inline-block mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Innovation</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leveraging the latest technologies and methodologies for sustainable tech ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Service Areas</h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          We provide consistent and high-quality IT support and recruitment services across multiple strategic cities:
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {["Jaipur", "Gurugram", "Delhi", "Noida", "Chandigarh", "Neemrana"].map((city) => (
            <span
              key={city}
              className="bg-white border border-gray-200 text-gray-700 hover:bg-brand-blue hover:text-white hover:border-brand-blue px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-default flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-brand-blue hover:text-white" />
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Team Directory */}
      <section className="py-20 px-6 bg-slate-50 border-t border-gray-150 text-center">
        <h2 className="text-4xl text-gray-800 mb-12 font-bold">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              SY
            </div>
            <h3 className="font-bold text-xl mb-1 text-gray-800">Sahil Yadav</h3>
            <p className="text-brand-blue font-semibold text-sm mb-3">Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              Leading the company's vision and overall growth with over a decade of IT and talent services experience.
            </p>
          </div>

          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              KS
            </div>
            <h3 className="font-bold text-xl mb-1 text-gray-800">Kapil Sharma</h3>
            <p className="text-brand-blue font-semibold text-sm mb-3">Technical Lead</p>
            <p className="text-gray-600 text-sm">
              Expert in system architecture, cloud deployment, and creating scalable IT support frameworks.
            </p>
          </div>

          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              HR
            </div>
            <h3 className="font-bold text-xl mb-1 text-gray-800">HR</h3>
            <p className="text-brand-blue font-semibold text-sm mb-3">HR Manager</p>
            <p className="text-gray-600 text-sm">
              Specialized in IT recruitment, talent vetting, client coordination, and resource scheduling.
            </p>
          </div>
        </div>
      </section>

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

export default About;
