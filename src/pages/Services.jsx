import { MessageCircle } from "lucide-react";

const Services = () => {
  return (
    <div>
      <section className="py-20 px-6">
        <h2 className="text-4xl text-brand-blue text-center mb-12 font-bold">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">IT Support</h3>
            <p className="text-gray-600 mb-4">
              Complete IT infrastructure management, troubleshooting, networking
              solutions, and 24/7 technical support to keep your business
              running smoothly.
            </p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>• Hardware & Software Support</li>
              <li>• Network Setup & Maintenance</li>
              <li>• Cybersecurity Solutions</li>
              <li>• Cloud Services</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Manpower Support
            </h3>
            <p className="text-gray-600 mb-4">
              Reliable backup manpower solutions to ensure your operations
              continue without interruption. We provide skilled temporary staff
              for various roles.
            </p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>• Temporary Staffing</li>
              <li>• Emergency Backup</li>
              <li>• Project-Based Support</li>
              <li>• Flexible Scheduling</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              IT Recruitment
            </h3>
            <p className="text-gray-600 mb-4">
              Expert recruitment services for IT professionals. We connect you
              with top talent in development, engineering, and technical roles.
            </p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>• Developers & Engineers</li>
              <li>• System Administrators</li>
              <li>• IT Consultants</li>
              <li>• Technical Leads</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Non-IT Hiring
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive recruitment for non-technical positions across
              various industries. We find the right fit for your organizational
              needs.
            </p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>• Administrative Roles</li>
              <li>• Sales & Marketing</li>
              <li>• Operations Staff</li>
              <li>• Support Functions</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Consulting Services
            </h3>
            <p className="text-gray-600 mb-4">
              Strategic IT consulting to help your business leverage technology
              for growth. From digital transformation to process optimization.
            </p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>• Digital Strategy</li>
              <li>• Process Automation</li>
              <li>• Technology Assessment</li>
              <li>• Implementation Support</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Training & Development
            </h3>
            <p className="text-gray-600 mb-4">
              Skill development programs and training solutions to upskill your
              team and stay competitive in the digital landscape.
            </p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>• Technical Training</li>
              <li>• Soft Skills Development</li>
              <li>• Certification Programs</li>
              <li>• Custom Workshops</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="bg-brand-blue px-8 py-4 rounded-lg hover:bg-blue-700 text-lg font-semibold transition-colors"
          >
            Get a Quote
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

export default Services;
