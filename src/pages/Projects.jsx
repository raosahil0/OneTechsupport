import {
  MessageCircle,
  FolderGit2,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const projectList = [
    {
      title: "Network Infrastructure Setup",
      description: "Complete corporate network installation for a 50-employee office including secure firewalls, managed switches, and high-performance wireless access points.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      category: "IT Infrastructure",
      status: "Completed",
    },
    {
      title: "Manpower Backup Solution",
      description: "Deployed standby technical support personnel and backup operators for a manufacturing facility during their peak high-volume season.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      category: "Staffing Solutions",
      status: "Completed",
    },
    {
      title: "IT Talent Recruitment",
      description: "Successfully sourced and placed 15 senior software engineers and cloud architects for a rapidly growing fintech client.",
      image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
      category: "Recruitment",
      status: "Completed",
    },
    {
      title: "Cybersecurity Implementation",
      description: "Designed and implemented end-to-end security audits, intrusion detection systems, and active security monitoring tools.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      category: "Security",
      status: "Completed",
    },
    {
      title: "Cloud Migration & Orchestration",
      description: "Migrated legacy on-premise application servers to a secure, scalable AWS environment utilizing infrastructure-as-code.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      category: "Cloud Services",
      status: "Completed",
    },
    {
      title: "Enterprise Data Analytics Setup",
      description: "Building a central business intelligence dashboard integrating sales, operations, and technical support metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      category: "Data Analytics",
      status: "In Progress",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-blue-50 text-brand-blue rounded-2xl mb-4">
            <FolderGit2 className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-brand-blue to-blue-700 bg-clip-text text-transparent">
            Our Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover some of our recently completed projects and ongoing collaborations across IT infrastructure, talent acquisition, and cloud services.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Status bar */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-xs font-semibold text-gray-400">Project Status</span>
                  {project.status === "Completed" ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5" />
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call-to-Action */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start your technical setup?
            </h3>
            <p className="text-blue-100 max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Partner with One Tech Support to build a reliable infrastructure, scale your engineering team, or transition securely to the cloud.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-md font-bold transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917678627526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-brand-blue p-3 rounded-lg shadow-md hover:bg-blue-700 transition-all z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default Projects;
