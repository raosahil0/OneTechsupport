import { useState } from "react";
import { Monitor, Server, Shield, Cloud, Terminal, Cpu, Sparkles } from "lucide-react";

/**
 * Category to icon mapping for fallback tech graphics
 */
const CATEGORY_ICONS = {
  cloud: Cloud,
  server: Server,
  security: Shield,
  software: Terminal,
  hardware: Cpu,
  it: Monitor,
  default: Sparkles,
};

/**
 * SafeImage — Resilient image component with shimmer placeholder and high-tech fallback.
 * Guarantees zero broken image icons across the entire platform.
 */
export default function SafeImage({
  src,
  alt = "",
  className = "",
  category = "default",
  fallbackTitle,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const normalizedCategory = String(category || "default").toLowerCase();
  const IconComponent = CATEGORY_ICONS[normalizedCategory] || CATEGORY_ICONS.default;

  if (error || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex flex-col items-center justify-center p-6 text-white select-none ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || "Tech illustration"}
      >
        {/* Futuristic grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.25),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
        
        {/* Glowing floating icon */}
        <div className="relative z-10 p-3.5 rounded-2xl bg-brand-blue/20 border border-brand-blue/30 backdrop-blur-md shadow-lg shadow-brand-blue/10 mb-2">
          <IconComponent className="w-7 h-7 text-blue-400" />
        </div>
        
        {/* Caption */}
        <span className="relative z-10 text-[11px] font-black uppercase tracking-widest text-slate-300 text-center max-w-[80%] truncate">
          {fallbackTitle || alt || "Enterprise IT Solution"}
        </span>
        <span className="relative z-10 text-[9px] font-bold text-brand-blue/80 uppercase tracking-wider mt-0.5">
          OneTech Support
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {/* Shimmer loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200/80 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-brand-blue/20 border-t-brand-blue animate-spin" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}
