import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { IoCartOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      {/* Left Navigation Links */}
      <div className="flex flex-wrap space-x-4 mb-2 md:mb-0">
        <a href="#" className="hover:text-gray-600">Shop Plants</a>
        <a href="#" className="hover:text-gray-600">Plant Care</a>
        <a href="#" className="hover:text-gray-600">Blog</a>
        <a href="#" className="hover:text-gray-600">Contact Us</a>
        <a href="#" className="hover:text-gray-600">FAQ</a>
      </div>

      {/* Centered Category Text and Search Input */}
      <div className="flex flex-grow justify-center items-center mb-2 md:mb-0">
        <span className="font-bold text-lg mx-4">Shop by category</span>

        {/* Search Input */}
        <div className="flex items-center border border-gray-300 rounded-full bg-gray-200 px-2 py-1 ml-3">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm flex-grow px-2 bg-gray-200 rounded-md" 
          />
          <AiOutlineSearch size={20} className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex space-x-4 items-center">
        <FaRegUserCircle size={24} className="cursor-pointer" />
        <FcLikePlaceholder size={24} className="cursor-pointer" />
        <IoCartOutline size={24} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;