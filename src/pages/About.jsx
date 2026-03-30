import { MessageCircle } from "lucide-react";

const About = () => {
  return (
    <div>
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-brand-blue mb-6 font-bold">
          About S'K One Tech Support
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6 text-gray-700">
            S'K One Tech Support is your trusted partner for comprehensive IT
            solutions and recruitment services. Founded with a vision to bridge
            the gap between technology and business needs, we have been serving
            clients across multiple cities with dedication and excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide reliable, efficient, and innovative IT solutions that
                empower businesses to thrive in the digital age. We strive to be
                the go-to partner for all technology and staffing needs.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become the leading provider of integrated IT and recruitment
                services, known for our commitment to quality, speed, and
                customer satisfaction across all our service areas.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-brand-blue">
              Why Choose Us?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-white">Expertise</h4>
                <p className="text-gray-300">
                  Years of experience in IT and recruitment
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-white">Reliability</h4>
                <p className="text-gray-300">
                  Consistent, dependable service delivery
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2 text-white">Innovation</h4>
                <p className="text-gray-300">
                  Latest technology solutions and methods
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-brand-blue">
              Service Areas
            </h3>
            <p className="mb-4 text-gray-700">We proudly serve clients in:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full font-medium">
                Jaipur
              </span>
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full font-medium">
                Gurugram
              </span>
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full font-medium">
                Delhi
              </span>
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full font-medium">
                Noida
              </span>
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full font-medium">
                Chandigarh
              </span>
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full font-medium">
                Neemrana
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-brand-blue mb-12 font-bold">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-800">
              SK
            </div>
            <h3 className="font-bold mb-2 text-gray-800">Founder & CEO</h3>
            <p className="text-gray-600">
              Leading the vision with years of IT experience
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-800">
              TS
            </div>
            <h3 className="font-bold mb-2 text-gray-800">Technical Lead</h3>
            <p className="text-gray-600">
              Expert in system architecture and solutions
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-800">
              HR
            </div>
            <h3 className="font-bold mb-2 text-gray-800">HR Manager</h3>
            <p className="text-gray-600">
              Specialized in talent acquisition and management
            </p>
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

export default About;
