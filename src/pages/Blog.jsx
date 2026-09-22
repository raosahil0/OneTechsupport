import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight, BookOpen, Clock, Tag, X, ExternalLink, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { BLOG_POSTS } from "../data/blogArticles";

const CATEGORIES = ["All", "Cloud", "Cyber Security", "Staffing", "Software Development"];
const POSTS_PER_PAGE = 3;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);
  const [quickReadPost, setQuickReadPost] = useState(null);

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
        description="Read technical guides, security briefs, cloud migration checklists, and dedicated staffing recommendations from SKONE Tech Support engineering leads."
        keywords="Tech Blog, Cloud Migration Guide, Cybersecurity Best Practices, IT Support Tips, Enterprise Architecture Articles"
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
            Case studies, technical analysis, and security updates compiled by the senior architects at SKONE Tech Support.
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
                <Link to={`/blog/${post.slug}`} className="h-48 overflow-hidden relative block group">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white font-bold text-[10px] uppercase">
                    {post.category}
                  </div>
                </Link>

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

                    <Link to={`/blog/${post.slug}`} className="block">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                    </Link>
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

                    {/* Read More button link & Quick Preview */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors py-1 cursor-pointer"
                        title="Read full article"
                      >
                        <BookOpen className="w-3.5 h-3.5" /> Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickReadPost(post);
                        }}
                        className="text-[11px] font-semibold text-slate-400 hover:text-slate-800 hover:bg-slate-100 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                        title="Quick preview in popup"
                      >
                        Quick Preview
                      </button>
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

        {/* Quick Read Article Modal */}
        <AnimatePresence>
          {quickReadPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setQuickReadPost(null)}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white w-full max-w-3xl max-h-[88vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-200"
              >
                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 bg-brand-blue/10 text-brand-blue font-bold text-[11px] rounded-md uppercase">
                      {quickReadPost.category}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {quickReadPost.readTime}
                    </span>
                  </div>
                  <button
                    onClick={() => setQuickReadPost(null)}
                    className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
                    aria-label="Close reader"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Article Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-left">
                  <div className="h-44 sm:h-56 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden relative">
                    <img
                      src={quickReadPost.img}
                      alt={quickReadPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {quickReadPost.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pb-4 border-b border-slate-100">
                    <span className="font-bold text-slate-800">{quickReadPost.author}</span>
                    <span>•</span>
                    <span>{quickReadPost.authorRole}</span>
                    <span>•</span>
                    <span>{new Date(quickReadPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>

                  <p className="text-slate-600 text-sm italic bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed">
                    {quickReadPost.snippet}
                  </p>

                  <div className="space-y-6 pt-2">
                    {quickReadPost.content.map((sec, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">{sec.heading}</h3>
                        <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                          {sec.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                  <div className="hidden sm:flex items-center gap-1.5">
                    {quickReadPost.tags.map((t) => (
                      <span key={t} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600 font-medium">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 ml-auto">
                    <button
                      type="button"
                      onClick={() => setQuickReadPost(null)}
                      className="text-xs text-slate-500 hover:text-slate-800 px-3 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <Link
                      to={`/blog/${quickReadPost.slug}`}
                      className="flex items-center gap-1.5 bg-brand-blue hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-brand-blue/20 cursor-pointer"
                    >
                      Open Full Article Page <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;
