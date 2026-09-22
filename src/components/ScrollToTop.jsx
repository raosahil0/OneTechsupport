import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop guarantees the browser immediately and unconditionally resets
 * window scroll position to (0, 0) whenever the user navigates between routes.
 * 
 * Uses a 3-tier strategy:
 * 1. Immediate pre-paint reset via useLayoutEffect
 * 2. Next animation frame reset to guarantee layout alignment
 * 3. A 60ms timeout to catch asynchronously mounted React Suspense lazy chunks
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restoration so browser never restores old scroll offset
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    const resetScroll = () => {
      window.scrollTo(0, 0);
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // 1. Immediate pre-paint reset
    resetScroll();

    // 2. Next animation frame
    const rafId = requestAnimationFrame(resetScroll);

    // 3. Post-Suspense tick (for lazy route components like WebAppDevelopment)
    const timerId = setTimeout(resetScroll, 60);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [pathname, search, hash]);

  return null;
}
