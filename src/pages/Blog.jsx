import { useState } from "react";
import { Search, Calendar, User, ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Navigating Multi-Cloud Migration: Strategy & Rationale",
    category: "Cloud",
    author: "Ravi Sharma",
    date: "2026-07-10",
    readTime: "6 min read",
    snippet: "Why modern enterprises are choosing hybrid cloud frameworks over single-vendor locks, and how to safely execute data pipelines migrations.",
    tags: ["AWS", "Azure", "Cloud Architecture"],
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Combating Ransomware in the Zero Trust Era",
    category: "Cyber Security",
    author: "Vikram Malhotra",
    date: "2026-07-08",
    readTime: "8 min read",
    snippet: "A practical guide to implementing Identity-based access policies and micro-segmentation to secure server databases.",
    tags: ["Zero Trust", "Firewall", "Compliance"],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Scaling Engineering Squads: Dedicated Staffing Models",
    category: "Staffing",
    author: "Neha Yadav",
    date: "2026-07-04",
    readTime: "5 min read",
    snippet: "How backup manpower support models help IT departments maintain velocity during sudden scale-up operations and key personnel transitions.",
    tags: ["Recruiting", "Agile Teams", "Manpower"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Building Resilient REST APIs with React & Node.js",
    category: "Software Development",
    author: "Amit Verma",
    date: "2026-06-28",
    readTime: "7 min read",
    snippet: "Best practices for backend structure, custom middleware schemas validation, token auth flows, and layout shifts prevention in client apps.",
    tags: ["React", "API Security", "Node.js"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "The Roadmap to ISO 27001 Compliance",
    category: "Cyber Security",
    author: "Vikram Malhotra",
    date: "2026-06-20",
    readTime: "10 min read",
    snippet: "An exhaustive walkthrough of technical security audit checklists and implementation controls required for enterprise data credentials verification.",
    tags: ["Compliance", "ISO Audits", "Data Governance"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Optimizing Serverless Databases Performance",
    category: "Cloud",
    author: "Ravi Sharma",
    date: "2026-06-15",
    readTime: "6 min read",
    snippet: "How indexes, query plans pooling, and RLS policies structures impact retrieval response times in transactional cloud SQL databases.",
    tags: ["Supabase", "PostgreSQL", "Database Tuning"],
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  }
];

const CATEGORIES = ["All", "Cloud", "Cyber Security", "Staffing", "Software Development"];
const POSTS_PER_PAGE = 3;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);

  // Filters logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.snippet.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesCategory && matchesSearch && matchesTag;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-28 font-sans">
      <SEO 
        title="Insights & Tech Articles" 
        description="Read technical guides, security briefs, cloud migration checklists, and dedicated staffing recommendations from our engineering leads."
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Hero Section */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full">
            Knowledge Hub
          </span>
          <h2 className="text-5xl font-black mt-4 mb-4 bg-gradient-to-r from-brand-blue to-indigo-600 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Case studies, technical analysis, and security updates compiled by the senior architects at One Tech Support.
          </p>
        </div>

        {/* Filters Controls Panel */}
        <div className="bg-white border border-gray-150 rounded-3xl p-5 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-5 glass-panel">
          {/* Categories Tab Group */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedTag(null);
                  setCurrentPage(1);
                }}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat && !selectedTag
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-100 hover:border-slate-350"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Selected Tag Filter Banner */}
        {selectedTag && (
          <div className="mb-8 flex items-center gap-2">
            <span className="text-xs text-slate-500">Filtering by tag:</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue text-white rounded-lg text-xs font-bold">
              <Tag className="w-3 h-3" />
              {selectedTag}
              <button 
                onClick={() => setSelectedTag(null)} 
                className="hover:text-red-200 font-extrabold cursor-pointer ml-1 text-[10px]"
              >
                ✕
              </button>
            </span>
          </div>
        )}

        {/* Main Insights Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {currentPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-150 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Banner Media */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white font-bold text-[10px] uppercase">
                    {post.category}
                  </div>
                </div>

                {/* Metadata & Copy details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {post.snippet}
                    </p>
                  </div>

                  <div>
                    {/* Tag list */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {post.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className={`text-[10px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-semibold ${
                            selectedTag === tag 
                              ? "bg-brand-blue/10 border-brand-blue/30 text-brand-blue" 
                              : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350 hover:text-slate-800"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    {/* Read More button link */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-blue group-hover:text-blue-700">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> Read Article
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search State */}
        {filteredPosts.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-xl font-bold text-slate-700 mb-1">No articles found</h3>
            <p className="text-slate-400 text-xs">Try adjusting your search terms or filters categories.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-slate-200 hover:border-slate-300 bg-white text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currentPage === page
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/15"
                    : "border border-slate-200 hover:border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-slate-200 hover:border-slate-300 bg-white text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
