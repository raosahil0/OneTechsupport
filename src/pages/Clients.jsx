import { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import { Star, MessageCircle } from "lucide-react";

const Clients = () => {
  const [feedbacks, setFeedbacks] = useState(
    JSON.parse(localStorage.getItem("feedbacks") || "[]"),
  );

  return (
    <div>
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-brand-blue mb-12 font-bold">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Static testimonials */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-gray-600">
              Excellent IT support and quick service!
            </p>
            <h4 className="mt-2 font-bold text-brand-blue">— Rahul Sharma</h4>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-center mb-3">
              {Array.from({ length: 4 }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-gray-600">
              Very reliable manpower support.
            </p>
            <h4 className="mt-2 font-bold text-brand-blue">— Priya Verma</h4>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-gray-600">
              Best hiring service for IT engineers.
            </p>
            <h4 className="mt-2 font-bold text-brand-blue">— Amit Singh</h4>
          </div>
          {/* Dynamic feedbacks */}
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex justify-center mb-3">
                {Array.from({ length: parseInt(feedback.rating) }, (_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-gray-600">{feedback.message}</p>
              <h4 className="mt-2 font-bold text-brand-blue">
                — {feedback.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-brand-blue mb-12 font-bold">
          Leave a Review
        </h2>
        <FeedbackForm />
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917678627526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-brand-blue p-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Clients;
