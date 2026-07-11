import { useEffect } from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

const Toast = ({ message, type = "success", onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  let bgClass = "bg-emerald-50/90 border-emerald-200 text-emerald-800";
  let Icon = CheckCircle;
  let iconClass = "text-emerald-600";

  if (type === "error") {
    bgClass = "bg-red-50/90 border-red-200 text-red-800";
    Icon = AlertCircle;
    iconClass = "text-red-650";
  } else if (type === "info") {
    bgClass = "bg-blue-50/90 border-blue-200 text-blue-800";
    Icon = Info;
    iconClass = "text-blue-600";
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in">
      <div className={`flex items-start gap-3.5 p-4 rounded-2xl border shadow-xl max-w-sm ${bgClass} glass-panel`}>
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconClass}`} />
        <div className="flex-1 text-xs font-semibold leading-relaxed">
          {message}
        </div>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-600 transition-colors p-0.5 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
