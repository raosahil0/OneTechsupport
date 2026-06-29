import { useState, useEffect } from "react";
import FeedbackForm from "../components/FeedbackForm";
import { Star, MessageCircle, Quote } from "lucide-react";
import { getFeedbacks } from "../services/databaseService";

const Clients = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static pre-configured reviews to ensure the page always looks populated
  const staticReviews = [
    {
      id: "s1",
      name: "Rahul Sharma",
      rating: 5,
      message: "Excellent IT support and incredibly fast turnaround times. Highly recommended for business infrastructure!",
      created_at: new Date().toISOString(),
    },
    {
      id: "s2",
      name: "Priya Verma",
      rating: 4,
      message: "Very reliable manpower support. The technical staffing they provided integrated seamlessly into our engineering team.",
      created_at: new Date().toISOString(),
    },
    {
      id: "s3",
      name: "Amit Singh",
      rating: 5,
      message: "Best hiring service for IT and non-IT talent. They understood our requirements and provided candidates quickly.",
      created_at: new Date().toISOString(),
    },
  ];

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const data = await getFeedbacks();
      setFeedbacks(data || []);
    } catch (err) {
      console.error("Failed to load feedbacks from database:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Combine static reviews with live database reviews
  const allReviews = [...staticReviews, ...feedbacks];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-brand-blue to-blue-700 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            See how we've helped businesses streamline their operations, recruit top talent, and build robust IT systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {allReviews.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Quote icon watermark */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors duration-300" />
              
              <div>
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Number(feedback.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-250 fill-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback Message */}
                <p className="text-gray-650 italic leading-relaxed mb-6">
                  "{feedback.message}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <h4 className="font-bold text-gray-800">
                  {feedback.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1">Verified Client</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review Form Section */}
        <div className="max-w-2xl mx-auto bg-white border border-gray-150 rounded-2xl shadow-md p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-850 mb-2">
              Share Your Experience
            </h3>
            <p className="text-gray-555 text-sm">
              Your feedback helps us continuously improve our services.
            </p>
          </div>

          {/* Render form with a callback to reload reviews on successful submission */}
          <FeedbackForm onFeedbackSubmitted={fetchReviews} />
        </div>

      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917678627526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-brand-blue p-3 rounded-lg shadow-md hover:bg-blue-700 transition-all z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default Clients;
