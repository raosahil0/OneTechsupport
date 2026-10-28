import { useState, useEffect } from "react";
import { useAdminAuth } from "../hooks/useAdminAuth";
import {
  getContacts,
  getFeedbacks,
  getLeads,
  deleteContact,
  deleteFeedback,
  deleteLead,
  getAllTickets,
  updateTicketStatus,
  deleteTicket,
  getAllAccounts,
  deleteAccount,
  seedDemoData,
  clearAllLocalData,
} from "../services/databaseService";
import { isSupabaseEnabled } from "../services/supabaseClient";
import {
  Mail,
  Phone,
  Users,
  Star,
  Search,
  Lock,
  RefreshCw,
  Inbox,
  Award,
  Download,
  Trash2,
  Send,
  X,
  BarChart2,
  Paperclip,
  ClipboardList,
  LogOut,
  Database,
  Sparkles,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
} from "lucide-react";
import SEO from "../components/SEO";

const Admin = () => {
  // Authentication — via Supabase Auth + local fallback
  const { user: adminUser, isAdmin, loading: authLoading, error: authError, signIn, signOut } = useAdminAuth();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Database Records
  const [contacts, setContacts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [leads, setLeads] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [accounts, setAccounts] = useState([]);

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

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await signIn(loginEmail, loginPassword);
    if (success) {
      loadDashboardData();
    }
  };

  const handleAutofillCredentials = () => {
    setLoginEmail("skonetechsupport@gmail.com");
    setLoginPassword("Yadav@32!");
  };

  const loadDashboardData = async (forceRefresh = false) => {
    setLoading(true);
    try {
      let [contactsData, feedbacksData, leadsData, ticketsData, accountsData] = await Promise.all([
        getContacts(),
        getFeedbacks(),
        getLeads(),
        getAllTickets(),
        getAllAccounts(),
      ]);

      // If in local/offline storage mode and all tables are currently empty on initial load, auto-seed with sample records
      if (
        !isSupabaseEnabled &&
        !forceRefresh &&
        (!contactsData || contactsData.length === 0) &&
        (!feedbacksData || feedbacksData.length === 0) &&
        (!leadsData || leadsData.length === 0) &&
        (!ticketsData || ticketsData.length === 0)
      ) {
        const seeded = seedDemoData();
        contactsData = seeded.contacts;
        feedbacksData = seeded.feedbacks;
        leadsData = seeded.leads;
        ticketsData = seeded.tickets;
        accountsData = seeded.accounts;
      }

      setContacts(contactsData || []);
      setFeedbacks(feedbacksData || []);
      setLeads(leadsData || []);
      setTickets(ticketsData || []);
      setAccounts(accountsData || []);
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSeedData = () => {
    const seeded = seedDemoData();
    setContacts(seeded.contacts);
    setFeedbacks(seeded.feedbacks);
    setLeads(seeded.leads);
    setTickets(seeded.tickets);
    setAccounts(seeded.accounts);
  };

  const handleClearData = () => {
    if (window.confirm("Are you sure you want to clear all locally stored demo records?")) {
      clearAllLocalData();
      setContacts([]);
      setFeedbacks([]);
      setLeads([]);
      setTickets([]);
      setAccounts([]);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      loadDashboardData();
    }
  }, [isAdmin]);

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
    } else if (activeTab === "leads") {
      dataToExport = filteredLeads;
      headers = ["ID", "Email", "Source", "Date"];
      filename = "leads_export.csv";
    } else if (activeTab === "tickets") {
      dataToExport = filteredTickets;
      headers = ["Ticket ID", "Client Email", "Title", "Description", "Status", "Date"];
      filename = "tickets_export.csv";
    } else if (activeTab === "accounts") {
      dataToExport = filteredAccounts;
      headers = ["Account ID", "Name", "Email", "Date"];
      filename = "accounts_export.csv";
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
      } else if (activeTab === "leads") {
        row = [item.id, item.email, item.source, item.created_at];
      } else if (activeTab === "tickets") {
        row = [
          item.ticket_id || item.id,
          item.client_email,
          `"${(item.title || "").replace(/"/g, '""')}"`,
          `"${(item.description || "").replace(/"/g, '""')}"`,
          item.status,
          item.created_at,
        ];
      } else if (activeTab === "accounts") {
        row = [
          item.id,
          `"${(item.name || "").replace(/"/g, '""')}"`,
          item.email,
          item.created_at,
        ];
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
    setEmailSubject(`Response from S'K One Tech Support regarding ${inquiry.inquiryType || "IT Support"}`);
    setEmailBody(
      `Hello ${inquiry.name},\n\nThank you for reaching out to S'K One Tech Support. We received your inquiry regarding "${inquiry.inquiryType || "IT Support"}".\n\nOur engineering team has reviewed your requirements and we are ready to assist you.\n\nBest regards,\nSahil Yadav\nFounder & Operations Lead\nS'K One Tech Support\nPhone: +91 7678627526\nWeb: https://skonetechsupport.in`
    );
    setReplyModalOpen(true);
  };

  const applyTemplate = (type) => {
    if (!selectedInquiry) return;
    if (type === "consultation") {
      setEmailSubject(`Schedule a Technical Consultation - S'K One Tech Support`);
      setEmailBody(
        `Hello ${selectedInquiry.name},\n\nThank you for contacting us. We would love to schedule a quick 15-minute introductory call to discuss your IT requirements in more detail.\n\nPlease let us know your availability over the next few days.\n\nBest regards,\nSahil Yadav\nFounder & Operations Lead\nS'K One Tech Support`
      );
    } else if (type === "followup") {
      setEmailSubject(`Follow-Up: IT Infrastructure Discussion - S'K One Tech Support`);
      setEmailBody(
        `Hello ${selectedInquiry.name},\n\nI wanted to follow up on your recent inquiry regarding "${selectedInquiry.inquiryType || "your technical requirements"}".\n\nCould you please provide some more details about your current setup or number of workstations so that we can prepare a tailored proposal?\n\nBest regards,\nSahil Yadav\nFounder & Operations Lead\nS'K One Tech Support`
      );
    } else if (type === "amc") {
      setEmailSubject(`Annual Maintenance Contract (AMC) Proposal - S'K One Tech Support`);
      setEmailBody(
        `Hello ${selectedInquiry.name},\n\nThank you for inquiring about our AMC services. S'K One Tech Support offers 24/7 proactive monitoring, scheduled on-site maintenance, and sub-30-minute SLA response times.\n\nWe have attached our standard service tier overview for your review.\n\nBest regards,\nSahil Yadav\nFounder & Operations Lead\nS'K One Tech Support`
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
      } else if (type === "ticket") {
        await deleteTicket(id);
        setTickets(tickets.filter((t) => t.ticket_id !== id && t.id !== id));
      } else if (type === "account") {
        await deleteAccount(id);
        setAccounts(accounts.filter((u) => u.id !== id));
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
      c.message?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.inquiryType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFeedbacks = feedbacks.filter(
    (f) =>
      f.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLeads = leads.filter((l) =>
    l.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.source?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTickets = tickets.filter(
    (t) =>
      t.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.client_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.ticket_id?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAccounts = accounts.filter(
    (u) =>
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ─── ANALYTICS CALCULATIONS ───────────────────────────────────────────────
  const getInquiryTypeStats = () => {
    const counts = {};
    contacts.forEach((c) => {
      const type = c.inquiryType || "General";
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

  const calculateAverageRating = () => {
    if (feedbacks.length === 0) return "5.0";
    const sum = feedbacks.reduce((acc, f) => acc + (Number(f.rating) || 5), 0);
    return (sum / feedbacks.length).toFixed(1);
  };

  const getOpenTicketsCount = () => {
    return tickets.filter((t) => t.status === "Open" || t.status === "In Progress").length;
  };

  const getInitials = (name) => {
    if (!name) return "CL";
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  // ─── AUTH LOADING STATE ────────────────────────────────────────────────────
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-800">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-100 border-t-brand-blue rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
            </div>
          </div>
          <p className="text-sm font-semibold tracking-wide text-slate-600">Verifying security credentials...</p>
        </div>
      </div>
    );
  }

  // ─── LOGIN SCREEN (LIGHT THEME) ────────────────────────────────────────────
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center pt-28 pb-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 text-slate-800 relative overflow-hidden font-sans">
        <SEO title="Admin Security Portal | S'K One Tech Support" noIndex={true} />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-md w-full bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-200/60 relative z-10 my-auto">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5">
              <Lock className="w-3.5 h-3.5" />
              Restricted Operations Terminal
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-2">
              Admin Portal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Authenticate with administrative credentials to access real-time databases and operations.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4.5 h-4.5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="email"
                  placeholder="admin@skonetechsupport.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:border-brand-blue bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:ring-4 focus:ring-brand-blue/15 focus:outline-none text-sm transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Security Password
              </label>
              <div className="relative">
                <Lock className="w-4.5 h-4.5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-slate-300 focus:border-brand-blue bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:ring-4 focus:ring-brand-blue/15 focus:outline-none text-sm font-mono tracking-widest transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-700 transition-colors p-0.5 cursor-pointer"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {authError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                {authError}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-brand-blue hover:bg-blue-700 py-3.5 rounded-xl font-bold text-white shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
              {authLoading ? "Authenticating..." : "Unlock Dashboard"}
            </button>

            {/* Autofill Demo Credentials Shortcut */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleAutofillCredentials}
                className="text-xs text-slate-600 hover:text-brand-blue transition-colors inline-flex items-center gap-1.5 font-medium underline underline-offset-4 decoration-slate-300 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                Autofill Default Admin Credentials
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // ─── AUTHENTICATED DASHBOARD (CLEAN LIGHT THEME) ───────────────────────────
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 font-sans selection:bg-brand-blue selection:text-white">
      <SEO title="Command Center | S'K One Tech Support Admin" noIndex={true} />

      <div className="max-w-7xl mx-auto space-y-8">

        {/* 🌟 EXECUTIVE TOP COMMAND BANNER */}
        <div className="relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm overflow-hidden">
          {/* Subtle Ambient Decorative Gradient in Corner */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* Title & Status */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Operational Hub
                </span>

                {isSupabaseEnabled ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    <Database className="w-3.5 h-3.5 text-blue-600" />
                    Supabase Cloud Connected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200" title="Running with local storage persistence">
                    <Database className="w-3.5 h-3.5 text-amber-600" />
                    Local Sandbox Storage
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                Database Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Centralized management for customer inquiries, verified reviews, subscriber leads, and technical support ticketing.
              </p>
            </div>

            {/* Quick Action Toolbar */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Seed Demo Data Button */}
              <button
                onClick={handleSeedData}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                title="Populate realistic demo records into the dashboard"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Seed Demo Data
              </button>

              {/* Refresh Button */}
              <button
                onClick={() => loadDashboardData(true)}
                disabled={loading}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 disabled:opacity-50 cursor-pointer"
                title="Refresh database records"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-brand-blue" : "text-slate-500"}`} />
                Refresh
              </button>

              {/* Export CSV Button */}
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-blue hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
                title="Export currently selected tab data to CSV"
              >
                <Download className="w-3.5 h-3.5" />
                Export CSV
              </button>

              {/* Sign Out Button */}
              <button
                onClick={signOut}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                title="Sign out of Admin Portal"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* 📊 5-COLUMN CLEAN EXECUTIVE METRICS TILES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* Card 1: Inquiries */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <Inbox className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                Inbound
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Inquiries</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{contacts.length}</h3>
            <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1 font-medium">
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              {getInquiryTypeStats().length} active categories
            </p>
          </div>

          {/* Card 2: Reviews */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                <Star className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                {calculateAverageRating()} ★
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client Reviews</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{feedbacks.length}</h3>
            <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1 font-medium">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              Average score rating
            </p>
          </div>

          {/* Card 3: Leads */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                Audience
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Newsletter Leads</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{leads.length}</h3>
            <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
              Active subscribers
            </p>
          </div>

          {/* Card 4: Support Tickets */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100">
                <ClipboardList className="w-5 h-5" />
              </div>
              {getOpenTicketsCount() > 0 ? (
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                  {getOpenTicketsCount()} Pending
                </span>
              ) : (
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Clear
                </span>
              )}
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Support Tickets</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{tickets.length}</h3>
            <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              SLA tracking active
            </p>
          </div>

          {/* Card 5: Registered Accounts */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                Users
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client Accounts</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{accounts.length}</h3>
            <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1 font-medium">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              Portal registrations
            </p>
          </div>
        </div>

        {/* 📈 ANALYTICS CARDS: INQUIRY CATEGORIES & STAR RATINGS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Chart 1: Inquiry Categories Distribution */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-50 text-brand-blue">
                  <BarChart2 className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Inquiry Categories</h3>
              </div>
              <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                {contacts.length} total messages
              </span>
            </div>

            <div className="space-y-4">
              {getInquiryTypeStats().length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-xs font-medium">
                  No inquiries received yet. Click "Seed Demo Data" above to preview analytics.
                </div>
              ) : (
                getInquiryTypeStats().map(([type, count]) => {
                  const percentage = Math.round((count / (contacts.length || 1)) * 100) || 0;
                  return (
                    <div key={type} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="capitalize text-slate-700">{type.replace("-", " ")}</span>
                        <span className="text-brand-blue font-mono">{count} ({percentage}%)</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full overflow-hidden bg-slate-100">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-brand-blue to-cyan-500 transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Chart 2: Rating Distribution */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Rating Distribution</h3>
              </div>
              <span className="text-xs text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                {calculateAverageRating()} / 5.0 Rating
              </span>
            </div>

            <div className="space-y-3">
              {getRatingStats().map(([rating, count]) => {
                const percentage = Math.round((count / (feedbacks.length || 1)) * 100) || 0;
                return (
                  <div key={rating} className="flex items-center gap-3 text-xs font-bold">
                    <span className="w-8 text-right text-amber-600 font-mono flex items-center justify-end gap-0.5">
                      {rating}★
                    </span>
                    <div className="h-2.5 flex-1 rounded-full overflow-hidden bg-slate-100">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-14 text-right text-slate-500 font-mono">{count} ({percentage}%)</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 🗂️ TAB NAVIGATION & SEARCH CONTROLS */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Segmented Navigation Tabs */}
          <div className="flex flex-wrap p-1 rounded-2xl bg-slate-100 border border-slate-200 gap-1">
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "inquiries"
                  ? "bg-white text-brand-blue shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              Inquiries
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeTab === "inquiries" ? "bg-blue-50 text-brand-blue font-bold" : "bg-slate-200 text-slate-600"}`}>
                {contacts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "reviews"
                  ? "bg-white text-brand-blue shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              Reviews
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeTab === "reviews" ? "bg-blue-50 text-brand-blue font-bold" : "bg-slate-200 text-slate-600"}`}>
                {feedbacks.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("leads")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "leads"
                  ? "bg-white text-brand-blue shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Leads
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeTab === "leads" ? "bg-blue-50 text-brand-blue font-bold" : "bg-slate-200 text-slate-600"}`}>
                {leads.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("tickets")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "tickets"
                  ? "bg-white text-brand-blue shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              Tickets
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeTab === "tickets" ? "bg-blue-50 text-brand-blue font-bold" : "bg-slate-200 text-slate-600"}`}>
                {tickets.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("accounts")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "accounts"
                  ? "bg-white text-brand-blue shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Accounts
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeTab === "accounts" ? "bg-blue-50 text-brand-blue font-bold" : "bg-slate-200 text-slate-600"}`}>
                {accounts.length}
              </span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search in ${activeTab}...`}
              className="w-full pl-11 pr-10 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:outline-none text-xs transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 📋 DATA TABLES CONTAINER */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
            <div className="py-24 text-center text-slate-500">
              <RefreshCw className="w-10 h-10 animate-spin mx-auto mb-4 text-brand-blue" />
              <p className="text-sm font-semibold">Synchronizing database records...</p>
            </div>
          ) : (
            <div>

              {/* ── 1. INQUIRIES TAB ── */}
              {activeTab === "inquiries" && (
                <div className="overflow-x-auto">
                  {filteredContacts.length === 0 ? (
                    <div className="py-20 text-center">
                      <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-800 font-bold text-base">No inquiries found</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                        Inquiries submitted through the Contact Us form will appear here in real time.
                      </p>
                      <button
                        onClick={handleSeedData}
                        className="mt-4 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold border border-blue-200 transition-all cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        Load Sample Inquiries
                      </button>
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          <th className="p-5">Client Profile</th>
                          <th className="p-5">Service Category</th>
                          <th className="p-5">Inquiry Details</th>
                          <th className="p-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {filteredContacts.map((c) => (
                          <tr key={c.id} className="transition-colors hover:bg-slate-50/80">
                            {/* Client Profile */}
                            <td className="p-5">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                                  {getInitials(c.name)}
                                </div>
                                <div>
                                  <p className="font-bold text-slate-900 text-sm">{c.name}</p>
                                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                                    <a href={`mailto:${c.email}`} className="hover:text-brand-blue transition-colors">
                                      {c.email}
                                    </a>
                                  </div>
                                  {c.phone && (
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                                      <span>{c.phone}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>

                            {/* Service Category */}
                            <td className="p-5">
                              <span className="inline-flex text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200 capitalize">
                                {(c.inquiryType || "General").replace("-", " ")}
                              </span>
                            </td>

                            {/* Message & Timestamp */}
                            <td className="p-5 max-w-md">
                              <p className="text-xs leading-relaxed text-slate-700 line-clamp-3 whitespace-pre-line">
                                {c.message}
                              </p>
                              <span className="block text-[10px] text-slate-400 mt-2 font-mono">
                                {new Date(c.created_at).toLocaleString()}
                              </span>
                            </td>

                            {/* Actions */}
                            <td className="p-5 text-right">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => openReplyModal(c)}
                                  className="p-2 rounded-xl bg-blue-50 hover:bg-brand-blue text-blue-600 hover:text-white transition-all hover:scale-105 active:scale-95 border border-blue-200 cursor-pointer"
                                  title="Draft response via Gmail"
                                >
                                  <Send className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => triggerDeleteConfirm(c.id, "inquiry")}
                                  className="p-2 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white transition-all hover:scale-105 active:scale-95 border border-red-200 cursor-pointer"
                                  title="Delete record"
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

              {/* ── 2. REVIEWS TAB ── */}
              {activeTab === "reviews" && (
                <div className="overflow-x-auto">
                  {filteredFeedbacks.length === 0 ? (
                    <div className="py-20 text-center">
                      <Star className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-800 font-bold text-base">No client reviews found</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                        Feedback gathered from client reviews will be logged and displayed here.
                      </p>
                      <button
                        onClick={handleSeedData}
                        className="mt-4 px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl text-xs font-bold border border-amber-200 transition-all cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        Load Sample Reviews
                      </button>
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          <th className="p-5">Reviewer</th>
                          <th className="p-5">Star Rating</th>
                          <th className="p-5">Feedback Testimonial</th>
                          <th className="p-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {filteredFeedbacks.map((f) => (
                          <tr key={f.id} className="transition-colors hover:bg-slate-50/80">
                            <td className="p-5">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                                  {getInitials(f.name)}
                                </div>
                                <div>
                                  <p className="font-bold text-slate-900 text-sm">{f.name}</p>
                                  <span className="block text-[10px] text-slate-400 font-mono mt-0.5">
                                    {new Date(f.created_at).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="p-5">
                              <div className="flex space-x-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < f.rating
                                        ? "fill-amber-400 text-amber-400"
                                        : "text-slate-300 fill-slate-100"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-[10px] text-amber-700 font-bold mt-1 block">
                                {f.rating}.0 / 5.0
                              </span>
                            </td>
                            <td className="p-5 max-w-md">
                              <p className="text-xs leading-relaxed text-slate-700 italic">
                                "{f.message}"
                              </p>
                            </td>
                            <td className="p-5 text-right">
                              <button
                                onClick={() => triggerDeleteConfirm(f.id, "review")}
                                className="p-2 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white transition-all hover:scale-105 active:scale-95 border border-red-200 cursor-pointer"
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

              {/* ── 3. LEADS TAB ── */}
              {activeTab === "leads" && (
                <div className="overflow-x-auto">
                  {filteredLeads.length === 0 ? (
                    <div className="py-20 text-center">
                      <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-800 font-bold text-base">No subscriber leads found</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                        Website visitors subscribing through the footer newsletter will appear here.
                      </p>
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          <th className="p-5">Subscriber Email</th>
                          <th className="p-5">Attribution Source</th>
                          <th className="p-5">Subscribed Date</th>
                          <th className="p-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {filteredLeads.map((l) => (
                          <tr key={l.id} className="transition-colors hover:bg-slate-50/80">
                            <td className="p-5 font-semibold text-sm">
                              <a
                                href={`mailto:${l.email}`}
                                className="text-brand-blue hover:text-blue-700 transition-colors flex items-center gap-2"
                              >
                                <Mail className="w-4 h-4 text-slate-400" />
                                {l.email}
                              </a>
                            </td>
                            <td className="p-5">
                              <span className="inline-flex text-xs font-bold bg-purple-50 text-purple-700 px-3 py-1 rounded-lg border border-purple-200 capitalize">
                                {l.source || "Newsletter"}
                              </span>
                            </td>
                            <td className="p-5 text-xs text-slate-500 font-mono">
                              {new Date(l.created_at).toLocaleString()}
                            </td>
                            <td className="p-5 text-right">
                              <button
                                onClick={() => triggerDeleteConfirm(l.id, "lead")}
                                className="p-2 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white transition-all hover:scale-105 active:scale-95 border border-red-200 cursor-pointer"
                                title="Delete Lead"
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

              {/* ── 4. TICKETS TAB ── */}
              {activeTab === "tickets" && (
                <div className="overflow-x-auto">
                  {filteredTickets.length === 0 ? (
                    <div className="py-20 text-center">
                      <ClipboardList className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-800 font-bold text-base">No support tickets found</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                        Tickets submitted by registered clients through their portal will be logged here.
                      </p>
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          <th className="p-5">Ticket Reference</th>
                          <th className="p-5">Client Account</th>
                          <th className="p-5">Issue Specification</th>
                          <th className="p-5">Attachment</th>
                          <th className="p-5">Status</th>
                          <th className="p-5 text-right">Manage Ticket</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {filteredTickets.map((t) => {
                          const shortId = t.ticket_id
                            ? (t.ticket_id.startsWith("tkt_") ? t.ticket_id.substring(4, 10) : t.ticket_id.substring(0, 6))
                            : "TKT";

                          let statusBadge = "bg-blue-50 text-blue-700 border-blue-200";
                          if (t.status === "In Progress") {
                            statusBadge = "bg-amber-50 text-amber-800 border-amber-200";
                          } else if (t.status === "Resolved" || t.status === "Closed") {
                            statusBadge = "bg-emerald-50 text-emerald-700 border-emerald-200";
                          }

                          return (
                            <tr key={t.ticket_id || t.id} className="transition-colors hover:bg-slate-50/80">
                              <td className="p-5 font-mono text-xs font-bold text-slate-500">
                                #{shortId.toUpperCase()}
                              </td>
                              <td className="p-5">
                                <p className="font-bold text-sm text-slate-900">{t.client_email}</p>
                                <span className="block text-[10px] text-slate-400 font-mono mt-0.5">
                                  ID: {t.client_id ? t.client_id.substring(0, 8) : "GUEST"}
                                </span>
                              </td>
                              <td className="p-5 max-w-sm">
                                <p className="font-bold text-sm text-slate-900">{t.title}</p>
                                <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                                  {t.description}
                                </p>
                                <span className="block text-[10px] text-slate-400 font-mono mt-1.5">
                                  {new Date(t.created_at).toLocaleString()}
                                </span>
                              </td>
                              <td className="p-5 text-xs">
                                {t.attachment_url ? (
                                  <a
                                    href={t.attachment_url}
                                    download={t.attachment_name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-brand-blue hover:text-blue-700 font-semibold underline underline-offset-2"
                                  >
                                    <Paperclip className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span className="max-w-[120px] truncate">{t.attachment_name || "Attachment"}</span>
                                  </a>
                                ) : (
                                  <span className="text-slate-400 text-xs italic">None</span>
                                )}
                              </td>
                              <td className="p-5">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${statusBadge}`}>
                                  {t.status}
                                </span>
                              </td>
                              <td className="p-5 text-right">
                                <div className="flex justify-end gap-2 items-center">
                                  <select
                                    value={t.status}
                                    onChange={async (e) => {
                                      try {
                                        await updateTicketStatus(t.ticket_id, e.target.value);
                                        setTickets(
                                          tickets.map((ticket) =>
                                            ticket.ticket_id === t.ticket_id
                                              ? { ...ticket, status: e.target.value }
                                              : ticket
                                          )
                                        );
                                      } catch (err) {
                                        console.error("Failed to update status:", err);
                                        alert("Failed to update ticket status.");
                                      }
                                    }}
                                    className="text-xs bg-white border border-slate-300 text-slate-800 rounded-xl p-2 focus:border-brand-blue focus:outline-none cursor-pointer font-semibold shadow-sm"
                                  >
                                    <option value="Open">Open</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Resolved">Resolved</option>
                                    <option value="Closed">Closed</option>
                                  </select>

                                  <button
                                    onClick={() => triggerDeleteConfirm(t.ticket_id, "ticket")}
                                    className="p-2 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white transition-all hover:scale-105 active:scale-95 border border-red-200 cursor-pointer"
                                    title="Delete Ticket"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {/* ── 5. ACCOUNTS TAB ── */}
              {activeTab === "accounts" && (
                <div className="overflow-x-auto">
                  {filteredAccounts.length === 0 ? (
                    <div className="py-20 text-center">
                      <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-800 font-bold text-base">No registered client accounts found</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                        Clients who create an account in the Client Portal will appear here.
                      </p>
                    </div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          <th className="p-5">Account ID</th>
                          <th className="p-5">Client Credentials</th>
                          <th className="p-5">Registration Date</th>
                          <th className="p-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {filteredAccounts.map((u) => (
                          <tr key={u.id} className="transition-colors hover:bg-slate-50/80">
                            <td className="p-5 font-mono text-xs text-slate-500 font-bold">
                              {u.id}
                            </td>
                            <td className="p-5">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs border border-emerald-200">
                                  {getInitials(u.name || u.email)}
                                </div>
                                <div>
                                  {u.name && <p className="font-bold text-slate-900 text-sm">{u.name}</p>}
                                  <a
                                    href={`mailto:${u.email}`}
                                    className="text-xs text-brand-blue hover:text-blue-700 transition-colors"
                                  >
                                    {u.email}
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="p-5 text-xs text-slate-500 font-mono">
                              {u.created_at ? new Date(u.created_at).toLocaleString() : "Pre-configured"}
                            </td>
                            <td className="p-5 text-right">
                              <button
                                onClick={() => triggerDeleteConfirm(u.id, "account")}
                                className="p-2 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white transition-all hover:scale-105 active:scale-95 border border-red-200 cursor-pointer"
                                title="Delete Client Account"
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

        {/* Local Sandbox Quick-Reset Footer Option (Visible when not Supabase connected) */}
        {!isSupabaseEnabled && (
          <div className="text-center pt-2">
            <button
              onClick={handleClearData}
              className="text-xs text-slate-400 hover:text-rose-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Reset / Clear Local Sandbox Database
            </button>
          </div>
        )}
      </div>

      {/* ✉️ QUICK REPLY COMPOSER MODAL (LIGHT THEME) */}
      {replyModalOpen && selectedInquiry && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300">
          <div className="max-w-2xl w-full rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-200 bg-white text-slate-900 animate-scaleIn">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-6">
              <h3 className="text-xl font-black flex items-center gap-2.5 text-slate-900">
                <Mail className="w-5 h-5 text-brand-blue" />
                Compose Client Response
              </h3>
              <button
                onClick={() => setReplyModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Template Presets */}
            <div className="mb-6">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Quick Template Presets:
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => applyTemplate("consultation")}
                  className="px-3.5 py-2 bg-blue-50 hover:bg-brand-blue border border-blue-200 text-blue-700 hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => applyTemplate("followup")}
                  className="px-3.5 py-2 bg-blue-50 hover:bg-brand-blue border border-blue-200 text-blue-700 hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  General Follow-Up
                </button>
                <button
                  onClick={() => applyTemplate("amc")}
                  className="px-3.5 py-2 bg-blue-50 hover:bg-brand-blue border border-blue-200 text-blue-700 hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  AMC Contract Pitch
                </button>
              </div>
            </div>

            {/* Email Subject */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Subject Line
                </label>
                <button
                  onClick={() => copyToClipboard(emailSubject, "subject")}
                  className="text-xs text-brand-blue hover:text-blue-700 font-bold transition-colors cursor-pointer"
                >
                  {copiedText === "subject" ? "Copied!" : "Copy Subject"}
                </button>
              </div>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 focus:border-brand-blue focus:outline-none text-xs font-medium"
              />
            </div>

            {/* Email Body */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Email Message Body
                </label>
                <button
                  onClick={() => copyToClipboard(emailBody, "body")}
                  className="text-xs text-brand-blue hover:text-blue-700 font-bold transition-colors cursor-pointer"
                >
                  {copiedText === "body" ? "Copied!" : "Copy Body"}
                </button>
              </div>
              <textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                rows="7"
                className="w-full p-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 focus:border-brand-blue focus:outline-none text-xs leading-relaxed resize-none font-mono"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 border-t border-slate-200">
              <button
                onClick={() => copyToClipboard(selectedInquiry.email, "email")}
                className="px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors w-full sm:w-auto cursor-pointer"
              >
                {copiedText === "email" ? "Email Copied!" : "Copy Client Address"}
              </button>

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setReplyModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors flex-1 sm:flex-initial cursor-pointer"
                >
                  Cancel
                </button>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedInquiry.email}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setReplyModalOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-brand-blue/20 flex-1 sm:flex-initial cursor-pointer"
                >
                  Open in Gmail
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🗑️ DELETE CONFIRMATION DIALOG (LIGHT THEME) */}
      {deleteConfirmOpen && recordToDelete && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="max-w-md w-full rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 text-center bg-white text-slate-900 animate-scaleIn">
            <div className="inline-flex p-4 bg-red-50 text-red-600 rounded-2xl mb-4 border border-red-200">
              <Trash2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Delete Record?</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Are you sure you want to permanently delete this record? This action cannot be reversed.
            </p>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setDeleteConfirmOpen(false)}
                className="px-5 py-2.5 text-xs font-bold rounded-xl transition-all w-28 bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteRecord}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-all w-28 shadow-lg shadow-red-600/20 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
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
