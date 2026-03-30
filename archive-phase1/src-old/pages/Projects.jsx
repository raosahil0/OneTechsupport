import {
  MessageCircle,
  Monitor,
  Users,
  Search,
  Shield,
  Cloud,
  BarChart,
} from "lucide-react";

const Projects = () => {
  return (
    <div>
      <section className="py-20 px-6">
        <h2 className="text-4xl text-brand-blue text-center mb-12 font-bold">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-brand-blue to-slate-600 flex items-center justify-center">
              <Monitor className="w-12 h-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Network Infrastructure Setup
              </h3>
              <p className="text-gray-600 mb-4">
                Complete network setup for a 50-employee office including
                routers, switches, and security systems.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-brand-blue font-semibold">
                  IT Infrastructure
                </span>
                <span className="text-green-600 font-semibold">Completed</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-600 to-brand-blue flex items-center justify-center">
              <Users className="w-12 h-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Manpower Backup Solution
              </h3>
              <p className="text-gray-600 mb-4">
                Provided emergency backup staff for a manufacturing plant during
                peak season.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-brand-blue font-semibold">Staffing</span>
                <span className="text-green-600 font-semibold">Completed</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-slate-600 to-brand-blue flex items-center justify-center">
              <Search className="w-12 h-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                IT Talent Recruitment
              </h3>
              <p className="text-gray-600 mb-4">
                Recruited 15 senior developers and system architects for a tech
                startup.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-brand-blue font-semibold">
                  Recruitment
                </span>
                <span className="text-green-600 font-semibold">Completed</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-orange-600 to-slate-700 flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Cybersecurity Implementation
              </h3>
              <p className="text-gray-600 mb-4">
                Implemented comprehensive security solutions including firewalls
                and monitoring systems.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-brand-blue font-semibold">Security</span>
                <span className="text-green-600 font-semibold">Completed</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-teal-600 to-brand-blue flex items-center justify-center">
              <Cloud className="w-12 h-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Cloud Migration
              </h3>
              <p className="text-gray-600 mb-4">
                Migrated legacy systems to cloud infrastructure for improved
                scalability and cost efficiency.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-brand-blue font-semibold">
                  Cloud Services
                </span>
                <span className="text-green-600 font-semibold">Completed</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-indigo-600 to-slate-700 flex items-center justify-center">
              <BarChart className="w-12 h-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Data Analytics Setup
              </h3>
              <p className="text-gray-600 mb-4">
                Implemented data analytics platform for business intelligence
                and reporting.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-brand-blue font-semibold">Analytics</span>
                <span className="text-yellow-600 font-semibold">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see your project here?</p>
          <a
            href="/contact"
            className="bg-brand-blue px-8 py-4 rounded-lg hover:bg-blue-700 text-lg font-semibold transition-colors"
          >
            Start Your Project
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

export default Projects;
