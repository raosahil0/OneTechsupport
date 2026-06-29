import { useState, useEffect } from "react";
import {
  getContacts,
  getFeedbacks,
  getLeads,
  deleteContact,
  deleteFeedback,
  deleteLead,
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
  Inbox,
  Award,
  Download,
  Trash2,
  Sun,
  Moon,
  Send,
  X,
  FileSpreadsheet,
  BarChart2,
  TrendingUp,
} from "lucide-react";

const Admin = () => {
  // Authentication & Theme
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true); // Default to dark dashboard for premium look

  // Database Records
  const [contacts, setContacts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [leads, setLeads] = useState([]);

  // UI State
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("inquiries");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Modals & Active Records
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [copiedText, setCopiedText] = useState(""); // Track copy success state
  
  // Delete confirmation
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null); // { id, type }

  // Default secure password
  const ADMIN_PASSWORD = "Yadav@32!";

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

  // ─── COPY TO CLIPBOARD ───────────────────────────────────────────────────
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(type);
      setTimeout(() => setCopiedText(""), 2000);
    });
  };

  // ─── CSV EXPORTER ──────────────────────────────────────────────────────────
  const handleExportCSV = () => {
    let dataToExport = [];
    let headers = [];
    let filename = "";

    if (activeTab === "inquiries") {
      dataToExport = filteredContacts;
      headers = ["ID", "Name", "Email", "Phone", "Inquiry Type", "Message", "Date"];
      filename = "inquiries_export.csv";
    } else if (activeTab === "reviews") {
      dataToExport = filteredFeedbacks;
      headers = ["ID", "Name", "Rating", "Message", "Date"];
      filename = "reviews_export.csv";
    } else {
      dataToExport = filteredLeads;
      headers = ["ID", "Email", "Source", "Date"];
      filename = "leads_export.csv";
    }

    const csvRows = [headers.join(",")];

    dataToExport.forEach((item) => {
      let row = [];
      if (activeTab === "inquiries") {
        row = [
          item.id,
          `"${(item.name || "").replace(/"/g, '""')}"`,
          item.email,
          item.phone || "",
          item.inquiryType || "",
          `"${(item.message || "").replace(/"/g, '""')}"`,
          item.created_at,
        ];
      } else if (activeTab === "reviews") {
        row = [
          item.id,
          `"${(item.name || "").replace(/"/g, '""')}"`,
          item.rating,
          `"${(item.message || "").replace(/"/g, '""')}"`,
          item.created_at,
        ];
      } else {
        row = [item.id, item.email, item.source, item.created_at];
      }
      csvRows.push(row.join(","));
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ─── QUICK REPLY SYSTEM ───────────────────────────────────────────────────
  const openReplyModal = (inquiry) => {
    setSelectedInquiry(inquiry);
    setCopiedText("");
    setEmailSubject(`Response from S'K One Tech Support`);
    setEmailBody(
      `Hello ${inquiry.name},\n\nThank you for reaching out to S'K One Tech Support. We received your inquiry regarding "${inquiry.inquiryType || "IT Support"}".\n\n[Write your response here]\n\nBest regards,\nSahil Yadav\nFounder & CEO\nS'K One Tech Support`
    );
    setReplyModalOpen(true);
  };

  const applyTemplate = (type) => {
    if (!selectedInquiry) return;
    if (type === "consultation") {
      setEmailSubject(`Schedule a Consultation - S'K One Tech Support`);
      setEmailBody(
        `Hello ${selectedInquiry.name},\n\nThank you for contacting us. We would love to schedule a quick 15-minute introductory call to discuss your IT requirements in more detail.\n\nPlease let us know your availability over the next few days.\n\nBest regards,\nSahil Yadav\nFounder & CEO\nS'K One Tech Support`
      );
    } else if (type === "followup") {
      setEmailSubject(`Follow up: S'K One Tech Support`);
      setEmailBody(
        `Hello ${selectedInquiry.name},\n\nI wanted to follow up on the message you sent us regarding "${selectedInquiry.inquiryType || "your technical requirements"}".\n\nCould you please provide some more details about your current infrastructure so that we can prepare a tailored proposal?\n\nBest regards,\nSahil Yadav\nFounder & CEO\nS'K One Tech Support`
      );
    }
  };

  // ─── DELETE OPERATIONS ────────────────────────────────────────────────────
  const triggerDeleteConfirm = (id, type) => {
    setRecordToDelete({ id, type });
    setDeleteConfirmOpen(true);
  };

  const confirmDeleteRecord = async () => {
    if (!recordToDelete) return;
    const { id, type } = recordToDelete;
    
    try {
      if (type === "inquiry") {
        await deleteContact(id);
        setContacts(contacts.filter((c) => c.id !== id));
      } else if (type === "review") {
        await deleteFeedback(id);
        setFeedbacks(feedbacks.filter((f) => f.id !== id));
      } else if (type === "lead") {
        await deleteLead(id);
        setLeads(leads.filter((l) => l.id !== id));
      }
    } catch (err) {
      alert("Error deleting record. If RLS is enabled, ensure DELETE policies are configured in Supabase.");
    } finally {
      setDeleteConfirmOpen(false);
      setRecordToDelete(null);
    }
  };

  // ─── FILTERS ──────────────────────────────────────────────────────────────
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

  // ─── ANALYTICS CHART CALCULATIONS ─────────────────────────────────────────
  const getInquiryTypeStats = () => {
    const counts = {};
    contacts.forEach((c) => {
      const type = c.inquiryType || "Other";
      counts[type] = (counts[type] || 0) + 1;
    });
    return Object.entries(counts);
  };

  const getRatingStats = () => {
    const ratings = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    feedbacks.forEach((f) => {
      const r = f.rating || 5;
      ratings[r] = (ratings[r] || 0) + 1;
    });
    return Object.entries(ratings).reverse(); // 5 down to 1
  };

  if (!isAuthenticated) {
    return (
      <div className={`min-h-[80vh] flex items-center justify-center px-6 py-12 transition-colors duration-300 ${darkMode ? "bg-slate-950" : "bg-slate-50"}`}>
        <div className={`max-w-md w-full border rounded-2xl shadow-xl p-8 text-center transition-colors duration-300 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-150"}`}>
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? "hover:bg-slate-800 text-yellow-400" : "hover:bg-slate-100 text-gray-600"}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <div className="inline-flex p-4 bg-blue-500/10 text-brand-blue rounded-full mb-6">
            <Lock className="w-10 h-10" />
          </div>
          <h2 className={`text-3xl font-extrabold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Admin Portal
          </h2>
          <p className={`text-sm mb-6 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
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
                className={`w-full p-3.5 rounded-xl border focus:ring-4 focus:outline-none text-gray-900 transition-all text-center text-lg tracking-wider ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 focus:border-brand-blue focus:ring-brand-blue/20 text-white"
                    : "bg-slate-50 border-gray-250 focus:border-brand-blue focus:ring-brand-blue/15"
                }`}
              />
            </div>
            {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full bg-brand-blue py-3.5 rounded-xl hover:bg-blue-700 font-bold text-white shadow-lg transition-all hover:scale-[1.01]"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-10 px-6 transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
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
            <h2 className="text-4xl font-extrabold">Database Dashboard</h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-xl border transition-all ${
                darkMode
                  ? "bg-slate-900 border-slate-800 hover:bg-slate-800 text-yellow-400"
                  : "bg-white border-gray-200 hover:bg-slate-50 text-gray-600"
              }`}
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Refresh */}
            <button
              onClick={loadDashboardData}
              disabled={loading}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 border rounded-xl text-sm font-semibold transition-all shadow-sm disabled:opacity-50 ${
                darkMode
                  ? "bg-slate-900 border-slate-800 hover:bg-slate-800 text-white"
                  : "bg-white border-gray-200 hover:bg-slate-50 text-gray-700"
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>

            {/* Export */}
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-blue hover:bg-blue-600 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:scale-[1.01]"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* 📊 ANALYTICS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Inquiry Categories (SVG Chart) */}
          <div className={`border p-6 rounded-2xl shadow-sm ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-150"}`}>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-brand-blue" />
              Inquiry Categories
            </h3>
            <div className="space-y-3.5">
              {getInquiryTypeStats().length === 0 ? (
                <p className="text-xs text-gray-400 py-4 text-center">No data available</p>
              ) : (
                getInquiryTypeStats().map(([type, count]) => {
                  const percentage = Math.round((count / contacts.length) * 100) || 0;
                  return (
                    <div key={type} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="capitalize">{type.replace("-", " ")}</span>
                        <span>{count} ({percentage}%)</span>
                      </div>
                      <div className={`h-2 w-full rounded-full ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}>
                        <div
                          className="h-2 rounded-full bg-brand-blue transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Card 2: Star Rating Distribution (SVG Chart) */}
          <div className={`border p-6 rounded-2xl shadow-sm ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-150"}`}>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Rating Distribution
            </h3>
            <div className="space-y-3">
              {getRatingStats().map(([rating, count]) => {
                const percentage = Math.round((count / feedbacks.length) * 100) || 0;
                return (
                  <div key={rating} className="flex items-center gap-3 text-xs font-semibold">
                    <span className="w-3 text-right">{rating}★</span>
                    <div className={`h-2 flex-1 rounded-full ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}>
                      <div
                        className="h-2 rounded-full bg-amber-400 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-right text-gray-400">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 3: Metrics Summary */}
          <div className="grid grid-rows-3 gap-4">
            <div className={`border p-5 rounded-2xl shadow-sm flex items-center gap-4 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-150"}`}>
              <div className="p-3.5 bg-blue-500/10 text-brand-blue rounded-xl">
                <Inbox className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Inquiries</p>
                <h4 className="text-2xl font-black">{contacts.length}</h4>
              </div>
            </div>

            <div className={`border p-5 rounded-2xl shadow-sm flex items-center gap-4 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-150"}`}>
              <div className="p-3.5 bg-amber-500/10 text-amber-500 rounded-xl">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Reviews</p>
                <h4 className="text-2xl font-black">{feedbacks.length}</h4>
              </div>
            </div>

            <div className={`border p-5 rounded-2xl shadow-sm flex items-center gap-4 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-150"}`}>
              <div className="p-3.5 bg-purple-500/10 text-purple-500 rounded-xl">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Newsletter Subscribers</p>
                <h4 className="text-2xl font-black">{leads.length}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls & Search */}
        <div className={`border rounded-2xl shadow-sm p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-150"}`}>
          <div className={`flex p-1.5 rounded-xl gap-1 ${darkMode ? "bg-slate-950" : "bg-slate-100"}`}>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "inquiries"
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Inquiries ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "reviews"
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Reviews ({feedbacks.length})
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "leads"
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Leads ({leads.length})
            </button>
          </div>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${activeTab}...`}
              className={`w-full pl-11 pr-4 py-3 rounded-xl border focus:ring-4 focus:outline-none text-sm transition-all ${
                darkMode
                  ? "bg-slate-950 border-slate-800 focus:border-brand-blue focus:ring-brand-blue/20 text-white"
                  : "bg-slate-50 border-gray-250 focus:border-brand-blue focus:ring-brand-blue/15 text-gray-900"
              }`}
            />
          </div>
        </div>

        {/* Data Container Grid */}
        <div className={`border rounded-2xl shadow-sm overflow-hidden transition-colors ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-150"}`}>
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
                    <div className="py-16 text-center text-gray-400">No inquiries found.</div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className={`border-b text-xs font-bold uppercase tracking-wider ${darkMode ? "bg-slate-950/50 border-slate-800 text-gray-400" : "bg-slate-50 border-gray-150 text-gray-500"}`}>
                          <th className="p-5">Client Info</th>
                          <th className="p-5">Inquiry Type</th>
                          <th className="p-5">Message</th>
                          <th className="p-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${darkMode ? "divide-slate-800" : "divide-gray-100"}`}>
                        {filteredContacts.map((c) => (
                          <tr key={c.id} className={`transition-colors ${darkMode ? "hover:bg-slate-800/20" : "hover:bg-slate-50/50"}`}>
                            <td className="p-5">
                              <p className="font-bold">{c.name}</p>
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
                              <span className="inline-flex text-xs font-bold bg-blue-500/10 text-brand-blue px-2.5 py-1 rounded-md">
                                {c.inquiryType || "General"}
                              </span>
                            </td>
                            <td className="p-5 max-w-md">
                              <p className={`text-sm leading-relaxed whitespace-pre-line ${darkMode ? "text-gray-300" : "text-gray-650"}`}>
                                {c.message}
                              </p>
                              <span className="block text-[10px] text-gray-400 mt-2">
                                {new Date(c.created_at).toLocaleString()}
                              </span>
                            </td>
                            <td className="p-5 text-right">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => openReplyModal(c)}
                                  className="p-2 rounded-lg bg-blue-500/10 hover:bg-brand-blue text-brand-blue hover:text-white transition-colors"
                                  title="Compose Reply"
                                >
                                  <Send className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => triggerDeleteConfirm(c.id, "inquiry")}
                                  className="p-2 rounded-lg bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white transition-colors"
                                  title="Delete Record"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
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
                    <div className="py-16 text-center text-gray-400">No reviews found.</div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className={`border-b text-xs font-bold uppercase tracking-wider ${darkMode ? "bg-slate-950/50 border-slate-800 text-gray-400" : "bg-slate-50 border-gray-150 text-gray-500"}`}>
                          <th className="p-5">Reviewer</th>
                          <th className="p-5">Rating</th>
                          <th className="p-5">Message</th>
                          <th className="p-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${darkMode ? "divide-slate-800" : "divide-gray-100"}`}>
                        {filteredFeedbacks.map((f) => (
                          <tr key={f.id} className={`transition-colors ${darkMode ? "hover:bg-slate-800/20" : "hover:bg-slate-50/50"}`}>
                            <td className="p-5">
                              <p className="font-bold">{f.name}</p>
                              <span className="block text-[10px] text-gray-400 mt-1">
                                {new Date(f.created_at).toLocaleString()}
                              </span>
                            </td>
                            <td className="p-5">
                              <div className="flex space-x-0.5">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < f.rating
                                        ? "fill-amber-400 text-amber-400"
                                        : "text-slate-700 fill-slate-800"
                                    }`}
                                  />
                                ))}
                              </div>
                            </td>
                            <td className="p-5 max-w-md">
                              <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-650"}`}>
                                {f.message}
                              </p>
                            </td>
                            <td className="p-5 text-right">
                              <button
                                onClick={() => triggerDeleteConfirm(f.id, "review")}
                                className="p-2 rounded-lg bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white transition-colors"
                                title="Delete Review"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
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
                    <div className="py-16 text-center text-gray-400">No leads found.</div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className={`border-b text-xs font-bold uppercase tracking-wider ${darkMode ? "bg-slate-950/50 border-slate-800 text-gray-400" : "bg-slate-50 border-gray-150 text-gray-500"}`}>
                          <th className="p-5">Subscriber Email</th>
                          <th className="p-5">Source</th>
                          <th className="p-5">Subscribed At</th>
                          <th className="p-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${darkMode ? "divide-slate-800" : "divide-gray-100"}`}>
                        {filteredLeads.map((l) => (
                          <tr key={l.id} className={`transition-colors ${darkMode ? "hover:bg-slate-800/20" : "hover:bg-slate-50/50"}`}>
                            <td className="p-5 font-semibold">
                              <a href={`mailto:${l.email}`} className="hover:underline flex items-center gap-1.5">
                                <Mail className="w-4 h-4 text-gray-400" />
                                {l.email}
                              </a>
                            </td>
                            <td className="p-5">
                              <span className="inline-flex text-xs font-bold bg-purple-500/10 text-purple-500 px-2.5 py-1 rounded-md">
                                {l.source}
                              </span>
                            </td>
                            <td className="p-5 text-xs text-gray-400">
                              {new Date(l.created_at).toLocaleString()}
                            </td>
                            <td className="p-5 text-right">
                              <button
                                onClick={() => triggerDeleteConfirm(l.id, "lead")}
                                className="p-2 rounded-lg bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white transition-colors"
                                title="Delete Subscriber"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
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

      {/* ✉️ QUICK REPLY COMPOSER MODAL */}
      {replyModalOpen && selectedInquiry && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full rounded-2xl shadow-2xl p-6 border ${darkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-gray-100 text-gray-900"}`}>
            <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-blue" />
                Draft Response to {selectedInquiry.name}
              </h3>
              <button
                onClick={() => setReplyModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Template Presets */}
            <div className="mb-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Apply Template Preset:</p>
              <div className="flex gap-2">
                <button
                  onClick={() => applyTemplate("consultation")}
                  className="px-3.5 py-2 bg-blue-500/10 hover:bg-brand-blue text-brand-blue hover:text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => applyTemplate("followup")}
                  className="px-3.5 py-2 bg-blue-500/10 hover:bg-brand-blue text-brand-blue hover:text-white text-xs font-bold rounded-lg transition-colors"
                >
                  General Follow-Up
                </button>
              </div>
            </div>

            {/* Email Subject */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                <button
                  onClick={() => copyToClipboard(emailSubject, "subject")}
                  className="text-xs text-brand-blue hover:underline font-bold"
                >
                  {copiedText === "subject" ? "Copied!" : "Copy Subject"}
                </button>
              </div>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className={`w-full p-3 rounded-lg border focus:ring-2 focus:outline-none text-sm ${
                  darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-gray-200"
                }`}
              />
            </div>

            {/* Email Body */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Email Body</label>
                <button
                  onClick={() => copyToClipboard(emailBody, "body")}
                  className="text-xs text-brand-blue hover:underline font-bold"
                >
                  {copiedText === "body" ? "Copied!" : "Copy Body"}
                </button>
              </div>
              <textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                rows="8"
                className={`w-full p-3 rounded-lg border focus:ring-2 focus:outline-none text-sm resize-none ${
                  darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-gray-200"
                }`}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <button
                onClick={() => copyToClipboard(selectedInquiry.email, "email")}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg transition-colors"
              >
                {copiedText === "email" ? "Email Copied!" : "Copy Client Email"}
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setReplyModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-sm font-semibold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <a
                  href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                  onClick={() => setReplyModalOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-colors"
                >
                  Open in Mail Client
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🗑️ DELETE CONFIRMATION DIALOG */}
      {deleteConfirmOpen && recordToDelete && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-md w-full rounded-2xl shadow-2xl p-6 border text-center ${darkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-gray-100 text-gray-900"}`}>
            <div className="inline-flex p-3 bg-red-500/10 text-red-500 rounded-full mb-4">
              <Trash2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Delete Record?</h3>
            <p className="text-sm text-gray-400 mb-6">
              Are you sure you want to permanently delete this record? This action cannot be undone.
            </p>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setDeleteConfirmOpen(false)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-sm font-semibold rounded-xl transition-colors w-24"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteRecord}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl transition-colors w-24"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Admin;
