import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#027217] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          StrataCode
        </Link>
        <div className="space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <a href="#developers" className="hover:text-gray-200">
            Developers
          </a>
          <a href="#partners" className="hover:text-gray-200">
            Partners
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
