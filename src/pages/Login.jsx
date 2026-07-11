import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, LogIn, UserPlus, AlertCircle, Database, Eye, EyeOff } from "lucide-react";
import { signInClient, signUpClient, getCurrentClient } from "../services/databaseService";
import { isSupabaseEnabled } from "../services/supabaseClient";

const Login = () => {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already logged in
  useEffect(() => {
    const checkSession = async () => {
      const client = await getCurrentClient();
      if (client) {
        navigate("/dashboard", { replace: true });
      }
    };
    checkSession();
  }, [navigate]);

  // Handle Auth submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      if (isLoginTab) {
        // Sign In
        const { data, error } = await signInClient(email, password);
        if (error) throw error;
        
        setSuccessMessage("Logged in successfully! Redirecting...");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1200);
      } else {
        // Sign Up
        const { data, error } = await signUpClient(email, password);
        if (error) throw error;

        // If Supabase sends confirmation email, let them know, otherwise log them in
        if (isSupabaseEnabled && data?.user?.identities?.length === 0) {
          setSuccessMessage("Registration successful! Please check your email for confirmation link.");
        } else {
          setSuccessMessage("Account created successfully! Redirecting to dashboard...");
          setTimeout(() => {
            navigate("/dashboard");
          }, 1500);
        }
      }
    } catch (err) {
      console.error("Authentication error:", err);
      setErrorMessage(err.message || "An error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <h2 className="text-center text-4xl font-extrabold text-slate-900 tracking-tight">
          Client Portal
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Access your tech support tickets and operations dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="bg-white py-8 px-6 border border-gray-150 shadow-xl rounded-2xl sm:px-10">
          {/* Tab Selection */}
          <div className="flex border-b border-gray-100 mb-8">
            <button
              type="button"
              className={`flex-1 pb-4 text-center font-bold text-sm transition-all border-b-2 ${
                isLoginTab
                  ? "border-brand-blue text-brand-blue"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => {
                setIsLoginTab(true);
                setErrorMessage("");
                setSuccessMessage("");
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" /> Sign In
              </span>
            </button>
            <button
              type="button"
              className={`flex-1 pb-4 text-center font-bold text-sm transition-all border-b-2 ${
                !isLoginTab
                  ? "border-brand-blue text-brand-blue"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => {
                setIsLoginTab(false);
                setErrorMessage("");
                setSuccessMessage("");
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <UserPlus className="w-4 h-4" /> Register
              </span>
            </button>
          </div>

          {/* Feedback messages */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 text-sm animate-shake">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-250 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-all duration-200 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Processing...
                  </span>
                ) : isLoginTab ? (
                  <>
                    <LogIn className="w-4 h-4" /> Sign In to Portal
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" /> Register Client Account
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
