import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-50 text-gray-900 min-h-screen flex flex-col justify-between">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-xl focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="flex-1 flex flex-col">
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex="-1">
            <AppRoutes />
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
