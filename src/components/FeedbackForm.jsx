import { useState } from "react";
import { Star, Send, CheckCircle2, User, MessageSquare } from "lucide-react";
import { saveFeedback } from "../services/databaseService";

const RATING_LABELS = {
  1: "1 Star - Poor",
  2: "2 Stars - Fair",
  3: "3 Stars - Good",
  4: "4 Stars - Very Good",
  5: "5 Stars - Outstanding",
};

const FeedbackForm = ({ onFeedbackSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    message: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingClick = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setError("Please fill in both your name and your review message.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await saveFeedback({
        name: formData.name.trim(),
        rating: Number(formData.rating) || 5,
        message: formData.message.trim(),
        created_at: new Date().toISOString(),
      });
      setSubmitted(true);
      setFormData({ name: "", rating: 5, message: "" });
      if (onFeedbackSubmitted) {
        onFeedbackSubmitted();
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to save feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-emerald-50/70 border border-emerald-250 rounded-2xl animate-in fade-in duration-300">
        <div className="inline-flex p-3.5 bg-emerald-100 text-emerald-600 rounded-full mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-950 mb-2">
          Thank you for your review!
        </h3>
        <p className="text-emerald-800 text-sm max-w-md mx-auto mb-6">
          Your feedback has been verified and added to our community testimonials. We appreciate your support!
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-sm"
        >
          Submit Another Review
        </button>
      </div>
    );
  }

  const activeRating = hoverRating || formData.rating;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      {/* Star Rating Selector */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Your Rating
        </label>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 p-2 bg-slate-50 border border-slate-200 rounded-xl inline-flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 focus:outline-none transition-transform hover:scale-110 active:scale-95"
                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
              >
                <Star
                  className={`w-6 h-6 transition-colors ${
                    star <= activeRating
                      ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                      : "text-slate-300 fill-slate-100"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-xs font-bold text-slate-600 ml-2">
            {RATING_LABELS[activeRating] || "Select Rating"}
          </span>
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="feedback-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Your Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <User className="w-4 h-4" />
          </div>
          <input
            id="feedback-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sarah Jenkins"
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white transition-all text-sm"
            required
          />
        </div>
      </div>

      {/* Review Message */}
      <div>
        <label htmlFor="feedback-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Your Review & Experience
        </label>
        <div className="relative">
          <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <textarea
            id="feedback-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe the service quality, response speed, or cloud reliability you experienced..."
            rows="4"
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white transition-all text-sm leading-relaxed"
            required
          />
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-all duration-200 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Submitting Review...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" /> Publish Review
          </>
        )}
      </button>
    </form>
  );
};

export default FeedbackForm;
