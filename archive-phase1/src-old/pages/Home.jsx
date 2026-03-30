import { Link } from "react-router-dom";
import { Star, Phone, Mail, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="text-center py-28 fade-in">
        <h2 className="text-5xl font-extrabold font-bold mb-4">
          Your Trusted IT & Staffing Partner
        </h2>
        <p className="text-lg mb-3">
          Backup Manpower | Developers | IT Engineers | Non-IT Hiring
        </p>
        <p className="text-gray-300">
          Our aim is to provide quality IT solutions.
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="bg-brand-blue px-6 py-3 rounded-lg hover:bg-blue-700 mr-3"
          >
            Get Support
          </a>
          <a
            href="#services"
            className="border border-brand-blue px-6 py-3 rounded-lg hover:bg-brand-blue text-brand-blue"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 text-center">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-4xl font-bold text-brand-blue">50+</h3>
            <p className="text-gray-700">Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-brand-blue">120+</h3>
            <p className="text-gray-700">Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-brand-blue">3+</h3>
            <p className="text-gray-700">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <h2 className="text-4xl text-brand-blue text-center mb-12 font-bold">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">IT Support</h3>
            <p className="text-gray-600">
              Complete IT infrastructure, troubleshooting, networking and
              support.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Manpower Support
            </h3>
            <p className="text-gray-600">
              Reliable backup manpower to keep your operations running smoothly.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Hiring</h3>
            <p className="text-gray-600">
              Quick hiring of developers, IT engineers, and non-IT staff.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-brand-blue mb-10 font-bold">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2 text-white">Fast Support</h3>
            <p className="text-gray-300">
              Quick response and reliable IT solutions.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2 text-white">Expert Team</h3>
            <p className="text-gray-300">
              Skilled professionals for all IT & hiring needs.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2 text-white">Trusted Service</h3>
            <p className="text-gray-300">
              Trusted by multiple clients across cities.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-brand-blue mb-10 font-bold">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-gray-600">
              Excellent IT support and quick service!
            </p>
            <h4 className="mt-2 font-bold text-brand-blue">— Rahul Sharma</h4>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-center mb-3">
              {Array.from({ length: 4 }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-gray-600">
              Very reliable manpower support.
            </p>
            <h4 className="mt-2 font-bold text-brand-blue">— Priya Verma</h4>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-gray-600">
              Best hiring service for IT engineers.
            </p>
            <h4 className="mt-2 font-bold text-brand-blue">— Amit Singh</h4>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/clients"
            className="bg-brand-blue px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View All Reviews
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 text-center">
        <h2 className="text-4xl text-brand-blue mb-6 font-bold">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          S'K One Tech Support is dedicated to delivering reliable IT services
          and recruitment solutions. We bridge the gap between companies and
          talent with efficiency and trust. We provide backup manpower support
          and hire developers, IT engineers and non-IT staff.
          <br />
          <br />
          Locations: Jaipur, Gurugram, Delhi, Noida, Chandigarh, Neemrana
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl text-brand-blue mb-6 font-bold">Contact Us</h2>
        <p className="mb-2 text-gray-700">
          <Phone className="inline w-5 h-5 mr-2 text-brand-blue" /> +91
          7678627526
        </p>
        <p className="mb-4 text-gray-700">
          <Mail className="inline w-5 h-5 mr-2 text-brand-blue" />{" "}
          allsolution.1402@gmail.com
        </p>
        <div className="mt-4">
          <a
            href="https://instagram.com/thekeda.r"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue px-5 py-2 rounded-lg hover:bg-blue-700 mr-3"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/917678627526"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            WhatsApp
          </a>
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

export default Home;
