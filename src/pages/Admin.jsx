import { useState, useEffect } from "react";
import {
  getContacts,
  getFeedbacks,
  getLeads,
} from "../services/databaseService";
import {
  Mail,
  Phone,
  MessageSquare,
  Users,
  Star,
  Search,
  Lock,
  Unlock,
  RefreshCw,
  TrendingUp,
  Inbox,
  Award,
} from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [contacts, setContacts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [leads, setLeads] = useState([]);

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("inquiries");
  const [searchTerm, setSearchTerm] = useState("");

  // Default password for access
  const ADMIN_PASSWORD = "admin";

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      loadDashboardData();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [contactsData, feedbacksData, leadsData] = await Promise.all([
        getContacts(),
        getFeedbacks(),
        getLeads(),
      ]);
      setContacts(contactsData || []);
      setFeedbacks(feedbacksData || []);
      setLeads(leadsData || []);
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadDashboardData();
    }
  }, [isAuthenticated]);

  // Filters
  const filteredContacts = contacts.filter(
    (c) =>
      c.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFeedbacks = feedbacks.filter(
    (f) =>
      f.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLeads = leads.filter((l) =>
    l.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6 py-12">
        <div className="max-w-md w-full bg-white border border-gray-150 rounded-2xl shadow-md p-8 text-center">
          <div className="inline-flex p-4 bg-blue-50 text-brand-blue rounded-full mb-6">
            <Lock className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            Admin Portal
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Please enter your password to access the submission database.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all text-center text-lg tracking-wider"
              />
            </div>
            {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full bg-brand-blue py-3.5 rounded-xl hover:bg-blue-700 font-bold text-white shadow transition-all hover:scale-[1.01]"
            >
              Unlock Dashboard
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">Default password: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">admin</code></p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                <Unlock className="w-3 h-3" />
                Authorized Access
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-850">
              Database Dashboard
            </h2>
          </div>

          <button
            onClick={loadDashboardData}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-slate-50 active:scale-95 transition-all shadow-sm disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh Data
          </button>
        </div>

        {/* Overview Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm flex items-center gap-5">
            <div className="p-4 bg-blue-50 text-brand-blue rounded-xl">
              <Inbox className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Total Inquiries
              </p>
              <h3 className="text-3xl font-black text-gray-850 mt-1">
                {contacts.length}
              </h3>
            </div>
          </div>

          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm flex items-center gap-5">
            <div className="p-4 bg-amber-50 text-amber-500 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Feedbacks / Reviews
              </p>
              <h3 className="text-3xl font-black text-gray-850 mt-1">
                {feedbacks.length}
              </h3>
            </div>
          </div>

          <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm flex items-center gap-5">
            <div className="p-4 bg-purple-50 text-purple-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Newsletter Leads
              </p>
              <h3 className="text-3xl font-black text-gray-850 mt-1">
                {leads.length}
              </h3>
            </div>
          </div>
        </div>

        {/* Controls Panel */}
        <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Navigation Tabs */}
          <div className="flex bg-slate-100 p-1.5 rounded-xl gap-1">
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "inquiries"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-gray-500 hover:text-gray-850"
              }`}
            >
              Inquiries ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "reviews"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-gray-500 hover:text-gray-850"
              }`}
            >
              Reviews ({feedbacks.length})
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "leads"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-gray-500 hover:text-gray-850"
              }`}
            >
              Leads ({leads.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-gray-250 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 focus:bg-white focus:outline-none text-gray-900 transition-all text-sm"
            />
          </div>
        </div>

        {/* Data Container */}
        <div className="bg-white border border-gray-150 rounded-2xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="py-20 text-center text-gray-500">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-brand-blue" />
              Loading records...
            </div>
          ) : (
            <div>
              {/* inquiries Tab */}
              {activeTab === "inquiries" && (
                <div className="overflow-x-auto">
                  {filteredContacts.length === 0 ? (
                    <div className="py-16 text-center text-gray-400">
                      No inquiries found.
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-gray-150 text-xs font-bold uppercase text-gray-400 tracking-wider">
                          <th className="p-5">Client Info</th>
                          <th className="p-5">Inquiry Details</th>
                          <th className="p-5">Message</th>
                          <th className="p-5 text-right">Submitted</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredContacts.map((c) => (
                          <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-5">
                              <p className="font-bold text-gray-800">{c.name}</p>
                              <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                                <Mail className="w-3.5 h-3.5" />
                                <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
                              </div>
                              {c.phone && (
                                <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                                  <Phone className="w-3.5 h-3.5" />
                                  <span>{c.phone}</span>
                                </div>
                              )}
                            </td>
                            <td className="p-5">
                              <span className="inline-flex text-xs font-bold bg-blue-50 text-brand-blue px-2.5 py-1 rounded-md">
                                {c.inquiryType || "General"}
                              </span>
                            </td>
                            <td className="p-5 max-w-md">
                              <p className="text-gray-650 text-sm leading-relaxed whitespace-pre-line">
                                {c.message}
                              </p>
                            </td>
                            <td className="p-5 text-right text-xs text-gray-400">
                              {new Date(c.created_at).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {/* reviews Tab */}
              {activeTab === "reviews" && (
                <div className="overflow-x-auto">
                  {filteredFeedbacks.length === 0 ? (
                    <div className="py-16 text-center text-gray-400">
                      No reviews found.
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-gray-150 text-xs font-bold uppercase text-gray-400 tracking-wider">
                          <th className="p-5">Reviewer</th>
                          <th className="p-5">Rating</th>
                          <th className="p-5">Review Message</th>
                          <th className="p-5 text-right">Submitted</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredFeedbacks.map((f) => (
                          <tr key={f.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-5">
                              <p className="font-bold text-gray-850">{f.name}</p>
                            </td>
                            <td className="p-5">
                              <div className="flex space-x-0.5">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < f.rating
                                        ? "fill-amber-400 text-amber-400"
                                        : "text-gray-200 fill-gray-200"
                                    }`}
                                  />
                                ))}
                              </div>
                            </td>
                            <td className="p-5 max-w-md">
                              <p className="text-gray-650 text-sm leading-relaxed">
                                {f.message}
                              </p>
                            </td>
                            <td className="p-5 text-right text-xs text-gray-400">
                              {new Date(f.created_at).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {/* leads Tab */}
              {activeTab === "leads" && (
                <div className="overflow-x-auto">
                  {filteredLeads.length === 0 ? (
                    <div className="py-16 text-center text-gray-400">
                      No leads found.
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-gray-150 text-xs font-bold uppercase text-gray-400 tracking-wider">
                          <th className="p-5">Subscriber Email</th>
                          <th className="p-5">Source</th>
                          <th className="p-5 text-right">Subscribed At</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredLeads.map((l) => (
                          <tr key={l.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-5 font-medium text-gray-800">
                              <a href={`mailto:${l.email}`} className="hover:underline flex items-center gap-1.5">
                                <Mail className="w-4 h-4 text-gray-400" />
                                {l.email}
                              </a>
                            </td>
                            <td className="p-5">
                              <span className="inline-flex text-xs font-bold bg-purple-50 text-purple-600 px-2.5 py-1 rounded-md">
                                {l.source}
                              </span>
                            </td>
                            <td className="p-5 text-right text-xs text-gray-400">
                              {new Date(l.created_at).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
