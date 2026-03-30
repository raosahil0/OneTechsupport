import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-5 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img src={logo} className="w-12 h-12 rounded-full" alt="Logo" />
        <h1 className="text-2xl text-blue-600 font-bold">One Tech Support</h1>
      </div>
      <nav>
        <Link to="/" className="mx-3 hover:text-blue-600">
          Home
        </Link>
        <Link to="/services" className="mx-3 hover:text-blue-600">
          Services
        </Link>
        <Link to="/projects" className="mx-3 hover:text-blue-600">
          Projects
        </Link>
        <Link to="/about" className="mx-3 hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="mx-3 hover:text-blue-600">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
