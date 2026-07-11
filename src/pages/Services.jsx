import { MessageCircle, Check } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-brand-blue/5 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-brand-blue to-blue-700 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We provide robust IT infrastructure support, custom software resource staffing, and end-to-end recruitment pipelines.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="overflow-hidden h-48 w-full">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Custom Software & App Development" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Custom Software & App Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Tailored web apps, mobile apps, and enterprise software systems designed to streamline your business workflows, scale with your growth, and provide a premium user experience.
              </p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Full-Stack Web Applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>iOS & Android Mobile Apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Custom CRM & ERP Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>API Development & Cloud Systems</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="overflow-hidden h-48 w-full">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" 
                alt="IT Support" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">IT Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Complete IT infrastructure management, troubleshooting, networking
                solutions, and 24/7 technical support to keep your business
                running smoothly.
              </p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Hardware & Software Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Network Setup & Maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Cybersecurity Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Cloud Services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="overflow-hidden h-48 w-full">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
                alt="Manpower Support" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Manpower Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Reliable backup manpower solutions to ensure your operations
                continue without interruption. We provide skilled temporary staff
                for various roles.
              </p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Temporary Staffing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Emergency Backup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Project-Based Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Flexible Scheduling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="overflow-hidden h-48 w-full">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="IT Recruitment" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                IT Recruitment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Expert recruitment services for IT professionals. We connect you
                with top talent in development, engineering, and technical roles.
              </p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Developers & Engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>System Administrators</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>IT Consultants</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Technical Leads</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="overflow-hidden h-48 w-full">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Non-IT Hiring" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Non-IT Hiring
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Comprehensive recruitment for non-technical positions across
                various industries. We find the right fit for your organizational
                needs.
              </p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Administrative Roles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Sales & Marketing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Operations Staff</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Support Functions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="overflow-hidden h-48 w-full">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                alt="Consulting Services" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Consulting Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Strategic IT consulting to help your business leverage technology
                for growth. From digital transformation to process optimization.
              </p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Digital Strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Process Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Technology Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Implementation Support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="overflow-hidden h-48 w-full">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
                alt="Training & Development" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Training & Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Skill development programs and training solutions to upskill your
                team and stay competitive in the digital landscape.
              </p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Technical Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Soft Skills Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Certification Programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Custom Workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-brand-blue px-10 py-4 rounded-xl hover:bg-blue-700 text-lg font-bold text-white shadow hover:shadow-md transition-all duration-200"
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
        className="fixed bottom-5 right-5 bg-brand-blue p-3 rounded-lg shadow-md hover:bg-blue-700 transition-all z-50 animate-bounce"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default Services;
