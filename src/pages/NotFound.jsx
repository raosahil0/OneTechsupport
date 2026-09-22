import { Link } from "react-router-dom";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import SEO from "../components/SEO/SEO";
import { pageSeo } from "../seo/pageSeo";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-6 pt-32 pb-20 font-sans">
      <SEO
        title={pageSeo.notFound.title}
        description={pageSeo.notFound.description}
        canonical={pageSeo.notFound.canonical}
        noIndex={true}
      />
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm">
        <span className="text-6xl sm:text-7xl font-black text-brand-blue tracking-tight block">
          404
        </span>
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto bg-brand-blue hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" /> Return Home
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto border border-gray-200 hover:bg-slate-50 text-slate-700 font-bold px-5 py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
