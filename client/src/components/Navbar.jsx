import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 py-4 px-6 flex justify-between items-center z-50 shadow-lg">
      {/* Logo */}
      <div className="">
        <img
          src={assets.logo}
          alt=""
          className="w-32 sm:w-44"
          onClick={() => navigate("/")}
        ></img>
      </div>

      {/* Bouton */}
      <button
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        onClick={() => navigate("/ai")}
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
export default Navbar;
