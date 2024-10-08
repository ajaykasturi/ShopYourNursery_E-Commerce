import React from "react";
import { VscSettings } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";

const SearchBar: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-white  w-[90vw] sm:w-[75vw] mx-auto mt-10 p-0 rounded-md">
      {/* <FaSearch size={24} className=" p-2 bg-gray-100 w-10 h-10 rounded-md" /> */}
      <IoIosSearch  size={24} className=" p-2 bg-gray-100 w-10 h-10 rounded-md"/>
        <div className="flex items-center bg-gray-100 rounded-l-md">
          
          <input
            type="text"
            placeholder="Search your favorite dish"
            className="flex-grow p-2 bg-gray-100 focus:outline-none rounded-l-md  w-[68vw]"
          />
          {/* <GiSettingsKnobs size={34} className="text-gray-500 cursor-pointer h-10 bg-gray-100 p-2 rounded-md"  /> */}
          <VscSettings size={44} className="text-gray-500 cursor-pointer h-10 bg-gray-100 p-2 rounded-md" />
        </div>
        
        
      </div>
    </>
  );
};

export default SearchBar;