import { useState } from "react";
import { Star } from "lucide-react";
import { saveFeedback } from "../services/databaseService";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await saveFeedback({
        ...formData,
        created_at: new Date().toISOString(),
      });
      setSubmitted(true);
      setFormData({ name: "", rating: "", message: "" });
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to save feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Thank you for your feedback!
        </h3>
        <p className="text-gray-600">
          Your review has been submitted successfully.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
        Leave a Review
      </h3>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">Rating</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
          required
        >
          <option value="">Select Rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
          rows="4"
          required
        ></textarea>
      </div>
      {error && (
        <p className="text-sm text-red-600 mb-2">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-blue text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
};

export default FeedbackForm;
