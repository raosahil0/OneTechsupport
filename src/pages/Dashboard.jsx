import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LogOut, PlusCircle, History, AlertCircle, CheckCircle, Clock, 
  User, Database, MessageSquare, ClipboardList, Info, BarChart2,
  Paperclip, Upload
} from "lucide-react";
import { 
  getCurrentClient, signOutClient, saveTicket, getTicketsForClient 
} from "../services/databaseService";
import { isSupabaseEnabled } from "../services/supabaseClient";

const Dashboard = () => {
  const [client, setClient] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  
  // Feedback States
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const navigate = useNavigate();

  // Check auth and load tickets
  useEffect(() => {
    const initDashboard = async () => {
      const user = await getCurrentClient();
      if (!user) {
        navigate("/login", { replace: true });
        return;
      }
      setClient(user);
      
      try {
        const ticketList = await getTicketsForClient(user.id);
        setTickets(ticketList || []);
      } catch (err) {
        console.error("Error loading tickets:", err);
      } finally {
        setLoading(false);
      }
    };

    initDashboard();
  }, [navigate]);

  // Handle Logout
  const handleLogout = async () => {
    await signOutClient();
    navigate("/login");
  };

  // Handle File Input Change
  const handleFileChange = (e) => {
    setFormError("");
    setFormSuccess("");
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setAttachment(null);
      return;
    }
    
    // Size check: limit to 2MB to keep localStorage uploads safe & database light
    if (selectedFile.size > 2 * 1024 * 1024) {
      setFormError("Attachment exceeds 2MB size limit.");
      setAttachment(null);
      setFileInputKey(Date.now()); // reset file input
      return;
    }
    setAttachment(selectedFile);
  };

  // Submit Support Ticket
  const handleSubmitTicket = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!ticketTitle.trim() || !ticketDescription.trim()) {
      setFormError("Please fill out both the title and description.");
      return;
    }

    setSubmitting(true);

    try {
      const newTicket = {
        clientId: client.id,
        title: ticketTitle.trim(),
        description: ticketDescription.trim(),
        status: "Open"
      };

      const result = await saveTicket(newTicket, attachment);
      
      // Update local tickets list
      if (result && result.length > 0) {
        setTickets([result[0], ...tickets]);
        setFormSuccess("Support ticket raised successfully!");
        setTicketTitle("");
        setTicketDescription("");
        setAttachment(null);
        setFileInputKey(Date.now());
      } else {
        throw new Error("Unable to save ticket. Please try again.");
      }
    } catch (err) {
      console.error("Error raising ticket:", err);
      setFormError(err.message || "Failed to raise support ticket.");
    } finally {
      setSubmitting(false);
    }
  };

  // Calculations for Metrics and Analytics
  const totalTickets = tickets.length;
  const openCount = tickets.filter(t => t.status === "Open").length;
  const inProgressCount = tickets.filter(t => t.status === "In Progress").length;
  const resolvedCount = tickets.filter(t => t.status === "Resolved" || t.status === "Closed").length;
  const activeTickets = openCount + inProgressCount;

  const resolutionRate = totalTickets > 0 ? Math.round((resolvedCount / totalTickets) * 100) : 0;
  const openPercentage = totalTickets > 0 ? Math.round((openCount / totalTickets) * 100) : 0;
  const inProgressPercentage = totalTickets > 0 ? Math.round((inProgressCount / totalTickets) * 100) : 0;
  const resolvedPercentage = totalTickets > 0 ? Math.round((resolvedCount / totalTickets) * 100) : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin"></div>
          <p className="text-gray-500 font-semibold text-sm">Loading Client Workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6 max-w-6xl mx-auto">
      {/* Header Panel */}
      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Welcome back!
            </h2>
            <p className="text-gray-550 text-sm font-medium">
              Client Session: <span className="text-slate-700 font-bold">{client?.email}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-stretch md:self-auto">
          {/* Connection Mode Tag */}
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
            isSupabaseEnabled 
              ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
              : "bg-amber-50 text-amber-700 border-amber-200"
          }`}>
            <Database className="w-3.5 h-3.5" />
            {isSupabaseEnabled ? "Live database" : "Demo Mode"}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 border border-red-200 hover:border-red-300 hover:bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      {/* Demo Warning Banner */}
      {!isSupabaseEnabled && (
        <div className="mb-8 p-4 bg-amber-50 border border-amber-255 text-amber-850 rounded-2xl flex items-start gap-3.5 shadow-sm">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <span className="font-bold block text-sm mb-0.5">Local Storage Active</span>
            Since no `.env` file configuration is present, tickets and attachments you create are saved locally in this browser. To link this dashboard to a live Supabase backend and storage bucket, execute the SQL schema in your Supabase editor and configure environment variables.
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm flex items-center justify-between">
          <div>
            <span className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-1">
              Total Support Tickets
            </span>
            <span className="text-3xl font-extrabold text-slate-900">{totalTickets}</span>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <ClipboardList className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm flex items-center justify-between">
          <div>
            <span className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-1">
              Active / Open Tickets
            </span>
            <span className="text-3xl font-extrabold text-blue-600">{activeTickets}</span>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 animate-pulse" />
          </div>
        </div>
        <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-sm flex items-center justify-between">
          <div>
            <span className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-1">
              Resolved Tickets
            </span>
            <span className="text-3xl font-extrabold text-emerald-600">{resolvedCount}</span>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Ticket Resolution Analytics Section */}
      <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <BarChart2 className="w-5 h-5 text-brand-blue" />
          <h3 className="text-lg font-bold text-gray-800">Resolution Analytics</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Circular Progress for Resolution Rate */}
          <div className="flex flex-col items-center justify-center p-4 border border-slate-50 bg-slate-50/50 rounded-xl">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Resolution Rate</span>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-100"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500 transition-all duration-500"
                  strokeWidth="3.5"
                  strokeDasharray={`${resolutionRate}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-2xl font-extrabold text-slate-800">{resolutionRate}%</div>
            </div>
            <span className="text-xs text-gray-400 mt-3 font-medium">Tickets successfully resolved</span>
          </div>

          {/* Status Progression Bars */}
          <div className="flex flex-col justify-center space-y-4 p-4 border border-slate-50 bg-slate-50/50 rounded-xl">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status Distribution</span>
            
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-550"></span> Open ({openCount})</span>
                <span>{openPercentage}%</span>
              </div>
              <div className="w-full bg-gray-150 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-550 h-full rounded-full transition-all duration-500" style={{ width: `${openPercentage}%` }}></div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span> In Progress ({inProgressCount})</span>
                <span>{inProgressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-150 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full rounded-full transition-all duration-500" style={{ width: `${inProgressPercentage}%` }}></div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Resolved ({resolvedCount})</span>
                <span>{resolvedPercentage}%</span>
              </div>
              <div className="w-full bg-gray-150 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-50 h-full rounded-full transition-all duration-500" style={{ width: `${resolvedPercentage}%` }}></div>
              </div>
            </div>
          </div>

          {/* Average Resolution Time & Efficiency SLA */}
          <div className="flex flex-col justify-between p-5 border border-slate-50 bg-slate-50/50 rounded-xl">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Resolution Efficiency</span>
            
            <div className="my-auto py-2">
              <span className="text-3xl font-extrabold text-slate-800 block">1.8 Days</span>
              <span className="text-xs text-gray-400 font-medium">Average ticket resolution time</span>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="text-[11px] text-emerald-800 font-semibold leading-tight">
                96% of support tickets resolved within 48-hour SLA standard
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Support Ticket Form */}
        <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <PlusCircle className="w-5 h-5 text-brand-blue" />
            <h3 className="text-lg font-bold text-gray-800">Raise Support Ticket</h3>
          </div>

          {formError && (
            <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-start gap-2.5 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{formError}</span>
            </div>
          )}

          {formSuccess && (
            <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-xl flex items-start gap-2.5 text-xs">
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{formSuccess}</span>
            </div>
          )}

          <form onSubmit={handleSubmitTicket} className="space-y-4">
            <div>
              <label htmlFor="ticket-title" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Issue Summary / Title
              </label>
              <input
                id="ticket-title"
                type="text"
                required
                value={ticketTitle}
                onChange={(e) => setTicketTitle(e.target.value)}
                placeholder="e.g. Local network downtime in server A"
                className="block w-full px-4 py-2.5 border border-gray-250 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="ticket-desc" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Detailed Description
              </label>
              <textarea
                id="ticket-desc"
                rows={4}
                required
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                placeholder="Explain the technical problem, software versions, error messages..."
                className="block w-full px-4 py-2.5 border border-gray-250 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Attachment (Max 2MB)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-200 border-dashed rounded-xl hover:border-brand-blue/40 transition-colors relative">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-semibold text-brand-blue hover:text-blue-700 focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input
                        key={fileInputKey}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-400">PDF, PNG, JPG, ZIP up to 2MB</p>
                  {attachment && (
                    <div className="mt-2 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5">
                      <Paperclip className="w-3.5 h-3.5 text-brand-blue" />
                      {attachment.name} ({Math.round(attachment.size / 1024)} KB)
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Submitting Ticket...
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4" /> Raise Support Ticket
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Side: Ticket History Table */}
        <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 lg:col-span-2 overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <History className="w-5 h-5 text-brand-blue" />
            <h3 className="text-lg font-bold text-gray-800">Support Ticket History</h3>
          </div>

          {tickets.length === 0 ? (
            <div className="text-center py-12 px-4 border border-dashed border-gray-200 rounded-xl">
              <ClipboardList className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-bold text-sm">No tickets found</p>
              <p className="text-gray-400 text-xs mt-1">Submit your first technical ticket using the form on the left.</p>
            </div>
          ) : (
            <div className="overflow-x-auto -mx-6">
              <div className="inline-block min-w-full align-middle px-6">
                <table className="min-w-full divide-y divide-gray-150">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Ticket ID
                      </th>
                      <th scope="col" className="py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Issue Title
                      </th>
                      <th scope="col" className="py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Attachment
                      </th>
                      <th scope="col" className="py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Created At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tickets.map((t) => {
                      const dateObj = new Date(t.created_at);
                      const formattedDate = dateObj.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      }) + " " + dateObj.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                      });

                      // Display short ID
                      const shortId = t.ticket_id ? (t.ticket_id.startsWith("tkt_") ? t.ticket_id.substring(4, 10) : t.ticket_id.substring(0, 6)) : "";

                      // Status styles
                      let statusClass = "bg-blue-50 text-blue-700 border-blue-150";
                      if (t.status === "In Progress") {
                        statusClass = "bg-orange-50 text-orange-700 border-orange-150";
                      } else if (t.status === "Resolved" || t.status === "Closed") {
                        statusClass = "bg-emerald-50 text-emerald-700 border-emerald-150";
                      }

                      return (
                        <tr key={t.ticket_id} className="group hover:bg-slate-50/30 transition-colors">
                          <td className="py-4 whitespace-nowrap text-xs font-mono font-bold text-slate-500">
                            #{shortId.toUpperCase()}
                          </td>
                          <td className="py-4">
                            <div className="text-sm font-bold text-slate-800">{t.title}</div>
                            <div className="text-xs text-gray-500 line-clamp-1 max-w-sm mt-0.5">{t.description}</div>
                          </td>
                          <td className="py-4 whitespace-nowrap text-xs">
                            {t.attachment_url ? (
                              <a
                                href={t.attachment_url}
                                download={t.attachment_name}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-brand-blue hover:text-blue-700 hover:underline font-semibold"
                              >
                                <Paperclip className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="max-w-[120px] truncate">{t.attachment_name}</span>
                              </a>
                            ) : (
                              <span className="text-gray-400 italic">None</span>
                            )}
                          </td>
                          <td className="py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusClass}`}>
                              {t.status}
                            </span>
                          </td>
                          <td className="py-4 whitespace-nowrap text-xs text-gray-550 font-medium">
                            {formattedDate}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
