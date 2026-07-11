import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
