import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 py-4 px-6 flex justify-between items-center z-50 shadow-lg">
      {/* Logo */}
      <div
        className="text-xl font-bold text-gray-800 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={assets.logo} alt="" />
      </div>

      {/* Bouton */}
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors text-sm font-medium"
        onClick={() => navigate("/ai")}
      >
        Get Started
        <span>→</span>
      </button>
    </nav>
  );
};

export default Navbar;
