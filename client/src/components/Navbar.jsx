import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 py-2 px-6 flex justify-between items-center z-50 shadow-lg">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44"
        onClick={() => navigate("/")}
      ></img>

      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
export default Navbar;
