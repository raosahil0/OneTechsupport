import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  Calendar, Clock, User, ArrowLeft, Share2, Tag, CheckCircle2, 
  ArrowRight, BookOpen, ShieldCheck, ChevronRight, Home 
} from "lucide-react";
import { useState } from "react";
import { BLOG_POSTS } from "../data/blogArticles";
import SEO from "../components/SEO/SEO";
import Breadcrumbs from "../components/SEO/Breadcrumbs";
import JsonLd from "../components/SEO/JsonLd";
import { siteConfig } from "../seo/siteConfig";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find post by slug or numeric ID
  const post = BLOG_POSTS.find((p) => p.slug === slug || p.id.toString() === slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-3xl font-black text-slate-900 mb-2">Article Not Found</h1>
        <p className="text-slate-500 text-sm mb-6">The article you are looking for does not exist or has been relocated.</p>
        <Link
          to="/blog"
          className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Insights
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;

  // Article Schema.org JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.snippet,
    image: post.img,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Insights", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <article className="bg-slate-50 text-slate-800 font-sans min-h-screen pb-24">
      <SEO
        title={`${post.title} | S'K ONE Insights`}
        description={post.snippet}
        canonical={articleUrl}
        image={post.img}
        type="article"
      />
      <JsonLd data={articleSchema} />

      {/* Hero Header Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.12),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <div className="mb-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 bg-brand-blue/20 border border-brand-blue/40 text-blue-400 font-bold text-xs uppercase tracking-wider rounded-lg">
              {post.category}
            </span>
            <span className="text-slate-400 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {post.snippet}
          </p>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-blue/30 border border-brand-blue/40 flex items-center justify-center text-white font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <span className="text-sm font-bold text-white block">{post.author}</span>
                <span className="text-xs text-slate-400 block">{post.authorRole} • {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-brand-blue" />
              <span>{copied ? "Link Copied!" : "Share Article"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <img
            src={post.img}
            alt={post.title}
            width="1200"
            height="600"
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <section className="max-w-4xl mx-auto px-6 pt-14 grid md:grid-cols-3 gap-12 items-start">
        {/* Article Copy */}
        <div className="md:col-span-2 space-y-10">
          {post.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {sec.heading}
              </h2>
              <div className="text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line space-y-3 font-normal">
                {sec.body}
              </div>
            </div>
          ))}

          {/* Tags */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Topic Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-slate-600"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Insights
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8 sticky top-28">
          {/* S'K ONE Consulting Box */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm leading-snug">
              Need Help Implementing This in Your Company?
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our certified cloud engineers, security auditors, and system administrators are ready to evaluate your infrastructure.
            </p>
            <Link
              to="/contact"
              className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              Book Free IT Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Recommended Articles */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              More Insights
            </h3>
            <div className="space-y-4">
              {otherPosts.map((op) => (
                <Link
                  key={op.id}
                  to={`/blog/${op.slug}`}
                  className="group block space-y-1"
                >
                  <span className="text-[10px] font-bold text-brand-blue uppercase">{op.category}</span>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {op.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
